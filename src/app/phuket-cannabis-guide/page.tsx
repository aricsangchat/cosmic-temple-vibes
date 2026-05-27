import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";
import LocalGuidesSection from "@/components/LocalGuidesSection";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Phuket Cannabis Guide | How to Choose a Dispensary",
  description:
    "A simple Phuket cannabis guide from Cosmic Temple in Rawai. Learn how to choose quality cannabis, ask for recommendations, and find a trusted dispensary.",
  alternates: {
    canonical: "/phuket-cannabis-guide",
  },
  openGraph: {
    title: "Phuket Cannabis Guide | Cosmic Temple Rawai",
    description:
      "Learn how to choose quality cannabis, ask for honest recommendations, and find a trusted dispensary in Phuket.",
    url: "https://cosmictemplevibes.com/phuket-cannabis-guide",
    images: [
      {
        url: "/images/cosmic-temple-dispensary-rawai-phuket.jpg",
        width: 1200,
        height: 630,
        alt: "Phuket cannabis guide by Cosmic Temple Rawai",
      },
    ],
  },
};

export default function PhuketCannabisGuidePage() {
  return (
    <main className="min-h-screen bg-[#0d0c0b] text-white">
      <Header />

      <Section className="bg-gradient-to-b from-[#0d0c0b] via-[#11100f] to-[#0d0c0b] pt-28 lg:pt-36">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Phuket Cannabis Guide
          </div>

          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            How to choose cannabis in Phuket.
          </h1>

          <p className="text-xl leading-9 text-zinc-300">
            A simple guide for visitors and locals who want quality, trust, and
            honest guidance before they buy.
          </p>
        </div>
      </Section>

      <Section className="bg-[#11100f]">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Start with the experience you want.
            </h2>

            <p className="text-lg leading-8 text-zinc-300">
              You do not need to know every strain or product name. A good
              dispensary should ask questions first: what kind of feeling you
              want, how experienced you are, and whether you prefer something
              calm, social, creative, or relaxing.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Look for honest guidance.
            </h2>

            <p className="text-lg leading-8 text-zinc-300">
              The best shop is not always the one pushing the strongest product.
              Look for a team that listens, explains clearly, and helps you
              choose with confidence.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Visit a place that feels comfortable.
            </h2>

            <p className="text-lg leading-8 text-zinc-300">
              A warm shop matters. Cosmic Temple in Rawai is built around
              quality cannabis, friendly guidance, and a calm atmosphere that
              feels welcoming.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-medium text-white">
              Need help choosing?
            </h2>

            <p className="mt-4 leading-8 text-zinc-300">
              Message Cosmic Temple or visit the shop in Rawai. Our team can
              help you choose based on the kind of experience you are looking
              for.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Message the Shop
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
        </div>
      </Section>

      <LocalGuidesSection />

      <Footer />
      <MobileDock />
    </main>
  );
}