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
  opts: FetchOptions = {},
): Promise<T | null> {
  return _strapiFetchReal<T>(path, opts);
}

export async function _strapiFetchReal<T>(
  path: string,
  { revalidate = 60, tags }: FetchOptions = {},
): Promise<T | null> {
  const url = `${STRAPI_URL}/api/${path.replace(/^\//, "")}`;
  const cacheSeconds =
    process.env.NODE_ENV === "development" ? 0 : revalidate;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
      },
      next: {
        revalidate: cacheSeconds === 0 ? 0 : cacheSeconds,
        ...(tags ? { tags } : {}),
      },
    });
    clearTimeout(timer);
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

  seo?: StrapiSeo;
};

export type StrapiMarket = {
  id: number;
  documentId: string;
  slug: string;
  name: string;
  description: string;
  localImage?: string;
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
  localMockupImage?: string;
  localIconImage?: string;
};

export type StrapiStep = {
  id: number;
  documentId: string;
  number: number;
  title: string;
  description: string;
  order: number;
};

export type StrapiAward = {
  id: number;
  documentId: string;
  title: string;
  order: number;
};

export type StrapiTestimonial = {
  id: number;
  documentId: string;
  name: string;
  role: string;
  initials: string;
  quote: string;
  localAvatar?: string;
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

export type StrapiNavItem = {
  id: number;
  documentId: string;
  label: string;
  href: string;
  order: number;
};

// ─── SEO types ───────────────────────────────────────────────────────

export type StrapiMetaSocial = {
  id: number;
  socialNetwork: "Facebook" | "Twitter" | "LinkedIn";
  title: string;
  description: string;
};

export type StrapiSeo = {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords?: string | null;
  metaRobots?: string | null;
  canonicalURL?: string | null;
  metaViewport?: string | null;
  structuredData?: Record<string, unknown> | null;
  metaSocial?: StrapiMetaSocial[];
};

// ─── Shared reusable component types ─────────────────────────────────

export type StrapiPoint = { id: number; title: string; description: string };
export type StrapiStat = { id: number; value: string; label: string };
export type StrapiIconFeature = {
  id: number;
  title: string;
  description?: string | null;
  iconKey?: string | null;
};
export type StrapiBulletPoint = { id: number; key: string; value: string };
export type StrapiBenefitCard = {
  id: number;
  title: string;
  description?: string | null;
  footer?: string | null;
  iconKey?: string | null;
  bullets?: StrapiBulletPoint[];
};
export type StrapiImageCard = {
  id: number;
  title: string;
  description?: string | null;
  href?: string | null;
};
export type StrapiPaymentMethod = {
  id: number;
  name: string;
  description?: string | null;
  fee?: string | null;
  processingTime?: string | null;
};

// ─── New page single-type domain types ───────────────────────────────

export type StrapiAboutPage = {
  id: number;
  documentId: string;

  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;

  recognitionTitlePrefix: string;
  recognitionTitleAccent: string;
  recognitionDescription: string;
  recognitionStatPrimaryValue: string;
  recognitionStatPrimaryLabel: string;
  recognitionStatSecondaryValue: string;
  recognitionStatSecondaryLabel: string;

  builtBadge: string;
  builtTitle: string;
  builtDescription: string;
  builtPoints: StrapiPoint[];

  growthBadge: string;
  growthTitle: string;
  growthDescription1: string;
  growthDescription2: string;
  growthCtaLabel: string;
  growthCtaHref: string;
  growthStats: StrapiStat[];

  ctaBadge: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;

  seo?: StrapiSeo;
};

export type StrapiCareersPage = {
  id: number;
  documentId: string;

  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;

  workspaceTitle: string;
  workspaceDescription: string;
  workspaceBenefits: StrapiPoint[];

  formTitle: string;
  formSubmitLabel: string;
  formTermsText: string;

  seo?: StrapiSeo;
};

export type StrapiRewardsPage = {
  id: number;
  documentId: string;

  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;

  promotionsTitle: string;
  promotionsDescription: string;
  promotionsCtaLabel: string;
  promotionsCtaHref: string;
  promotionCards: StrapiIconFeature[];

  loyaltyTitle: string;
  loyaltyDescription: string;
  loyaltyCtaLabel: string;
  loyaltyCtaHref: string;
  loyaltyTiers: StrapiIconFeature[];
  loyaltyPerks: StrapiTagline[];

  ibTitle: string;
  ibDescription: string;
  ibCtaLabel: string;
  ibCtaHref: string;
  ibFeatures: StrapiIconFeature[];
  ibStats: StrapiStat[];

  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
};

export type StrapiToolsPage = {
  id: number;
  documentId: string;

  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroProofText: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;

  builtForBadge: string;
  builtForTitle: string;
  builtForDescription: string;
  builtForFeatures: StrapiIconFeature[];

  chartingTitle: string;
  chartingDescription: string;
  chartingCards: StrapiImageCard[];

  marketDataTitle: string;
  marketDataDescription: string;

  riskTitle: string;
  riskDescription: string;
  riskCards: StrapiImageCard[];

  strategyTitle: string;
  strategyDescription: string;
  strategyCards: StrapiImageCard[];

  communityTitle: string;
  communityDescription: string;
  communityCards: StrapiImageCard[];

  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
};

export type StrapiAccountsPage = {
  id: number;
  documentId: string;

  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;

  compareTitle: string;
  compareDescription: string;

  whyBadge: string;
  whyTitle: string;
  whyDescription: string;
  whyFeatures: StrapiIconFeature[];

  onboardingBadge: string;
  onboardingTitle: string;
  onboardingDescription: string;

  benefitsBadge: string;
  benefitsTitle: string;
  benefitsDescription: string;
  benefitsCards: StrapiBenefitCard[];

  seo?: StrapiSeo;
};

export type StrapiPaymentsPage = {
  id: number;
  documentId: string;

  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;

  trustText: string;

  methodsBadge: string;
  methodsTitle: string;
  methodsDescription: string;
  methods: StrapiPaymentMethod[];

  ctaBadge: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;

  seo?: StrapiSeo;
};

export type StrapiServicesPage = {
  id: number;
  documentId: string;

  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;

  featuresBadge: string;
  featuresTitle: string;
  featuresDescription: string;
  features: StrapiIconFeature[];

  platformsBadge: string;
  platformsTitle: string;
  platformsDescription: string;

  suiteBadge: string;
  suiteTitle: string;
  suiteDescription: string;
  suiteItems: StrapiIconFeature[];

  seo?: StrapiSeo;
};

export type StrapiPartnershipsPage = {
  id: number;
  documentId: string;

  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;

  whyBadge: string;
  whyTitle: string;
  whyDescription: string;
  whyCtaLabel: string;
  whyCtaHref: string;
  whyFeatures: StrapiIconFeature[];

  calculatorBadge: string;
  calculatorTitle: string;
  calculatorDescription: string;

  statsBadge: string;
  statsTitle: string;
  statsDescription: string;
  statsCtaLabel: string;
  statsCtaHref: string;
  stats: StrapiStat[];

  howToBadge: string;
  howToTitle: string;
  howToDescription: string;
  howToSteps: StrapiIconFeature[];

  marketingBadge: string;
  marketingTitle: string;
  marketingDescription: string;
  marketingItems: StrapiIconFeature[];

  seo?: StrapiSeo;
};

export type StrapiBlogsPage = {
  id: number;
  documentId: string;

  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;

  newsBadge: string;
  newsTitle: string;
  newsDescription: string;
  newsArticles: StrapiImageCard[];

  seo?: StrapiSeo;
};

export type StrapiContactusPage = {
  id: number;
  documentId: string;

  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;

  supportTitle: string;
  supportDescription: string;
  supportBenefits: StrapiPoint[];

  formSubmitLabel: string;
  formTermsText: string;

  seo?: StrapiSeo;
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
  return strapiFetch<StrapiHomepage>(
    "homepage?populate[heroTaglines]=*&populate[featureItems]=*&populate[seo][populate]=*",
    { tags: ["homepage"] },
  );
}

export function getMarkets() {
  return strapiFetch<StrapiMarket[]>("markets?sort=order:asc", {
    tags: ["markets"],
  });
}

export function getPlatforms() {
  return strapiFetch<StrapiPlatform[]>("platforms?sort=order:asc", {
    tags: ["platforms"],
  });
}

export function getSteps() {
  return strapiFetch<StrapiStep[]>("steps?sort=order:asc", {
    tags: ["steps"],
  });
}

export function getAwards() {
  return strapiFetch<StrapiAward[]>("awards?sort=order:asc", {
    tags: ["awards"],
  });
}

export function getTestimonials() {
  return strapiFetch<StrapiTestimonial[]>("testimonials?sort=order:asc", {
    tags: ["testimonials"],
  });
}

export function getJourneyCards() {
  return strapiFetch<StrapiJourneyCard[]>(
    "journey-cards?sort=order:asc",
    { tags: ["journey-cards"] },
  );
}

// ─── Page single-type queries ────────────────────────────────────────

export function getAboutPage() {
  return strapiFetch<StrapiAboutPage>(
    "about-page?populate[builtPoints]=*&populate[growthStats]=*&populate[seo][populate]=*",
    { tags: ["about-page"] },
  );
}

export function getCareersPage() {
  return strapiFetch<StrapiCareersPage>(
    "careers-page?populate[workspaceBenefits]=*&populate[seo][populate]=*",
    { tags: ["careers-page"] },
  );
}

export function getRewardsPage() {
  return strapiFetch<StrapiRewardsPage>(
    "rewards-page?populate[promotionCards]=*&populate[loyaltyTiers]=*&populate[loyaltyPerks]=*&populate[ibFeatures]=*&populate[ibStats]=*",
    { tags: ["rewards-page"] },
  );
}

export function getToolsPage() {
  return strapiFetch<StrapiToolsPage>(
    "tools-page?populate[builtForFeatures]=*&populate[chartingCards]=*&populate[riskCards]=*&populate[strategyCards]=*&populate[communityCards]=*",
    { tags: ["tools-page"] },
  );
}

export function getAccountsPage() {
  return strapiFetch<StrapiAccountsPage>(
    "accounts-page?populate[whyFeatures]=*&populate[benefitsCards][populate]=bullets&populate[seo][populate]=*",
    { tags: ["accounts-page"] },
  );
}

export function getPaymentsPage() {
  return strapiFetch<StrapiPaymentsPage>(
    "payments-page?populate[methods][populate]=icon&populate[seo][populate]=*",
    { tags: ["payments-page"] },
  );
}

export function getServicesPage() {
  return strapiFetch<StrapiServicesPage>(
    "services-page?populate[features]=*&populate[suiteItems]=*&populate[seo][populate]=*",
    { tags: ["services-page"] },
  );
}

export function getPartnershipsPage() {
  return strapiFetch<StrapiPartnershipsPage>(
    "partnerships-page?populate[whyFeatures]=*&populate[stats]=*&populate[howToSteps]=*&populate[marketingItems]=*&populate[seo][populate]=*",
    { tags: ["partnerships-page"] },
  );
}

export function getNavItems() {
  return strapiFetch<StrapiNavItem[]>("nav-items?sort=order:asc", { tags: ["nav-items"] });
}

export function getBlogsPage() {
  return strapiFetch<StrapiBlogsPage>(
    "blogs-page?populate[newsArticles]=*&populate[seo][populate]=*",
    { tags: ["blogs-page"] },
  );
}

export function getContactusPage() {
  return strapiFetch<StrapiContactusPage>(
    "contactus-page?populate[supportBenefits]=*&populate[seo][populate]=*",
    { tags: ["contactus-page"] },
  );
}

export async function fetchOgImage(_url: string): Promise<string | null> {
  return null;
}

// ─── SEO → Next.js Metadata adapter ──────────────────────────────────

import type { Metadata } from "next";

/**
 * Convert a Strapi `shared.seo` payload into the Next.js `Metadata` object.
 * Falls back gracefully when fields are missing so the calling page can pass
 * its own defaults via the second argument.
 */
export function seoToMetadata(
  seo: StrapiSeo | undefined | null,
  fallback: { title: string; description: string; url?: string },
): Metadata {
  const title = seo?.metaTitle?.trim() || fallback.title;
  const description = seo?.metaDescription?.trim() || fallback.description;
  const url = seo?.canonicalURL || fallback.url;
  const robots = seo?.metaRobots?.trim() || "index, follow";
  const keywords =
    typeof seo?.keywords === "string" && seo.keywords.trim().length > 0
      ? seo.keywords
          .split(/[,\n]/)
          .map((k) => k.trim())
          .filter(Boolean)
      : undefined;

  const facebook = seo?.metaSocial?.find(
    (s) => s.socialNetwork === "Facebook",
  );
  const twitter = seo?.metaSocial?.find((s) => s.socialNetwork === "Twitter");

  return {
    title,
    description,
    keywords,
    robots,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: facebook?.title ?? title,
      description: facebook?.description ?? description,
      url,
      siteName: "Finsai Trade",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: twitter?.title ?? title,
      description: twitter?.description ?? description,
    },
    other: seo?.structuredData
      ? {
          "structured-data": JSON.stringify(seo.structuredData),
        }
      : undefined,
  };
}
