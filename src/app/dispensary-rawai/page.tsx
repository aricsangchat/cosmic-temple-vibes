import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";
import Section from "@/components/ui/Section";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Dispensary in Rawai Phuket | Cosmic Temple",

  description:
    "Visit Cosmic Temple, a warm licensed cannabis dispensary in Rawai, Phuket offering quality cannabis, honest guidance, and a welcoming shop experience.",

  alternates: {
    canonical: "/dispensary-rawai",
  },

  openGraph: {
    title: "Dispensary in Rawai Phuket | Cosmic Temple",
    description:
      "Quality cannabis, honest guidance, and a warm local dispensary experience in Rawai, Phuket.",
    url: "https://cosmictemplevibes.com/dispensary-rawai",
    images: [
      {
        url: "/images/cosmic-temple-dispensary-rawai-phuket.jpg",
        width: 1200,
        height: 630,
        alt: "Cosmic Temple Rawai Phuket",
      },
    ],
  },
};

export default function DispensaryRawaiPage() {
  return (
    <main className="min-h-screen bg-[#0d0c0b] text-white">
      <Header />

      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src={siteConfig.images.hero}
            alt="Cosmic Temple cannabis dispensary in Rawai Phuket"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0b]/85 via-[#0d0c0b]/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-8">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Dispensary in Rawai Phuket
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Your warm cannabis shop in Rawai.
            </h1>

            <p className="text-xl leading-9 text-zinc-200">
              Quality cannabis, honest staff guidance, and a shop that feels calm,
              friendly, and easy to walk into.
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
            Rawai Cannabis Shop
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Visit Cosmic Temple on Soi Saiyuan in Rawai.
          </h2>

          <div className="space-y-4 text-lg leading-8 text-zinc-300">
            <p>
              Cosmic Temple is a licensed cannabis dispensary in Rawai, Phuket.
              We are here for people who want trusted quality, friendly
              recommendations, and a place that feels welcoming instead of
              overwhelming.
            </p>

            <p>
              Located near Nai Harn Beach and South Phuket stays, Cosmic Temple
              offers a calmer local experience built around hospitality,
              atmosphere, and honest guidance.
            </p>
          </div>
        </div>
      </Section>

      <Footer />

      <MobileDock />
    </main>
  );
}