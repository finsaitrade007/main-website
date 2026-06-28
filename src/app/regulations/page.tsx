import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { LegalLayout, LegalSection, P, UL } from "@/components/LegalLayout";
import { REGULATIONS_FAQS } from "@/lib/regulations-faqs";
import { buildRegulationsStructuredData } from "@/lib/regulations-structured-data";
import type { StrapiFaq } from "@/lib/strapi";

const FSC_REGISTER_URL =
  "https://opr.fscmauritius.org/ords/opr/r/fsc-opr/fsc-online-public-register-opr?session=14338789762172";

const FAQ_ACCORDION_ITEMS: StrapiFaq[] = REGULATIONS_FAQS.map((faq, i) => ({
  id: -(i + 1),
  documentId: `regulations-faq-${i + 1}`,
  question: faq.question,
  answer: faq.answer,
  section: "homepage",
  order: i + 1,
}));

export const metadata: Metadata = {
  title: {
    absolute:
      "Finsai Trade Regulation & Compliance | Mauritius FSC Licensed",
  },
  description:
    "Finsai Trade is regulated by the Financial Services Commission Mauritius (License GB25204899). Learn more about our legal framework and fund protection.",
};

export default function RegulationsPage() {
  return (
    <>
      <JsonLd data={buildRegulationsStructuredData(REGULATIONS_FAQS)} />
      <LegalLayout title="Regulations & Compliance — FINSAI TRADE LTD">
        <LegalSection>
          <P>
            At FINSAI TRADE LTD, we are committed to transparency, client
            protection, and financial regulatory compliance. Finsai Trade
            (Mauritius) Ltd is fully regulated by the Financial Services
            Commission (Mauritius) and operates under a single unified
            regulatory framework. Our goal is to maintain high standards of
            integrity, investor protection, and responsible business practices
            across all services.
          </P>
          <P>
            Below is an overview of our regulatory status and compliance
            structure. Please note that regulation in one jurisdiction does
            not automatically provide the same level of protection in another.
            Clients should carefully review the specific entity and regulatory
            terms applicable to their account.
          </P>
        </LegalSection>

        <LegalSection title="Mauritius – Financial Services Commission (FSC)">
          <P>
            Our Mauritius FSC license covers investment dealing, market
            conduct, reporting, and client fund segregation.
          </P>
          <UL
            items={[
              <>
                <strong>Entity:</strong> Finsai Trade (Mauritius) Ltd
              </>,
              <>
                <strong>Company Registration:</strong> C228371
              </>,
              <>
                <strong>License No:</strong> GB25204899
              </>,
              <>
                <strong>Incorporation Date:</strong> 19th November 2025
              </>,
              <>
                <strong>Registered Address:</strong> 3 Emerald Park, Trianon,
                Quatre Bornes 72257, Mauritius
              </>,
              <>
                <strong>Scope:</strong> This license covers securities trading
                activities. Mauritius FSC provides oversight for licensing,
                conduct, and basic client fund segregation.
              </>,
              <>
                <strong>Verification:</strong>{" "}
                <a
                  href={FSC_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#7DB9D6", textDecoration: "underline" }}
                >
                  FSC Online Public Register
                </a>
              </>,
            ]}
          />
        </LegalSection>

        <LegalSection title="Frequently Asked Questions">
          <FAQAccordion faqs={FAQ_ACCORDION_ITEMS} />
        </LegalSection>
      </LegalLayout>
    </>
  );
}
