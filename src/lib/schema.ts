import { siteConfig } from "@/data/site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: "$$",
    image: `${siteConfig.url}${siteConfig.images.hero}`,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "30, 63 Soi Saiyuan, Rawai, Amphoe Mueang Phuket, Phuket 83130, Thailand",
      addressLocality: "Rawai",
      addressRegion: "Phuket",
      postalCode: "83130",
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 7.789221862309384,
      longitude: 98.31802403530574,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "14:00",
        closes: "22:00",
      },
    ],
    areaServed: ["Rawai", "Nai Harn", "Chalong", "Kata", "Phuket"],
    hasMap: siteConfig.links.googleMaps,
    sameAs: [siteConfig.links.instagram, siteConfig.links.facebook],
  };
}
