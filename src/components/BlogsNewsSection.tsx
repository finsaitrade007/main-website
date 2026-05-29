import Link from "next/link";
import Image from "next/image";
import { getBlogsPage } from "@/lib/strapi";

const fallbackNewsCards = [
  {
    category: "News & Analysis",
    desc: "Stay updated with real-time market news, economic events, and expert commentary.",
    href: "/news",
  },
  {
    category: "Webinar",
    desc: "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.",
    href: "/webinars",
  },
  {
    category: "Glossary",
    desc: "Master trading terms and concepts with our comprehensive glossary built to help you trade with clarity and confidence.",
    href: "/glossary",
  },
  {
    category: "News & Analysis",
    desc: "Stay updated with real-time market news, economic events, and expert commentary.",
    href: "/news",
  },
  {
    category: "Webinar",
    desc: "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.",
    href: "/webinars",
  },
  {
    category: "Glossary",
    desc: "Master trading terms and concepts with our comprehensive glossary built to help you trade with clarity and confidence.",
    href: "/glossary",
  },
];

function ArticleCard({ category, desc, href }: { category: string; desc: string; href: string }) {
  return (
    <div style={{
      position: "relative",
      width: "415px",
      height: "285px",
      borderRadius: "21.32px",
      border: "1px solid transparent",
      background: `
        linear-gradient(0deg, rgba(10,10,10,0.7), rgba(10,10,10,0.7)) padding-box,
        linear-gradient(119.3deg, rgba(0,0,0,0) 23.34%, rgba(73,109,171,0.3) 96.36%) padding-box,
        linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%) border-box
      `,
      overflow: "hidden",
      boxSizing: "border-box",
    }}>
      {/* Image */}
      <div style={{
        position: "absolute",
        top: "12px",
        left: "17px",
        width: "380px",
        height: "116px",
        borderRadius: "16px",
        overflow: "hidden",
      }}>
        <Image
          src="/blogs-placeholder.png"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Category badge over image */}
      <span style={{
        position: "absolute",
        top: "28px",
        left: "17px",
        width: "105px",
        height: "34px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        paddingTop: "7px",
        paddingBottom: "7px",
        paddingLeft: "18px",
        paddingRight: "18px",
        borderRadius: "5px",
        background: "#FFFFFF33",
        backdropFilter: "blur(34px)",
        fontFamily: "var(--font-sora, Sora)",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "100%",
        letterSpacing: 0,
        textAlign: "center",
        color: "#FFFFFF",
        boxSizing: "border-box",
      }}>
        {category}
      </span>

      {/* Description */}
      <p style={{
        position: "absolute",
        top: "144px",
        left: "21px",
        width: "378px",
        height: "81px",
        fontFamily: "var(--font-inter, Inter)",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "27px",
        letterSpacing: 0,
        color: "#FFFFFFB2",
        margin: 0,
        overflow: "hidden",
      }}>
        {desc}
      </p>

      {/* Read More */}
      <Link href={href} style={{
        position: "absolute",
        top: "235.25px",
        left: "21.32px",
        width: "122px",
        height: "27px",
        display: "inline-flex",
        alignItems: "center",
        gap: "9px",
        fontFamily: "var(--font-inter, Inter)",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "27px",
        letterSpacing: 0,
        color: "#056FB4",
        textDecoration: "none",
      }}>
        Read More
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  );
}

function SearchBar() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-inter, Inter)",
      fontSize: "13px",
      color: "rgba(255,255,255,0.4)",
      cursor: "pointer",
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      Search for a Keyword
    </div>
  );
}

export default async function BlogsNewsSection() {
  const data = await getBlogsPage();
  const badge = data?.newsBadge ?? "Blogs & News";
  const title = data?.newsTitle ?? "Powerful platforms for Every Trader";
  const description =
    data?.newsDescription ??
    "Trade with speed, stability, and total control from your desk or on the move. Finsai Trade delivers professional-grade platforms to match your trading needs";

  const cards = data?.newsArticles?.length
    ? data.newsArticles.map((article) => ({
        category: article.title,
        desc: article.description ?? "",
        href: article.href ?? "#",
      }))
    : fallbackNewsCards;
  const blogCards = cards;

  return (
    <section style={{ background: "#050208", marginTop: "73px" }}>
      <div style={{ maxWidth: "1440px", minHeight: "1834px", margin: "0 auto", padding: "0 80px" }}>

        <div style={{ marginBottom: "24px", display: "flex", justifyContent: "center" }}>
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

        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "16px" }}>
          {title}
        </h2>

        <p className="section-desc" style={{ textAlign: "center", width: "851px", height: "57px", margin: "0 auto 48px" }}>
          {description}
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
          <h2 className="section-title" style={{ fontWeight: 700, fontSize: "36px", lineHeight: "100%", letterSpacing: 0, color: "#FFFFFF" }}>Market News</h2>
          <SearchBar />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "64px",
        }}>
          {cards.map((card, i) => (
            <ArticleCard key={i} {...card} />
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
          <h2 className="section-title" style={{ fontWeight: 700, fontSize: "36px", lineHeight: "100%", letterSpacing: 0, color: "#FFFFFF" }}>Blogs</h2>
          <SearchBar />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}>
          {blogCards.map((card, i) => (
            <ArticleCard key={i} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}
