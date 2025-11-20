"use server";

import { stripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/server";
import { generateTokenId, generateNFTMetadata } from "@/lib/nft";
import { redirect } from 'next/navigation';

export async function createCheckoutSession(projectId: string) {
  const supabase = await createClient();

  // Get authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be logged in to purchase NFTs" };
  }

  // Get project details
  const { data: project, error: projectError } = await supabase
    .from("nft_projects")
    .select("*")
    .eq("id", projectId)
    .single();

  if (projectError || !project) {
    return { error: "Project not found" };
  }

  if (project.available_supply <= 0) {
    return { error: "This project is sold out" };
  }

  // Calculate fees
  const platformFee = Math.round(project.price_cents * 0.05); // 5% platform fee
  const projectFee = project.price_cents - platformFee;

  // Create Stripe checkout session
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: project.name,
            description: `Carbon offset: ${project.offset_amount_kg}kg CO₂`,
          },
          unit_amount: project.price_cents,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    customer_email: user.email,
    metadata: {
      project_id: projectId,
      user_id: user.id,
      platform_fee: platformFee.toString(),
      project_fee: projectFee.toString(),
    },
    redirect_on_completion: "never",
  });

  // Create pending transaction
  await supabase.from("transactions").insert({
    user_id: user.id,
    project_id: projectId,
    type: "purchase",
    amount_cents: project.price_cents,
    platform_fee_cents: platformFee,
    project_fee_cents: projectFee,
    stripe_session_id: session.id,
    status: "pending",
  });

  return { clientSecret: session.client_secret };
}

export async function completeCheckoutSession(sessionId: string) {
  const supabase = await createClient();

  // Get session details from Stripe
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status !== "paid") {
    return { error: "Payment not completed" };
  }

  const projectId = session.metadata?.project_id;
  const userId = session.metadata?.user_id;

  if (!projectId || !userId) {
    return { error: "Invalid session metadata" };
  }

  // Get project details
  const { data: project } = await supabase
    .from("nft_projects")
    .select("*")
    .eq("id", projectId)
    .single();

  if (!project) {
    return { error: "Project not found" };
  }

  // Generate NFT token
  const tokenId = generateTokenId();
  const metadata = generateNFTMetadata(project, tokenId, new Date());

  // Mint NFT
  const { data: nft, error: nftError } = await supabase
    .from("nfts")
    .insert({
      token_id: tokenId,
      project_id: projectId,
      owner_id: userId,
      purchase_price_cents: project.price_cents,
      offset_amount_kg: project.offset_amount_kg,
      metadata,
      certificate_url: `/api/certificate/${tokenId}`,
    })
    .select()
    .single();

  if (nftError) {
    return { error: "Failed to mint NFT" };
  }

  // Update project supply
  await supabase.rpc("decrement_supply", { project_id: projectId });

  // Update transaction
  await supabase
    .from("transactions")
    .update({
      status: "completed",
      stripe_payment_intent: session.payment_intent as string,
      nft_id: nft.id,
    })
    .eq("stripe_session_id", sessionId);

  // Update user profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("total_offset_kg, total_spent")
    .eq("id", userId)
    .single();

  await supabase
    .from("profiles")
    .update({
      total_offset_kg: (profile?.total_offset_kg || 0) + project.offset_amount_kg,
      total_spent: (profile?.total_spent || 0) + project.price_cents / 100,
      last_activity_date: new Date().toISOString().split("T")[0],
    })
    .eq("id", userId);

  // Create activity
  await supabase.from("activities").insert({
    user_id: userId,
    type: "purchase",
    title: "NFT Purchased",
    description: `Purchased ${project.name}`,
    metadata: { nft_id: nft.id, project_id: projectId },
  });

  // Check and unlock achievements
  await checkAndUnlockAchievements(userId);

  return { success: true, nftId: nft.id };
}

async function checkAndUnlockAchievements(userId: string) {
  const supabase = await createClient();

  // Get user stats
  const { data: profile } = await supabase
    .from("profiles")
    .select("total_offset_kg")
    .eq("id", userId)
    .single();

  const { count: nftCount } = await supabase
    .from("nfts")
    .select("*", { count: "exact", head: true })
    .eq("owner_id", userId);

  // Get all achievements
  const { data: achievements } = await supabase
    .from("achievements")
    .select("*");

  // Get already unlocked achievements
  const { data: unlockedAchievements } = await supabase
    .from("user_achievements")
    .select("achievement_id")
    .eq("user_id", userId);

  const unlockedIds = new Set(
    unlockedAchievements?.map((ua) => ua.achievement_id) || []
  );

  // Check each achievement
  for (const achievement of achievements || []) {
    if (unlockedIds.has(achievement.id)) continue;

    const requirement = achievement.requirement as any;
    let shouldUnlock = false;

    if (requirement.type === "total_offset") {
      shouldUnlock = (profile?.total_offset_kg || 0) >= requirement.value;
    } else if (requirement.type === "total_nfts") {
      shouldUnlock = (nftCount || 0) >= requirement.value;
    }

    if (shouldUnlock) {
      await supabase.from("user_achievements").insert({
        user_id: userId,
        achievement_id: achievement.id,
      });

      await supabase.from("activities").insert({
        user_id: userId,
        type: "achievement",
        title: "Achievement Unlocked",
        description: achievement.name,
        metadata: { achievement_id: achievement.id },
      });
    }
  }
}
