import AtmosphereSection from "@/components/AtmosphereSection";
import Footer from "@/components/Footer";
import GuidanceSection from "@/components/GuidanceSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileDock from "@/components/MobileDock";
import ReviewsSection from "@/components/ReviewsSection";
import TrustSection from "@/components/TrustSection";
import WhyPeopleComeBack from "@/components/WhyPeopleComeBack";
import Section from "@/components/ui/Section";
import AtmosphereGallery from "@/components/AtmosphereGallery";
import SlowPhuketSection from "@/components/SlowPhuketSection";
import FadeIn from "@/components/motion/FadeIn";
import LocalGuidesSection from "@/components/LocalGuidesSection";
import JournalSection from "@/components/JournalSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0c0b] text-white">
      <Header />

      <Hero />

      <AtmosphereSection />

      <FadeIn>
        <AtmosphereGallery />
      </FadeIn>
    
      <FadeIn>
        <SlowPhuketSection />
      </FadeIn>

      <WhyPeopleComeBack />

      <GuidanceSection />

      <TrustSection />

      <ReviewsSection />

      <JournalSection />

      <FAQSection />

      <LocalGuidesSection />

      <Footer />

      <MobileDock />
    </main>
  );
}
