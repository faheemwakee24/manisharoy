import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["framer-motion", "motion-dom"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/skill-detail",
        has: [{ type: "query", key: "id", value: "(?<id>.*)" }],
        destination: "/skills/:id",
        permanent: true,
      },
      {
        source: "/collection-detail",
        has: [{ type: "query", key: "id", value: "(?<id>.*)" }],
        destination: "/collections/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
