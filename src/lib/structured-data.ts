import type { FaqItem } from "@/lib/faq-fallbacks";
import {
  FINSAI_COMPANY_REG_NO,
  FINSAI_LICENSE_NO,
  SITE_LOGO_URL,
  SITE_URL,
} from "@/lib/site";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const FSC_REGISTER_URL =
  "https://opr.fscmauritius.org/ords/opr/r/fsc-opr/fsc-online-public-register-opr?session=14338789762172";

function pageUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function webpageId(path: string): string {
  return `${pageUrl(path)}#webpage`;
}

function faqId(path: string): string {
  return `${pageUrl(path)}#faq`;
}

function normalizeFaqAnswer(text: string): string {
  return text.replace(/\n\n/g, " ");
}

/**
 * Organization node, extended with the FSC credential.
 *
 * NOTE ON DOMAIN: the content docs write these @ids against
 * `https://www.finsaitrade.com`, but every canonical URL, OG url and existing
 * @id on this site uses the apex `https://finsaitrade.com`. Mixing the two
 * splits the entity graph, so everything here is emitted against SITE_URL.
 * If www is meant to be canonical, change SITE_URL — do not hardcode www here.
 */
export function organizationNode() {
  return {
    "@type": ["Organization", "FinancialService"],
    "@id": ORGANIZATION_ID,
    name: "Finsai Trade",
    legalName: "Finsai Trade (Mauritius) Ltd",
    alternateName: "FINSAI TRADE LTD",
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: SITE_LOGO_URL,
    },
    description:
      "Finsai Trade is an FSC-regulated global multi-asset broker providing access to Forex, Crypto CFDs, Stocks, Indices, Metals, and Energies on MetaTrader 5, with up to 500x leverage and raw ECN CFD trading.",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Financial Regulation License",
      identifier: FINSAI_LICENSE_NO,
      recognizedBy: {
        "@type": "Organization",
        name: "Financial Services Commission (FSC)",
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, Manor House, 30 St Georges Street",
      addressLocality: "Port Louis",
      addressCountry: "MU",
    },
    sameAs: [
      "https://www.facebook.com/people/Finsai/61551284008485/",
      "https://x.com/FinsaiTrade",
      "https://www.instagram.com/finsai.trade",
      "https://www.linkedin.com/company/finsai-trade",
      "https://www.youtube.com/@FinsaiTrade-UI",
    ],
    knowsAbout: [
      "Forex Trading",
      "Cryptocurrency Trading",
      "Stock Trading",
      "Commodity Trading",
      "Indices Trading",
      "CFD Trading",
      "MetaTrader 5",
      "Online Trading",
      "Multi-Asset Trading",
      "Copy Trading",
      "Algorithmic Trading",
    ],
    areaServed: {
      "@type": "Place",
      name: "Global",
    },
  };
}

/** Homepage: the MT5 multi-asset account offering. */
function brokerageAccountNode() {
  return {
    "@type": "BrokerageAccount",
    "@id": `${SITE_URL}/#mt5-account`,
    name: "Finsai Trade MetaTrader 5 Trading Account",
    provider: { "@id": ORGANIZATION_ID },
    description:
      "Multi-asset MT5 trading account offering up to 500x leverage on forex, stocks, crypto, commodities, and indices.",
    feesAndCommissionsSpecification:
      "Raw ECN spreads, low commission account options available.",
  };
}

/** Accounts page: the tiered account product. */
function accountsProductNode() {
  return {
    "@type": "FinancialProduct",
    "@id": `${SITE_URL}/accounts#product`,
    name: "Finsai Trade Forex Trading Accounts",
    description:
      "Multi-asset forex and CFD trading accounts including Smart Choice, Smart Pro, and Smart ECN options with up to 1:500 leverage, swap-free trading, and MT5 access.",
    provider: { "@id": ORGANIZATION_ID },
  };
}

/** Social Trading page: the copy-trading software entity. */
function socialTradingSoftwareNode() {
  return {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/social-trading#software`,
    name: "Finsai Trade Social Trading",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web, iOS, Android",
    provider: { "@id": ORGANIZATION_ID },
    description:
      "Institutional-grade social trading platform for automatically copying verified forex and crypto strategy providers, with built-in drawdown limits and balance protection controls.",
  };
}

/**
 * Extra schema.org nodes contributed by specific routes, per the approved
 * content documents. Keyed by canonical path.
 */
