import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carbon NFT",
  description: "Created by Group 13 for TTP Final Project",
  generator: "Next.js",
  icons: {
    icon: "/favicon.png", // ✅ Place your logo file here in /public (64x64 or 128x128)
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Carbon NFT Marketplace",
    description: "A sustainable NFT marketplace for carbon offset projects.",
    url: "https://xs0vh5p2-3000.asse.devtunnels.ms/",
    siteName: "Carbon NFT",
    images: [
      {
        url: "/og-image.jpg", // ✅ keep your OG preview image here
        width: 1200,
        height: 630,
        alt: "Carbon NFT Marketplace Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carbon NFT Marketplace",
    description: "A sustainable NFT marketplace for carbon offset projects.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
