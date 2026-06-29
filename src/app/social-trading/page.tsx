import type { Metadata } from "next";
import SocialTradingHeroSection from "@/components/SocialTradingHeroSection";
import SocialTradingFeaturesSection from "@/components/SocialTradingFeaturesSection";
import SocialTradingHowItWorksSection from "@/components/SocialTradingHowItWorksSection";
import SocialTradingLeaderboardSection from "@/components/SocialTradingLeaderboardSection";
import SocialTradingJourneySection from "@/components/SocialTradingJourneySection";
import FAQSection from "@/components/FAQSection";
import SocialTradingCTASection from "@/components/SocialTradingCTASection";
import PageJsonLd from "@/components/PageJsonLd";
import { cmsPageMetadata, PAGE_SEO } from "@/lib/page-seo";

export const metadata: Metadata = cmsPageMetadata(undefined, PAGE_SEO.socialTrading);

export default async function SocialTradingPage() {
  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.socialTrading.path}
        title={PAGE_SEO.socialTrading.title}
        description={PAGE_SEO.socialTrading.description}
        faqSection="social-trading"
      />
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
