import Image from "next/image";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="absolute inset-0 opacity-40">
        <Image
          src={siteConfig.images.hero}
          alt="Cosmic Temple in Rawai Phuket"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl space-y-8 py-16 sm:py-20 lg:py-28">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm">
            Rawai, Phuket • Warm Local Experience
          </div>

          <div className="space-y-5">
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {siteConfig.tagline}
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
              Quality, honest guidance, and a warm shop experience in Rawai, Phuket.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={siteConfig.primaryAction.href} external>
              {siteConfig.primaryAction.label}
            </Button>

            <Button href={siteConfig.secondaryAction.href} variant="secondary">
              {siteConfig.secondaryAction.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
