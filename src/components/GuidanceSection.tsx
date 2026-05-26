import Image from "next/image";
import { siteConfig } from "@/data/site";
import Section from "@/components/ui/Section";

export default function GuidanceSection() {
  return (
    <Section id="guidance">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 order-2 lg:order-1">
          <Image
            src={siteConfig.images.recommend}
            alt="Guidance and recommendations"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-6 order-1 lg:order-2">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Guidance
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Honest recommendations and a calmer experience.
          </h2>

          <div className="space-y-4 text-lg leading-8 text-zinc-300">
            <p>
              The experience is centered around clarity, thoughtful presentation, and helping visitors feel comfortable exploring the space.
            </p>

            <p>
              Instead of overwhelming visitors with noise or complexity, the atmosphere focuses on trust, pacing, and personal interaction.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
