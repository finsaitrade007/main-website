import type { Metadata } from "next";
import SocialTradingHeroSection from "@/components/SocialTradingHeroSection";
import SocialTradingFeaturesSection from "@/components/SocialTradingFeaturesSection";
import SocialTradingHowItWorksSection from "@/components/SocialTradingHowItWorksSection";
import SocialTradingLeaderboardSection from "@/components/SocialTradingLeaderboardSection";
import SocialTradingJourneySection from "@/components/SocialTradingJourneySection";
import FAQSection from "@/components/FAQSection";
import SocialTradingCTASection from "@/components/SocialTradingCTASection";
import PageJsonLd from "@/components/PageJsonLd";
import { cmsPageMetadata, PAGE_SEO, resolvePageFaqs, resolveSeoText } from "@/lib/page-seo";
import { getSocialTradingPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSocialTradingPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.socialTrading);
}

export default async function SocialTradingPage() {
  const [data, faqs] = await Promise.all([
    getSocialTradingPage(),
    resolvePageFaqs("social-trading"),
  ]);
  const seo = resolveSeoText(data?.seo, PAGE_SEO.socialTrading);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.socialTrading.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <SocialTradingHeroSection />
      <SocialTradingFeaturesSection />
      <SocialTradingHowItWorksSection />
      <SocialTradingLeaderboardSection />
      <SocialTradingJourneySection />
      <FAQSection section="social-trading" faqs={faqs} />
      <SocialTradingCTASection />
    </>
  );
}
