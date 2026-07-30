import type { Metadata } from "next";
import CommoditiesHeroSection from "@/components/CommoditiesHeroSection";
import CommoditiesFeaturesSection from "@/components/CommoditiesFeaturesSection";
import CommoditiesExploreSection from "@/components/CommoditiesExploreSection";
import CommoditiesCTASection from "@/components/CommoditiesCTASection";
import FAQSection from "@/components/FAQSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolvePageFaqs,
  resolveSeoText,
} from "@/lib/page-seo";

export async function generateMetadata(): Promise<Metadata> {
  return cmsPageMetadata(null, PAGE_SEO.commodities);
}

export default async function CommoditiesPage() {
  const faqs = await resolvePageFaqs("commodities");
  const seo = resolveSeoText(null, PAGE_SEO.commodities);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.commodities.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <CommoditiesHeroSection />
      <CommoditiesFeaturesSection />
      <CommoditiesExploreSection />
      <CommoditiesCTASection />
      <FAQSection section="commodities" faqs={faqs} />
    </>
  );
}
