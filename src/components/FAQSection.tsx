import FAQAccordion from "./FAQAccordion";
import { getFaqs, type StrapiFaq } from "@/lib/strapi";

export type FAQItem = { question: string; answer: string };

type FAQSectionProps = {
  /**
   * Page-specific FAQs. When supplied, the section renders these instead of
   * fetching the global FAQ list from Strapi. The homepage omits this prop
   * to preserve the existing CMS-driven behaviour.
   */
  faqs?: FAQItem[];
};

function toStrapiShape(items: FAQItem[]): StrapiFaq[] {
  return items.map((f, i) => ({
    id: -(i + 1),
    documentId: `local-${i + 1}`,
    question: f.question,
    answer: f.answer,
    order: i + 1,
  }));
}

const FALLBACK_FAQS: StrapiFaq[] = [
  {
    id: -1,
    documentId: "fallback-1",
    question: "What is Finsai Trade?",
    answer:
      "Finsai Trade is a multi-asset trading platform that provides access to forex, cryptocurrencies, global stocks, indices, commodities, and CFDs through one secure and professional trading ecosystem.",
    order: 1,
  },
  {
    id: -2,
    documentId: "fallback-2",
    question: "What markets can I trade on Finsai Trade?",
    answer:
      "You can trade Forex, Cryptocurrencies, Indices, Metals, Stocks, and CFDs. We provide access to over 1,000+ trading instruments across all major global markets.",
    order: 2,
  },
  {
    id: -3,
    documentId: "fallback-3",
    question: "Does Finsai Trade support MetaTrader 5 (MT5)?",
    answer:
      "Yes, Finsai Trade fully supports MetaTrader 5 (MT5), the industry-leading trading platform known for advanced charting, automated trading via Expert Advisors, and deep market analysis.",
    order: 3,
  },
  {
    id: -4,
    documentId: "fallback-4",
    question: "How do I open an account?",
    answer:
      "Simply click 'Start Trading', fill in your details, verify your identity with a government-issued ID, fund your account, and you're ready to trade — the entire process takes under 10 minutes.",
    order: 4,
  },
  {
    id: -5,
    documentId: "fallback-5",
    question: "What is the minimum deposit?",
    answer:
      "The minimum deposit varies by account type. Our Smart Choice account is designed for beginners with a low entry requirement. Contact our support team for the latest deposit requirements.",
    order: 5,
  },
];

export default async function FAQSection({ faqs }: FAQSectionProps = {}) {
  let resolved: StrapiFaq[];
  if (faqs && faqs.length > 0) {
    resolved = toStrapiShape(faqs);
  } else {
    const fetched = await getFaqs();
    resolved = fetched && fetched.length > 0 ? fetched : FALLBACK_FAQS;
  }

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
