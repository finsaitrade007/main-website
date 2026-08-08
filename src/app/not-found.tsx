import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Trading Accounts", href: "/accounts" },
  { label: "Platforms", href: "/platform" },
  { label: "Markets", href: "/forex" },
  { label: "Contact Us", href: "/contactus" },
];

export default function NotFound() {
  return (
    <section
      style={{
        background: "#050208",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(100px, 12vw, 160px) clamp(20px, 6vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "620px", textAlign: "center" }}>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 700,
            fontSize: "clamp(56px, 9vw, 96px)",
            lineHeight: 1,
            background:
              "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </p>

        <h1
          style={{
            margin: "16px 0 0",
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "clamp(22px, 2.6vw, 34px)",
            lineHeight: 1.25,
            color: "#FFFFFF",
          }}
        >
          We couldn&rsquo;t find that page
        </h1>

        <p
          style={{
            margin: "16px 0 0",
            fontFamily: "var(--font-inter, Inter)",
            fontSize: "clamp(14px, 1.1vw, 16px)",
            lineHeight: "28px",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          The link may be out of date, or the page may have moved. Try one of
          the sections below, or get in touch and we&rsquo;ll point you in the
          right direction.
        </p>

        <div
          style={{
            marginTop: "36px",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          {LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "11px 24px",
                borderRadius: "8px",
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 600,
                fontSize: "14px",
                color: "#FFFFFF",
                textDecoration: "none",
                background:
                  i === 0
                    ? "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)"
                    : "transparent",
                border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.18)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
