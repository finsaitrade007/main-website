import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import PageJsonLd from "@/components/PageJsonLd";
import { LegalLayout, LegalSection, P, UL } from "@/components/LegalLayout";
import { REGULATIONS_FAQS } from "@/lib/regulations-faqs";
import { cmsPageMetadata, PAGE_SEO, resolveLegalPageContext } from "@/lib/page-seo";
import {
  FINSAI_COMPANY_REG_NO,
  FINSAI_LICENSE_NO,
} from "@/lib/site";
import type { StrapiFaq } from "@/lib/strapi";
import { getRegulationsPage } from "@/lib/strapi";

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

export async function generateMetadata(): Promise<Metadata> {
  const data = await getRegulationsPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.regulations);
}

export default async function RegulationsPage() {
  const data = await getRegulationsPage();
  const { seo, pageTitle } = resolveLegalPageContext(
    data,
    PAGE_SEO.regulations,
    "Regulations & Compliance — FINSAI TRADE LTD",
  );

  return (
    <>
      <PageJsonLd
        variant="regulations"
        title={seo.title}
        description={seo.description}
        faqs={REGULATIONS_FAQS}
      />
      <LegalLayout title={pageTitle}>
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
                <strong>Company Registration:</strong> {FINSAI_COMPANY_REG_NO}
              </>,
              <>
                <strong>License No:</strong> {FINSAI_LICENSE_NO}
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
