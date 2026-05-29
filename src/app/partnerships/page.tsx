import IBHeroSection from "@/components/IBHeroSection";
import IBWhySection from "@/components/IBWhySection";
import IBCalculatorSection from "@/components/IBCalculatorSection";
import IBStatsSection from "@/components/IBStatsSection";
import IBHowToSection from "@/components/IBHowToSection";
import IBMarketingSection from "@/components/IBMarketingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { getPartnershipsPage } from "@/lib/strapi";

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
      <IBMarketingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
