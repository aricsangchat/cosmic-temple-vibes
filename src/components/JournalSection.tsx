import Section from "@/components/ui/Section";

const posts = [
  {
    category: "Guide",
    title: "First Time Buying Cannabis in Phuket",
    description:
      "A calmer guide for visitors looking for quality, trust, and honest recommendations in Rawai.",
    href: "/journal/first-time-buying-cannabis-phuket",
  },
  {
    category: "Story",
    title: "“I Tried Almost Every Shop in Phuket”",
    description:
      "A real customer story about finding quality, guidance, and a place that felt welcoming.",
    href: "/journal/i-tried-almost-every-shop-in-phuket",
  },
  {
    category: "Journal",
    title: "Slow Evenings in Rawai",
    description:
      "Plants, music, coffee, warm lighting, and the slower atmosphere inside Cosmic Temple.",
    href: "/journal/slow-evenings-in-rawai",
  },
];

export default function JournalSection() {
  return (
    <Section className="bg-[#11100f]">
      <div className="space-y-12">
        <div className="max-w-3xl space-y-5">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Journal
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Stories, guides, and slow moments from Phuket.
          </h2>

          <p className="text-lg leading-8 text-zinc-300">
            Local cannabis guides, customer experiences, and small moments from
            life around Cosmic Temple in Rawai.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="space-y-4">
                <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  {post.category}
                </div>

                <h3 className="text-2xl font-medium text-white transition group-hover:text-zinc-100">
                  {post.title}
                </h3>

                <p className="leading-7 text-zinc-400">
                  {post.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}