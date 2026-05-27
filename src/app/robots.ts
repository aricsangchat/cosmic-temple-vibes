import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://cosmictemplevibes.com/sitemap.xml",
    host: "https://cosmictemplevibes.com",
  };
}