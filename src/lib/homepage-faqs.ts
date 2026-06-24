import { FAQ_FALLBACKS, type FaqItem } from "@/lib/faq-fallbacks";

/** @deprecated Use FAQ_FALLBACKS.homepage or getFaqsBySection("homepage") */
export type HomepageFaq = FaqItem;

/** Visible homepage FAQs — must match FAQPage JSON-LD on the homepage. */
export const HOMEPAGE_FAQS = FAQ_FALLBACKS.homepage;
