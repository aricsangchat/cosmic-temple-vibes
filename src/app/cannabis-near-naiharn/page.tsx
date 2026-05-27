import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";
import LocalGuidesSection from "@/components/LocalGuidesSection";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Cannabis Near Nai Harn Phuket | Cosmic Temple Rawai",
  description:
    "Looking for cannabis near Nai Harn? Cosmic Temple is a licensed dispensary in nearby Rawai, Phuket with quality products and honest recommendations.",
  alternates: {
    canonical: "/cannabis-near-naiharn",
  },
  openGraph: {
    title: "Cannabis Near Nai Harn Phuket | Cosmic Temple Rawai",
    description:
      "Visit Cosmic Temple in Rawai for quality cannabis, honest guidance, and a warm shop experience near Nai Harn.",
    url: "https://cosmictemplevibes.com/cannabis-near-naiharn",
    images: [
      {
        url: "/images/cosmic-temple-dispensary-rawai-phuket.jpg",
        width: 1200,
        height: 630,
        alt: "Cannabis shop near Nai Harn Phuket in Rawai",
      },
    ],
  },
};

export default function CannabisNearNaiHarnPage() {
  return (
    <main className="min-h-screen bg-[#0d0c0b] text-white">
      <Header />

      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src={siteConfig.images.hero}
            alt="Cannabis shop near Nai Harn Phuket in Rawai"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0b]/85 via-[#0d0c0b]/45 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-8">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Cannabis Near Nai Harn
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Near Nai Harn. Easy to find in Rawai.
            </h1>

            <p className="text-xl leading-9 text-zinc-200">
              Cosmic Temple is a warm licensed cannabis dispensary near Nai Harn
              and Rawai, Phuket.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Get Directions
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:bg-white/10"
              >
                Message the Shop
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-[#11100f]">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Near Nai Harn Beach
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            A calm cannabis stop close to Nai Harn and South Phuket stays.
          </h2>

          <div className="space-y-4 text-lg leading-8 text-zinc-300">
            <p>
              If you are staying near Nai Harn Beach, Rawai, or South Phuket,
              Cosmic Temple is nearby on Soi Saiyuan in Rawai.
            </p>

            <p>
              Visitors come in for quality cannabis, honest recommendations,
              and a warm local shop atmosphere that feels easy to enter and
              comfortable to ask questions in.
            </p>
          </div>
        </div>
      </Section>

      <LocalGuidesSection />

      <Footer />
      <MobileDock />
    </main>
  );
}