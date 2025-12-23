import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "fakestoreapi.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // Note: `allowedDevOrigins` is not yet in the typed ExperimentalConfig
  // for this Next.js version. When the option becomes stable, add it here.
};

export default nextConfig;
