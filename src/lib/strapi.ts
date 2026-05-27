/**
 * Tiny typed Strapi v5 client for the Finsai marketing site.
 *
 * Strapi v5 returns:
 *   { data: T | T[], meta: {...} }
 *
 * We strip the wrapper and return just `data` (or `null` on failure).
 * All requests are server-side (this file should only be imported from
 * server components, route handlers, or `generateMetadata`).
 */

const STRAPI_URL =
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

// ─── Types ─────────────────────────────────────────────────────────────

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

// ─── Domain queries ────────────────────────────────────────────────────

export function getAccountTiers() {
  return strapiFetch<StrapiAccountTier[]>(
    "account-tiers?populate=features&sort=order:asc",
    { tags: ["account-tiers"] },
  );
}

export function getFaqs() {
  return strapiFetch<StrapiFaq[]>("faqs?sort=order:asc", { tags: ["faqs"] });
}
