import AtmosphereSection from "@/components/AtmosphereSection";
import Footer from "@/components/Footer";
import GuidanceSection from "@/components/GuidanceSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileDock from "@/components/MobileDock";
import ReviewsSection from "@/components/ReviewsSection";
import TrustSection from "@/components/TrustSection";
import WhyPeopleComeBack from "@/components/WhyPeopleComeBack";
import FadeIn from "@/components/motion/FadeIn";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <Hero />

      <FadeIn>
        <AtmosphereSection />
      </FadeIn>

      <FadeIn delay={0.08}>
        <WhyPeopleComeBack />
      </FadeIn>

      <FadeIn delay={0.08}>
        <GuidanceSection />
      </FadeIn>

      <FadeIn delay={0.08}>
        <TrustSection />
      </FadeIn>

      <FadeIn delay={0.08}>
        <ReviewsSection />
      </FadeIn>

      <FadeIn delay={0.08}>
        <Section id="location" className="py-24">
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
        </Section>
      </FadeIn>

      <Footer />

      <MobileDock />
    </main>
  );
}
