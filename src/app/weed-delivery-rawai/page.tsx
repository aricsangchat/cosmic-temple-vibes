import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";
import LocalGuidesSection from "@/components/LocalGuidesSection";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Weed Delivery Rawai Phuket | Cosmic Temple",
  description:
    "Need weed delivery in Rawai, Phuket? Message Cosmic Temple for quality cannabis recommendations and local delivery from our licensed Rawai dispensary.",
  alternates: {
    canonical: "/weed-delivery-rawai",
  },
  openGraph: {
    title: "Weed Delivery Rawai Phuket | Cosmic Temple",
    description:
      "Message Cosmic Temple for local cannabis delivery in Rawai, honest recommendations, and quality products.",
    url: "https://cosmictemplevibes.com/weed-delivery-rawai",
    images: [
      {
        url: "/images/cosmic-temple-dispensary-rawai-phuket.jpg",
        width: 1200,
        height: 630,
        alt: "Weed delivery in Rawai Phuket from Cosmic Temple",
      },
    ],
  },
};

export default function WeedDeliveryRawaiPage() {
  return (
    <main className="min-h-screen bg-[#0d0c0b] text-white">
      <Header />

      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src={siteConfig.images.hero}
            alt="Weed delivery in Rawai Phuket from Cosmic Temple"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0b]/85 via-[#0d0c0b]/45 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-8">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Weed Delivery Rawai
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Rawai cannabis delivery, with real recommendations.
            </h1>

            <p className="text-xl leading-9 text-zinc-200">
              Message Cosmic Temple for local delivery in Rawai and nearby
              areas. We’ll help you choose something that fits.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/66638849316?text=Hi%20Cosmic%20Temple%2C%20I%27d%20like%20weed%20delivery%20in%20Rawai."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                WhatsApp for Delivery
              </a>

              <a
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:bg-white/10"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-[#11100f]">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Local Rawai Delivery
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Cannabis delivery in Rawai from a licensed local shop.
          </h2>

          <div className="space-y-4 text-lg leading-8 text-zinc-300">
            <p>
              Cosmic Temple offers local delivery options in Rawai and nearby
              South Phuket areas depending on availability.
            </p>

            <p>
              Message the shop for today’s recommendations. Our team can help
              you choose based on the kind of experience you are looking for.
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