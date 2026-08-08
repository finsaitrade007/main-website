import type { Metadata } from "next";
import CryptoHeroSection from "@/components/CryptoHeroSection";
import CryptoPerformanceSection from "@/components/CryptoPerformanceSection";
import CryptoFeaturesSection from "@/components/CryptoFeaturesSection";
import CryptoExploreSection from "@/components/CryptoExploreSection";
import CryptoCTASection from "@/components/CryptoCTASection";
import FAQSection from "@/components/FAQSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolvePageFaqs,
  resolveSeoText,
} from "@/lib/page-seo";
import { getCryptoPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getCryptoPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.crypto);
}

export default async function CryptoPage() {
  const [data, faqs] = await Promise.all([
    getCryptoPage(),
    resolvePageFaqs("crypto"),
  ]);
  const seo = resolveSeoText(data?.seo, PAGE_SEO.crypto);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.crypto.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <CryptoHeroSection />
      <CryptoPerformanceSection />
      <CryptoFeaturesSection />
      <CryptoExploreSection />
      <CryptoCTASection />
      <FAQSection section="crypto" faqs={faqs} />
    </>
  );
}
