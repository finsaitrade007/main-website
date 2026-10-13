import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageJsonLd from "@/components/PageJsonLd";
import AuthorBox from "@/components/blog/AuthorBox";
import BlogCard from "@/components/blog/BlogCard";
import BlogImage from "@/components/blog/BlogImage";
import Breadcrumbs, { type Crumb } from "@/components/blog/Breadcrumbs";
import CtaBanner from "@/components/blog/CtaBanner";
import TableOfContents from "@/components/blog/TableOfContents";
import s from "@/components/blog/blog.module.css";
import { getAuthor } from "@/lib/authors";
import {
  BLOG_POSTS,
  formatBlogDate,
  getBlogBySlug,
  type BlogBlock,
  type BlogPost,
} from "@/lib/blogs";
import {
  FAQ_ID,
  blogsHref,
  categorySlug,
  getDisclaimer,
  getPostCta,
  getPostOutline,
  getRelatedPosts,
  hasUpdate,
  stripInlineMarkup,
} from "@/lib/blog-helpers";
import { SITE_URL } from "@/lib/site";

/*
 * Single post template, top to bottom:
 *   breadcrumbs → hero (H1, description, byline, 16:9 image)
 *   → article body with table of contents (sticky sidebar on desktop,
 *     collapsible block below 1100px) → FAQ → author box → CTA → disclaimer
 *   → related articles.
 */

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) {
    return { title: "Blog Not Found | Finsai Trade" };
  }
  const title = post.metaTitle ?? post.title;
  const description = post.metaDescription ?? post.excerpt;
  const url = `${SITE_URL}/blogs/${post.slug}`;
  return {
    title: `${title} | Finsai Trade`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [post.image],
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: hasUpdate(post) ? post.updatedAt : undefined,
      section: post.category,
      authors: post.author ? [post.author] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.image],
    },
  };
}

/* ----------------------------- Inline markup ------------------------------ */

/**
 * Minimal inline markup for post text: `[label](href)` becomes a link and
 * `**text**` becomes bold. Everything else is plain text. Internal hrefs use
 * next/link; external ones open in a new tab.
 */
const INLINE_RE = /(\[[^\]]+\]\([^)]+\))|(\*\*[^*]+\*\*)/g;

function renderInline(text: string): ReactNode {
  const parts = text.split(INLINE_RE).filter((p) => p !== undefined && p !== "");
  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      return /^https?:\/\//.test(href) ? (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={s.inlineLink}>
          {label}
        </a>
      ) : (
        <Link key={i} href={href} className={s.inlineLink}>
          {label}
        </Link>
      );
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) {
      return (
        <strong key={i} className={s.strong}>
          {bold[1]}
        </strong>
      );
    }
    return part;
  });
}

/* ------------------------------ Body blocks ------------------------------- */

