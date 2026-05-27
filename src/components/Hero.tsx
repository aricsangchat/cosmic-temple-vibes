import Image from "next/image";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";

const trustItems = [
  {
    title: "Quality You Can Trust",
    text: "Carefully selected and consistent.",
  },
  {
    title: "Guidance That Cares",
    text: "A calmer way to choose with confidence.",
  },
  {
    title: "Warm & Welcoming",
    text: "A comfortable place that feels easy to enter.",
  },
  {
    title: "Local & Connected",
    text: "Rooted in the Rawai community.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0d0c0b] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="absolute inset-0">
        <Image
          src={siteConfig.images.hero}
          alt="Cosmic Temple in Rawai Phuket"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0b]/80 via-[#0d0c0b]/40 to-[#0d0c0b]/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0b] via-transparent to-[#0d0c0b]/35" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl space-y-8 py-16 sm:py-20 lg:py-28">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-[#0d0c0b]/25 px-4 py-2 text-sm text-zinc-100 shadow-lg backdrop-blur-md">
            Rawai, Phuket • Warm Local Experience
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
              {siteConfig.tagline}
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-zinc-100 drop-shadow-lg sm:text-xl">
              Quality cannabis, honest guidance, and a warm shop experience in Rawai, Phuket.
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

        <div className="grid gap-0 overflow-hidden rounded-3xl border border-white/15 bg-[#0d0c0b]/35 shadow-2xl backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="border-white/10 p-6 sm:border-r last:border-r-0"
            >
              <div className="text-base font-medium text-white">{item.title}</div>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
