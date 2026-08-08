import type { Metadata } from "next";
import type { FaqItem, FaqSection } from "@/lib/faq-fallbacks";
import { FAQ_FALLBACKS } from "@/lib/faq-fallbacks";
import {
  seoToMetadata,
  type StrapiLegalPage,
  type StrapiSeo,
} from "@/lib/strapi";
import { FINSAI_LICENSE_NO, SITE_URL } from "@/lib/site";

export type PageSeoFallback = {
  path: string;
  title: string;
  description: string;
  faqSection?: FaqSection;
};

export const PAGE_SEO = {
  home: {
    path: "/",
    title: "FSC Regulated Forex Broker & MT5 Multi-Asset Trading Platform",
    description:
      "Trade forex, crypto, and CFDs with Finsai Trade, an FSC regulated forex broker offering MetaTrader 5 (MT5), raw ECN CFD trading, up to 500x leverage, and copy trading",
    faqSection: "homepage" as const,
  },
  about: {
    path: "/about",
    title: "About Finsai Trade | Multi Asset Broker & Trading Ecosystem",
    description:
      "Finsai Trade is an FSC-regulated global multi-asset broker. Access Forex, Crypto, Equities, and Commodities with low-latency MetaTrader 5 execution.",
    faqSection: "about" as const,
  },
  careers: {
    path: "/careers",
    title: "Careers at Finsai Trade — Build the Future of Trading",
    description:
      "Join the Finsai Trade team and help build the future of multi-asset trading.",
  },
  accounts: {
    path: "/accounts",
    title: "Compare Forex Trading Account Types | ECN & Swap-Free",
    description:
      "Explore multi-asset forex account types. Trade with 0.0 pips raw spreads, up to 1:500 leverage, zero swap fees, and low $100 minimum deposit on MT5.",
    faqSection: "accounts" as const,
  },
  payments: {
    path: "/payments",
    title: "Payments — Secure Deposits & Withdrawals | Finsai Trade",
    description:
      "Fund your Finsai Trade account securely with cards, UPI, e-wallets, crypto, and bank transfer. Industry-leading PCI DSS encryption.",
    faqSection: "payments" as const,
  },
  platform: {
    path: "/platform",
    title: "All-In-One Trading Platform for MT5 & Copy Trading | Finsai",
    description:
      "Trade on an all-in-one trading platform with MT5, real-time copy trading, and mobile execution. Access Finsai's advanced forex trading platform online.",
    faqSection: "platform" as const,
  },
  mt5: {
    path: "/mt5",
    title: "MT5 Trading Platform | Finsai Trade",
    description:
      "Trade forex, shares, indices, commodities and cryptocurrencies on MetaTrader 5 (MT5) with Finsai Trade. Fast execution, advanced charting, and multi-asset access.",
    faqSection: "mt5" as const,
  },
  tools: {
    path: "/tools",
    title: "Trading Tools & Calculators | Finsai Trade",
    description:
      "Position size, lot size, margin, risk, profit target and pip value calculators, plus real-time market news, an economic calendar and a VIX tracker.",
    faqSection: "tools" as const,
  },
  stocks: {
    path: "/stocks",
    title: "Stock CFDs Trading | Finsai Trade",
    description:
      "Trade global stock CFDs on blue-chip companies with Finsai Trade. Ultra-fast execution, low trading costs, live price streaming, and the flexibility to go long or short.",
    faqSection: "stocks" as const,
  },
  metals: {
    path: "/metals",
    title: "Spot Metals Trading | Finsai Trade",
    description:
      "Trade gold, silver, and platinum with Finsai Trade. Access precious metals markets with flexible pricing, professional tools, and fast order execution.",
    faqSection: "metals" as const,
  },
  commodities: {
    path: "/commodities",
    title: "Commodities Trading | Finsai Trade",
    description:
      "Trade oil, gas, and agricultural commodity markets with Finsai Trade. Access diverse assets, transparent pricing, and global market coverage from one platform.",
    faqSection: "commodities" as const,
  },
  energies: {
    path: "/energies",
    title: "Energies Trading | Finsai Trade",
    description:
      "Trade CFDs on Brent Oil, Natural Gas, and key energy assets with Finsai Trade. Competitive spreads, fast execution, and round-the-clock market access.",
    faqSection: "energies" as const,
  },
  forex: {
    path: "/forex",
    title: "Forex Trading | Finsai Trade",
    description:
      "Trade the global forex market with Finsai Trade. Access 40+ major, minor, and exotic currency pairs with ultra-low spreads and fast execution.",
    faqSection: "forex" as const,
  },
  indices: {
    path: "/indices",
    title: "Indices Trading | Finsai Trade",
    description:
      "Trade major global indices including the S&P 500, NASDAQ, AUS 200, and DAX with Finsai Trade. Tight spreads, flexible sizes, and fast execution.",
    faqSection: "indices" as const,
  },
  crypto: {
    path: "/crypto",
    title: "Cryptocurrency Trading | Finsai Trade",
    description:
      "Trade top cryptocurrencies with Finsai Trade. Access 100+ digital assets with fast execution, transparent pricing, and secure fund storage.",
    faqSection: "crypto" as const,
  },
  rewards: {
    path: "/rewards",
    title: "Trading Rewards & IB Program | Finsai Trade",
    description:
      "Earn through trading milestones, seasonal promotions, and the Finsai Introducing Broker program with multi-tier commissions and partner tools.",
  },
  partnerships: {
    path: "/partnerships",
    title: "IB & Affiliate Partnerships | Finsai Trade",
    description:
      "Earn industry-leading commissions with the Finsai Trade IB program. Multi-tier rebates, real-time reports, and fast payouts for partners worldwide.",
    faqSection: "partnerships" as const,
  },
  blogs: {
    path: "/blogs",
    title: "Trader Knowledge Hub — Blogs & Market News | Finsai Trade",
    description:
      "Sharp market insights, trading education, and analysis you can act on. Track macro events, technical setups, and platform updates from Finsai Trade.",
  },
  contact: {
    path: "/contactus",
    title: "Contact Finsai Trade — Global Support Across Fintech",
    description:
      "Get in touch with the Finsai Trade team for support, partnerships, and inquiries.",
  },
  socialTrading: {
    path: "/social-trading",
    title: "Social Trading Platform: Copy Top Forex & Crypto Traders",
    description:
      "Join Finsai Trade's social trading platform. Automatically copy top forex & crypto strategy providers with full transparency and custom risk controls.",
    faqSection: "social-trading" as const,
  },
  glossary: {
    path: "/glossary",
    title: "Trading Glossary - A-Z Guide to Trading Terms | Finsai Trade",
    description:
      "Clear, jargon-free definitions for every trading term - forex, CFDs, indices, commodities, crypto, MT5, leverage, spreads, and more. Search or browse A-Z.",
  },
  regulations: {
    path: "/regulations",
    title: "Finsai Trade Regulation & Compliance | Mauritius FSC Licensed",
    description: `Finsai Trade is regulated by the Financial Services Commission Mauritius (License ${FINSAI_LICENSE_NO}). Learn more about our legal framework and fund protection.`,
  },
  privacyPolicy: {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "Finsai Trade Privacy Policy describing how we collect, use, store and share your personal information.",
  },
  termsConditions: {
    path: "/terms-conditions",
    title: "Terms & Conditions",
    description:
      "Finsai Trade Terms & Conditions covering Welcome Bonus eligibility, usage, expiry and Trading Competition rules.",
  },
  riskDisclosure: {
    path: "/risk-disclosure",
    title: "Risk Disclosure and Warnings Notice",
    description:
      "Finsai Trade Risk Disclosure and Warnings Notice describing the risks associated with trading CFDs, foreign exchange, cryptocurrencies and other financial instruments.",
  },
  amlPolicy: {
    path: "/aml-policy",
    title: "Anti-Money Laundering (AML) Compliance | Finsai Trade",
    description:
      "Finsai Trade's AML compliance outlines mandatory client due diligence, transaction monitoring, and sanctions screening to ensure a secure trading environment.",
  },
  refundPolicy: {
    path: "/refund-policy",
    title: "Refund Policy",
    description:
      "Finsai Trade Refund Policy describing deposit, withdrawal, chargeback and cancellation procedures and the safeguarding of client funds.",
  },
  clientAgreement: {
    path: "/client-agreement",
    title: "Client Agreement",
    description:
      "Finsai Trade Client Agreement: the binding terms and conditions governing the use of our trading platform, services and the relationship between the Company and the Client.",
  },
  upfrontDisclosure: {
    path: "/upfront-disclosure",
    title: "Upfront Disclosure",
    description:
      "Mauritius Upfront Disclosure Document for Finsai Trade Ltd, including legal status, key individuals, complaints handling and authorized financial products.",
  },
  complaintsManagement: {
    path: "/complaints-management",
    title: "Complaints Management",
    description:
      "Finsai Trade Complaints Management Framework: how to submit a complaint, internal review, escalation timelines and reporting to authorities.",
  },
  conflictsOfInterest: {
    path: "/conflicts-of-interest-policy",
    title: "Conflicts of Interest Policy",
    description:
      "Finsai Trade Conflicts of Interest Policy outlining identification, management and mitigation of conflicts of interest.",
  },
} as const satisfies Record<string, PageSeoFallback>;

