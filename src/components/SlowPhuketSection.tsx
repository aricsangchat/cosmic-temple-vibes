import Section from "@/components/ui/Section";

export default function SlowPhuketSection() {
  return (
    <Section className="bg-gradient-to-b from-[#0a0908] via-[#11100f] to-[#0d0c0b]">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Slow Phuket
        </div>

        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Slow down in Rawai.
        </h2>

        <div className="space-y-6 text-lg leading-9 text-zinc-300">
          <p>
            Phuket can move fast — beach days, late nights, traffic, tours,
            choices everywhere. Cosmic Temple offers a calmer place to pause,
            ask questions, and feel comfortable.
          </p>

          <p>
            More than a retail stop, the space is shaped by hospitality,
            guidance, coffee, plants, music, and the feeling of slowing down
            in Rawai, Phuket.
          </p>
        </div>
      </div>
    </Section>
  );
}