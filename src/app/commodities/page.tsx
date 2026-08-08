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
import { getCommoditiesPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getCommoditiesPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.commodities);
}

export default async function CommoditiesPage() {
  const [data, faqs] = await Promise.all([
    getCommoditiesPage(),
    resolvePageFaqs("commodities"),
  ]);
  const seo = resolveSeoText(data?.seo, PAGE_SEO.commodities);

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
