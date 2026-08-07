import type { Metadata } from "next";
import WordstockHeroSection from "@/components/WordstockHeroSection";
import WordstockFeaturesSection from "@/components/WordstockFeaturesSection";
import WordstockRegulatorySection from "@/components/WordstockRegulatorySection";
import FAQSection from "@/components/FAQSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolvePageFaqs,
  resolveSeoText,
} from "@/lib/page-seo";

export async function generateMetadata(): Promise<Metadata> {
  return cmsPageMetadata(null, PAGE_SEO.stocks);
}

export default async function WordstockPage() {
  const faqs = await resolvePageFaqs("stocks");
  const seo = resolveSeoText(null, PAGE_SEO.stocks);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.stocks.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <WordstockHeroSection />
      <WordstockFeaturesSection />
      <FAQSection section="stocks" faqs={faqs} />
      <WordstockRegulatorySection />
    </>
  );
}
