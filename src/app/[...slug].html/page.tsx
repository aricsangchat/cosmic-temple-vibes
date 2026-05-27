import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllHtmlPages, getHtmlPageByPath } from "@/data/htmlPages";
import styles from "./legacy.module.css";

export async function generateStaticParams() {
  const pages = await getAllHtmlPages();
  return pages.map((page) => ({
    slug: page.path.replace(/\.html$/, "").split("/"),
  }));
}

export async function generateMetadata({ params }: { params: { slug?: string[] } }): Promise<Metadata> {
  const slugParts = params.slug ?? [];
  if (slugParts.length === 0) {
    return {};
  }

  const pagePath = `${slugParts.join("/")}.html`;
  const page = await getHtmlPageByPath(pagePath);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    metadataBase: new URL("https://cosmictemplevibes.com"),
    alternates: {
      canonical: new URL(page.canonical),
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: new URL(page.canonical),
      images: page.ogImage
        ? [new URL(page.ogImage, "https://cosmictemplevibes.com").toString()]
        : undefined,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function HtmlPage({ params }: { params: { slug?: string[] } }) {
  const slugParts = params.slug ?? [];
  if (slugParts.length === 0) {
    return notFound();
  }

  const pagePath = `${slugParts.join("/")}.html`;
  const page = await getHtmlPageByPath(pagePath);

  if (!page) {
    return notFound();
  }

  return (
    <main className={styles.legacyPage} dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />
  );
}
