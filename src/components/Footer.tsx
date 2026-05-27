import { navItems, siteConfig } from "@/data/site";

const socialLinks = [
  { label: "Instagram", href: siteConfig.links.instagram },
  { label: "Facebook", href: siteConfig.links.facebook },
  { label: "Google Maps", href: siteConfig.links.googleMaps },
  { label: "Reviews", href: siteConfig.links.reviews },
];

const localLinks = [
  ["Cannabis Delivery Phuket", "/cannabis-delivery-phuket"],
  ["Dispensary Rawai", "/dispensary-rawai"],
  ["Phuket Cannabis Guide", "/phuket-cannabis-guide"],
  ["Cannabis Near Nai Harn", "/cannabis-near-naiharn"],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0908] px-6 pb-28 pt-16 sm:px-10 md:pb-12 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_0.7fr_0.8fr_0.8fr]">
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
            A warm licensed cannabis dispensary in Rawai, Phuket built around
            quality, honest guidance, and a calm local atmosphere.
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-zinc-300">
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
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Local Guides
          </div>

          <div className="grid gap-3 text-sm text-zinc-300">
            {localLinks.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-white">
                {label}
              </a>
            ))}
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
                className="hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
        <div>Built for calm local discovery in Rawai, Phuket.</div>
      </div>
    </footer>
  );
}