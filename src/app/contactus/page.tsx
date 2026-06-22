import type { Metadata } from "next";
import ContactUsHeroSection from "@/components/ContactUsHeroSection";
import ContactSupportChannelsSection from "@/components/ContactSupportChannelsSection";
import ContactSupportFormSection from "@/components/ContactSupportFormSection";
import { getContactusPage, seoToMetadata } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactusPage();
  return seoToMetadata(data?.seo, {
    title: "Contact Finsai Trade — Global Support Across Fintech",
    description:
      "Get in touch with the Finsai Trade team for support, partnerships, and inquiries.",
  });
}

export default async function ContactUsPage() {
  const data = await getContactusPage();
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
      <ContactUsHeroSection />
      <ContactSupportChannelsSection />
      <ContactSupportFormSection
        supportTitle={data?.supportTitle}
        supportDescription={data?.supportDescription}
        benefits={benefits}
        submitLabel={data?.formSubmitLabel}
      />
    </>
  );
}
