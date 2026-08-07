import type { Metadata } from "next";
import PageJsonLd from "@/components/PageJsonLd";
import RegulationsHeroSection from "@/components/RegulationsHeroSection";
import RegulationsCommitmentSection from "@/components/RegulationsCommitmentSection";
import RegulationsSafeguardsSection from "@/components/RegulationsSafeguardsSection";
import RegulationsPillarsSection from "@/components/RegulationsPillarsSection";
import RegulationsCTASection from "@/components/RegulationsCTASection";
import { cmsPageMetadata, PAGE_SEO, resolveSeoText } from "@/lib/page-seo";
import { getRegulationsPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getRegulationsPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.regulations);
}

export default async function RegulationsPage() {
  const data = await getRegulationsPage();
  const seo = resolveSeoText(data?.seo, PAGE_SEO.regulations);

  return (
    <>
      {/* No `faqs` prop: the 2026 design renders no visible FAQ block, so no
          FAQPage node is emitted. Organization / FinancialService nodes —
          which carry the FSC licence details — are still included. */}
      <PageJsonLd
        variant="regulations"
        title={seo.title}
        description={seo.description}
      />
      <RegulationsHeroSection />
      <RegulationsCommitmentSection />
      <RegulationsSafeguardsSection />
      <RegulationsPillarsSection />
      <RegulationsCTASection />
    </>
  );
}
