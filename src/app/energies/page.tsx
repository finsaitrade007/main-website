import type { Metadata } from "next";
import EnergiesHeroSection from "@/components/EnergiesHeroSection";
import EnergiesFeaturesSection from "@/components/EnergiesFeaturesSection";
import EnergiesExploreSection from "@/components/EnergiesExploreSection";
import EnergiesCTASection from "@/components/EnergiesCTASection";
import FAQSection from "@/components/FAQSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolvePageFaqs,
  resolveSeoText,
} from "@/lib/page-seo";

export async function generateMetadata(): Promise<Metadata> {
  return cmsPageMetadata(null, PAGE_SEO.energies);
}

export default async function EnergiesPage() {
  const faqs = await resolvePageFaqs("energies");
  const seo = resolveSeoText(null, PAGE_SEO.energies);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.energies.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <EnergiesHeroSection />
      <EnergiesFeaturesSection />
      <EnergiesExploreSection />
      <EnergiesCTASection />
      <FAQSection section="energies" faqs={faqs} />
    </>
  );
}
