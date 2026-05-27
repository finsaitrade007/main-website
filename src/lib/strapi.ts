/**
 * Typed Strapi v5 client for the Finsai marketing site.
 *
 * Strapi v5 returns { data: T | T[], meta: {...} }; we unwrap and return data.
 * Server-side only — do not import from client components.
 */

export const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "") ??
  "http://localhost:1337";

const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

type FetchOptions = {
  /** ISR window in seconds. Default 60. Set to 0 to disable caching. */
  revalidate?: number;
  /** Optional cache tags for `revalidateTag(...)`. */
  tags?: string[];
};

export async function strapiFetch<T>(
  path: string,
  { revalidate = 60, tags }: FetchOptions = {},
): Promise<T | null> {
  const url = `${STRAPI_URL}/api/${path.replace(/^\//, "")}`;
  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
      },
      next: {
        revalidate: revalidate === 0 ? 0 : revalidate,
        ...(tags ? { tags } : {}),
      },
    });
    if (!res.ok) {
      console.warn(`[strapi] ${res.status} ${res.statusText} on ${url}`);
      return null;
    }
    const json = (await res.json()) as { data: T };
    return json?.data ?? null;
  } catch (err) {
    console.warn(`[strapi] fetch failed for ${url}:`, err);
    return null;
  }
}

// ─── Media helpers ───────────────────────────────────────────────────

export type StrapiMedia = {
  id: number;
  url: string;
  width?: number;
  height?: number;
  alternativeText?: string | null;
  name?: string;
} | null;

/** Resolve a Strapi media `url` to an absolute URL (Strapi may return relative paths in local dev). */
export function strapiImageUrl(media: StrapiMedia | undefined | null): string | null {
  if (!media?.url) return null;
  if (media.url.startsWith("http")) return media.url;
  return `${STRAPI_URL}${media.url}`;
}

// ─── Existing domain types ───────────────────────────────────────────

export type StrapiFeature = {
  id: number;
  label: string;
  value: string;
};

export type StrapiAccountTier = {
  id: number;
  documentId: string;
  name: string;
  price: string;
  unit: string;
  featured: boolean;
  order: number;
  ctaLabel: string;
  ctaHref: string;
  features: StrapiFeature[];
};

export type StrapiFaq = {
  id: number;
  documentId: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
};

// ─── New domain types ────────────────────────────────────────────────

export type StrapiTagline = { id: number; label: string };
export type StrapiFeatureItem = {
  id: number;
  iconKey:
    | "transparency"
    | "assets"
    | "leverage"
    | "deposits"
    | "learning"
    | "social";
  title: string;
};

export type StrapiHomepage = {
  id: number;
  documentId: string;

  heroTitle: string;
  heroSubtitle: string;
  heroTaglines: StrapiTagline[];
  heroCtaPrimaryLabel: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryLabel: string;
  heroCtaSecondaryHref: string;

  featuresBadge: string;
  featuresTitle: string;
  featuresDescription: string;
  featureItems: StrapiFeatureItem[];

  marketsBadge: string;
  marketsTitlePrefix: string;
  marketsTitleAccent: string;
  marketsDescription: string;

  platformsBadge: string;
  platformsTitle: string;
  platformsDescription: string;

  accountsBadge: string;
  accountsTitle: string;
  accountsDescription: string;

  stepsBadge: string;
  stepsTitle: string;

  awardsBadge: string;
  awardsTitle: string;
  awardsDescription: string;

  journeyBadge: string;
  journeyTitle: string;
  journeyDescription: string;

  testimonialsBadge: string;
  testimonialsTitle: string;

  ctaBadge: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaFooterText: string;
  ctaButton1Label: string;
  ctaButton1Href: string;
  ctaButton2Label: string;
  ctaButton2Href: string;
  ctaButton3Label: string;
  ctaButton3Href: string;
};

export type StrapiMarket = {
  id: number;
  documentId: string;
  slug: string;
  name: string;
  description: string;
  image: StrapiMedia;
  order: number;
};

export type StrapiPlatform = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  size: "small" | "large";
  row: number;
  order: number;
  mockupImage: StrapiMedia;
  iconImage: StrapiMedia;
};

export type StrapiStep = {
  id: number;
  documentId: string;
  number: number;
  title: string;
  description: string;
  image: StrapiMedia;
  order: number;
};

export type StrapiAward = {
  id: number;
  documentId: string;
  title: string;
  image: StrapiMedia;
  order: number;
};

export type StrapiTestimonial = {
  id: number;
  documentId: string;
  name: string;
  role: string;
  initials: string;
  quote: string;
  avatar?: StrapiMedia;
  order: number;
};

export type StrapiJourneyCard = {
  id: number;
  documentId: string;
  label: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  row: "row1" | "row2";
  size: "small" | "large" | "equal";
  order: number;
};

// ─── Domain queries ──────────────────────────────────────────────────

export function getAccountTiers() {
  return strapiFetch<StrapiAccountTier[]>(
    "account-tiers?populate=features&sort=order:asc",
    { tags: ["account-tiers"] },
  );
}

export function getFaqs() {
  return strapiFetch<StrapiFaq[]>("faqs?sort=order:asc", { tags: ["faqs"] });
}

export function getHomepage() {
  return strapiFetch<StrapiHomepage>("homepage?populate=*", {
    tags: ["homepage"],
  });
}

export function getMarkets() {
  return strapiFetch<StrapiMarket[]>(
    "markets?populate=image&sort=order:asc",
    { tags: ["markets"] },
  );
}

export function getPlatforms() {
  return strapiFetch<StrapiPlatform[]>(
    "platforms?populate=mockupImage&populate=iconImage&sort=order:asc",
    { tags: ["platforms"] },
  );
}

export function getSteps() {
  return strapiFetch<StrapiStep[]>(
    "steps?populate=image&sort=order:asc",
    { tags: ["steps"] },
  );
}

export function getAwards() {
  return strapiFetch<StrapiAward[]>(
    "awards?populate=image&sort=order:asc",
    { tags: ["awards"] },
  );
}

export function getTestimonials() {
  return strapiFetch<StrapiTestimonial[]>(
    "testimonials?populate=avatar&sort=order:asc",
    { tags: ["testimonials"] },
  );
}

export function getJourneyCards() {
  return strapiFetch<StrapiJourneyCard[]>(
    "journey-cards?sort=order:asc",
    { tags: ["journey-cards"] },
  );
}
