import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/dispensary-rawai.html",
        destination: "/dispensary-rawai",
        permanent: true,
      },
      {
        source: "/best-cannabis-shop-phuket.html",
        destination: "/best-cannabis-shop-phuket",
        permanent: true,
      },
      {
        source: "/cannabis-delivery-phuket.html",
        destination: "/cannabis-delivery-phuket",
        permanent: true,
      },
      {
        source: "/cannabis-near-naiharn.html",
        destination: "/cannabis-near-naiharn",
        permanent: true,
      },
      {
        source: "/dispensary-near-me-phuket.html",
        destination: "/dispensary-near-me-phuket",
        permanent: true,
      },
      {
        source: "/phuket-cannabis-guide.html",
        destination: "/phuket-cannabis-guide",
        permanent: true,
      },
      {
        source: "/weed-delivery-rawai.html",
        destination: "/weed-delivery-rawai",
        permanent: true,
      },
      {
        source: "/guides/first-time-cannabis-phuket.html",
        destination: "/guides/first-time-cannabis-phuket",
        permanent: true,
      },
      {
        source: "/journal/slow-evenings-rawai.html",
        destination: "/journal/slow-evenings-rawai",
        permanent: true,
      },
      {
        source: "/stories/customer-found-quality-phuket.html",
        destination: "/stories/customer-found-quality-phuket",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;