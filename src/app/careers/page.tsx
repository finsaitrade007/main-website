import type { Metadata } from "next";
import CareersHeroSection from "@/components/CareersHeroSection";
import CareersWorkspaceFormSection from "@/components/CareersWorkspaceFormSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolveSeoText,
} from "@/lib/page-seo";
import { getCareersPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getCareersPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.careers);
}

export default async function CareersPage() {
  const data = await getCareersPage();
  const seo = resolveSeoText(data?.seo, PAGE_SEO.careers);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.careers.path}
        title={seo.title}
        description={seo.description}
      />
      <CareersHeroSection />
      <CareersWorkspaceFormSection />
    </>
  );
}
