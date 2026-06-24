import type { Metadata } from "next";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import ServicesPlatformsSection from "@/components/ServicesPlatformsSection";
import StepsSection from "@/components/StepsSection";
import FAQSection from "@/components/FAQSection";
import { getServicesPage, seoToMetadata } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicesPage();
  return seoToMetadata(data?.seo, {
    title: "Trading Services | Finsai Trade — MT5, Social & Mobile",
    description:
      "Three trading environments built for every level. Trade with MT5, copy top performers via social trading, or stay connected with our upcoming mobile app.",
  });
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesPlatformsSection />
      <StepsSection />
      <FAQSection section="services" />
    </>
  );
}
