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
import { getStocksPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getStocksPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.stocks);
}

export default async function WordstockPage() {
  const [data, faqs] = await Promise.all([
    getStocksPage(),
    resolvePageFaqs("stocks"),
  ]);
  const seo = resolveSeoText(data?.seo, PAGE_SEO.stocks);

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
