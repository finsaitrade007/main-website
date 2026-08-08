import type { Metadata } from "next";
import ToolsHeroSection from "@/components/ToolsHeroSection";
import ToolsInsightsSection from "@/components/ToolsInsightsSection";
import ToolsCalculatorsSection from "@/components/ToolsCalculatorsSection";
import ToolsInstrumentsSection from "@/components/ToolsInstrumentsSection";
import ToolsWorkflowSection from "@/components/ToolsWorkflowSection";
import ToolsCtaSection from "@/components/ToolsCtaSection";
import FAQSection from "@/components/FAQSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolvePageFaqs,
  resolveSeoText,
} from "@/lib/page-seo";
import { getToolsPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getToolsPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.tools);
}

export default async function ToolsPage() {
  const [data, faqs] = await Promise.all([
    getToolsPage(),
    resolvePageFaqs("tools"),
  ]);
  const seo = resolveSeoText(data?.seo, PAGE_SEO.tools);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.tools.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <ToolsHeroSection />
      <ToolsInsightsSection />
      <ToolsCalculatorsSection />
      <ToolsInstrumentsSection />
      <ToolsWorkflowSection />
      <FAQSection section="tools" faqs={faqs} />
      <ToolsCtaSection />
    </>
  );
}
