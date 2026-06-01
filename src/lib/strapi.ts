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
export function strapiImageUrl(_media: StrapiMedia | undefined | null): string | null {
  return null;
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
  mockupImage: StrapiMedia;
  iconImage: StrapiMedia;
  localMockupImage?: string;
  localIconImage?: string;
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

export type StrapiNavItem = {
  id: number;
  documentId: string;
  label: string;
  href: string;
  order: number;
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
  image?: StrapiMedia;
};
export type StrapiPaymentMethod = {
  id: number;
  name: string;
  description?: string | null;
  fee?: string | null;
  processingTime?: string | null;
  icon?: StrapiMedia;
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
  whyFeatures: StrapiIconFeature[];

  calculatorBadge: string;
  calculatorTitle: string;
  calculatorDescription: string;

  statsBadge: string;
  statsTitle: string;
  statsDescription: string;
  stats: StrapiStat[];

  howToBadge: string;
  howToTitle: string;
  howToDescription: string;
  howToSteps: StrapiIconFeature[];

  marketingBadge: string;
  marketingTitle: string;
  marketingDescription: string;
  marketingItems: StrapiIconFeature[];
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

// ─── Page single-type queries ────────────────────────────────────────

export function getAboutPage() {
  return strapiFetch<StrapiAboutPage>("about-page?populate=*", {
    tags: ["about-page"],
  });
}

export function getCareersPage() {
  return strapiFetch<StrapiCareersPage>("careers-page?populate=*", {
    tags: ["careers-page"],
  });
}

export function getRewardsPage() {
  return strapiFetch<StrapiRewardsPage>(
    "rewards-page?populate[promotionCards]=*&populate[loyaltyTiers]=*&populate[loyaltyPerks]=*&populate[ibFeatures]=*&populate[ibStats]=*",
    { tags: ["rewards-page"] },
  );
}

export function getToolsPage() {
  return strapiFetch<StrapiToolsPage>(
    "tools-page?populate[builtForFeatures]=*&populate[chartingCards][populate]=image&populate[riskCards][populate]=image&populate[strategyCards][populate]=image&populate[communityCards][populate]=image",
    { tags: ["tools-page"] },
  );
}

export function getAccountsPage() {
  return strapiFetch<StrapiAccountsPage>(
    "accounts-page?populate[whyFeatures]=*&populate[benefitsCards][populate]=bullets",
    { tags: ["accounts-page"] },
  );
}

export function getPaymentsPage() {
  return strapiFetch<StrapiPaymentsPage>(
    "payments-page?populate[methods][populate]=icon",
    { tags: ["payments-page"] },
  );
}

export function getServicesPage() {
  return strapiFetch<StrapiServicesPage>(
    "services-page?populate[features]=*&populate[suiteItems]=*",
    { tags: ["services-page"] },
  );
}

export function getPartnershipsPage() {
  return strapiFetch<StrapiPartnershipsPage>(
    "partnerships-page?populate[whyFeatures]=*&populate[stats]=*&populate[howToSteps]=*&populate[marketingItems]=*",
    { tags: ["partnerships-page"] },
  );
}

export function getNavItems() {
  return strapiFetch<StrapiNavItem[]>("nav-items?sort=order:asc", { tags: ["nav-items"] });
}

export function getBlogsPage() {
  return strapiFetch<StrapiBlogsPage>(
    "blogs-page?populate[newsArticles][populate]=image",
    { tags: ["blogs-page"] },
  );
}

export async function fetchOgImage(url: string): Promise<string | null> {
  if (!url || url === "#" || url.startsWith("/")) return null;
  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 },
      headers: { "User-Agent": "facebookexternalhit/1.1" },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const m =
      html.match(/property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
      html.match(/content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
    return m?.[1] ?? null;
  } catch {
    return null;
  }
}
