import type { Metadata } from "next";
import AccountsHeroSection from "@/components/AccountsHeroSection";
import AccountsCompareTable from "@/components/AccountsCompareTable";
import WhyTradeFinsai from "@/components/WhyTradeFinsai";
import AccountsOnboardingSteps from "@/components/AccountsOnboardingSteps";
import FAQSection from "@/components/FAQSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolvePageFaqs,
  resolveSeoText,
} from "@/lib/page-seo";
import { getAccountsPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAccountsPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.accounts);
}

export default async function AccountsPage() {
  const [data, faqs] = await Promise.all([
    getAccountsPage(),
    resolvePageFaqs("accounts"),
  ]);
  const seo = resolveSeoText(data?.seo, PAGE_SEO.accounts);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.accounts.path}
        title={seo.title}
        description={seo.description}
        faqs={faqs}
      />
      <AccountsHeroSection />
      <AccountsCompareTable />
      <WhyTradeFinsai />
      <AccountsOnboardingSteps />
      <FAQSection section="accounts" faqs={faqs} />
    </>
  );
}
