import Link from "next/link";
import {
  getAccountTiers,
  type StrapiAccountTier,
  type StrapiFeature,
} from "@/lib/strapi";

const ACCENT = "#2EA8FF";
const ACCENT_DEEP = "#056FB4";

// Fallback used when Strapi is unreachable (e.g. CMS not running locally).
// Mirrors the data seeded in finsai-cms/src/index.ts.
const FALLBACK_TIERS: StrapiAccountTier[] = [
  {
    id: -1,
    documentId: "fallback-choice",
    name: "Finsai Smart Choice",
    price: "$0",
    unit: "Commission / $100k",
    featured: false,
    order: 1,
    ctaLabel: "Open Account",
    ctaHref: "/accounts",
    features: [
      { id: 1, label: "Maximum Leverage", value: "1:400" },
      { id: 2, label: "Trading Instruments", value: "5000+" },
      { id: 3, label: "Spreads", value: "competitive" },
      { id: 4, label: "Min. Deposit", value: "$100" },
    ],
  },
  {
    id: -2,
    documentId: "fallback-pro",
    name: "Finsai Smart Pro",
    price: "$0",
    unit: "Commission / $100k",
    featured: true,
    order: 2,
    ctaLabel: "Open Account",
    ctaHref: "/accounts",
    features: [
      { id: 5, label: "Maximum Leverage", value: "1:400" },
      { id: 6, label: "Trading Instruments", value: "5000+" },
      { id: 7, label: "Spreads", value: "competitive" },
      { id: 8, label: "Minimum order size", value: "0.01" },
      { id: 9, label: "Min. Deposit", value: "$1000" },
      { id: 10, label: "Maximum Open", value: "Unlimited" },
    ],
  },
  {
    id: -3,
    documentId: "fallback-ecn",
    name: "Finsai Smart ECN",
    price: "$1.5",
    unit: "Commission / $100k",
    featured: false,
    order: 3,
    ctaLabel: "Open Account",
    ctaHref: "/accounts",
    features: [
      { id: 11, label: "Maximum Leverage", value: "1:400" },
      { id: 12, label: "Trading Instruments", value: "5000+" },
      { id: 13, label: "Spreads", value: "competitive" },
      { id: 14, label: "Min. Deposit", value: "$5000" },
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
      aria-hidden
    >
      <circle cx="10" cy="10" r="9.25" stroke={ACCENT} strokeWidth="1.4" />
      <path
        d="M5.8 10.4L8.7 13.3L14.2 7.4"
        stroke={ACCENT}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PricingCard({ tier }: { tier: StrapiAccountTier }) {
  const featured = !!tier.featured;
  const features: StrapiFeature[] = tier.features ?? [];

  return (
    <div
      style={{
        width: "340px",
        boxSizing: "border-box",
        background: featured
          ? "linear-gradient(180deg, rgba(46,168,255,0.06) 0%, rgba(5,111,180,0.02) 100%), #07090F"
          : "#07090F",
        border: featured
          ? `1.5px solid ${ACCENT}`
          : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: featured ? "40px 32px" : "36px 32px",
        boxShadow: featured ? "0 0 32px rgba(46,168,255,0.12)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "22px",
          lineHeight: 1.2,
          color: featured ? ACCENT : "#FFFFFF",
          margin: 0,
          marginBottom: "28px",
        }}
      >
        {tier.name}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-inter, Inter)",
          fontSize: "14px",
          color: "rgba(255,255,255,0.55)",
          margin: 0,
          marginBottom: "14px",
        }}
      >
        Staring From
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "10px",
          marginBottom: "32px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "44px",
            lineHeight: 1,
            color: "#FFFFFF",
          }}
        >
          {tier.price}
        </span>
        <span
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontSize: "13px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {tier.unit}
        </span>
      </div>

      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,0.08)",
          marginBottom: "22px",
        }}
      />

      <p
        style={{
          fontFamily: "var(--font-inter, Inter)",
          fontSize: "14px",
          color: "rgba(255,255,255,0.55)",
          margin: 0,
          marginBottom: "18px",
        }}
      >
        What&apos;s included
      </p>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          marginBottom: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {features.map((f) => (
          <li
            key={f.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: "14px",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            <CheckIcon />
            <span style={{ flex: 1 }}>{f.label}</span>
            <span style={{ color: "rgba(255,255,255,0.95)" }}>{f.value}</span>
          </li>
        ))}
      </ul>

      <Link
        href={tier.ctaHref || "https://fx.finsaitrade.com/auth/register"}
        style={{
          alignSelf: "center",
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "12px 30px",
          borderRadius: "60px",
          background: `linear-gradient(90deg, rgba(5,111,180,0.85) 0%, ${ACCENT_DEEP} 100%)`,
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 500,
          fontSize: "14px",
          color: "#FFFFFF",
          textDecoration: "none",
          marginTop: "auto",
        }}
      >
        {tier.ctaLabel || "Open Account"} <span aria-hidden>→</span>
      </Link>
    </div>
  );
}

export default async function AccountPricing() {
  const fetched = await getAccountTiers();
  const tiers = fetched && fetched.length > 0 ? fetched : FALLBACK_TIERS;

  return (
    <section
      className="page-section"
      style={{ background: "#050208", paddingBottom: "100px" }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "22px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "7px 22px",
              border: `1px solid ${ACCENT}`,
              borderRadius: "60px",
              background: "rgba(46,168,255,0.06)",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: "14px",
              color: ACCENT,
            }}
          >
            Finsai Trade Account Type
          </span>
        </div>

        <h2
          style={{
            textAlign: "center",
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: 1.2,
            color: "#FFFFFF",
            margin: 0,
            marginBottom: "18px",
          }}
        >
          Choose Your Account. Trade Your Way.
        </h2>

        <p
          style={{
            textAlign: "center",
            fontFamily: "var(--font-inter, Inter)",
            fontSize: "16px",
            lineHeight: "26px",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "620px",
            margin: "0 auto 64px",
          }}
        >
          From beginners to seasoned professionals, Finsai Trade offers account
          types designed to match every level of experience and trading goal.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          {tiers.map((t) => (
            <PricingCard key={t.id} tier={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
