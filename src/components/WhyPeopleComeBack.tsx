import Section from "@/components/ui/Section";

const reasons = [
  {
    title: "Warm Atmosphere",
    description:
      "A slower, calmer environment designed to feel welcoming rather than overwhelming.",
  },
  {
    title: "Thoughtful Guidance",
    description:
      "A more personal and approachable experience centered around clarity and comfort.",
  },
  {
    title: "Local Experience",
    description:
      "A space shaped around Rawai, Phuket and the people who return for the atmosphere.",
  },
];

export default function WhyPeopleComeBack() {
  return (
    <Section>
      <div className="space-y-12">
        <div className="max-w-3xl space-y-5">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Why People Come Back
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            A calmer experience built around trust and atmosphere.
          </h2>

          <p className="text-lg leading-8 text-zinc-300">
            The strongest part of the experience is not complexity — it is feeling comfortable, welcomed, and guided clearly.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-white/10 bg-zinc-950/70 p-8"
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