const PAGE_EXTRA_NODES: Record<string, () => Record<string, unknown>[]> = {
  "/": () => [brokerageAccountNode()],
  "/accounts": () => [accountsProductNode()],
  "/social-trading": () => [socialTradingSoftwareNode()],
};

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: "Finsai Trade",
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  };
}

function webPageNode(
  path: string,
  title: string,
  description: string,
  faqs?: FaqItem[],
) {
  return {
    "@type": "WebPage",
    "@id": webpageId(path),
    url: pageUrl(path),
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
    ...(faqs?.length ? { hasPart: { "@id": faqId(path) } } : {}),
  };
}

function faqPageNode(path: string, faqs: FaqItem[]) {
  if (faqs.length === 0) return null;
  return {
    "@type": "FAQPage",
    "@id": faqId(path),
    isPartOf: { "@id": webpageId(path) },
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: normalizeFaqAnswer(faq.answer),
      },
    })),
  };
}

function financialServiceNode() {
  return {
    "@type": "FinancialService",
    "@id": `${SITE_URL}/regulations#financial-service`,
    name: "Finsai Trade (Mauritius) Ltd",
    legalName: "Finsai Trade (Mauritius) Ltd",
    alternateName: "FINSAI TRADE LTD",
    url: SITE_URL,
    foundingDate: "2025-11-19",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Emerald Park, Trianon",
      addressLocality: "Quatre Bornes",
      postalCode: "72257",
      addressCountry: "MU",
    },
    knowsAbout: [
      "Forex CFDs",
      "Stocks",
      "Commodities",
      "Options",
      "Futures",
      "Cryptocurrency CFDs",
      "Securities Trading",
    ],
    description: `Finsai Trade (Mauritius) Ltd is an investment dealer fully regulated by the Financial Services Commission (FSC) of Mauritius (license ${FINSAI_LICENSE_NO}, company registration ${FINSAI_COMPANY_REG_NO}), committed to transparency, client protection, and financial regulatory compliance.`,
    actionableFeedbackPolicy: FSC_REGISTER_URL,
  };
}

/** Standard marketing / legal page graph: Organization + WebSite + WebPage + optional FAQPage. */
export function buildPageStructuredData(args: {
  path: string;
  title: string;
  description: string;
  faqs?: FaqItem[];
}) {
  // Route-specific entities (BrokerageAccount, FinancialProduct,
  // SoftwareApplication) come from the approved content docs.
  const extras = PAGE_EXTRA_NODES[args.path]?.() ?? [];

  const graph = [
    organizationNode(),
    websiteNode(),
    ...extras,
    webPageNode(args.path, args.title, args.description, args.faqs),
    ...(args.faqs?.length ? [faqPageNode(args.path, args.faqs)!] : []),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

/** Homepage graph — same as standard page with homepage path and FAQs. */
export function buildHomepageStructuredData(faqs: FaqItem[]) {
  return buildPageStructuredData({
    path: "/",
    title: "Finsai Trade | Multi-Asset Online Trading Platform",
    description:
      "Trade forex, stocks, cryptocurrencies, commodities, indices, and CFDs through a professional multi-asset trading platform powered by MetaTrader 5 (MT5).",
    faqs,
  });
}

/** Regulations page: FinancialService + full site graph + FAQPage. */
export function buildRegulationsStructuredData(
  faqs: FaqItem[] | undefined,
  seo: { title: string; description: string },
) {
  const path = "/regulations";
  // Google treats FAQPage markup with no matching visible on-page FAQ as a
  // structured-data violation. The 2026 design has no FAQ block, so the node
  // is emitted only when FAQs actually render.
  const items = faqs ?? [];
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      websiteNode(),
      financialServiceNode(),
      webPageNode(path, seo.title, seo.description, items),
      ...(items.length ? [faqPageNode(path, items)!] : []),
    ],
  };
}

/** Blog article graph. */
export function buildArticleStructuredData(args: {
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  author?: string;
}) {
  const path = `/blogs/${args.slug}`;
  const url = pageUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      websiteNode(),
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: args.title,
        description: args.description,
        image: args.image.startsWith("http")
          ? args.image
          : `${SITE_URL}${args.image}`,
        datePublished: args.datePublished,
        author: args.author
          ? { "@type": "Person", name: args.author }
          : { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: { "@id": webpageId(path) },
        inLanguage: "en",
      },
      webPageNode(path, args.title, args.description),
    ],
  };
}
