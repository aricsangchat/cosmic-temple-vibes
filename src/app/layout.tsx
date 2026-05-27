import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { localBusinessSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmictemplevibes.com"),

  title: {
    default: "Cannabis Dispensary in Rawai Phuket | Cosmic Temple",
    template: "%s | Cosmic Temple",
  },

  description:
    "Cosmic Temple is a warm licensed cannabis dispensary in Rawai, Phuket offering quality cannabis, honest staff recommendations, and local delivery in Phuket.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Cosmic Temple Phuket — Come Home to Quality",
    description:
      "Quality cannabis, honest guidance, and a warm dispensary experience in Rawai, Phuket.",
    url: "https://cosmictemplevibes.com",
    siteName: "Cosmic Temple",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/images/cosmic-temple-dispensary-rawai-phuket.jpg",
        width: 1200,
        height: 630,
        alt: "Cosmic Temple Phuket",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cosmic Temple Phuket — Come Home to Quality",
    description:
      "Quality cannabis, honest guidance, and a warm dispensary experience in Rawai, Phuket.",
    images: ["/images/cosmic-temple-dispensary-rawai-phuket.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/images/favicon.png",
    apple: "/images/apple-touch-icon-iphone-60x60.png",
  },
};

export const viewport = {
  themeColor: "#E7DED3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0d0c0b] text-white">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DZR5BV2ZCJ"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
