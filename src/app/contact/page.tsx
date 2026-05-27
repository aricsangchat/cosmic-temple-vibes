import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Section className="border-none pt-28">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Contact & Location
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Visit Cosmic Temple in Rawai.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-zinc-300">
              A calm local experience centered around quality, honest guidance, and a welcoming atmosphere in South Phuket.
            </p>
          </div>

          <div className="grid gap-6 rounded-3xl border border-white/10 bg-zinc-950/60 p-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Address
                </div>
                <p className="mt-2 text-lg text-zinc-200">
                  {siteConfig.address}
                </p>
              </div>

              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Hours
                </div>
                <p className="mt-2 text-lg text-zinc-200">
                  {siteConfig.hours}
                </p>
              </div>

              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Contact
                </div>
                <p className="mt-2 text-lg text-zinc-200">
                  {siteConfig.phone}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Button href={siteConfig.links.googleMaps} external className="w-full">
                Open Google Maps
              </Button>

              <Button href={siteConfig.links.whatsapp} external variant="secondary" className="w-full">
                WhatsApp
              </Button>

              <Button href={siteConfig.links.instagram} external variant="secondary" className="w-full">
                Instagram
              </Button>

              <Button href={siteConfig.links.telegram} external variant="secondary" className="w-full">
                Telegram
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 overflow-hidden bg-zinc-950/60">
            <iframe
              src="https://www.google.com/maps?q=Cosmic+Temple+Rawai+Phuket&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="min-h-[450px] w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cosmic Temple Map"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
