import type { Metadata } from "next";
import AccountsHeroSection from "@/components/AccountsHeroSection";
import AccountsCompareTable from "@/components/AccountsCompareTable";
import WhyTradeFinsai from "@/components/WhyTradeFinsai";
import AccountsOnboardingSteps from "@/components/AccountsOnboardingSteps";
import FAQSection from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { getAccountsPage, seoToMetadata } from "@/lib/strapi";

const ACCOUNTS_FAQS: FAQItem[] = [
  {
    question: "Can I upgrade or switch my account type later?",
    answer:
      "Yes. You can upgrade or switch your account type anytime as your trading needs evolve.",
  },
  {
    question: "Are there any deposit or withdrawal fees?",
    answer:
      "Finsai Trade does not charge internal deposit or withdrawal fees. Third-party payment providers may apply transaction charges.",
  },
  {
    question: "What documents are required for account verification?",
    answer:
      "You'll need a valid government-issued ID and proof of address, such as a utility bill or bank statement.",
  },
  {
    question: "What's the difference between Smart Pro and Smart ECN?",
    answer:
      "Smart ECN is designed for advanced traders, offering Raw spreads, enhanced execution conditions, VPS access, and support for advanced trading tools.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAccountsPage();
  return seoToMetadata(data?.seo, {
    title: "Trading Accounts | Finsai Trade — Smart Choice, Pro & ECN",
    description:
      "Compare Finsai Trade account types and pick the one that fits your style — Smart Choice, Smart Pro, and Smart ECN.",
  });
}

export default function AccountsPage() {
  return (
    <>
      <AccountsHeroSection />
      <AccountsCompareTable />
      <WhyTradeFinsai />
      <AccountsOnboardingSteps />
      <FAQSection faqs={ACCOUNTS_FAQS} />
    </>
  );
}
