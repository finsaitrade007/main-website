import AboutHeroSection from "@/components/AboutHeroSection";
import AboutRecognitionSection from "@/components/AboutRecognitionSection";
import AboutBuiltByTradersSection from "@/components/AboutBuiltByTradersSection";
import AboutFinancialGrowthSection from "@/components/AboutFinancialGrowthSection";
import AboutCompetitiveEdgeSection from "@/components/AboutCompetitiveEdgeSection";
import AboutCTASection from "@/components/AboutCTASection";

export const metadata = {
  title: "About Us | Finsai Trade",
  description:
    "Finsai Trade is a multi-asset broker built by traders. Discover our mission, vision, awards and the team driving financial growth in the digital era.",
};

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
