"use client";

import { Fragment, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import SmartLink from "@/components/SmartLink";
import BlogCard, { type BlogCardData } from "./BlogCard";
import {
  BLOG_PAGE_SIZE,
  REGISTER_URL,
  blogsHref,
  pageCount,
  type BlogCategory,
} from "@/lib/blog-helpers";
import s from "./blog.module.css";

export type ListingCard = BlogCardData & {
  slug: string;
  categorySlug: string;
  /** Lower-cased title + excerpt + category, for client-side search. */
  searchText: string;
};

type Props = {
  /** Every post, newest first. */
  cards: ListingCard[];
  categories: BlogCategory[];
  /** Category slug from ?category=, or null for all. */
  activeCategory: string | null;
  /** Page from ?page=, already validated on the server. */
  page: number;
};

/** Page numbers with gaps once there are more than seven pages. */
function pageList(current: number, total: number): (number | "gap")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const keep = new Set([1, total, current - 1, current, current + 1]);
  const out: (number | "gap")[] = [];
  for (let n = 1; n <= total; n++) {
    if (keep.has(n)) out.push(n);
    else if (out[out.length - 1] !== "gap") out.push("gap");
  }
  return out;
}

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d={dir === "prev" ? "M10 6H2M6 2 2 6l4 4" : "M2 6h8M6 2l4 4-4 4"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Numbered pagination. In URL mode (`hrefFor`) every page is a real, crawlable
 * link (/blogs?page=2); in search mode (`onSelect`) pages switch in place.
 */
function Pagination({
  page,
  total,
  hrefFor,
  onSelect,
}: {
  page: number;
  total: number;
  hrefFor?: (n: number) => string;
  onSelect?: (n: number) => void;
}) {
  if (total <= 1) return null;

  const item = (n: number, label: ReactNode, opts: { current?: boolean; aria?: string } = {}) => {
    const cls = [s.pageLink, opts.current ? s.pageCurrent : ""].filter(Boolean).join(" ");
    if (opts.current) {
      return (
        <span className={cls} aria-current="page" aria-label={opts.aria}>
          {label}
        </span>
      );
    }
    return hrefFor ? (
      <Link href={hrefFor(n)} scroll={false} className={cls} aria-label={opts.aria}>
        {label}
      </Link>
    ) : (
      <button type="button" className={cls} aria-label={opts.aria} onClick={() => onSelect?.(n)}>
        {label}
      </button>
    );
  };

  const edge = (dir: "prev" | "next") => {
    const target = dir === "prev" ? page - 1 : page + 1;
    const content = (
      <>
        {dir === "prev" ? <Arrow dir="prev" /> : null}
        <span className={s.pageLabel}>{dir === "prev" ? "Previous" : "Next"}</span>
        {dir === "next" ? <Arrow dir="next" /> : null}
      </>
    );
    const aria = dir === "prev" ? "Previous page" : "Next page";
    if (target < 1 || target > total) {
      return (
        <span className={`${s.pageLink} ${s.pageDisabled}`} aria-disabled="true">
          {content}
        </span>
      );
    }
    return item(target, content, { aria });
  };

  return (
    <nav className={s.pagination} aria-label="Blog pages">
      {edge("prev")}
      {pageList(page, total).map((n, i) =>
        n === "gap" ? (
          <span key={`gap-${i}`} className={s.cardMeta} aria-hidden>
            …
          </span>
        ) : (
          <Fragment key={n}>{item(n, n, { current: n === page, aria: `Page ${n}` })}</Fragment>
        ),
      )}
      {edge("next")}
    </nav>
  );
}

export default function BlogListing({ cards, categories, activeCategory, page }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [query, setQuery] = useState("");
  const [searchPage, setSearchPage] = useState(1);

  const inCategory = useMemo(
    () => (activeCategory ? cards.filter((c) => c.categorySlug === activeCategory) : cards),
    [cards, activeCategory],
  );

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;
  const results = useMemo(
    () => (searching ? inCategory.filter((c) => c.searchText.includes(q)) : inCategory),
    [inCategory, searching, q],
  );

  const total = pageCount(results.length);
  const current = Math.min(searching ? searchPage : page, total);
  const start = (current - 1) * BLOG_PAGE_SIZE;
  const visible = results.slice(start, start + BLOG_PAGE_SIZE);
  const activeName = categories.find((c) => c.slug === activeCategory)?.name;

  // Bring the grid back into view when the page or category changes — but
  // not on first load, where the visitor may have arrived at the hero.
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    sectionRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, [page, activeCategory, searchPage]);

  const status = searching
    ? `${results.length} ${results.length === 1 ? "result" : "results"} for “${query.trim()}”`
    : results.length > 0
      ? `Showing ${start + 1}–${start + visible.length} of ${results.length} ${
          activeName ? `${activeName} articles` : "articles"
        }`
      : "";

  return (
    <section id="articles" ref={sectionRef} className={s.listing} aria-labelledby="blogs-heading">
      <div className={s.listingInner}>
        <div className={s.listingHead}>
          <h2 id="blogs-heading" className={s.listingTitle}>
            {activeName ?? "Blogs"}
          </h2>
          <div className={s.search} role="search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" aria-hidden>
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="search"
              className={s.searchInput}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSearchPage(1);
              }}
              placeholder="Search for a keyword"
              aria-label="Search articles"
            />
            {query ? (
              <button type="button" className={s.searchClear} onClick={() => setQuery("")} aria-label="Clear search">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M3.5 3.5l7 7m0-7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            ) : null}
          </div>
        </div>

        <nav className={s.chips} aria-label="Blog categories">
          <Link
            href={blogsHref()}
            scroll={false}
            className={`${s.chip} ${!activeCategory ? s.chipActive : ""}`}
            aria-current={!activeCategory ? "page" : undefined}
          >
            All articles <span className={s.chipCount}>{cards.length}</span>
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={blogsHref({ category: c.slug })}
              scroll={false}
              className={`${s.chip} ${activeCategory === c.slug ? s.chipActive : ""}`}
              aria-current={activeCategory === c.slug ? "page" : undefined}
            >
              {c.name} <span className={s.chipCount}>{c.count}</span>
            </Link>
          ))}
        </nav>

        <hr className={s.divider} />

        {visible.length > 0 ? (
          <div className={s.grid}>
            {visible.map((card, i) => (
              <BlogCard key={card.slug} post={card} priority={!searching && current === 1 && i < 3} />
            ))}
          </div>
        ) : (
          <div className={s.empty}>
            <p>No articles found for “{query.trim()}”.</p>
            <button type="button" className={s.emptyButton} onClick={() => setQuery("")}>
              Clear search
            </button>
          </div>
        )}

        {status ? (
          <p className={s.status} aria-live="polite">
            {status}
          </p>
        ) : null}

        {searching ? (
          <Pagination page={current} total={total} onSelect={setSearchPage} />
        ) : (
          <Pagination page={current} total={total} hrefFor={(n) => blogsHref({ category: activeCategory, page: n })} />
        )}

        <div className={s.listingCta}>
          <SmartLink href={REGISTER_URL} className={s.ctaPrimary}>
            Start Trading Today
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
