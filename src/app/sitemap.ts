import type { MetadataRoute } from "next";
import { getAllHtmlPages } from "@/data/htmlPages";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getAllHtmlPages();

  return pages.map((page) => ({
    url: page.canonical,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page.path === "index.html" ? 1 : 0.8,
  }));
}
