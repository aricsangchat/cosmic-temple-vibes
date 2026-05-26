import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ReviewsSection from "@/components/ReviewsSection";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />

      <TrustSection />

      <ReviewsSection />

      <section className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Local Experience
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Flexible homepage architecture for future content.
          </h2>

          <p className="text-lg leading-8 text-zinc-300">
            This section can later hold maps, photography, business information, journal content, or future landing page modules.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
