import type { Metadata } from "next";
import Mt5HeroSection from "@/components/Mt5HeroSection";
import Mt5OverviewSection from "@/components/Mt5OverviewSection";
import Mt5FeaturesSection from "@/components/Mt5FeaturesSection";
import Mt5WebtraderSection from "@/components/Mt5WebtraderSection";
import FAQSection from "@/components/FAQSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolvePageFaqs,
  resolveSeoText,
} from "@/lib/page-seo";
import { getMt5Page } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMt5Page();
  return cmsPageMetadata(data?.seo, PAGE_SEO.mt5);
}

export default async function Mt5Page() {
  const [data, faqs] = await Promise.all([
    getMt5Page(),
    resolvePageFaqs("mt5"),
  ]);
  const seo = resolveSeoText(data?.seo, PAGE_SEO.mt5);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.mt5.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <Mt5HeroSection />
      <Mt5OverviewSection />
      <Mt5FeaturesSection />
      <Mt5WebtraderSection />
      <FAQSection section="mt5" faqs={faqs} />
    </>
  );
}
