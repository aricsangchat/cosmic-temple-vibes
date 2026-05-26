import Image from "next/image";
import { siteConfig } from "@/data/site";
import Section from "@/components/ui/Section";

export default function AtmosphereSection() {
  return (
    <Section id="quality">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Atmosphere
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Calm, welcoming, and intentionally local.
          </h2>

          <div className="space-y-4 text-lg leading-8 text-zinc-300">
            <p>
              The space is designed to feel grounded and approachable, with warm lighting, plants, music, and a slower pace than the typical high-energy retail experience.
            </p>

            <p>
              The goal is not overwhelm — it is clarity, comfort, and a memorable local atmosphere in Rawai.
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
          <Image
            src={siteConfig.images.atmosphere}
            alt="Atmosphere at Cosmic Temple"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}
