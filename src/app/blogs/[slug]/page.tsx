import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BLOG_POSTS,
  formatBlogDate,
  getBlogBySlug,
  type BlogBlock,
  type BlogPost,
  type BlogSection,
} from "@/lib/blogs";

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
  return {
    title: `${title} | Finsai Trade`,
    description,
    openGraph: {
      title,
      description,
      images: [post.image],
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author] : undefined,
    },
  };
}

/* ----------------------------- Block primitives ---------------------------- */

function Paragraph({ text, lead = false }: { text: string; lead?: boolean }) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: "var(--font-inter, Inter)",
        fontWeight: 400,
        fontSize: lead ? "20px" : "17px",
        lineHeight: lead ? "32px" : "30px",
        color: lead ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.82)",
      }}
    >
      {text}
    </p>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul
      style={{
        margin: "4px 0 0",
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            position: "relative",
            paddingLeft: "24px",
            fontFamily: "var(--font-inter, Inter)",
            fontSize: "17px",
            lineHeight: "28px",
            color: "rgba(255,255,255,0.82)",
          }}
        >
          <span
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              top: "11px",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Subheading({ text }: { text: string }) {
  return (
    <h3
      style={{
        margin: "12px 0 0",
        fontFamily: "var(--font-sora, Sora)",
        fontWeight: 600,
        fontSize: "22px",
        lineHeight: "130%",
        letterSpacing: "-0.005em",
        color: "#FFFFFF",
      }}
    >
      {text}
    </h3>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        borderRadius: "12px",
        border: "1px solid rgba(125, 185, 214, 0.18)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "var(--font-inter, Inter)",
          fontSize: "15px",
          color: "rgba(255,255,255,0.85)",
        }}
      >
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  textAlign: "left",
                  padding: "14px 18px",
                  fontWeight: 600,
                  fontFamily: "var(--font-sora, Sora)",
                  fontSize: "14px",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "#7DB9D6",
                  borderBottom: "1px solid rgba(125, 185, 214, 0.25)",
                  background:
                    "linear-gradient(180deg, rgba(5,111,180,0.12) 0%, rgba(5,111,180,0) 100%)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    padding: "14px 18px",
                    verticalAlign: "top",
                    lineHeight: "24px",
                    borderTop:
                      ri === 0
                        ? "none"
                        : "1px solid rgba(255,255,255,0.06)",
                    fontWeight: ci === 0 ? 500 : 400,
                    color:
                      ci === 0
                        ? "rgba(255,255,255,0.92)"
                        : "rgba(255,255,255,0.78)",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Block({
  block,
  isLeadParagraph,
}: {
  block: BlogBlock;
  isLeadParagraph?: boolean;
}) {
  switch (block.type) {
    case "paragraph":
      return <Paragraph text={block.text} lead={isLeadParagraph} />;
    case "bullets":
      return <Bullets items={block.items} />;
    case "subheading":
      return <Subheading text={block.text} />;
    case "table":
      return <DataTable headers={block.headers} rows={block.rows} />;
    default:
      return null;
  }
}

function ArticleSection({
  section,
  isFirst,
}: {
  section: BlogSection;
  isFirst: boolean;
}) {
  let leadAssigned = false;
  return (
    <section
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      {section.heading ? (
        <h2
          style={{
            margin: "8px 0 0",
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 700,
            fontSize: "30px",
            lineHeight: "120%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
          }}
        >
          {section.heading}
        </h2>
      ) : null}

      {section.blocks.map((block, i) => {
        const isLead =
          isFirst && !section.heading && !leadAssigned && block.type === "paragraph";
        if (isLead) leadAssigned = true;
        return <Block key={i} block={block} isLeadParagraph={isLead} />;
      })}
    </section>
  );
}

