import type { MetadataRoute } from "next";

const baseUrl = "https://cosmictemplevibes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contact",
    "/cannabis-delivery-phuket",
    "/dispensary-rawai",
    "/best-cannabis-shop-phuket",
    "/weed-delivery-rawai",
    "/phuket-cannabis-guide",
    "/cannabis-near-naiharn",
    "/dispensary-near-me-phuket",
    "/guides/first-time-cannabis-phuket",
    "/stories/customer-found-quality-phuket",
    "/journal/slow-evenings-rawai",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route.startsWith("/journal") ? 0.7 : 0.8,
  }));
}