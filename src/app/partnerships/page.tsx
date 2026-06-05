import type { Metadata } from "next";
import IBHeroSection from "@/components/IBHeroSection";
import IBWhySection from "@/components/IBWhySection";
import IBCalculatorSection from "@/components/IBCalculatorSection";
import IBStatsSection from "@/components/IBStatsSection";
import IBHowToSection from "@/components/IBHowToSection";
import FAQSection from "@/components/FAQSection";
import IBCTASection from "@/components/IBCTASection";
import { getPartnershipsPage, seoToMetadata } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPartnershipsPage();
  return seoToMetadata(data?.seo, {
    title: "IB & Affiliate Partnerships | Finsai Trade",
    description:
      "Earn industry-leading commissions with the Finsai Trade IB program. Multi-tier rebates, real-time reports, and fast payouts for partners worldwide.",
  });
}

export default async function PartnershipsPage() {
  const data = await getPartnershipsPage();

  const calculatorTitle = data?.calculatorTitle ?? "Unlock Your Earning Potential";
  const calculatorDescription =
    data?.calculatorDescription ?? "Specify the expected values of your partner network";

  return (
    <>
      <IBHeroSection />
      <IBWhySection />
      <IBCalculatorSection title={calculatorTitle} description={calculatorDescription} />
      <IBStatsSection />
      <IBHowToSection />
      <FAQSection />
      <IBCTASection />
    </>
  );
}
