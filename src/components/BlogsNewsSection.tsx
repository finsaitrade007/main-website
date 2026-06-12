import { getBlogsPage } from "@/lib/strapi";
import ResponsiveScale from "@/components/ResponsiveScale";
import { BLOG_POSTS } from "@/lib/blogs";
import { BlogsSearchDesktop, BlogsSearchMobile } from "@/components/BlogsSearchSection";

const allBlogCards = BLOG_POSTS.map((post) => ({
  title:    post.title,
  category: post.category,
  image:    post.image,
  desc:     post.excerpt,
  href:     `/blogs/${post.slug}`,
}));

export default async function BlogsNewsSection() {
  const data = await getBlogsPage();
  const badge       = data?.newsBadge       ?? "Market News & Analysis ";
  const title       = data?.newsTitle       ?? "Stay Ahead of Every Market Move";
  const description = data?.newsDescription ?? "Track market-moving events, technical setups, and macro trends shaping forex, crypto, commodities, and indices.";

  return (
    <section
      className="page-section"
      style={{
        background: "#050208",
        overflow: "hidden",
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
    {/* Desktop / tablet layout (≥ 426px) */}
    <div className="steps-horizontal">
      <ResponsiveScale designWidth={1440}>
      <div style={{ position: "relative", width: "1440px", minHeight: "1100px" }}>

        {/* Badge */}
        <div style={{ position: "absolute", top: "52px", left: 0, right: 0, display: "flex", justifyContent: "center" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 22px",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "60px",
          }}>
            <span className="badge-text">{badge}</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="section-title" style={{
          position: "absolute",
          top: "130px",
          left: 0,
          right: 0,
          textAlign: "center",
          margin: 0,
        }}>
          {title}
        </h2>

        {/* Description */}
        <p className="section-desc" style={{
          position: "absolute",
          top: "185px",
          left: "294px",
          width: "851px",
          textAlign: "center",
          margin: 0,
        }}>
          {description}
        </p>

        {/* Interactive: "Blogs" heading + search + divider + filtered cards */}
        <BlogsSearchDesktop allCards={allBlogCards} />

      </div>
      </ResponsiveScale>
    </div>

    {/* Mobile layout (< 426px) */}
    <div className="steps-vertical" style={{ padding: "0 20px 48px" }}>
      {/* Badge */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "8px 18px",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "60px",
        }}>
          <span className="badge-text">{badge}</span>
        </span>
      </div>

      {/* Heading */}
      <h2 className="section-title" style={{ textAlign: "center", marginBottom: "12px" }}>
        {title}
      </h2>
      <p className="section-desc" style={{ textAlign: "center", marginBottom: "32px" }}>
        {description}
      </p>

      {/* Interactive: "Blogs" subheading + search + divider + filtered cards */}
      <BlogsSearchMobile allCards={allBlogCards} />
    </div>
    </section>
  );
}
