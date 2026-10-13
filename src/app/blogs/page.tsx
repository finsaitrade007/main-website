import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogsHeroSection from "@/components/BlogsHeroSection";
import BlogsGridSection from "@/components/BlogsGridSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolveSeoText,
} from "@/lib/page-seo";
import { BLOG_POSTS } from "@/lib/blogs";
import {
  blogsHref,
  categorySlug,
  getCategoryBySlug,
  pageCount,
  type BlogCategory,
} from "@/lib/blog-helpers";
import { SITE_URL } from "@/lib/site";
import { getBlogsPage } from "@/lib/strapi";

type SearchParams = Promise<{ page?: string | string[]; category?: string | string[] }>;

type ListingView = { page: number; category: BlogCategory | null };

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

/** Meta descriptions for the category listings, keyed by category slug. */
const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "news-analysis":
    "Market news and analysis from Finsai Trade: macro events, weekly previews and the price moves that matter to active traders.",
  "trading-education":
    "Trading education from Finsai Trade: strategy, trading platforms, risk management and the habits behind consistent trading.",
};

/**
 * Reads ?category= and ?page=. Returns null for anything that doesn't exist
 * (unknown category, page 0, page past the end, non-numeric page) so those
 * URLs 404 instead of rendering duplicate or empty listings.
 */
function parseView(params: Awaited<SearchParams>): ListingView | null {
  const rawCategory = first(params.category);
  const rawPage = first(params.page);

  const category = rawCategory ? getCategoryBySlug(rawCategory) : null;
  if (rawCategory && !category) return null;

  const total = category
    ? BLOG_POSTS.filter((p) => categorySlug(p.category) === category.slug).length
    : BLOG_POSTS.length;

  if (rawPage === undefined) return { page: 1, category };
  if (!/^\d+$/.test(rawPage)) return null;
  const page = Number(rawPage);
  if (page < 1 || page > pageCount(total)) return null;
  return { page, category };
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const data = await getBlogsPage();
  const base = cmsPageMetadata(data?.seo, PAGE_SEO.blogs);
  const view = parseView(await searchParams);
  if (!view || (!view.category && view.page === 1)) return base;

  // Category views and later pages each get their own title, description and
  // self-referencing canonical, so they aren't treated as duplicates of /blogs.
  const label = view.category ? `${view.category.name} Articles` : "Blogs & Market News";
  const title = view.page > 1 ? `${label} – Page ${view.page} | Finsai Trade` : `${label} | Finsai Trade`;
  const intro = view.category
    ? (CATEGORY_DESCRIPTIONS[view.category.slug] ??
      `${view.category.name} articles from the Finsai Trade Knowledge Hub.`)
    : (base.description ?? PAGE_SEO.blogs.description);
  const description = view.page > 1 ? `Page ${view.page}. ${intro}` : intro;
  const url = `${SITE_URL}${blogsHref({ category: view.category?.slug, page: view.page })}`;

  return {
    ...base,
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { ...base.openGraph, title, description, url },
    twitter: { ...base.twitter, title, description },
  };
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const view = parseView(await searchParams);
  if (!view) notFound();

  const data = await getBlogsPage();
  const seo = resolveSeoText(data?.seo, PAGE_SEO.blogs);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.blogs.path}
        title={seo.title}
        description={seo.description}
      />
      <BlogsHeroSection />
      <BlogsGridSection page={view.page} category={view.category?.slug ?? null} />
    </>
  );
}
