import Section from "@/components/ui/Section";

export default function SlowPhuketSection() {
  return (
    <Section className="bg-zinc-950/40">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Slow Phuket
        </div>

        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          A calmer experience in Phuket.
        </h2>

        <div className="space-y-6 text-lg leading-9 text-zinc-300">
          <p>
            The experience is intentionally slower — warm lighting,
            thoughtful pacing, music, conversation, and a space designed
            to feel comfortable instead of overwhelming.
          </p>

          <p>
            More than a retail stop, Cosmic Temple is becoming part of a
            broader local atmosphere centered around hospitality,
            guidance, coffee, plants, and the feeling of slowing down in
            Rawai.
          </p>
        </div>
      </div>
    </Section>
  );
}