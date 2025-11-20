import { randomBytes } from "crypto";

export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string | number;
  }>;
  properties: {
    project_type: string;
    region: string;
    offset_amount_kg: number;
    verification_status: string;
    verifier: string;
    mint_date: string;
    token_id: string;
  };
}

export function generateTokenId(): string {
  const timestamp = Date.now().toString(36);
  const random = randomBytes(8).toString("hex");
  return `CARBON-${timestamp}-${random}`.toUpperCase();
}

export function generateNFTMetadata(
  project: any,
  tokenId: string,
  mintDate: Date
): NFTMetadata {
  return {
    name: `${project.name} #${tokenId.slice(-8)}`,
    description: project.description,
    image: project.image_url,
    attributes: [
      {
        trait_type: "Project Type",
        value: project.project_type,
      },
      {
        trait_type: "Region",
        value: project.region,
      },
      {
        trait_type: "Rarity",
        value: project.rarity,
      },
      {
        trait_type: "Carbon Offset (kg)",
        value: project.offset_amount_kg,
      },
      {
        trait_type: "Verifier",
        value: project.verifier,
      },
      {
        trait_type: "Verification Status",
        value: project.verification_status,
      },
    ],
    properties: {
      project_type: project.project_type,
      region: project.region,
      offset_amount_kg: project.offset_amount_kg,
      verification_status: project.verification_status,
      verifier: project.verifier,
      mint_date: mintDate.toISOString(),
      token_id: tokenId,
    },
  };
}
