import type { Metadata } from "next";
import IBHeroSection from "@/components/IBHeroSection";
import IBWhySection from "@/components/IBWhySection";
import IBCalculatorSection from "@/components/IBCalculatorSection";
import IBStatsSection from "@/components/IBStatsSection";
import IBHowToSection from "@/components/IBHowToSection";
import FAQSection from "@/components/FAQSection";
import IBCTASection from "@/components/IBCTASection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolvePageFaqs,
  resolveSeoText,
} from "@/lib/page-seo";
import { getPartnershipsPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPartnershipsPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.partnerships);
}

export default async function PartnershipsPage() {
  const [data, faqs] = await Promise.all([
    getPartnershipsPage(),
    resolvePageFaqs("partnerships"),
  ]);
  const seo = resolveSeoText(data?.seo, PAGE_SEO.partnerships);

  const calculatorTitle =
    data?.calculatorTitle ?? "Calculate Your Earning Potential";
  const calculatorDescription =
    data?.calculatorDescription ??
    "Adjust referrals and trade volume to estimate your monthly earnings instantly.";

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.partnerships.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <IBHeroSection />
      <IBWhySection />
      <IBCalculatorSection
        title={calculatorTitle}
        description={calculatorDescription}
      />
      <IBStatsSection />
      <IBHowToSection />
      <FAQSection section="partnerships" faqs={faqs} />
      <IBCTASection />
    </>
  );
}
