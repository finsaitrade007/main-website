import Link from "next/link";
import Image from "next/image";
import { getBlogsPage } from "@/lib/strapi";

const BORDER_GRADIENT = "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)";
const CARD_INNER_BG = "linear-gradient(0deg, rgba(10,10,10,0.7), rgba(10,10,10,0.7)), linear-gradient(119.3deg, rgba(0,0,0,0) 23.34%, rgba(73,109,171,0.3) 96.36%)";

const fallbackNewsCards = [
  { category: "News & Analysis", desc: "Stay updated with real-time market news, economic events, and expert commentary.", href: "/news" },
  { category: "Webinar",         desc: "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.", href: "/webinars" },
  { category: "News & Analysis", desc: "Stay updated with real-time market news, economic events, and expert commentary.", href: "/news" },
  { category: "Webinar",         desc: "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.", href: "/webinars" },
];

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

function ArticleCard({ category, desc, href, top, left }: { category: string; desc: string; href: string; top: string; left: string }) {
  return (
    /* Gradient border wrapper */
    <div style={{
      position: "absolute",
      top,
      left,
      width: "415px",
      height: "285px",
      borderRadius: "21.32px",
      background: BORDER_GRADIENT,
      padding: "1px",
      boxSizing: "border-box",
    }}>
      <div style={{
        width: "100%",
        height: "100%",
        borderRadius: "20.32px",
        background: CARD_INNER_BG,
        overflow: "hidden",
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
          <Image src="/blogs-placeholder.png" alt="" fill style={{ objectFit: "cover" }} />
        </div>

        {/* Category badge */}
        <span style={{
          position: "absolute",
          top: "22px",
          left: "27px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "7px 18px",
          borderRadius: "5px",
          background: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(34px)",
          fontFamily: "var(--font-sora, Sora)",
          fontSize: "14px",
          fontWeight: 400,
          color: "#FFFFFF",
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
          fontSize: "16px",
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
          gap: "8px",
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "16px",
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
  const badge       = data?.newsBadge       ?? "Blogs & News";
  const title       = data?.newsTitle       ?? "Powerful platforms for Every Trader";
  const description = data?.newsDescription ?? "Trade with speed, stability, and total control  from your desk or on the move. Finsai Trade delivers professional-grade platforms to match your trading needs";

  const strapiCards = data?.newsArticles?.length
    ? data.newsArticles.map((a) => ({ category: a.title, desc: a.description ?? "", href: a.href ?? "#" }))
    : [];

  const cards = [
    ...strapiCards,
    ...fallbackNewsCards,
  ].slice(0, 4);

  return (
    <section style={{ background: "#050208", width: "1440px" }}>
      <div style={{ position: "relative", width: "1440px", height: "1030px", overflow: "visible" }}>

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
          top: "108px",
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
          background: BORDER_GRADIENT,
          padding: "1px",
          boxSizing: "border-box",
        }}>
          <div style={{
            width: "100%",
            height: "100%",
            borderRadius: "19px",
            background: CARD_INNER_BG,
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
                    fontSize: "14px",
                    lineHeight: "22px",
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
    </section>
  );
}
