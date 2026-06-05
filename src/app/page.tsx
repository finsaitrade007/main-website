import TickerBar from "@/components/TickerBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MarketsSection from "@/components/MarketsSection";
import PlatformsSection from "@/components/PlatformsSection";
import AccountTypesSection from "@/components/AccountTypesSection";
import StepsSection from "@/components/StepsSection";
import AwardsSection from "@/components/AwardsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerBar />
      <FeaturesSection />
      <MarketsSection />
      <PlatformsSection />
      <AccountTypesSection />
      <StepsSection />
      <AwardsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
