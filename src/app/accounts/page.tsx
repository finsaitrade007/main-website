import type { Metadata } from "next";
import AccountsHeroSection from "@/components/AccountsHeroSection";
import AccountsCompareTable from "@/components/AccountsCompareTable";
import WhyTradeFinsai from "@/components/WhyTradeFinsai";
import AccountsOnboardingSteps from "@/components/AccountsOnboardingSteps";
import FAQSection from "@/components/FAQSection";
import { getAccountsPage, seoToMetadata } from "@/lib/strapi";

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
      <FAQSection />
    </>
  );
}
