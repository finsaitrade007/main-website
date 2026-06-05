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
import { getHomepage, seoToMetadata } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepage();
  return seoToMetadata(data?.seo, {
    title: "Finsai Trade — Trade Global Markets Without Limits",
    description:
      "The powerful multi-asset trading platform for modern traders. Trade Forex, Crypto, Stocks, Indices, and Metals with tight spreads, up to 500x leverage, and 24/7 support.",
  });
}

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
