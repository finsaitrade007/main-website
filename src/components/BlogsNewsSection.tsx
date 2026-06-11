import Link from "next/link";
import Image from "next/image";
import { getBlogsPage } from "@/lib/strapi";
import ResponsiveScale from "@/components/ResponsiveScale";
import { BLOG_POSTS } from "@/lib/blogs";

const BORDER_GRADIENT = "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)";
const CARD_INNER_BG = "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%)";

const fallbackNewsCards = BLOG_POSTS.map((post) => ({
  category: post.category,
  image: post.image,
  desc: post.excerpt,
  href: `/blogs/${post.slug}`,
}));

const fallbackLatestNews = [
  "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.",
  "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.",
  "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.",
  "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.",
];

const cardPositions = [
  { top: "376px", left: "75px" },
  { top: "376px", left: "507px" },
  { top: "685px", left: "75px" },
  { top: "685px", left: "507px" },
];

function ArticleCard({ desc, href, image, top, left }: { desc: string; href: string; image: string; top: string; left: string }) {
  return (
    <div style={{
      position: "absolute",
      top,
      left,
      width: "415px",
      height: "285px",
      borderRadius: "21.32px",
      border: "1px solid transparent",
      background: `${CARD_INNER_BG} padding-box, ${BORDER_GRADIENT} border-box`,
      boxSizing: "border-box",
      overflow: "hidden",
    }}>
      <div style={{
        width: "100%",
        height: "100%",
        position: "relative",
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
          <Image src={image} alt="" fill sizes="380px" style={{ objectFit: "cover" }} />
        </div>

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
          color: "rgba(255,255,255,0.7)",
          margin: 0,
          overflow: "hidden",
        }}>
          {desc}
        </p>

        {/* Read More */}
        <Link href={href} style={{
          position: "absolute",
          top: "238px",
          left: "21px",
          display: "inline-flex",
          alignItems: "center",
          lineHeight: "27px",
          gap: "8px",
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "18px",
          color: "#056FB4",
          textDecoration: "none",
        }}>
          Read More
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

function MobileArticleCard({ desc, href, image }: { desc: string; href: string; image: string }) {
  return (
    <div style={{
      width: "100%",
      borderRadius: "16px",
      border: "1px solid transparent",
      background: `${CARD_INNER_BG} padding-box, ${BORDER_GRADIENT} border-box`,
      boxSizing: "border-box",
      overflow: "hidden",
    }}>
      <div style={{ width: "100%", height: "120px", position: "relative" }}>
        <Image src={image} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div style={{ padding: "16px" }}>
        <p style={{
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "1.6",
          color: "rgba(255,255,255,0.7)",
          margin: "0 0 12px",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {desc}
        </p>
        <Link href={href} style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "13px",
          color: "#056FB4",
          textDecoration: "none",
        }}>
          Read More
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
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
      fontSize: "14px",
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
  const badge       = data?.newsBadge       ?? "Market News & Analysis ";
  const title       = data?.newsTitle       ?? "Stay Ahead of Every Market Move";
  const description = data?.newsDescription ?? "Track market-moving events, technical setups, and macro trends shaping forex, crypto, commodities, and indices.";

  const strapiCards = data?.newsArticles?.length
    ? data.newsArticles.map((a) => ({
        category: a.title,
        desc: a.description ?? "",
        href: a.href ?? "#",
        image: "/blogs/hero.png",
      }))
    : [];

  const cards = [
    ...strapiCards,
    ...fallbackNewsCards,
  ].slice(0, 4);

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
      <div style={{ position: "relative", width: "1440px", minHeight: "1030px" }}>

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

        {/* "Blogs" heading + search bar */}
        <div style={{
          position: "absolute",
          top: "300px",
          left: "75px",
          right: "75px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <h2 style={{
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "100%",
            color: "#FFFFFF",
            margin: 0,
          }}>
            Blogs
          </h2>
          <SearchBar />
        </div>

        {/* Divider */}
        <div style={{
          position: "absolute",
          top: "347px",
          left: "75px",
          width: "1279px",
          height: "0px",
          border: "2px solid #056FB44D",
        }} />

        {/* 4 Article Cards */}
        {cards.map((card, i) => (
          <ArticleCard
            key={i}
            {...card}
            top={cardPositions[i].top}
            left={cardPositions[i].left}
          />
        ))}

        {/* Right — Latest News box */}
        <div style={{
          position: "absolute",
          top: "376px",
          left: "964px",
          width: "390px",
          height: "594px",
          borderRadius: "20px",
          border: "1px solid transparent",
          background: `${CARD_INNER_BG} padding-box, ${BORDER_GRADIENT} border-box`,
          boxSizing: "border-box",
        }}>
          <div style={{
            width: "100%",
            height: "100%",
            paddingTop: "24px",
            paddingRight: "21px",
            paddingBottom: "16px",
            paddingLeft: "19px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}>
            <h3 style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "100%",
              color: "#FFFFFF",
              margin: 0,
            }}>
              Blogs & News
            </h3>

            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              {fallbackLatestNews.map((item, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "27px",
                    color: "rgba(255,255,255,0.7)",
                    margin: 0,
                  }}>
                    {item}
                  </p>
                  {i < fallbackLatestNews.length - 1 && (
                    <div style={{
                      width: "329px",
                      height: "0px",
                      border: "2px solid transparent",
                      borderImage: "linear-gradient(90deg, rgba(255,255,255,0.014) -2.94%, rgba(5,111,180,0.7) 51.23%, rgba(255,255,255,0.014) 102.37%) 1",
                      marginTop: "16px",
                    }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      </ResponsiveScale>
    </div>

    {/* Mobile layout (< 426px): heading + stacked cards + news sidebar */}
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

      {/* "Blogs" subheading + search */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "12px",
      }}>
        <h2 style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 700,
          fontSize: "22px",
          lineHeight: "100%",
          color: "#FFFFFF",
          margin: 0,
        }}>
          Blogs
        </h2>
        <SearchBar />
      </div>

      {/* Divider */}
      <div style={{
        width: "100%",
        height: "1px",
        background: "linear-gradient(90deg, transparent 0%, rgba(5,111,180,0.7) 50%, transparent 100%)",
        marginBottom: "20px",
      }} />

      {/* Article cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
        {cards.map((card, i) => (
          <MobileArticleCard key={i} desc={card.desc} href={card.href} image={card.image} />
        ))}
      </div>

      {/* Blogs & News sidebar box */}
      <div style={{
        width: "100%",
        borderRadius: "16px",
        border: "1px solid transparent",
        background: `${CARD_INNER_BG} padding-box, ${BORDER_GRADIENT} border-box`,
        boxSizing: "border-box",
        padding: "24px 20px",
      }}>
        <h3 style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "100%",
          color: "#FFFFFF",
          margin: "0 0 16px",
        }}>
          Blogs &amp; News
        </h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {fallbackLatestNews.map((item, i) => (
            <div key={i}>
              <p style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "1.6",
                color: "rgba(255,255,255,0.7)",
                margin: "12px 0",
              }}>
                {item}
              </p>
              {i < fallbackLatestNews.length - 1 && (
                <div style={{
                  width: "100%",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent 0%, rgba(5,111,180,0.7) 50%, transparent 100%)",
                }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
