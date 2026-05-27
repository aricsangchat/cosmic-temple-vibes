import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";
import LocalGuidesSection from "@/components/LocalGuidesSection";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Cannabis Delivery Phuket | Cosmic Temple Rawai",
  description:
    "Message Cosmic Temple for cannabis delivery in Phuket. Quality products, honest recommendations, and local delivery from our licensed dispensary in Rawai.",
  alternates: {
    canonical: "/cannabis-delivery-phuket",
  },
  openGraph: {
    title: "Cannabis Delivery Phuket | Cosmic Temple Rawai",
    description:
      "Quality cannabis, honest guidance, and local cannabis delivery from Cosmic Temple in Rawai, Phuket.",
    url: "https://cosmictemplevibes.com/cannabis-delivery-phuket",
    images: [
      {
        url: "/images/cosmic-temple-dispensary-rawai-phuket.jpg",
        width: 1200,
        height: 630,
        alt: "Cannabis delivery from Cosmic Temple in Rawai Phuket",
      },
    ],
  },
};

export default function CannabisDeliveryPhuketPage() {
  return (
    <main className="min-h-screen bg-[#0d0c0b] text-white">
      <Header />

      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src={siteConfig.images.hero}
            alt="Cannabis delivery from Cosmic Temple dispensary in Rawai Phuket"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0b]/85 via-[#0d0c0b]/45 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-8">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Cannabis Delivery Phuket
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Quality cannabis delivered in Phuket.
            </h1>

            <p className="text-xl leading-9 text-zinc-200">
              Message Cosmic Temple for today’s recommendations and local
              cannabis delivery from Rawai, Phuket.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/66638849316?text=Hi%20Cosmic%20Temple%2C%20I%27d%20like%20cannabis%20delivery%20in%20Phuket."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Order on WhatsApp
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
            Local Delivery
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Cannabis delivery from a licensed Rawai dispensary.
          </h2>

          <div className="space-y-4 text-lg leading-8 text-zinc-300">
            <p>
              Cosmic Temple helps locals and visitors in Phuket choose quality
              cannabis with honest guidance. Tell us what kind of experience
              you are looking for and our team can recommend options for
              delivery.
            </p>

            <ul className="list-disc space-y-3 pl-5 text-zinc-300">
              <li>Delivery available in Rawai and surrounding Phuket areas</li>
              <li>Friendly product recommendations before you order</li>
              <li>Quality-focused cannabis from a licensed local shop</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-[#0d0c0b]">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Message for Today’s Menu
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Serving Rawai, Nai Harn, Chalong, Kata, and nearby Phuket areas.
          </h2>

          <p className="text-lg leading-8 text-zinc-300">
            Delivery availability depends on the area and timing. Message the
            shop for today’s recommendations.
          </p>

          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            WhatsApp Cosmic Temple
          </a>
        </div>
      </Section>

      <LocalGuidesSection />

      <Footer />
      <MobileDock />
    </main>
  );
}