function Block({ block, headingId }: { block: BlogBlock; headingId?: string }) {
  switch (block.type) {
    case "paragraph":
      return <p className={s.p}>{renderInline(block.text)}</p>;
    case "bullets":
      return (
        <ul className={s.ul}>
          {block.items.map((item, i) => (
            <li key={i} className={s.li}>
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    case "subheading":
      return (
        <h3 id={headingId} className={s.h3}>
          {block.text}
        </h3>
      );
    case "table":
      return (
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "image":
      return (
        <figure className={s.figure}>
          <Image
            src={block.src}
            alt={block.alt}
            width={1400}
            height={788}
            sizes="(max-width: 860px) 100vw, 780px"
            className={s.figureImg}
          />
          {block.caption ? <figcaption className={s.figcaption}>{renderInline(block.caption)}</figcaption> : null}
        </figure>
      );
    default:
      return null;
  }
}

function FAQSection({ faqs }: { faqs: NonNullable<BlogPost["faqs"]> }) {
  return (
    <section id={FAQ_ID} className={s.section}>
      <h2 className={s.h2}>Frequently Asked Questions</h2>
      <div className={s.faqList}>
        {faqs.map((faq, i) => (
          <details key={i} className={s.faqItem}>
            <summary className={s.faqSummary}>
              <h3 className={s.faqQ}>{faq.question}</h3>
              <span className={s.faqChevron} aria-hidden>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </summary>
            <p className={s.faqA}>{renderInline(faq.answer)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- Page ----------------------------------- */

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post: BlogPost | undefined = getBlogBySlug(slug);
  if (!post) notFound();

  const outline = getPostOutline(post);
  const author = getAuthor(post.author);
  const related = getRelatedPosts(post, 3);
  const updated = hasUpdate(post);
  const description = post.metaDescription ?? post.excerpt;
  // The excerpt is shown as the hero description; if the article opens with
  // exactly the same sentence, don't print it twice.
  const normalize = (t: string) => stripInlineMarkup(t).replace(/\s+/g, " ").trim().toLowerCase();
  const opening = post.sections[0]?.blocks[0];
  const skipOpening = opening?.type === "paragraph" && normalize(opening.text) === normalize(post.excerpt);

  const crumbs: Crumb[] = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blogs" },
    { name: post.category, href: blogsHref({ category: categorySlug(post.category) }) },
    { name: post.title, href: `/blogs/${post.slug}` },
  ];

  return (
    <>
      <PageJsonLd
        variant="article"
        slug={post.slug}
        title={post.title}
        description={description}
        image={post.image}
        datePublished={post.publishedAt ?? "2026-01-01"}
        dateModified={updated ? post.updatedAt : undefined}
        author={
          author
            ? {
                name: author.name,
                kind: author.kind,
                jobTitle: author.kind === "Person" ? author.role : undefined,
                image: author.photo,
                sameAs: author.links?.map((l) => l.href),
              }
            : undefined
        }
        section={post.category}
        breadcrumbs={crumbs.map((c) => ({ name: c.name, path: c.href }))}
        faqs={post.faqs?.map((f) => ({ question: f.question, answer: stripInlineMarkup(f.answer) }))}
      />

      <div className={s.post}>
        <div className={s.container}>
          <Breadcrumbs items={crumbs} />

          <article>
            <header className={s.hero}>
              <h1 className={s.title}>{post.title}</h1>
              <p className={s.dek}>{post.excerpt}</p>
              <div className={s.byline}>
                <div className={s.bylineList}>
                  {author ? (
                    <span className={s.bylineItem}>
                      By <a href="#author">{author.name}</a>
                    </span>
                  ) : null}
                  {post.publishedAt ? (
                    <span className={s.bylineItem}>
                      Published: <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                    </span>
                  ) : null}
                  {updated ? (
                    <span className={s.bylineItem}>
                      Updated: <time dateTime={post.updatedAt}>{formatBlogDate(post.updatedAt)}</time>
                    </span>
                  ) : null}
                  {post.readTime ? <span className={s.bylineItem}>{post.readTime}</span> : null}
                </div>
              </div>
              <BlogImage
                src={post.image}
                alt={post.title}
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className={s.heroImage}
              />
            </header>

            <div className={s.layout}>
              <div className={s.article}>
                <TableOfContents entries={outline.toc} variant="mobile" />

                {post.sections.map((section, si) => (
                  <section key={si} id={outline.sectionIds[si]} className={s.section}>
                    {section.heading ? <h2 className={s.h2}>{section.heading}</h2> : null}
                    {section.blocks.map((block, bi) =>
                      skipOpening && si === 0 && bi === 0 ? null : (
                        <Block key={bi} block={block} headingId={outline.subheadingIds[`${si}:${bi}`]} />
                      ),
                    )}
                  </section>
                ))}

                {post.faqs?.length ? <FAQSection faqs={post.faqs} /> : null}

                {author ? <AuthorBox author={author} /> : null}

                <CtaBanner cta={getPostCta(post)} />

                <aside className={s.disclaimer}>
                  <span className={s.disclaimerLabel}>Disclaimer</span>
                  {getDisclaimer(post)}
                </aside>
              </div>

              <TableOfContents entries={outline.toc} variant="desktop" />
            </div>
          </article>

          {related.length > 0 ? (
            <section className={s.related} aria-labelledby="related-heading">
              <h2 id="related-heading" className={s.relatedTitle}>
                Related Articles
              </h2>
              <div className={s.relatedGrid}>
                {related.map((p) => (
                  <BlogCard
                    key={p.slug}
                    post={{
                      href: `/blogs/${p.slug}`,
                      title: p.title,
                      excerpt: p.excerpt,
                      category: p.category,
                      image: p.image,
                      date: formatBlogDate(p.publishedAt),
                      readTime: p.readTime,
                    }}
                  />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </>
  );
}
