import Image from "next/image";
import Link from "next/link";

type Stat = {
  value: string;
  label: string;
};

const STATS: Stat[] = [
  { value: "4.8k", label: "Traders" },
  { value: "12+", label: "Industry Experience" },
  { value: "2.5k+", label: "World wide clients" },
  { value: "120+", label: "Won Awards" },
];

type Tile = {
  width: number;
  height: number;
  top: number;
  left: number;
  rotate: number;
};

const TILES: Tile[] = [
  { width: 264.11, height: 264.11, top: 142, left: 743, rotate: 0 },
  { width: 253, height: 253, top: 173, left: 1034, rotate: 180 },
  { width: 220.09, height: 220.09, top: 432.53, left: 787.02, rotate: 90 },
  { width: 264.11, height: 264.11, top: 448.37, left: 1033.52, rotate: -180 },
];

// Figma rotates each tile so that its `border-top-left-radius: 50px`
// rounded corner ends up at a different visual position.  Rotating the
// element in CSS, however, also rotates the image inside it (turning the
// lock upside-down at 180°, sideways at 90°, etc.).  Instead we keep the
// image upright and translate the Figma rotation into the equivalent
// CSS corner the rounded radius should sit on — the four tiles form a
// "windmill" pattern with the rounded corner pointing outward.
function roundedCornerFor(rotate: number): React.CSSProperties {
  if (rotate === 0) return { borderTopLeftRadius: "50px" };
  if (rotate === 180) return { borderTopRightRadius: "50px" };
  if (rotate === 90) return { borderBottomLeftRadius: "50px" };
  if (rotate === -180) return { borderBottomRightRadius: "50px" };
  return { borderTopLeftRadius: "50px" };
}

export default function AboutFinancialGrowthSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050208",
        width: "1440px",
        maxWidth: "100%",
        height: "919px",
        margin: "0 auto",
        padding: "80px 0",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Left copy column */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "80px",
          width: "560px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          zIndex: 2,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            alignItems: "center",
            padding: "8px 18px",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "60px",
          }}
        >
          <span className="badge-text">Our Principal</span>
        </span>

        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "44px",
            color: "#FFFFFF",
          }}
        >
          We drive financial growth
          <br />
          in the digital era.
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
          By providing an integrated ecosystem that combines simplicity,
          innovation, and security, we aim to empower people to take charge of
          their financial future. Our goal is to create a financial
          environment where people can trade, invest, and bank with confidence
          by bridging the gap between conventional finance and technological
          breakthroughs.
        </p>
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
          By providing an integrated ecosystem that combines simplicity,
          innovation, and security, we aim to empower people to take charge of
          their financial future. Our goal is to create a financial
          environment where people can trade, invest, and bank with confidence
          by bridging the gap between conventional finance and technological
          breakthroughs.
        </p>

        <Link
          href="/contact"
          className="btn-text"
          style={{
            alignSelf: "flex-start",
            marginTop: "12px",
            padding: "11px 22px",
            borderRadius: "60px",
            background:
              "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          Contact Us
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M2.5 7h9M7.5 2.5l4.5 4.5-4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Right-side image tiles — the lock artwork stays upright in every
          tile; only the rounded corner moves (per the Figma rotation) so
          the four tiles still form the asymmetric quadrant pattern. */}
      {TILES.map((t, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${t.top}px`,
            left: `${t.left}px`,
            width: `${t.width}px`,
            height: `${t.height}px`,
            overflow: "hidden",
            zIndex: 1,
            ...roundedCornerFor(t.rotate),
          }}
        >
          <Image
            src="/about/growth-tile.png"
            alt=""
            fill
            sizes="265px"
            style={{
              objectFit: "cover",
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </div>
      ))}

      {/* Stats strip — anchored to the bottom of the section, spans across
          all four columns. */}
      <div
        style={{
          position: "absolute",
          left: "80px",
          right: "80px",
          bottom: "80px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          zIndex: 2,
        }}
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "44px",
                backgroundImage:
                  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              {s.value}
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "13px",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
