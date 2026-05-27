import { navItems, siteConfig } from "@/data/site";

const socialLinks = [
  { label: "Instagram", href: siteConfig.links.instagram },
  { label: "Facebook", href: siteConfig.links.facebook },
  { label: "Google Maps", href: siteConfig.links.googleMaps },
  { label: "Reviews", href: siteConfig.links.reviews },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-6 pb-28 pt-16 sm:px-10 md:pb-12 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div className="space-y-5">
          <div>
            <div className="text-2xl font-semibold tracking-tight text-white">
              {siteConfig.name}
            </div>
            <div className="mt-1 text-sm uppercase tracking-[0.22em] text-zinc-500">
              Rawai · Phuket
            </div>
          </div>

          <p className="max-w-xl text-base leading-7 text-zinc-400">
            A calm local experience built around quality, honest guidance, and a warm atmosphere in South Phuket.
          </p>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-6 text-sm leading-7 text-zinc-300">
            <div>{siteConfig.address}</div>
            <div>{siteConfig.hours}</div>
            <div>{siteConfig.phone}</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Explore
          </div>

          <div className="grid gap-3 text-sm text-zinc-300">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Connect
          </div>

          <div className="grid gap-3 text-sm text-zinc-300">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
        <div>Built for calm local discovery in Rawai, Phuket.</div>
      </div>
    </footer>
  );
}