export function pageCanonicalUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function resolveSeoText(
  cms: { metaTitle?: string | null; metaDescription?: string | null } | null | undefined,
  fallback: PageSeoFallback,
): { title: string; description: string } {
  return {
    title: cms?.metaTitle?.trim() || fallback.title,
    description: cms?.metaDescription?.trim() || fallback.description,
  };
}

export function resolveLegalPageContext(
  cms: StrapiLegalPage | null | undefined,
  fallback: PageSeoFallback,
  defaultTitle: string,
) {
  return {
    seo: resolveSeoText(cms?.seo, fallback),
    pageTitle: cms?.pageTitle?.trim() || defaultTitle,
  };
}

export async function resolvePageFaqs(section: FaqSection): Promise<FaqItem[]> {
  const { getFaqsBySection } = await import("@/lib/strapi");
  const fetched = await getFaqsBySection(section);
  if (fetched && fetched.length > 0) {
    return fetched.map((f) => ({ question: f.question, answer: f.answer }));
  }
  return (FAQ_FALLBACKS[section] ?? []);
}

export function cmsPageMetadata(
  seo: StrapiSeo | null | undefined,
  fallback: PageSeoFallback,
): Metadata {
  // `seoToMetadata` already returns an absolute title, so no page needs to opt
  // out of a layout template — there isn't one any more.
  return seoToMetadata(seo, {
    title: fallback.title,
    description: fallback.description,
    url: pageCanonicalUrl(fallback.path),
  });
}
