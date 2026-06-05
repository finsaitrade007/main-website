import type { Metadata } from "next";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutRecognitionSection from "@/components/AboutRecognitionSection";
import AboutBuiltByTradersSection from "@/components/AboutBuiltByTradersSection";
import AboutFinancialGrowthSection from "@/components/AboutFinancialGrowthSection";
import AboutCompetitiveEdgeSection from "@/components/AboutCompetitiveEdgeSection";
import AboutCTASection from "@/components/AboutCTASection";
import { getAboutPage, seoToMetadata } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutPage();
  return seoToMetadata(data?.seo, {
    title: "About Finsai Trade — Multi-Asset Broker & Trading Ecosystem",
    description:
      "Finsai Trade is a multi-asset broker built by traders. Discover our mission, vision, awards and the team driving financial growth in the digital era.",
  });
}

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutRecognitionSection />
      <AboutBuiltByTradersSection />
      <AboutFinancialGrowthSection />
      <AboutCompetitiveEdgeSection />
      <AboutCTASection />
    </>
  );
}
