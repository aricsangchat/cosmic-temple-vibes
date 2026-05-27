import Section from "@/components/ui/Section";

const localGuides = [
  ["Cannabis Delivery Phuket", "/cannabis-delivery-phuket"],
  ["Dispensary Rawai", "/dispensary-rawai"],
  ["Best Cannabis Shop Phuket", "/best-cannabis-shop-phuket"],
  ["Weed Delivery Rawai", "/weed-delivery-rawai"],
  ["Phuket Cannabis Guide", "/phuket-cannabis-guide"],
  ["Cannabis Near Nai Harn", "/cannabis-near-naiharn"],
  ["Dispensary Near Me Phuket", "/dispensary-near-me-phuket"],
];

export default function LocalGuidesSection() {
  return (
    <Section id="location" className="bg-[#0d0c0b] py-24">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Phuket Cannabis Help
        </div>

        <h2 className="text-4xl font-semibold tracking-tight text-white">
          Helpful local cannabis guides for Rawai and Phuket.
        </h2>

        <p className="text-lg leading-8 text-zinc-300">
          Explore practical local pages for cannabis delivery, Rawai dispensary
          visits, Nai Harn stays, and first-time cannabis guidance in Phuket.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {localGuides.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}