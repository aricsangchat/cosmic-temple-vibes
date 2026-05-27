import Section from "@/components/ui/Section";

const reasons = [
  {
    title: "They Feel Comfortable",
    description:
      "A slower, warmer environment where visitors can ask questions without feeling rushed or overwhelmed.",
  },
  {
    title: "They Trust the Guidance",
    description:
      "Recommendations are given with care, clarity, and attention to what each person is actually looking for.",
  },
  {
    title: "They Remember the Feeling",
    description:
      "Quality matters, but the atmosphere, people, and local Rawai energy are what make the experience stay with them.",
  },
];

export default function WhyPeopleComeBack() {
  return (
    <Section id="quality" className="bg-[#0d0c0b]">
      <div className="space-y-12">
        <div className="max-w-3xl space-y-5">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Why People Come Back
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Quality brings people in. The feeling brings them back.
          </h2>

          <p className="text-lg leading-8 text-zinc-300">
            Cosmic Temple is built around more than a transaction — it is a calm,
            welcoming cannabis experience in Rawai, Phuket where people feel
            comfortable choosing with confidence.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-white">
                  {reason.title}
                </h3>

                <p className="leading-7 text-zinc-400">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}