function FAQSection({
  faqs,
}: {
  faqs: NonNullable<BlogPost["faqs"]>;
}) {
  return (
    <section
      style={{
        marginTop: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 700,
          fontSize: "30px",
          lineHeight: "120%",
          letterSpacing: "-0.01em",
          color: "#FFFFFF",
        }}
      >
        Frequently Asked Questions
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {faqs.map((faq, i) => (
          <details
            key={i}
            style={{
              borderRadius: "12px",
              border: "1px solid rgba(125, 185, 214, 0.18)",
              background:
                "linear-gradient(157.26deg, rgba(5,111,180,0.06) -0.93%, rgba(5,2,8,0) 444.35%)",
              padding: "16px 20px",
            }}
          >
            <summary
              style={{
                listStyle: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 600,
                fontSize: "17px",
                lineHeight: "26px",
                color: "#FFFFFF",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <span>{faq.question}</span>
              <span
                aria-hidden
                style={{
                  flex: "0 0 auto",
                  width: "20px",
                  height: "20px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7DB9D6",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 5l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </summary>
            <p
              style={{
                margin: "12px 0 0",
                fontFamily: "var(--font-inter, Inter)",
                fontSize: "16px",
                lineHeight: "28px",
                color: "rgba(255,255,255,0.78)",
              }}
            >
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Disclaimer({ text }: { text: string }) {
  return (
    <aside
      style={{
        marginTop: "32px",
        padding: "20px 24px",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
        fontFamily: "var(--font-inter, Inter)",
        fontSize: "13px",
        lineHeight: "22px",
        color: "rgba(255,255,255,0.55)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "12px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "rgba(125, 185, 214, 0.85)",
          marginBottom: "8px",
        }}
      >
        Disclaimer
      </div>
      {text}
    </aside>
  );
}

/* ------------------------------ Related posts ----------------------------- */

function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const related = BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section style={{ marginTop: "80px" }}>
      <h2
        style={{
          margin: "0 0 24px",
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: "120%",
          color: "#FFFFFF",
        }}
      >
        Continue reading
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "1px",
              borderRadius: "16px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "16px",
                borderRadius: "15px",
                background:
                  "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%)",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  borderRadius: "10px",
                  overflow: "hidden",
                  background: "#0A0E1A",
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#7DB9D6",
                }}
              >
                {post.category}
              </span>
              <h3
                style={{
                  margin: 0,
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "26px",
                  color: "#FFFFFF",
                }}
              >
                {post.title}
              </h3>
            </div>
          </Link>
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

  const date = formatBlogDate(post.publishedAt);

  return (
    <article
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        paddingTop: "48px",
        paddingBottom: "96px",
        paddingLeft: "80px",
        paddingRight: "80px",
        boxSizing: "border-box",
      }}
    >
      {/* Back link */}
      <Link
        href="/blogs"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "var(--font-inter, Inter)",
          fontSize: "14px",
          color: "rgba(255,255,255,0.6)",
          textDecoration: "none",
          marginBottom: "32px",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
          <path
            d="M10 6H2M6 2 2 6l4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to Blogs
      </Link>

      {/* Banner image — sits at the top of the article */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1100px",
          aspectRatio: "16 / 8",
          maxHeight: "560px",
          margin: "0 auto",
          borderRadius: "20px",
          overflow: "hidden",
          background: "#0A0E1A",
        }}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1100px"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Article header — heading + byline */}
      <header
        style={{
          maxWidth: "820px",
          margin: "40px auto 0",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "112%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
          }}
        >
          {post.title}
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "12px",
            fontFamily: "var(--font-inter, Inter)",
            fontSize: "14px",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {post.author ? <span>{post.author}</span> : null}
          {post.author && (date || post.readTime) ? (
            <span aria-hidden>·</span>
          ) : null}
          {date ? <span>{date}</span> : null}
          {date && post.readTime ? <span aria-hidden>·</span> : null}
          {post.readTime ? <span>{post.readTime}</span> : null}
        </div>
      </header>

      {/* Article body */}
      <div
        style={{
          maxWidth: "780px",
          margin: "48px auto 0",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        {post.sections.map((section, i) => (
          <ArticleSection key={i} section={section} isFirst={i === 0} />
        ))}

        {post.faqs && post.faqs.length > 0 ? (
          <FAQSection faqs={post.faqs} />
        ) : null}

        {post.disclaimer ? <Disclaimer text={post.disclaimer} /> : null}
      </div>

      {/* Related posts */}
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <RelatedPosts currentSlug={post.slug} />
      </div>
    </article>
  );
}
