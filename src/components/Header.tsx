import { navItems, siteConfig } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 px-6 py-4 backdrop-blur-xl sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <a href="/" className="leading-tight" aria-label="Cosmic Temple homepage">
          <div className="text-base font-semibold tracking-tight text-white">
            {siteConfig.name}
          </div>
          <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Rawai · Phuket
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.primaryAction.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 sm:inline-flex"
          >
            Maps
          </a>

          <a
            href={siteConfig.secondaryAction.href}
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Message
          </a>
        </div>
      </div>
    </header>
  );
}
