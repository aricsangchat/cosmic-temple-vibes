import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileDock from "@/components/MobileDock";
import Section from "@/components/ui/Section";
import { getLocalPage, localPages } from "@/data/localPages";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return localPages.map((page) => ({ slug: page.slug }));
}

export default async function LocalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = getLocalPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <Section className="border-none pt-28">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="space-y-5 text-center">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              {page.eyebrow}
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              {page.title}
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-zinc-300">
              {page.description}
            </p>
          </div>

          <div className="space-y-8">
            {page.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-white/10 bg-zinc-950/40 p-8"
              >
                <h2 className="text-2xl font-medium text-white">
                  {section.title}
                </h2>

                <p className="mt-4 text-base leading-8 text-zinc-300">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Footer />

      <MobileDock />
    </main>
  );
}
