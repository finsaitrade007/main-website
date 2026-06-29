import type { Metadata } from "next";
import GlossaryHeroSection from "@/components/GlossaryHeroSection";
import GlossarySection from "@/components/GlossarySection";
import PageJsonLd from "@/components/PageJsonLd";
import { cmsPageMetadata, PAGE_SEO } from "@/lib/page-seo";

export const metadata: Metadata = cmsPageMetadata(undefined, PAGE_SEO.glossary);

export default async function GlossaryPage() {
  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.glossary.path}
        title={PAGE_SEO.glossary.title}
        description={PAGE_SEO.glossary.description}
      />
      <GlossaryHeroSection />
      <GlossarySection />
    </>
  );
}
