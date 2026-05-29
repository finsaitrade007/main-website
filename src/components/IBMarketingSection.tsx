import Link from "next/link";
import Image from "next/image";
import { getPartnershipsPage } from "@/lib/strapi";

const fallbackCards = [
  { label: "News & Analysis", desc: "Stay updated with real-time market news, economic events, and expert commentary.", href: "/news" },
  { label: "Webinar", desc: "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.", href: "/webinars" },
  { label: "Glossary", desc: "Master trading terms and concepts with our comprehensive glossary built to help you trade with clarity and confidence.", href: "/glossary" },
  { label: "News & Analysis", desc: "Stay updated with real-time market news, economic events, and expert commentary.", href: "/news" },
  { label: "Webinar", desc: "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.", href: "/webinars" },
  { label: "Glossary", desc: "Master trading terms and concepts with our comprehensive glossary built to help you trade with clarity and confidence.", href: "/glossary" },
];

function MarketingCard({ label, desc, href }: { label: string; desc: string; href: string }) {
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

      <span style={{
        position: "absolute",
        top: "28px",
        left: "17px",
        width: "105px",
        height: "34px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
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
        color: "#FFFFFF",
        boxSizing: "border-box",
      }}>
        {label}
      </span>

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

export default async function IBMarketingSection() {
  const data = await getPartnershipsPage();
  const title = data?.marketingTitle ?? "Access Free Marketing Materials";
  const description =
    data?.marketingDescription ??
    "Trade seamlessly on the go or from your desktop with our cutting-edge platforms.";
  const cards = data?.marketingItems?.length
    ? data.marketingItems.map((item) => ({
        label: item.title,
        desc: item.description ?? "",
        href: item.iconKey ?? "#",
      }))
    : fallbackCards.map((c) => ({ label: c.label, desc: c.desc, href: c.href }));

  return (
    <section style={{ background: "#050208", padding: "80px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            {title}
          </h2>
          <p className="section-desc">
            {description}
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}>
          {cards.map((card, i) => (
            <MarketingCard key={i} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}
