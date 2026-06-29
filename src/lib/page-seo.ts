import type { Metadata } from "next";
import type { FaqItem, FaqSection } from "@/lib/faq-fallbacks";
import { FAQ_FALLBACKS } from "@/lib/faq-fallbacks";
import { getFaqsBySection, seoToMetadata, type StrapiLegalPage, type StrapiSeo } from "@/lib/strapi";
import { FINSAI_LICENSE_NO, SITE_URL } from "@/lib/site";

export type PageSeoFallback = {
  path: string;
  title: string;
  description: string;
  /** Use absolute title (no layout template suffix). */
  absoluteTitle?: boolean;
  faqSection?: FaqSection;
};

export const PAGE_SEO = {
  home: {
    path: "/",
    title: "Multi-Asset Online Trading Platform | Finsai Trade",
    description:
      "Multi-asset online trading platform designed for forex trading, market analysis, copy trading, and advanced trading strategies.",
    faqSection: "homepage" as const,
  },
  about: {
    path: "/about",
    title: "About Finsai Trade — Multi-Asset Broker & Trading Ecosystem",
    description:
      "Finsai Trade is a multi-asset broker built by traders. Discover our mission, vision, awards and the team driving financial growth in the digital era.",
  },
  careers: {
    path: "/careers",
    title: "Careers at Finsai Trade — Build the Future of Trading",
    description:
      "Join the Finsai Trade team and help build the future of multi-asset trading.",
  },
  accounts: {
    path: "/accounts",
    title: "Trading Accounts | Finsai Trade — Smart Choice, Pro & ECN",
    description:
      "Compare Finsai Trade account types and pick the one that fits your style — Smart Choice, Smart Pro, and Smart ECN.",
    faqSection: "accounts" as const,
  },
  payments: {
    path: "/payments",
    title: "Payments — Secure Deposits & Withdrawals | Finsai Trade",
    description:
      "Fund your Finsai Trade account securely with cards, UPI, e-wallets, crypto, and bank transfer. Industry-leading PCI DSS encryption.",
    faqSection: "payments" as const,
  },
  services: {
    path: "/services",
    title: "Trading Services | Finsai Trade — MT5, Social & Mobile",
    description:
      "Three trading environments built for every level. Trade with MT5, copy top performers via social trading, or stay connected with our upcoming mobile app.",
    faqSection: "services" as const,
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
    title: "Social Trading — Copy Top Traders | Finsai Trade",
    description:
      "Follow experienced traders or become a strategy provider. Copy trades live, share your strategy, and earn rewards with Finsai Trade Social Trading.",
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
    absoluteTitle: true,
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
    title: "Anti-Money Laundering Policy",
    description:
      "Finsai Trade Anti-Money Laundering Policy describing our client due diligence, AML compliance program, training and reporting obligations.",
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
  const fetched = await getFaqsBySection(section);
  if (fetched && fetched.length > 0) {
    return fetched.map((f) => ({ question: f.question, answer: f.answer }));
  }
  return FAQ_FALLBACKS[section];
}

export function cmsPageMetadata(
  seo: StrapiSeo | null | undefined,
  fallback: PageSeoFallback,
): Metadata {
  const metadata = seoToMetadata(seo, {
    title: fallback.title,
    description: fallback.description,
    url: pageCanonicalUrl(fallback.path),
  });
  if (fallback.absoluteTitle) {
    return { ...metadata, title: { absolute: fallback.title } };
  }
  return metadata;
}
