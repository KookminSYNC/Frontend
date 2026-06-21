import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "t0.gstatic.com",
        pathname: "/faviconV2",
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
