/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
  },
  output: "export", // Required for GitHub Pages
  basePath: "/CARBON-NFT-MARKETPLACE", // Your GitHub repo name
  assetPrefix: "/CARBON-NFT-MARKETPLACE/", // Ensures static files load correctly
};

export default nextConfig;
