import Image from "next/image";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

const moments = [
  {
    title: "The welcome in",
    description: "A storefront and atmosphere that invite people to slow down before they even step inside.",
    image: siteConfig.images.hero,
    className: "lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto",
  },
  {
    title: "Small rituals",
    description: "Music, plants, coffee, and quiet details that make the space feel lived in.",
    image: siteConfig.images.atmosphere,
    className: "aspect-[4/5]",
  },
  {
    title: "Personal guidance",
    description: "A calmer way to explore, ask questions, and feel comfortable with the experience.",
    image: siteConfig.images.recommend,
    className: "aspect-[4/5]",
  },
];

export default function AtmosphereGallery() {
  return (
    <Section id="moments" className="bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="space-y-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-4">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Moments
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              The feeling of Cosmic Temple, one quiet moment at a time.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-zinc-300 lg:justify-self-end">
            The atmosphere is built from small details — the entrance, the light, the plants, the music, and the way people are welcomed into the space.
          </p>
        </div>

        <div className="grid auto-rows-[minmax(260px,auto)] gap-5 lg:grid-cols-4">
          {moments.map((moment) => (
            <article
              key={moment.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 ${moment.className}`}
            >
              <Image
                src={moment.image}
                alt={moment.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl font-medium text-white">{moment.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-zinc-300">
                  {moment.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
