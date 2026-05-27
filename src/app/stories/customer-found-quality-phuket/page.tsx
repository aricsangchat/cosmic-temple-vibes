import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";
import LocalGuidesSection from "@/components/LocalGuidesSection";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Customer Found Quality Cannabis in Phuket | Cosmic Temple Story",
  description:
    "A real Cosmic Temple customer story about trying many cannabis shops in Phuket before finding quality, honest guidance, and a warm shop in Rawai.",
  alternates: {
    canonical: "/stories/customer-found-quality-phuket",
  },
  openGraph: {
    title: "Customer Found Quality Cannabis in Phuket | Cosmic Temple Story",
    description:
      "A real customer story about finding quality cannabis, honest guidance, and a warm shop experience in Rawai, Phuket.",
    url: "https://cosmictemplevibes.com/stories/customer-found-quality-phuket",
    images: [
      {
        url: "/images/recommend.jpg",
        width: 1200,
        height: 630,
        alt: "Customer finding quality cannabis at Cosmic Temple in Phuket",
      },
    ],
  },
};

export default function CustomerFoundQualityPhuketPage() {
  return (
    <main className="min-h-screen bg-[#0d0c0b] text-white">
      <Header />

      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src={siteConfig.images.recommend}
            alt="Customer finding quality cannabis at Cosmic Temple in Phuket"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0b]/85 via-[#0d0c0b]/45 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-8">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Customer Story
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              “I tried almost every shop in Phuket.”
            </h1>

            <p className="text-xl leading-9 text-zinc-200">
              A simple story about quality, trust, and why honest
              recommendations matter.
            </p>
          </div>
        </div>
      </section>

      <Section className="bg-[#11100f]">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Why People Come Back
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Sometimes people find us after trying everywhere else.
          </h2>

          <div className="space-y-4 text-lg leading-8 text-zinc-300">
            <p>
              One customer came into Cosmic Temple after visiting many cannabis
              shops around Phuket and still not finding the quality they wanted.
            </p>

            <p>
              Instead of rushing the sale, the team listened, asked what kind of
              experience they were looking for, and recommended something with
              care.
            </p>

            <p>
              The next day, the customer came back and said the recommendation
              was exactly what they had been searching for — and that the shop
              felt warm, like family, like home.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-[#0d0c0b]">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <p className="text-4xl font-semibold tracking-tight text-white">
            Quality matters. But the feeling matters too.
          </p>

          <p className="text-lg leading-8 text-zinc-300">
            That is the heart of Cosmic Temple: quality cannabis, honest
            guidance, and a calm place to land in Rawai, Phuket.
          </p>
        </div>
      </Section>

      <Section className="bg-[#11100f]">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Looking for quality cannabis in Phuket?
          </h2>

          <p className="text-lg leading-8 text-zinc-300">
            Visit Cosmic Temple in Rawai or message us for today’s
            recommendations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Ask for Recommendations
            </a>

            <a
              href={siteConfig.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:bg-white/10"
            >
              Open Google Maps
            </a>
          </div>
        </div>
      </Section>

      <LocalGuidesSection />

      <Footer />
      <MobileDock />
    </main>
  );
}