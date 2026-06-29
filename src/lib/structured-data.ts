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

export function organizationNode() {
  return {
    "@type": "Organization",
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
      "Finsai Trade is a multi-asset online trading platform providing access to forex, stocks, cryptocurrencies, commodities, indices, and CFDs through advanced trading technology and the MetaTrader 5 (MT5) platform.",
    sameAs: [
      "https://www.facebook.com/finsaiitrade",
      "https://x.com/FinsaiTrade",
      "https://www.instagram.com/finsai.trade",
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

function webPageNode(path: string, title: string, description: string) {
  return {
    "@type": "WebPage",
    "@id": webpageId(path),
    url: pageUrl(path),
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  };
}

function faqPageNode(path: string, faqs: FaqItem[]) {
  if (faqs.length === 0) return null;
  return {
    "@type": "FAQPage",
    "@id": faqId(path),
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
  const graph = [
    organizationNode(),
    websiteNode(),
    webPageNode(args.path, args.title, args.description),
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
  faqs: FaqItem[],
  seo: { title: string; description: string },
) {
  const path = "/regulations";
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      websiteNode(),
      financialServiceNode(),
      webPageNode(path, seo.title, seo.description),
      faqPageNode(path, faqs)!,
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
