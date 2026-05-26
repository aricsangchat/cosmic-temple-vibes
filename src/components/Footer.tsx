import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} {siteConfig.name}
        </div>

        <div className="flex gap-6">
          <a href={siteConfig.links.instagram}>Instagram</a>
          <a href={siteConfig.links.googleMaps}>Google Maps</a>
          <a href={siteConfig.links.reviews}>Reviews</a>
        </div>
      </div>
    </footer>
  );
}
