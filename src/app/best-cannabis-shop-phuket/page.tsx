import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Cannabis Shop Phuket | Cosmic Temple",

  description:
    "Looking for the best cannabis shop in Phuket? Cosmic Temple in Rawai focuses on quality cannabis, honest recommendations, and a warm shop experience.",

  alternates: {
    canonical: "/best-cannabis-shop-phuket",
  },

  openGraph: {
    title: "Best Cannabis Shop Phuket | Cosmic Temple",
    description:
      "Quality cannabis, honest guidance, and a warm dispensary experience in Rawai, Phuket.",
    url: "https://cosmictemplevibes.com/best-cannabis-shop-phuket",

    images: [
      {
        url: "/images/recommend.jpg",
        width: 1200,
        height: 630,
        alt: "Best cannabis shop in Phuket",
      },
    ],
  },
};

import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";
import LocalGuidesSection from "@/components/LocalGuidesSection";
import Section from "@/components/ui/Section";

import { siteConfig } from "@/data/site";

export default function BestCannabisShopPhuketPage() {
  return (
    <main className="min-h-screen bg-[#0d0c0b] text-white">
      <Header />

      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src={siteConfig.images.recommend}
            alt="Best cannabis shop experience in Phuket"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0b]/85 via-[#0d0c0b]/45 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-8">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Best Cannabis Shop Phuket
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Choose quality. Feel at home.
            </h1>

            <p className="text-xl leading-9 text-zinc-200">
              Cosmic Temple is for people who want more than a quick
              transaction — quality products, real guidance, and a warm
              Rawai shop experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Visit Cosmic Temple
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
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="space-y-4">
              <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Quality
              </div>

              <h2 className="text-2xl font-medium text-white">
                Products you can trust.
              </h2>

              <p className="leading-7 text-zinc-300">
                We focus on consistent quality and products we can confidently
                recommend.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="space-y-4">
              <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Guidance
              </div>

              <h2 className="text-2xl font-medium text-white">
                Ask before you choose.
              </h2>

              <p className="leading-7 text-zinc-300">
                Tell us what kind of experience you want and we’ll help guide
                you toward the right fit.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="space-y-4">
              <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Feeling
              </div>

              <h2 className="text-2xl font-medium text-white">
                A shop that feels warm.
              </h2>

              <p className="leading-7 text-zinc-300">
                Friendly people, calm energy, and a place that feels welcoming
                in Phuket.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Why Visitors Choose Cosmic Temple
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            A calmer cannabis experience in Phuket.
          </h2>

          <p className="text-lg leading-8 text-zinc-300">
            Many visitors searching for the best cannabis shop in Phuket are
            looking for more than products alone. They want quality they can
            trust, honest recommendations, and a welcoming local atmosphere.
          </p>

          <p className="text-lg leading-8 text-zinc-300">
            Located in Rawai near Nai Harn Beach, Cosmic Temple focuses on
            creating a warm experience built around hospitality, atmosphere,
            and thoughtful guidance.
          </p>
        </div>
      </Section>

      <LocalGuidesSection />

      <Footer />

      <MobileDock />
    </main>
  );
}