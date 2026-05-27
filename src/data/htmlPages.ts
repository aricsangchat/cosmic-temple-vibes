import path from "path";

type HtmlPageSource = {
  path: string;
};

export type HtmlPage = {
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  bodyHtml: string;
};

const htmlPages: HtmlPageSource[] = [
  { path: "index.html" },
  { path: "contact.html" },
  { path: "best-cannabis-shop-phuket.html" },
  { path: "cannabis-delivery-phuket.html" },
  { path: "cannabis-near-naiharn.html" },
  { path: "dispensary-near-me-phuket.html" },
  { path: "dispensary-rawai.html" },
  { path: "phuket-cannabis-guide.html" },
  { path: "weed-delivery-rawai.html" },
  { path: "guides/first-time-cannabis-phuket.html" },
  { path: "journal/slow-evenings-rawai.html" },
  { path: "stories/customer-found-quality-phuket.html" },
];

const projectRoot = path.resolve(".");

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getTagContent(html: string, tag: string) {
  const match = html.match(new RegExp(`<${tag}[^>]*>([\s\S]*?)<\/${tag}>`, "i"));
  return match?.[1]?.trim() ?? "";
}

function getMetaContent(html: string, key: string) {
  const re = new RegExp(
    `<meta[^>]*(?:name|property)=["']${escapeRegExp(key)}["'][^>]*content=["']([^"']*)["'][^>]*>`,
    "i"
  );
  return html.match(re)?.[1]?.trim() ?? "";
}

function getLinkHref(html: string, rel: string) {
  const re = new RegExp(
    `<link[^>]*rel=["']${escapeRegExp(rel)}["'][^>]*href=["']([^"']*)["'][^>]*>`,
    "i"
  );
  return html.match(re)?.[1]?.trim() ?? "";
}

function getBody(html: string) {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return match?.[1]?.trim() ?? "";
}

function stripScripts(html: string) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, "");
}

async function parseHtmlPage(pagePath: string): Promise<HtmlPage> {
  const { readFileSync } = await import("fs");
  const filePath = path.join(projectRoot, pagePath);
  const source = readFileSync(filePath, "utf8");
  const head = source.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  const title = getTagContent(head, "title");
  const description = getMetaContent(head, "description");
  const canonical = getLinkHref(head, "canonical") || `https://cosmictemplevibes.com/${pagePath}`;
  const ogTitle = getMetaContent(head, "og:title") || title;
  const ogDescription = getMetaContent(head, "og:description") || description;
  const ogImage = getMetaContent(head, "og:image") || undefined;
  const bodyHtml = stripScripts(getBody(source));

  return {
    path: pagePath,
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    bodyHtml,
  };
}

export async function getHtmlPageByPath(pagePath: string) {
  if (!htmlPages.some((page) => page.path === pagePath)) {
    return undefined;
  }
  return parseHtmlPage(pagePath);
}

export async function getAllHtmlPages() {
  return Promise.all(htmlPages.map((page) => parseHtmlPage(page.path)));
}
