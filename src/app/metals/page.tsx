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

export async function generateMetadata(): Promise<Metadata> {
  return cmsPageMetadata(null, PAGE_SEO.metals);
}

export default async function MetalsPage() {
  const faqs = await resolvePageFaqs("metals");
  const seo = resolveSeoText(null, PAGE_SEO.metals);

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
