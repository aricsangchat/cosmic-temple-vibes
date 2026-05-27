import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";
import LocalGuidesSection from "@/components/LocalGuidesSection";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Dispensary Near Me Phuket | Cosmic Temple Rawai",
  description:
    "Searching for a dispensary near me in Phuket? Visit Cosmic Temple in Rawai for quality cannabis, honest guidance, and local delivery options.",
  alternates: {
    canonical: "/dispensary-near-me-phuket",
  },
  openGraph: {
    title: "Dispensary Near Me Phuket | Cosmic Temple Rawai",
    description:
      "Find Cosmic Temple in Rawai for quality cannabis, honest recommendations, and a warm local shop experience.",
    url: "https://cosmictemplevibes.com/dispensary-near-me-phuket",
    images: [
      {
        url: "/images/cosmic-temple-dispensary-rawai-phuket.jpg",
        width: 1200,
        height: 630,
        alt: "Dispensary near me in Phuket Cosmic Temple Rawai",
      },
    ],
  },
};

export default function DispensaryNearMePhuketPage() {
  return (
    <main className="min-h-screen bg-[#0d0c0b] text-white">
      <Header />

      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src={siteConfig.images.hero}
            alt="Dispensary near me in Phuket Cosmic Temple Rawai"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0b]/85 via-[#0d0c0b]/45 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-8">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Dispensary Near Me Phuket
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Find Cosmic Temple in Rawai.
            </h1>

            <p className="text-xl leading-9 text-zinc-200">
              A local Phuket dispensary for quality cannabis, honest
              recommendations, and a warm shop experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Open Google Maps
              </a>

              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:bg-white/10"
              >
                Message Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-[#11100f]">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Local Phuket Dispensary
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            A warm cannabis shop in Rawai for visitors searching nearby.
          </h2>

          <div className="space-y-4 text-lg leading-8 text-zinc-300">
            <p>
              If you are searching for a dispensary near me in Phuket, Cosmic
              Temple is located in Rawai on Soi Saiyuan, close to Nai Harn,
              Chalong, Kata, and South Phuket stays.
            </p>

            <p>
              Visit for quality cannabis, honest recommendations, local delivery
              options, and a calm shop atmosphere that feels comfortable and
              easy to enter.
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