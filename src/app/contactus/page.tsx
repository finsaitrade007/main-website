import type { Metadata } from "next";
import ContactUsHeroSection from "@/components/ContactUsHeroSection";
import ContactSupportChannelsSection from "@/components/ContactSupportChannelsSection";
import ContactSupportFormSection from "@/components/ContactSupportFormSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolveSeoText,
} from "@/lib/page-seo";
import { getContactusPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactusPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.contact);
}

export default async function ContactUsPage() {
  const data = await getContactusPage();
  const seo = resolveSeoText(data?.seo, PAGE_SEO.contact);
  const benefitIcons: Array<"quick" | "transparency" | "dedicated" | "multilang"> = [
    "quick",
    "transparency",
    "dedicated",
    "multilang",
  ];
  const benefits = data?.supportBenefits?.map((b, i) => ({
    icon: benefitIcons[i] ?? "quick",
    title: b.title,
    description: b.description ?? undefined,
  }));

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.contact.path}
        title={seo.title}
        description={seo.description}
      />
      <ContactUsHeroSection />
      <ContactSupportChannelsSection />
      <ContactSupportFormSection
        supportTitle={data?.supportTitle}
        supportDescription={data?.supportDescription}
        benefits={benefits}
        submitLabel={data?.formSubmitLabel}
        termsText={data?.formTermsText}
      />
    </>
  );
}
