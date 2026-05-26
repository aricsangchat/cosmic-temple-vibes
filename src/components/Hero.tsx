import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm">
            Rawai, Phuket • Warm Local Experience
          </div>

          <div className="space-y-5">
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {siteConfig.tagline}
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Calm atmosphere, thoughtful guidance, and a welcoming local space in Rawai.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.primaryAction.href}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              {siteConfig.primaryAction.label}
            </a>

            <a
              href={siteConfig.secondaryAction.href}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {siteConfig.secondaryAction.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
