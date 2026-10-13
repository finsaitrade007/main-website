/**
 * Derived blog data: ordering, categories, pagination, related posts, the
 * article outline (heading ids + table of contents), CTA and disclaimer
 * defaults.
 *
 * Kept separate from blogs.ts so adding a post never touches logic.
 */

import { BLOG_POSTS, type BlogCta, type BlogPost } from "@/lib/blogs";

export const BLOG_PAGE_SIZE = 6;

export const REGISTER_URL = "https://fx.finsaitrade.com/auth/register";

/* -------------------------------- Ordering -------------------------------- */

const publishedTime = (p: BlogPost) => Date.parse(p.publishedAt ?? "1970-01-01");

/** All posts, newest first. Ties keep their order in blogs.ts. */
export function getSortedPosts(): BlogPost[] {
  return BLOG_POSTS.map((post, index) => ({ post, index }))
    .sort((a, b) => publishedTime(b.post) - publishedTime(a.post) || a.index - b.index)
    .map(({ post }) => post);
}

/* ------------------------------- Categories ------------------------------- */

export function categorySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type BlogCategory = { name: string; slug: string; count: number };

/** Categories in use, most posts first. */
export function getCategories(): BlogCategory[] {
  const counts = new Map<string, number>();
  for (const post of BLOG_POSTS) counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  return [...counts]
    .map(([name, count]) => ({ name, slug: categorySlug(name), count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getCategoryBySlug(slug: string | undefined): BlogCategory | null {
  if (!slug) return null;
  return getCategories().find((c) => c.slug === slug) ?? null;
}

/** /blogs listing URL with only the non-default params set. */
export function blogsHref(opts: { category?: string | null; page?: number } = {}): string {
  const params = new URLSearchParams();
  if (opts.category) params.set("category", opts.category);
  if (opts.page && opts.page > 1) params.set("page", String(opts.page));
  const qs = params.toString();
  return qs ? `/blogs?${qs}` : "/blogs";
}

export function pageCount(total: number): number {
  return Math.max(1, Math.ceil(total / BLOG_PAGE_SIZE));
}

/* ------------------------------ Related posts ----------------------------- */

/** Same-category posts first (newest first), then the newest of the rest. */
export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const others = getSortedPosts().filter((p) => p.slug !== post.slug);
  const same = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...same, ...rest].slice(0, count);
}

/* ------------------------------ Article outline --------------------------- */

export type TocEntry = { id: string; text: string; level: 2 | 3 };

export type PostOutline = {
  toc: TocEntry[];
  /** Id for each section's wrapper, by section index. */
  sectionIds: string[];
  /** Id for each subheading block, keyed `${sectionIndex}:${blockIndex}`. */
  subheadingIds: Record<string, string>;
};

export function slugifyHeading(text: string): string {
  return (
    text
      .toLowerCase()
      // "1. Fed Rate Pressure" → "fed-rate-pressure": list numbering would
      // make anchors fragile and start ids with a digit.
      .replace(/^\s*(?:step\s+)?\d{1,2}[.):]\s+/, "")
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80)
      .replace(/-+$/, "") || "section"
  );
}

export const FAQ_ID = "faq";
export const INTRO_ID = "introduction";

/**
 * Stable, unique ids for every heading, plus the table of contents built from
 * them. The article renderer and the TOC both read this, so links always
 * match their targets.
 */
export function getPostOutline(post: BlogPost): PostOutline {
  // Ids already used elsewhere on the post page.
  const used = new Set<string>([FAQ_ID, "author", "related-heading"]);
  const unique = (base: string) => {
    let id = base;
    for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
    used.add(id);
    return id;
  };

  const toc: TocEntry[] = [];
  const sectionIds: string[] = [];
  const subheadingIds: Record<string, string> = {};

  post.sections.forEach((section, si) => {
    if (section.heading) {
      const id = unique(slugifyHeading(section.heading));
      sectionIds.push(id);
      toc.push({ id, text: section.heading, level: 2 });
    } else {
      const id = si === 0 ? unique(INTRO_ID) : unique(`section-${si + 1}`);
      sectionIds.push(id);
      if (si === 0) toc.push({ id, text: "Introduction", level: 2 });
    }
    section.blocks.forEach((block, bi) => {
      if (block.type !== "subheading") return;
      const id = unique(slugifyHeading(block.text));
      subheadingIds[`${si}:${bi}`] = id;
      toc.push({ id, text: block.text, level: 3 });
    });
  });

  if (post.faqs?.length) toc.push({ id: FAQ_ID, text: "Frequently Asked Questions", level: 2 });

  return { toc, sectionIds, subheadingIds };
}

/* ------------------------------ Inline markup ----------------------------- */

/** Post text with `**bold**` and `[label](href)` reduced to plain text. */
export function stripInlineMarkup(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
}

/* -------------------------------- Byline ---------------------------------- */

/** True when updatedAt is set and is a different day from publishedAt. */
export function hasUpdate(post: BlogPost): boolean {
  return Boolean(post.updatedAt && post.updatedAt !== post.publishedAt);
}

/* ------------------------------ CTA defaults ------------------------------ */

const CATEGORY_CTA: Record<string, BlogCta> = {
  "News & Analysis": {
    heading: "Trade the markets behind the analysis",
    text: "Access forex, metals, indices, crypto and more from one MetaTrader 5 account.",
    primary: { label: "Start Trading Today", href: REGISTER_URL },
    secondary: { label: "Explore Trading Platforms", href: "/platform" },
  },
  "Trading Education": {
    heading: "Ready to put this into practice?",
    text: "Compare account types and explore the MT5 platform before you place your first trade.",
    primary: { label: "Open a Trading Account", href: REGISTER_URL },
    secondary: { label: "Compare Trading Accounts", href: "/accounts" },
  },
};

const GENERIC_CTA: BlogCta = CATEGORY_CTA["Trading Education"];

export function getPostCta(post: BlogPost): BlogCta {
  return post.cta ?? CATEGORY_CTA[post.category] ?? GENERIC_CTA;
}

/* ------------------------------- Disclaimer ------------------------------- */

/**
 * Used when a post has no disclaimer of its own. This is the wording already
 * carried by the most posts on the site; replace it here once Compliance signs
 * off a single standard text.
 */
export const DEFAULT_DISCLAIMER =
  "Trading forex, cryptocurrencies, metals, indices, and CFDs involves significant risk and may not be suitable for all investors. Market volatility can lead to substantial losses. This content is provided for educational purposes only and should not be considered financial or investment advice. Traders should conduct independent research and assess their risk tolerance before participating in financial markets.";

export function getDisclaimer(post: BlogPost): string {
  return post.disclaimer ?? DEFAULT_DISCLAIMER;
}
