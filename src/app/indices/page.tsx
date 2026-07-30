import type { Metadata } from "next";
import IndicesHeroSection from "@/components/IndicesHeroSection";
import IndicesFeaturesSection from "@/components/IndicesFeaturesSection";
import IndicesExploreSection from "@/components/IndicesExploreSection";
import IndicesCTASection from "@/components/IndicesCTASection";
import FAQSection from "@/components/FAQSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolvePageFaqs,
  resolveSeoText,
} from "@/lib/page-seo";

export async function generateMetadata(): Promise<Metadata> {
  return cmsPageMetadata(null, PAGE_SEO.indices);
}

export default async function IndicesPage() {
  const faqs = await resolvePageFaqs("indices");
  const seo = resolveSeoText(null, PAGE_SEO.indices);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.indices.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <IndicesHeroSection />
      <IndicesFeaturesSection />
      <IndicesExploreSection />
      <IndicesCTASection />
      <FAQSection section="indices" faqs={faqs} />
    </>
  );
}
