import Image from "next/image";
import { siteConfig } from "@/data/site";
import Section from "@/components/ui/Section";

export default function GuidanceSection() {
  return (
    <Section id="guidance" className="bg-[#11100f]">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-[#181411] lg:order-1">
          <Image
            src={siteConfig.images.recommend}
            alt="Cosmic Temple staff offering honest cannabis recommendations in Rawai Phuket"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="order-1 space-y-6 lg:order-2">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Guidance
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tell us what kind of experience you want.
          </h2>

          <div className="max-w-xl space-y-4 text-lg leading-8 text-zinc-300">
            <p>
              You do not need to know every strain, product, or detail. Our team
              is here to listen first, understand what you are looking for, and
              guide you toward something that actually fits.
            </p>

            <p>
              Cosmic Temple offers honest cannabis recommendations in Rawai,
              Phuket with a calmer, more personal approach to choosing with
              confidence.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}