import type { Metadata } from "next";
import ForexHeroSection from "@/components/ForexHeroSection";
import ForexFeaturesSection from "@/components/ForexFeaturesSection";
import ForexExploreSection from "@/components/ForexExploreSection";
import ForexCTASection from "@/components/ForexCTASection";
import FAQSection from "@/components/FAQSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolvePageFaqs,
  resolveSeoText,
} from "@/lib/page-seo";

export async function generateMetadata(): Promise<Metadata> {
  return cmsPageMetadata(null, PAGE_SEO.forex);
}

export default async function ForexPage() {
  const faqs = await resolvePageFaqs("forex");
  const seo = resolveSeoText(null, PAGE_SEO.forex);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.forex.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <ForexHeroSection />
      <ForexFeaturesSection />
      <ForexExploreSection />
      <ForexCTASection />
      <FAQSection section="forex" faqs={faqs} />
    </>
  );
}
