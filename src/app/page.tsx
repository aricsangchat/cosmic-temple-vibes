import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReviewsSection from "@/components/ReviewsSection";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <Hero />

      <TrustSection />

      <ReviewsSection />

      <section
        id="location"
        className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Rawai · Phuket
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            A calm local experience in South Phuket.
          </h2>

          <p className="text-lg leading-8 text-zinc-300">
            The new Next.js foundation preserves the original emotional positioning while preparing the site for long-term SEO, journal content, local pages, and scalable architecture.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
