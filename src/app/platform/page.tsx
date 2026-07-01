import type { Metadata } from "next";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import ServicesPlatformsSection from "@/components/ServicesPlatformsSection";
import StepsSection from "@/components/StepsSection";
import FAQSection from "@/components/FAQSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolveSeoText,
} from "@/lib/page-seo";
import { getServicesPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicesPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.platform);
}

export default async function PlatformPage() {
  const data = await getServicesPage();
  const seo = resolveSeoText(data?.seo, PAGE_SEO.platform);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.platform.path}
        title={seo.title}
        description={seo.description}
        faqSection="services"
      />
      <ServicesHeroSection />
      <ServicesPlatformsSection />
      <StepsSection />
      <FAQSection section="services" />
    </>
  );
}
