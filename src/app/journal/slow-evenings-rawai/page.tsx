import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";
import LocalGuidesSection from "@/components/LocalGuidesSection";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Slow Evenings in Rawai | Cosmic Temple Phuket Journal",
  description:
    "Slow evenings at Cosmic Temple in Rawai, Phuket — coffee, plants, music, calm energy, and a warm cannabis shop atmosphere near Nai Harn.",
  alternates: {
    canonical: "/journal/slow-evenings-rawai",
  },
  openGraph: {
    title: "Slow Evenings in Rawai | Cosmic Temple Phuket Journal",
    description:
      "Coffee, plants, music, and the calm energy of a warm cannabis shop atmosphere in Rawai, Phuket.",
    url: "https://cosmictemplevibes.com/journal/slow-evenings-rawai",
    images: [
      {
        url: "/images/recordplayerwide.jpg",
        width: 1200,
        height: 630,
        alt: "Slow evening atmosphere at Cosmic Temple Rawai Phuket",
      },
    ],
  },
};

const moments = [
  {
    label: "Plants",
    title: "Life in the space.",
    description:
      "Watering, misting, and keeping the shop feeling fresh and alive.",
  },
  {
    label: "Coffee",
    title: "A slower welcome.",
    description:
      "Coffee brings people into the moment and makes the shop feel warm.",
  },
  {
    label: "Music",
    title: "Calm energy.",
    description:
      "The atmosphere is part of why people remember Cosmic Temple.",
  },
];

export default function SlowEveningsRawaiPage() {
  return (
    <main className="min-h-screen bg-[#0d0c0b] text-white">
      <Header />

      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src={siteConfig.images.atmosphere}
            alt="Slow evening atmosphere at Cosmic Temple Rawai Phuket"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0b]/85 via-[#0d0c0b]/45 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-8">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Cosmic Temple Journal
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Slow evenings in Rawai.
            </h1>

            <p className="text-xl leading-9 text-zinc-200">
              Coffee, plants, music, and the calm energy of a shop that feels
              like home.
            </p>
          </div>
        </div>
      </section>

      <Section className="bg-[#11100f]">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Atmosphere
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            A different kind of cannabis shop in Phuket.
          </h2>

          <div className="space-y-4 text-lg leading-8 text-zinc-300">
            <p>
              Some people come in looking for cannabis. Some come in looking for
              a calm place to breathe for a moment.
            </p>

            <p>
              At Cosmic Temple, the small details matter: the plants, the music,
              the coffee, the quiet shop rituals, and the way people are welcomed
              when they walk through the door.
            </p>

            <p>
              We believe good product matters. Good people matter too. And the
              feeling of the space is part of the experience.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-[#0d0c0b]">
        <div className="grid gap-6 lg:grid-cols-3">
          {moments.map((moment) => (
            <div
              key={moment.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="space-y-4">
                <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  {moment.label}
                </div>

                <h2 className="text-2xl font-medium text-white">
                  {moment.title}
                </h2>

                <p className="leading-7 text-zinc-300">
                  {moment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#11100f]">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Come home to quality in Rawai.
          </h2>

          <p className="text-lg leading-8 text-zinc-300">
            Visit Cosmic Temple near Nai Harn, Chalong, Kata, and South Phuket.
          </p>

          <a
            href={siteConfig.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Visit the Shop
          </a>
        </div>
      </Section>

      <LocalGuidesSection />

      <Footer />
      <MobileDock />
    </main>
  );
}