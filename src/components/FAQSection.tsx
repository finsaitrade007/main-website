import FAQAccordion from "./FAQAccordion";
import type { FaqItem, FaqSection } from "@/lib/faq-fallbacks";
import { FAQ_FALLBACKS } from "@/lib/faq-fallbacks";
import {
  getFaqsBySection,
  type StrapiFaq,
} from "@/lib/strapi";

export type FAQItem = FaqItem;

type FAQSectionProps = {
  /** Which page section's FAQs to load from Strapi. */
  section: FaqSection;
  /** Pre-resolved FAQs (e.g. shared with PageJsonLd). Skips CMS fetch when set. */
  faqs?: FaqItem[];
};

function toStrapiShape(
  section: FaqSection,
  items: FAQItem[],
): StrapiFaq[] {
  return items.map((f, i) => ({
    id: -(i + 1),
    documentId: `local-${section}-${i + 1}`,
    question: f.question,
    answer: f.answer,
    section,
    order: i + 1,
  }));
}

export default async function FAQSection({ section, faqs }: FAQSectionProps) {
  const resolved =
    faqs && faqs.length > 0
      ? toStrapiShape(section, faqs)
      : await (async () => {
          const fetched = await getFaqsBySection(section);
          return fetched && fetched.length > 0
            ? fetched
            : toStrapiShape(section, FAQ_FALLBACKS[section]);
        })();

  return (
    <section
      id="faq"
      className="page-section bg-[#050208]"
      style={{ paddingBottom: "96px", scrollMarginTop: "100px" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-4">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 22px",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "60px",
            }}
          >
            <span className="badge-text">FAQs</span>
          </span>
        </div>
        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          Frequently Asked Questions
        </h2>

        <FAQAccordion faqs={resolved} />

        <div className="text-center mt-10">
          <a
            href="/contactus"
            className="btn-text"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              borderRadius: "8px",
              padding: "clamp(9px, 0.8vw, 11px) clamp(16px, 1.7vw, 24px)",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              textDecoration: "none",
            }}
          >
            Contact Us
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
