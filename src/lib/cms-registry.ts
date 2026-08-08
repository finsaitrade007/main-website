/**
 * Single source of truth linking a Strapi content type to its cache tag and
 * the frontend routes it affects.
 *
 * Before this existed, adding a content type meant editing four places by hand
 * — the getter in `strapi.ts`, `CMS_TAGS`, `MODEL_TO_TAG` and `MODEL_TO_PATHS`
 * in the revalidate route. Nothing enforced that they stayed in step, and they
 * didn't: nine page single types were seeded by the backend with no getter to
 * read them, and two getters pointed at content types that never existed.
 *
 * Add a content type here and the revalidate route picks it up automatically.
 */

/** Strapi model UID, e.g. `api::forex-page.forex-page`. */
export type StrapiModelUid = `api::${string}.${string}`;

export type CmsResource = {
  /** Strapi model UID sent by the webhook payload as `model` / `uid`. */
  uid: StrapiModelUid;
  /** Cache tag passed to `strapiFetch({ tags })` and `revalidateTag`. */
  tag: string;
  /** Routes to `revalidatePath` when this resource changes. */
  paths: string[];
};

/** Helper: a single type whose UID, tag and API slug are all the same string. */
function page(slug: string, paths: string[]): CmsResource {
  return { uid: `api::${slug}.${slug}`, tag: slug, paths };
}

export const CMS_RESOURCES: CmsResource[] = [
  // ── Collections ──────────────────────────────────────────────────
  { uid: "api::homepage.homepage", tag: "homepage", paths: ["/"] },
  { uid: "api::market.market", tag: "markets", paths: ["/"] },
  { uid: "api::platform.platform", tag: "platforms", paths: ["/"] },
  { uid: "api::step.step", tag: "steps", paths: ["/", "/platform"] },
  { uid: "api::award.award", tag: "awards", paths: ["/"] },
  { uid: "api::testimonial.testimonial", tag: "testimonials", paths: ["/"] },
  {
    uid: "api::account-tier.account-tier",
    tag: "account-tiers",
    paths: ["/accounts"],
  },
  {
    uid: "api::faq.faq",
    tag: "faqs",
    // Every route that renders an FAQ block.
    paths: [
      "/",
      "/about",
      "/accounts",
      "/platform",
      "/payments",
      "/partnerships",
      "/social-trading",
      "/mt5",
      "/tools",
      "/stocks",
      "/metals",
      "/commodities",
      "/energies",
      "/forex",
      "/indices",
      "/crypto",
    ],
  },

  // ── Rich page single types ───────────────────────────────────────
  page("about-page", ["/about"]),
  page("careers-page", ["/careers"]),
  page("accounts-page", ["/accounts"]),
  page("payments-page", ["/payments"]),
  page("platform-page", ["/platform"]),
  page("partnerships-page", ["/partnerships"]),
  page("blogs-page", ["/blogs"]),
  page("contactus-page", ["/contactus"]),
  page("social-trading-page", ["/social-trading"]),
  page("glossary-page", ["/glossary"]),
  page("regulations-page", ["/regulations"]),

  // ── SEO-only page single types ───────────────────────────────────
  // These were seeded by the backend but had no frontend getter, so editor
  // changes silently did nothing. Now wired.
  page("mt5-page", ["/mt5"]),
  // UID is historical; the route is /stocks.
  { uid: "api::wordstock-page.wordstock-page", tag: "wordstock-page", paths: ["/stocks"] },
  page("metals-page", ["/metals"]),
  page("commodities-page", ["/commodities"]),
  page("energies-page", ["/energies"]),
  page("forex-page", ["/forex"]),
  page("indices-page", ["/indices"]),
  page("crypto-page", ["/crypto"]),
  page("rewards-page", ["/rewards"]),

  // ── Legal page single types ──────────────────────────────────────
  page("privacy-policy-page", ["/privacy-policy"]),
  page("terms-conditions-page", ["/terms-conditions"]),
  page("risk-disclosure-page", ["/risk-disclosure"]),
  page("aml-policy-page", ["/aml-policy"]),
  page("refund-policy-page", ["/refund-policy"]),
  page("client-agreement-page", ["/client-agreement"]),
  page("upfront-disclosure-page", ["/upfront-disclosure"]),
  page("complaints-management-page", ["/complaints-management"]),
  page("conflicts-of-interest-policy-page", ["/conflicts-of-interest-policy"]),
];

/** Every cache tag known to the CMS layer. */
export const CMS_TAGS: string[] = CMS_RESOURCES.map((r) => r.tag);

const BY_UID = new Map<string, CmsResource>(
  CMS_RESOURCES.map((r) => [r.uid, r]),
);

export function resourceForModel(model: string): CmsResource | undefined {
  return BY_UID.get(model);
}
