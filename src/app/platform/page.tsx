import type { Metadata } from "next";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import ServicesPlatformsSection from "@/components/ServicesPlatformsSection";
import StepsSection from "@/components/StepsSection";
import FAQSection from "@/components/FAQSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolvePageFaqs,
  resolveSeoText,
} from "@/lib/page-seo";
import { getPlatformPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPlatformPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.platform);
}

export default async function PlatformPage() {
  const [data, faqs] = await Promise.all([
    getPlatformPage(),
    resolvePageFaqs("platform"),
  ]);
  const seo = resolveSeoText(data?.seo, PAGE_SEO.platform);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.platform.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <ServicesHeroSection />
      <ServicesPlatformsSection />
      <StepsSection />
      <FAQSection section="platform" faqs={faqs} />
    </>
  );
}
