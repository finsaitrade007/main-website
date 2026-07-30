import Image from "next/image";
import SmartLink from "@/components/SmartLink";
import { MT5_WEBTRADER_HREF } from "@/lib/mt5";

const bullets = [
  "Trade instantly from your browser",
  "No download or installation required",
  "Access advanced charts and trading tools",
  "Secure, fast, and seamless trading experience",
];

function ShieldCheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path
        d="M14 3L6 6.5v6.5c0 5.2 3.5 9.8 8 11 4.5-1.2 8-5.8 8-11V6.5L14 3z"
        stroke="#41ABE7"
        strokeWidth="1.4"
        fill="rgba(5,111,180,0.15)"
      />
      <path
        d="M9.5 14l2.5 2.5 6-6"
        stroke="#41ABE7"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Figma: section 1440×604; image 587×524 @ top 34, left 799
 */
export default function Mt5WebtraderSection() {
  return (
    <section
      className="mt5-webtrader"
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        height: 604,
        margin: "0 auto",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Left copy */}
      <div
        className="mt5-webtrader-copy"
        style={{
          position: "absolute",
          top: 80,
          left: 64,
          width: 520,
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 700,
            fontSize: 36,
            lineHeight: 1.15,
            color: "#FFFFFF",
            margin: "0 0 16px",
          }}
        >
          Access MT5 on your web browser
        </h2>

        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: 1.65,
            color: "#94A3B8",
            margin: "0 0 28px",
            maxWidth: 480,
          }}
        >
          Track live crypto prices and use our calculator to estimate your
          margin or potential outcomes before you place a trade.
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 32px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {bullets.map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontFamily: "var(--font-inter, Inter)",
                fontSize: 15,
                color: "#E2E8F0",
                lineHeight: 1.45,
              }}
            >
              <ShieldCheckIcon />
              {item}
            </li>
          ))}
        </ul>

        <SmartLink
          href={MT5_WEBTRADER_HREF}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            borderRadius: 8,
            padding: "12px 24px",
            background:
              "linear-gradient(90deg, #496DAB 0%, #496DAB 50%, #41ABE7 75%, #48C3F4 100%)",
            color: "#FFFFFF",
            textDecoration: "none",
            fontFamily: "var(--font-inter, Inter)",
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          Launch MT5 Webtrade
          <span aria-hidden>→</span>
        </SmartLink>
      </div>

      {/* Image — Figma: 587×524, top 34, left 799 */}
      <div
        className="mt5-webtrader-image"
        style={{
          position: "absolute",
          top: 34,
          left: 799,
          width: 587,
          height: 524,
          zIndex: 1,
        }}
      >
        <Image
          src="/mt5-assets/webtrader.jpeg"
          alt="MT5 web browser trading experience"
          width={587}
          height={524}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
