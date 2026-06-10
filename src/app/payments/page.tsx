import type { Metadata } from "next";
import PaymentsHeroSection from "@/components/PaymentsHeroSection";
import PaymentsTrustBar from "@/components/PaymentsTrustBar";
import PaymentsMethodsSection from "@/components/PaymentsMethodsSection";
import PaymentsFlowSection from "@/components/PaymentsFlowSection";
import PaymentsCTASection from "@/components/PaymentsCTASection";
import FAQSection from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { getPaymentsPage, seoToMetadata } from "@/lib/strapi";

const PAYMENTS_FAQS: FAQItem[] = [
  {
    question: "What is the minimum deposit amount?",
    answer:
      "The minimum deposit amount may vary depending on your account type and selected payment method. You can review the exact requirements before completing your deposit.",
  },
  {
    question: "Are there any deposit or withdrawal fees?",
    answer:
      "No. Finsai Trade charges no fees and only provides transparent funding.",
  },
  {
    question: "How long do deposits take to process?",
    answer:
      "Most deposits are processed quickly, with some payment methods offering near-instant funding. Processing times may vary depending on the selected provider and verification requirements.",
  },
  {
    question: "Can I fund my account using crypto?",
    answer:
      "Yes, Finsai Trade supports crypto payments, allowing traders to fund their accounts through supported digital assets in a secure and flexible way.",
  },
  {
    question: "How do I withdraw my funds?",
    answer:
      "You can request a withdrawal directly from your trading account dashboard. Simply choose your preferred withdrawal method, enter the amount, and follow the required verification steps.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. Finsai Trade uses secure payment infrastructure and advanced protection measures to help safeguard deposits, withdrawals, and sensitive payment details.",
  },
];

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
      <FAQSection faqs={PAYMENTS_FAQS} />
    </>
  );
}
