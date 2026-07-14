import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Local Strapi development server
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      // Production Strapi server (update hostname when deploying)
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_STRAPI_HOST || "localhost",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
