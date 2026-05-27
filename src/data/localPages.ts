export type LocalPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  sections: {
    title: string;
    body: string;
  }[];
};

export const localPages: LocalPage[] = [
  {
    slug: "rawai",
    eyebrow: "Rawai Local Guide",
    title: "A calm local stop in Rawai, Phuket.",
    description:
      "Cosmic Temple is rooted on Soi Saiyuan in Rawai, shaped around warmth, trust, and a slower local atmosphere.",
    sections: [
      {
        title: "A welcoming place in South Phuket",
        body: "The experience is designed for people who want clarity, comfort, and a local place that feels easy to walk into.",
      },
      {
        title: "Close to Nai Harn and the Rawai community",
        body: "Located in Rawai, Cosmic Temple is part of the slower South Phuket rhythm near Nai Harn, Chalong, Kata, and nearby local neighborhoods.",
      },
    ],
  },
  {
    slug: "phuket-local-guide",
    eyebrow: "Phuket Local Guide",
    title: "A slower, warmer way to experience Phuket.",
    description:
      "A local guide page for visitors looking for calm spaces, thoughtful recommendations, and a more grounded atmosphere in South Phuket.",
    sections: [
      {
        title: "Hospitality before noise",
        body: "Cosmic Temple is moving toward a hospitality-style local brand: warm lighting, conversation, coffee, plants, music, and a calmer pace.",
      },
      {
        title: "Built around trust and feeling",
        body: "The strongest memory people take from a place is often how it made them feel. That is the center of the Cosmic Temple experience.",
      },
    ],
  },
  {
    slug: "nai-harn",
    eyebrow: "Near Nai Harn",
    title: "A warm local space near Nai Harn.",
    description:
      "For people staying around Nai Harn, Rawai, and South Phuket, Cosmic Temple offers a calm local atmosphere and friendly guidance.",
    sections: [
      {
        title: "Easy to visit from Nai Harn",
        body: "Cosmic Temple is located in Rawai, close to the beaches, cafes, villas, and neighborhoods that make South Phuket feel slower and more relaxed.",
      },
      {
        title: "A place to slow down",
        body: "The space is intentionally built around calm energy, local connection, and a feeling of being welcomed rather than rushed.",
      },
    ],
  },
  {
    slug: "guides",
    eyebrow: "Guides",
    title: "Guides for a calmer Phuket experience.",
    description:
      "Helpful local guides, simple explanations, and story-led pages from Cosmic Temple in Rawai.",
    sections: [
      {
        title: "Start with clarity",
        body: "The best local guides help people feel more comfortable, more informed, and less overwhelmed.",
      },
      {
        title: "Built for visitors and locals",
        body: "These pages will grow into a library of useful local context, customer stories, and atmosphere-led guides from Rawai and South Phuket.",
      },
    ],
  },
  {
    slug: "journal",
    eyebrow: "Journal",
    title: "Slow moments from Rawai.",
    description:
      "A home for short stories, atmosphere notes, coffee moments, plant rituals, customer reflections, and the feeling of Cosmic Temple.",
    sections: [
      {
        title: "Documenting the feeling",
        body: "The journal is not just a blog. It is a place to document the small moments that make Cosmic Temple memorable: the light, the music, the people, and the pace.",
      },
      {
        title: "From social moment to indexed story",
        body: "Over time, photos, reels, reviews, and customer stories can become searchable pages that strengthen local trust and brand memory.",
      },
    ],
  },
  {
    slug: "stories",
    eyebrow: "Stories",
    title: "Customer stories and local memories.",
    description:
      "A story archive for the real moments, reviews, and conversations that shape the Cosmic Temple experience.",
    sections: [
      {
        title: "Why stories matter",
        body: "People remember honest moments. A warm conversation, a helpful recommendation, or a customer returning happy can communicate more than a sales page ever could.",
      },
      {
        title: "A living local archive",
        body: "This section will grow into a record of the real atmosphere, people, and moments that make Cosmic Temple feel different.",
      },
    ],
  },
];

export function getLocalPage(slug: string) {
  return localPages.find((page) => page.slug === slug);
}
