import { HOMEPAGE_FAQS } from "@/lib/homepage-faqs";
import { SITE_LOGO_URL, SITE_URL } from "@/lib/site";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;

export function buildHomepageStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: "Finsai Trade",
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
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: "Finsai Trade",
        publisher: { "@id": ORGANIZATION_ID },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": WEBPAGE_ID,
        url: `${SITE_URL}/`,
        name: "Finsai Trade | Multi-Asset Online Trading Platform",
        description:
          "Trade forex, stocks, cryptocurrencies, commodities, indices, and CFDs through a professional multi-asset trading platform powered by MetaTrader 5 (MT5).",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        mainEntity: HOMEPAGE_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
