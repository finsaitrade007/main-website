import Image from "next/image";
import SmartLink from "@/components/SmartLink";

const REGISTER_HREF = "https://fx.finsaitrade.com/auth/register";

/** ── Icons ────────────────────────────────────────────────── */

function MT5Icon() {
  return (
    <Image
      src="/social-trading/arcticons_metatrader-5.svg"
      alt=""
      width={56}
      height={56}
      aria-hidden
    />
  );
}

function FinsaiIcon() {
  // Source SVG is 36×72 (tall aspect), so we keep the same ratio.
  return (
    <Image
      src="/social-trading/finsai.svg"
      alt=""
      width={28}
      height={56}
      aria-hidden
    />
  );
}

function LoginIcon() {
  return (
    <Image
      src="/platforms/register.png"
      alt=""
      width={58}
      height={56}
      aria-hidden
    />
  );
}

/** ── Layout primitives ────────────────────────────────────── */

function IconBubble({
  icon,
  number,
}: {
  icon: React.ReactNode;
  number: number;
}) {
  return (
    <div style={{ position: "relative", width: 112, height: 112 }}>
      <div
        style={{
          width: 112,
          height: 112,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 40%, #0F2330 0%, #050208 80%)",
          // Figma spec: 2px solid #056FB499 + soft blue outer glow.
          border: "2px solid #056FB499",
          boxShadow: "0px 0px 24px 16px #056FB43D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        {icon}
      </div>
      {/* Number badge — Figma spec: 24×24, solid #056FB4 fill, 1px
          #056FB499 border. Sits at the upper-right edge of the 112px
          bubble (top offset 11px, overhanging the right by 8px). */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 11,
          right: -8,
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: "#056FB4",
          border: "1px solid #056FB499",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 600,
          fontSize: 11,
          color: "#FFFFFF",
        }}
      >
        {number}
      </div>
    </div>
  );
}

type ColumnProps = {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
};

function JourneyColumn({
  number,
  icon,
  title,
  description,
  ctaText,
}: ColumnProps) {
  return (
    <div
      className="social-journey-col"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "32px 24px",
        gap: 20,
      }}
    >
      <IconBubble icon={icon} number={number} />

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h3
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "100%x",
            color: "#FFFFFF",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "100%",
            color: "#A7A9BE",
            maxWidth: 280,
          }}
        >
          {description}
        </p>
      </div>

      {/* Figma spec: 195×48, 8px radius, 11×24 padding, 16px gap, brand
          gradient `269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%`. */}
      <SmartLink
        href={REGISTER_HREF}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          width: 195,
          height: 48,     
          borderRadius: 8,
          padding: "11px 24px",
          background:
            "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
          textDecoration: "none",
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 600,
          fontSize: 16,
          color: "#FFFFFF",
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          marginTop: 4,
        }}
      >
        {ctaText}
      </SmartLink>
    </div>
  );
}

/** ── Section ─────────────────────────────────────────────── */

export default function SocialTradingJourneySection() {
  return (
    <section
      className="social-journey-section"
      style={{
        background: "#050208",
        padding: "clamp(60px,6vw,100px) clamp(20px,5.5vw,80px)",
      }}
    >
      <h2
        className="social-journey-title"
        style={{
          margin: "0 auto 16px",
          textAlign: "center",
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "clamp(22px, 3vw, 36px)",
          lineHeight: 1.15,
          color: "#FFFFFF",
        }}
      >
        Choose Your Copy Trading Journey
      </h2>

      <p
        className="social-journey-desc"
        style={{
          margin: "0 auto 40px",
          textAlign: "center",
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "clamp(13px, 1.2vw, 16px)",
          lineHeight: 1.5,
          color: "#FFFFFF",
          maxWidth: 740,
        }}
      >
         No matter where you’re starting from, joining social trading is fast, simple, and hassle-free. 
      </p>

      {/* Card wrapper — Figma spec: 1270×404, 20px radius, blue gradient
          background, gradient stroke border. Implemented via the
          padding-box / border-box trick so the border can be a gradient. */}
      <div
        className="social-journey-card"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1270,
          minHeight: 404,
          margin: "0 auto",
          borderRadius: 20,
          border: "1px solid transparent",
          background:
            "linear-gradient(137.88deg, #050208 1.04%, #056FB4 536.19%) padding-box, linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%) border-box",
          overflow: "hidden",
        }}
      >
        {/* Vertical dividers — Figma spec: ~318px tall, 1px wide,
            centred between columns with a dark→#387AFF→dark vertical fade.
            Hidden on mobile via .social-journey-vdivider rule. */}
        <div
          aria-hidden
          className="social-journey-vdivider"
          style={{
            position: "absolute",
            top: 43,
            left: "32.36%", // 411 / 1270
            width: 1,
            height: 318,
            background:
              "linear-gradient(180deg, #0F0F10 0%, #387AFF 50%, #0F0F10 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          className="social-journey-vdivider"
          style={{
            position: "absolute",
            top: 43,
            left: "67.72%", // 860 / 1270
            width: 1,
            height: 318,
            background:
              "linear-gradient(180deg, #0F0F10 0%, #387AFF 50%, #0F0F10 100%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="social-journey-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            height: "100%",
          }}
        >
          <JourneyColumn
            number={1}
            icon={<MT5Icon />}
            title="MT5 Account"
            description="Connect your MT5 account and start social trading. "
            ctaText="Connect MT5"
          />
          <JourneyColumn
            number={2}
            icon={<FinsaiIcon />}
            title="Finsai Account"
            description="Log in and access social trading tools instantly."
            ctaText="Start Social Trading"
          />
          <JourneyColumn
            number={3}
            icon={<LoginIcon />}
            title="New Account"
            description="Create an account and start your trading journey"
            ctaText="Create Account"
          />
        </div>
      </div>
    </section>
  );
}
