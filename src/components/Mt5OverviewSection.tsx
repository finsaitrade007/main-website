import Image from "next/image";
import SmartLink from "@/components/SmartLink";
import { MT5_OPEN_ACCOUNT_HREF } from "@/lib/mt5";

/**
 * Figma (1440 artboard):
 * Section 1440×715, top 739 (immediately after hero), bg #050208
 * Image 790×648.62, top 66, left 597 (right side)
 */
export default function Mt5OverviewSection() {
  return (
    <section
      className="mt5-overview"
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        height: 715,
        margin: "0 auto",
        padding: 0,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Copy — left side */}
      <div
        className="mt5-overview-copy"
        style={{
          position: "absolute",
          top: 96,
          left: 100,
          width: 560,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "48px",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          The Advanced MT5 Trading Platform for Multi-Asset Trading
        </h2>

        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: 1.7,
            color: "#94A3B8",
            margin: 0,
          }}
        >
          MetaTrader 5 (MT5) is a powerful multi-asset trading platform built for today&rsquo;s financial markets. Whether you&rsquo;re new to online trading or an experienced trader, MT5 provides advanced charting, fast execution, and professional trading tools to help you trade with confidence.
        </p>

        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: 1.7,
            color: "#94A3B8",
            margin: 0,
          }}
        >
          With Finsai Trade, you can access global financial markets from one secure platform and trade multiple asset classes using real-time market data and institutional-grade execution.
        </p>

        <SmartLink
          href={MT5_OPEN_ACCOUNT_HREF}
          style={{
            display: "inline-flex",
            alignItems: "center",
            alignSelf: "flex-start",
            gap: 8,
            borderRadius: 8,
            padding: "12px 24px",
            background:
              "linear-gradient(90deg, #496DAB 0%, #496DAB 50%, #41ABE7 75%, #48C3F4 100%)",
            color: "#FFFFFF",
            textDecoration: "none",
            fontFamily: "var(--font-inter, Inter)",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Open Account
          <span aria-hidden>→</span>
        </SmartLink>
      </div>

      {/* Image — Figma: 790×648.62, top 66, left 597 */}
      <div
        className="mt5-overview-image"
        style={{
          position: "absolute",
          top: 88,
          left: 700,
          width: 720,
          height: 540,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <Image
          src="/mt5-assets/overview.jpeg"
          alt="MT5 multi-asset trading network"
          width={790}
          height={649}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
