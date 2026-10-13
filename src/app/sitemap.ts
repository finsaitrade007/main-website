import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blogs";
import { blogsHref, categorySlug, getCategories } from "@/lib/blog-helpers";
import { PAGE_SEO } from "@/lib/page-seo";
import { SITE_URL } from "@/lib/site";

/**
 * Sitemap for the marketing site.
 *
 * Routes are derived from `PAGE_SEO` so a page cannot be added to the site
 * without also appearing here — `PAGE_SEO` is already the single source of
 * truth for canonical paths, and `generateMetadata` on every page reads from
 * it. Blog detail routes are appended from `BLOG_POSTS`, matching
 * `generateStaticParams` in `app/blogs/[slug]/page.tsx`, along with one
 * listing URL per blog category (/blogs?category=…).
 */

/** Pages that change often enough to be worth re-crawling frequently. */
const HIGH_PRIORITY = new Set<string>([
  "/",
  "/accounts",
  "/platform",
  "/mt5",
  "/social-trading",
  "/partnerships",
  "/payments",
]);

/** Legal / policy pages: stable content, low crawl priority. */
const LEGAL_PATHS = new Set<string>([
  "/privacy-policy",
  "/terms-conditions",
  "/risk-disclosure",
  "/aml-policy",
  "/refund-policy",
  "/client-agreement",
  "/upfront-disclosure",
  "/complaints-management",
  "/conflicts-of-interest-policy",
]);

function absolute(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = Object.values(PAGE_SEO).map((page) => {
    const isLegal = LEGAL_PATHS.has(page.path);
    return {
      url: absolute(page.path),
      lastModified: now,
      changeFrequency: isLegal
        ? ("yearly" as const)
        : HIGH_PRIORITY.has(page.path)
          ? ("weekly" as const)
          : ("monthly" as const),
      priority: page.path === "/" ? 1 : isLegal ? 0.3 : HIGH_PRIORITY.has(page.path) ? 0.8 : 0.6,
    };
  });

  const lastChange = (post: (typeof BLOG_POSTS)[number]) => {
    const date = post.updatedAt ?? post.publishedAt;
    return date ? new Date(date) : now;
  };

  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: absolute(`/blogs/${post.slug}`),
    lastModified: lastChange(post),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // A category listing changes whenever one of its posts does.
  const categories: MetadataRoute.Sitemap = getCategories().map((category) => {
    const times = BLOG_POSTS.filter((p) => categorySlug(p.category) === category.slug).map((p) =>
      lastChange(p).getTime(),
    );
    return {
      url: absolute(blogsHref({ category: category.slug })),
      lastModified: new Date(Math.max(...times)),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    };
  });

  return [...pages, ...categories, ...posts];
}
