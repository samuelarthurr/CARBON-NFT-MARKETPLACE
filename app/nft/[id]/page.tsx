import NFTDetailClient from "./NFTDetailClient";

// Server-only: this pre-generates static paths for /nft/[id]
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "3" }, { id: "5" }, { id: "9" }];
}

// The page component itself
export default function Page({ params }: { params: { id: string } }) {
  return <NFTDetailClient />;
}
