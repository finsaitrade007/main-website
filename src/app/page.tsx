import type { Metadata } from "next";
import TickerBar from "@/components/TickerBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MarketsSection from "@/components/MarketsSection";
import PlatformsSection from "@/components/PlatformsSection";
import AccountTypesSection from "@/components/AccountTypesSection";
import StepsSection from "@/components/StepsSection";
import AwardsSection from "@/components/AwardsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolvePageFaqs,
  resolveSeoText,
} from "@/lib/page-seo";
import { getHomepage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.home);
}

export default async function HomePage() {
  const [home, faqs] = await Promise.all([
    getHomepage(),
    resolvePageFaqs("homepage"),
  ]);
  const seo = resolveSeoText(home?.seo, PAGE_SEO.home);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.home.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <HeroSection />
      <TickerBar />
      <FeaturesSection />
      <MarketsSection />
      <PlatformsSection />
      <AccountTypesSection
        badge={home?.accountsBadge}
        title={home?.accountsTitle}
        description={home?.accountsDescription}
      />
      <StepsSection />
      <AwardsSection />
      <TestimonialsSection />
      <FAQSection section="homepage" />
      <CTASection />
    </>
  );
}
