import type { Metadata } from "next";
import PaymentsHeroSection from "@/components/PaymentsHeroSection";
import PaymentsTrustBar from "@/components/PaymentsTrustBar";
import PaymentsMethodsSection from "@/components/PaymentsMethodsSection";
import PaymentsFlowSection from "@/components/PaymentsFlowSection";
import PaymentsCTASection from "@/components/PaymentsCTASection";
import FAQSection from "@/components/FAQSection";
import { getPaymentsPage, seoToMetadata } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPaymentsPage();
  return seoToMetadata(data?.seo, {
    title: "Payments — Secure Deposits & Withdrawals | Finsai Trade",
    description:
      "Fund your Finsai Trade account securely with cards, UPI, e-wallets, crypto, and bank transfer. Industry-leading PCI DSS encryption.",
  });
}

export default function PaymentsPage() {
  return (
    <>
      <PaymentsHeroSection />
      <PaymentsTrustBar />
      <PaymentsMethodsSection />
      <PaymentsFlowSection />
      <PaymentsCTASection />
      <FAQSection section="payments" />
    </>
  );
}
