import type { Metadata } from "next";
import ContactUsHeroSection from "@/components/ContactUsHeroSection";
import ContactSupportChannelsSection from "@/components/ContactSupportChannelsSection";
import ContactGlobeSection from "@/components/ContactGlobeSection";
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

export default function ContactUsPage() {
  return (
    <>
      <ContactUsHeroSection />
      <ContactSupportChannelsSection />
      <ContactGlobeSection />
      <ContactSupportFormSection />
    </>
  );
}
