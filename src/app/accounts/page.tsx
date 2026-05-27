import AccountsHeroSection from "@/components/AccountsHeroSection";
import AccountsCompareTable from "@/components/AccountsCompareTable";
import WhyTradeFinsai from "@/components/WhyTradeFinsai";
import AccountsOnboardingSteps from "@/components/AccountsOnboardingSteps";
import AccountsBenefitsCards from "@/components/AccountsBenefitsCards";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Accounts | Finsai Trade",
  description:
    "Compare Finsai Trade account types and pick the one that fits your style — Smart Choice, Smart Pro, and Smart ECN.",
};

export default function AccountsPage() {
  return (
    <>
      <AccountsHeroSection />
      <AccountsCompareTable />
      <WhyTradeFinsai />
      <AccountsOnboardingSteps />
      <AccountsBenefitsCards />
      <FAQSection />
    </>
  );
}
