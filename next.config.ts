import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/index.html", destination: "/" },
      { source: "/contact.html", destination: "/contact" },
    ];
  },
};

export default nextConfig;
