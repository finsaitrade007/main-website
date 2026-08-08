import type { Metadata } from "next";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutRecognitionSection from "@/components/AboutRecognitionSection";
import AboutBuiltByTradersSection from "@/components/AboutBuiltByTradersSection";
import AboutFinancialGrowthSection from "@/components/AboutFinancialGrowthSection";
import AboutCompetitiveEdgeSection from "@/components/AboutCompetitiveEdgeSection";
import AboutCTASection from "@/components/AboutCTASection";
import FAQSection from "@/components/FAQSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolvePageFaqs,
  resolveSeoText,
} from "@/lib/page-seo";
import { getAboutPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.about);
}

export default async function AboutPage() {
  const [data, faqs] = await Promise.all([
    getAboutPage(),
    resolvePageFaqs("about"),
  ]);
  const seo = resolveSeoText(data?.seo, PAGE_SEO.about);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.about.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <AboutHeroSection />
      <AboutRecognitionSection />
      <AboutBuiltByTradersSection />
      <AboutFinancialGrowthSection />
      <AboutCompetitiveEdgeSection />
      <FAQSection section="about" faqs={faqs} />
      <AboutCTASection />
    </>
  );
}
