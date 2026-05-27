import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export default function TrustSection() {
  return (
    <Section id="trust" className="bg-[#0d0c0b]">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Local Trust
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A real local shop with a warm Rawai presence.
          </h2>

          <div className="max-w-xl space-y-4 text-lg leading-8 text-zinc-300">
            <p>
              Cosmic Temple is located on Soi Saiyuan in Rawai, close to Nai
              Harn, Chalong, and South Phuket stays.
            </p>

            <p>
              Visitors come in for quality cannabis, honest guidance, and a calm
              place where the experience feels personal, welcoming, and easy to
              trust.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="space-y-5">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Visit Us
            </div>

            <div className="space-y-3 text-zinc-300">
              <p>{siteConfig.address}</p>
              <p>{siteConfig.hours}</p>
              <p>{siteConfig.phone}</p>
            </div>

            <a
              href={siteConfig.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Open Google Maps
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}