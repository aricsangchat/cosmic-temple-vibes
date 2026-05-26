import { siteConfig } from "@/data/site";

export default function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between rounded-full border border-white/10 bg-black/90 px-3 py-3 shadow-2xl backdrop-blur-xl">
        <a
          href={siteConfig.links.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-sm text-zinc-200"
        >
          Maps
        </a>

        <a
          href={siteConfig.secondaryAction.href}
          className="flex-1 text-center text-sm font-medium text-white"
        >
          Message
        </a>

        <a
          href={siteConfig.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-sm text-zinc-200"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
