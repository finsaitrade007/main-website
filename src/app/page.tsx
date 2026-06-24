import type { Metadata } from "next";
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
import JsonLd from "@/components/JsonLd";
import { FAQ_FALLBACKS } from "@/lib/faq-fallbacks";
import { buildHomepageStructuredData } from "@/lib/homepage-structured-data";
import { SITE_URL } from "@/lib/site";
import { getFaqsBySection, getHomepage, seoToMetadata } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepage();
  return seoToMetadata(data?.seo, {
    title: "Finsai Trade | Multi-Asset Online Trading Platform",
    description:
      "Trade forex, stocks, cryptocurrencies, commodities, indices, and CFDs through a professional multi-asset trading platform powered by MetaTrader 5 (MT5).",
    url: `${SITE_URL}/`,
  });
}

export default async function HomePage() {
  const [home, homepageFaqs] = await Promise.all([
    getHomepage(),
    getFaqsBySection("homepage"),
  ]);
  const faqs =
    homepageFaqs && homepageFaqs.length > 0
      ? homepageFaqs.map((f) => ({ question: f.question, answer: f.answer }))
      : FAQ_FALLBACKS.homepage;

  return (
    <>
      <JsonLd data={buildHomepageStructuredData(faqs)} />
      <HeroSection />
      <TickerBar />
      <FeaturesSection />
      <MarketsSection />
      <PlatformsSection />
      <AccountTypesSection
        badge={home?.accountsBadge}
        title={home?.accountsTitle}
        description={home?.accountsDescription}
      />
      <StepsSection />
      <AwardsSection />
      <TestimonialsSection />
      <FAQSection section="homepage" />
      <CTASection />
    </>
  );
}
