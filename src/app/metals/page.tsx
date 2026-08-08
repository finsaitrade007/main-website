import type { Metadata } from "next";
import MetalsHeroSection from "@/components/MetalsHeroSection";
import MetalsFeaturesSection from "@/components/MetalsFeaturesSection";
import MetalsRegulatorySection from "@/components/MetalsRegulatorySection";
import FAQSection from "@/components/FAQSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolvePageFaqs,
  resolveSeoText,
} from "@/lib/page-seo";
import { getMetalsPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMetalsPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.metals);
}

export default async function MetalsPage() {
  const [data, faqs] = await Promise.all([
    getMetalsPage(),
    resolvePageFaqs("metals"),
  ]);
  const seo = resolveSeoText(data?.seo, PAGE_SEO.metals);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.metals.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <MetalsHeroSection />
      <MetalsFeaturesSection />
      <FAQSection section="metals" faqs={faqs} />
      <MetalsRegulatorySection />
    </>
  );
}
