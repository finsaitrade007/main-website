import type { Metadata } from "next";
import PaymentsHeroSection from "@/components/PaymentsHeroSection";
import PaymentsTrustBar from "@/components/PaymentsTrustBar";
import PaymentsMethodsSection from "@/components/PaymentsMethodsSection";
import PaymentsFlowSection from "@/components/PaymentsFlowSection";
import PaymentsCTASection from "@/components/PaymentsCTASection";
import FAQSection from "@/components/FAQSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolveSeoText,
} from "@/lib/page-seo";
import { getPaymentsPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPaymentsPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.payments);
}

export default async function PaymentsPage() {
  const data = await getPaymentsPage();
  const seo = resolveSeoText(data?.seo, PAGE_SEO.payments);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.payments.path}
        title={seo.title}
        description={seo.description}
        faqSection="payments"
      />
      <PaymentsHeroSection />
      <PaymentsTrustBar />
      <PaymentsMethodsSection />
      <PaymentsFlowSection />
      <PaymentsCTASection />
      <FAQSection section="payments" />
    </>
  );
}
