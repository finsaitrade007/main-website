import type { Metadata } from "next";
import SocialTradingHeroSection from "@/components/SocialTradingHeroSection";
import SocialTradingFeaturesSection from "@/components/SocialTradingFeaturesSection";
import SocialTradingHowItWorksSection from "@/components/SocialTradingHowItWorksSection";
import SocialTradingLeaderboardSection from "@/components/SocialTradingLeaderboardSection";
import SocialTradingJourneySection from "@/components/SocialTradingJourneySection";
import FAQSection from "@/components/FAQSection";
import SocialTradingCTASection from "@/components/SocialTradingCTASection";

export const metadata: Metadata = {
  title: "Social Trading — Copy Top Traders | Finsai Trade",
  description: "Follow experienced traders or become a strategy provider. Copy trades live, share your strategy, and earn rewards with Finsai Trade Social Trading.",
};

export default function SocialTradingPage() {
  return (
    <>
      <SocialTradingHeroSection />
      <SocialTradingFeaturesSection />
      <SocialTradingHowItWorksSection />
      <SocialTradingLeaderboardSection />
      <SocialTradingJourneySection />
      <FAQSection section="social-trading" />
      <SocialTradingCTASection />
    </>
  );
}
