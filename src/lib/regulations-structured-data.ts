import type { FaqItem } from "@/lib/faq-fallbacks";
import { SITE_URL } from "@/lib/site";

const FSC_REGISTER_URL =
  "https://opr.fscmauritius.org/ords/opr/r/fsc-opr/fsc-online-public-register-opr?session=14338789762172";

const FINANCIAL_SERVICE_ID = `${SITE_URL}/regulations#financial-service`;
const FAQ_ID = `${SITE_URL}/regulations#faq`;

export function buildRegulationsStructuredData(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": FINANCIAL_SERVICE_ID,
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
        description:
          "Finsai Trade (Mauritius) Ltd is an investment dealer fully regulated by the Financial Services Commission (FSC) of Mauritius, committed to transparency, client protection, and financial regulatory compliance.",
        actionableFeedbackPolicy: FSC_REGISTER_URL,
      },
      {
        "@type": "FAQPage",
        "@id": FAQ_ID,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer.replace(/\n\n/g, " "),
          },
        })),
      },
    ],
  };
}
