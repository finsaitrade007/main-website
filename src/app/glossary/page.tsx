import type { Metadata } from "next";
import GlossaryHeroSection from "@/components/GlossaryHeroSection";
import GlossarySection from "@/components/GlossarySection";
import PageJsonLd from "@/components/PageJsonLd";
import { cmsPageMetadata, PAGE_SEO, resolveSeoText } from "@/lib/page-seo";
import { getGlossaryPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getGlossaryPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.glossary);
}

export default async function GlossaryPage() {
  const data = await getGlossaryPage();
  const seo = resolveSeoText(data?.seo, PAGE_SEO.glossary);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.glossary.path}
        title={seo.title}
        description={seo.description}
      />
      <GlossaryHeroSection />
      <GlossarySection />
    </>
  );
}
