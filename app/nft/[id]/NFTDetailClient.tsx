"use client";

import { BadgeChip } from "@/components/badge-chip";
import { CheckoutModal } from "@/components/checkout-modal";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { NFTCard } from "@/components/nft-card";
import { ProvenanceTimeline } from "@/components/provenance-timeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Download,
  ExternalLink,
  Heart,
  Leaf,
  MapPin,
  Share2,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NFTDetailPage({ params }: { params: { id: string } }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Mock NFT data
  const nft = {
    id: "1",
    title: "Sabah Mangrove Restoration Project",
    image: "/mangrove-forest-coastal-restoration.jpg",
    projectType: "Mangrove Restoration",
    offsetAmount: "50kg CO₂",
    price: 75,
    verified: true,
    rare: true,
    supply: 100,
    remaining: 23,
    description:
      "Support the restoration of critical mangrove ecosystems along the Sabah coastline. This project not only offsets carbon but also protects coastal communities from erosion and provides habitat for diverse marine life. Each NFT represents 50kg of CO₂ offset through verified mangrove planting and conservation efforts.",
    location: "Sabah, Malaysia",
    startDate: "November 2024",
    verificationBody: "Verra",
    certificateNumber: "VCS-2025-001234",
    projectPartner: "Sabah Environmental Trust",
    impactMetrics: {
      treesPlanted: 125,
      coastlineProtected: "2.5km",
      marineHabitatRestored: "15 hectares",
      localJobsCreated: 45,
    },
  };

  // Mock similar NFTs
  const similarNFTs = [
    {
      id: "5",
      title: "Sarawak Peat Swamp Conservation",
      image: "/mangrove-forest-coastal-restoration.jpg",
      projectType: "Conservation",
      offsetAmount: "60kg CO₂",
      price: 85,
      verified: true,
      supply: 120,
      remaining: 67,
    },
    {
      id: "9",
      title: "Coastal Mangrove Expansion",
      image: "/mangrove-forest-coastal-restoration.jpg",
      projectType: "Mangrove Restoration",
      offsetAmount: "55kg CO₂",
      price: 80,
      verified: true,
      supply: 150,
      remaining: 98,
    },
    {
      id: "3",
      title: "Borneo Rainforest Tree Planting",
      image: "/tropical-rainforest-trees-planting.jpg",
      projectType: "Reforestation",
      offsetAmount: "25kg CO₂",
      price: 50,
      verified: true,
      supply: 500,
      remaining: 342,
    },
  ];

  const projectFee = nft.price * 0.95; // 95% to project
  const platformFee = nft.price * 0.05; // 5% platform fee

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border/40 bg-muted/30">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/marketplace"
                className="hover:text-primary transition-colors"
              >
                Marketplace
              </Link>
              <span>/</span>
              <span className="text-foreground">{nft.title}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Image */}
              <div className="space-y-6">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={nft.image || "/placeholder.svg"}
                    alt={nft.title}
                    fill
                    className="object-cover"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {nft.verified && (
                      <BadgeChip variant="verified">Verified</BadgeChip>
                    )}
                    {nft.rare && <BadgeChip variant="rare">Rare</BadgeChip>}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 space-y-1">
                      <p className="text-sm text-muted-foreground">Available</p>
                      <p className="text-2xl font-bold">
                        {nft.remaining}/{nft.supply}
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Total Offset
                      </p>
                      <p className="text-2xl font-bold">
                        {(nft.supply - nft.remaining) * 50}kg
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">
                        {nft.projectType}
                      </p>
                      <h1 className="text-3xl md:text-4xl font-bold text-balance">
                        {nft.title}
                      </h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setIsFavorited(!isFavorited)}
                        className={isFavorited ? "text-red-500" : ""}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            isFavorited ? "fill-current" : ""
                          }`}
                        />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {nft.description}
                  </p>
                </div>

                {/* Price & Purchase */}
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Price
                        </p>
                        <p className="text-4xl font-bold">RM{nft.price}</p>
                      </div>
                      <BadgeChip
                        variant="offset"
                        className="text-base px-4 py-2"
                      >
                        {nft.offsetAmount}
                      </BadgeChip>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Project Funding (93%)
                        </span>
                        <span className="font-medium">
                          RM{projectFee.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Platform Fee (5%)
                        </span>
                        <span className="font-medium">
                          RM{platformFee.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <Button
                      className="w-full"
                      size="lg"
                      onClick={() => setCheckoutOpen(true)}
                    >
                      Purchase NFT
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      {nft.remaining} of {nft.supply} remaining
                    </p>
                  </CardContent>
                </Card>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{nft.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Start Date
                      </p>
                      <p className="font-medium">{nft.startDate}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Verified By
                      </p>
                      <p className="font-medium">{nft.verificationBody}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Partner</p>
                      <p className="font-medium">{nft.projectPartner}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-16">
              <Tabs defaultValue="impact" className="w-full">
                <TabsList className="grid w-full max-w-2xl grid-cols-3">
                  <TabsTrigger value="impact">Impact Metrics</TabsTrigger>
                  <TabsTrigger value="verification">Verification</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                </TabsList>

                <TabsContent value="impact" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                      <CardContent className="p-6 space-y-2">
                        <Leaf className="w-8 h-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Trees Planted
                        </p>
                        <p className="text-3xl font-bold">
                          {nft.impactMetrics.treesPlanted}
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 space-y-2">
                        <MapPin className="w-8 h-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Coastline Protected
                        </p>
                        <p className="text-3xl font-bold">
                          {nft.impactMetrics.coastlineProtected}
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 space-y-2">
                        <TrendingUp className="w-8 h-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Habitat Restored
                        </p>
                        <p className="text-3xl font-bold">
                          {nft.impactMetrics.marineHabitatRestored}
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 space-y-2">
                        <Users className="w-8 h-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Local Jobs Created
                        </p>
                        <p className="text-3xl font-bold">
                          {nft.impactMetrics.localJobsCreated}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="verification" className="mt-8">
                  <Card>
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                          <Shield className="w-6 h-6 text-success" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-xl font-semibold">
                            Verified Carbon Credit Project
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            This project has been independently verified and
                            certified by {nft.verificationBody}, meeting
                            international standards for carbon offset projects.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            Certificate Number
                          </p>
                          <p className="font-mono font-semibold">
                            {nft.certificateNumber}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            Verification Body
                          </p>
                          <p className="font-semibold">
                            {nft.verificationBody}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button
                          variant="outline"
                          className="gap-2 bg-transparent"
                        >
                          <Download className="w-4 h-4" />
                          Download Certificate
                        </Button>
                        <Button
                          variant="outline"
                          className="gap-2 bg-transparent"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View on Verra Registry
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="timeline" className="mt-8">
                  <Card>
                    <CardContent className="p-8">
                      <ProvenanceTimeline />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Similar NFTs */}
            <div className="mt-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Similar Projects
                </h2>
                <Button variant="outline" asChild>
                  <Link href="/marketplace">View All</Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarNFTs.map((similarNft) => (
                  <NFTCard key={similarNft.id} {...similarNft} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Checkout Modal */}
      <CheckoutModal
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
        nftTitle={nft.title}
        nftPrice={nft.price}
        offsetAmount={nft.offsetAmount}
        projectFee={projectFee}
        platformFee={platformFee}
      />
    </div>
  );
}
