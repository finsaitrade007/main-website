import Link from "next/link";
import { getAboutPage, type StrapiAboutPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiAboutPage,
  | "ctaTitle"
  | "ctaDescription"
  | "ctaPrimaryLabel"
  | "ctaPrimaryHref"
> = {
  ctaTitle: "Ready to Take charge of Your Financial Future?",
  ctaDescription:
    "Open a free trial account and explore every Finsai market and tool — no commitment, full access.",
  ctaPrimaryLabel: "Start Free Trial",
  ctaPrimaryHref: "https://fx.finsaitrade.com/auth/register",
};

export default async function AboutCTASection() {
  const data = (await getAboutPage()) ?? FALLBACK;
  return (
    <section style={{ background: "#050208", padding: "40px 0 100px" }}>
      <div
        style={{
          width: "1280px",
          maxWidth: "calc(100% - 80px)",
          margin: "0 auto",
          position: "relative",
          padding: "56px 80px",
          borderRadius: "20px",
          border: "1px solid rgba(125,185,214,0.25)",
          background:
            "linear-gradient(137.88deg, rgba(10,18,32,0.85) 1.04%, rgba(5,111,180,0.32) 100%)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, rgba(70,140,210,0.4) 0%, rgba(5,111,180,0.12) 60%, rgba(0,0,0,0.6) 100%)",
            border: "1px solid rgba(125,185,214,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="url(#about-cta-grad)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <defs>
              <linearGradient id="about-cta-grad" x1="0" y1="0" x2="22" y2="22">
                <stop stopColor="#7DB9D6" />
                <stop offset="1" stopColor="#2EA8FF" />
              </linearGradient>
            </defs>
            <path d="M3 17l5-5 4 4 7-9" />
            <path d="M15 7h4v4" />
          </svg>
        </div>

        <h2
          style={{
            margin: 0,
            maxWidth: "640px",
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "40px",
            color: "#FFFFFF",
          }}
        >
          {data.ctaTitle}
        </h2>
        <p
          style={{
            margin: 0,
            maxWidth: "520px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "22px",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          {data.ctaDescription}
        </p>
        <Link
          href={data.ctaPrimaryHref}
          className="btn-text"
          style={{
            padding: "14px 32px",
            borderRadius: "8px",
            background:
              "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 500,
            marginTop: "8px",
          }}
        >
          {data.ctaPrimaryLabel}
        </Link>
      </div>
    </section>
  );
}
