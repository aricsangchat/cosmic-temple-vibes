import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";
import LocalGuidesSection from "@/components/LocalGuidesSection";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "First Time Buying Cannabis in Phuket | Cosmic Temple Guide",
  description:
    "First time buying cannabis in Phuket? Cosmic Temple in Rawai shares a simple guide for choosing quality cannabis with honest local recommendations.",
  alternates: {
    canonical: "/guides/first-time-cannabis-phuket",
  },
  openGraph: {
    title: "First Time Buying Cannabis in Phuket | Cosmic Temple Guide",
    description:
      "A simple guide for choosing quality cannabis with honest local recommendations in Rawai, Phuket.",
    url: "https://cosmictemplevibes.com/guides/first-time-cannabis-phuket",
    images: [
      {
        url: "/images/first-time-cannabis-phuket.jpg",
        width: 1200,
        height: 630,
        alt: "First time buying cannabis in Phuket at Cosmic Temple Rawai",
      },
    ],
  },
};

const steps = [
  {
    label: "Step 1",
    title: "Say what you want to feel.",
    description:
      "Relaxed, social, creative, sleepy, calm, light, strong — simple words are enough.",
  },
  {
    label: "Step 2",
    title: "Ask for honest guidance.",
    description:
      "A good dispensary should listen before recommending anything.",
  },
  {
    label: "Step 3",
    title: "Choose quality over hype.",
    description:
      "The best product is the one that fits you, not just the one with the biggest claim.",
  },
];

export default function FirstTimeCannabisPhuketPage() {
  return (
    <main className="min-h-screen bg-[#0d0c0b] text-white">
      <Header />

      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/first-time-cannabis-phuket.jpg"
            alt="First time buying cannabis in Phuket at Cosmic Temple Rawai"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0b]/85 via-[#0d0c0b]/45 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-8">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Phuket Cannabis Guide
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              First time buying cannabis in Phuket?
            </h1>

            <p className="text-xl leading-9 text-zinc-200">
              Start with trust, quality, and honest guidance — not hype.
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
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:bg-white/10"
              >
                Ask for Recommendations
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-[#11100f]">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Simple Advice
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            You do not need to know every strain.
          </h2>

          <div className="space-y-4 text-lg leading-8 text-zinc-300">
            <p>
              If it is your first time visiting a cannabis dispensary in Phuket,
              the best place to start is not with the strongest product or the
              longest menu. Start by telling the staff what kind of experience
              you want.
            </p>

            <p>
              At Cosmic Temple in Rawai, we help visitors choose based on
              comfort, intention, experience level, and the feeling they are
              looking for.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-[#0d0c0b]">
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="space-y-4">
                <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  {step.label}
                </div>

                <h2 className="text-2xl font-medium text-white">
                  {step.title}
                </h2>

                <p className="leading-7 text-zinc-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#11100f]">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Visit Cosmic Temple in Rawai.
          </h2>

          <p className="text-lg leading-8 text-zinc-300">
            A warm licensed dispensary near Nai Harn, Chalong, Kata, and South
            Phuket.
          </p>

          <a
            href={siteConfig.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Open Google Maps
          </a>
        </div>
      </Section>

      <LocalGuidesSection />

      <Footer />
      <MobileDock />
    </main>
  );
}