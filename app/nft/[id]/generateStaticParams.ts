"use client";

import { useState } from "react";
// ... your imports

export async function generateStaticParams() {
  const nftIds = ["1", "3", "5", "9"]; // or fetch from API if available
  return nftIds.map((id) => ({ id }));
}

export default function NFTDetailPage() {
  const [isFavorited, setIsFavorited] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  // ... rest of your code remains the same
}
