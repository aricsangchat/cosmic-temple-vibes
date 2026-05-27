import Section from "@/components/ui/Section";

const faqs = [
  {
    question: "Do you offer cannabis delivery in Phuket?",
    answer:
      "Yes. Cosmic Temple offers cannabis delivery in Rawai and nearby South Phuket areas depending on availability.",
  },
  {
    question: "Where is Cosmic Temple located?",
    answer:
      "Cosmic Temple is located on Soi Saiyuan in Rawai, Phuket near Nai Harn Beach.",
  },
  {
    question: "Can beginners ask for recommendations?",
    answer:
      "Absolutely. The experience is designed to feel approachable, comfortable, and guided clearly.",
  },
  {
    question: "Do you serve visitors staying near Nai Harn?",
    answer:
      "Yes. Many visitors staying in Nai Harn, Chalong, Kata, and South Phuket stop by Cosmic Temple.",
  },
];

export default function FAQSection() {
  return (
    <Section className="bg-[#0d0c0b]">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-5">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            FAQ
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Frequently asked questions.
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="text-xl font-medium text-white">
                {faq.question}
              </h3>

              <p className="mt-4 leading-8 text-zinc-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}