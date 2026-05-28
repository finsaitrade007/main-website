import Link from "next/link";

export default function RewardsHeroSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050208",
        width: "1440px",
        maxWidth: "100%",
        height: "560px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow behind the artwork */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 75% 50%, rgba(5,111,180,0.22) 0%, rgba(0,0,0,0) 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Right-side artwork — stylised isometric vault + cubes built in
          pure SVG until real artwork is supplied. */}
      <RewardsVaultArtwork />

      {/* Left copy block */}
      <div
        style={{
          position: "absolute",
          top: "140px",
          left: "80px",
          width: "598px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 2,
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            width: "270.6px",
            height: "51.2px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8.4px",
            padding: "9.6px 16.8px",
            borderRadius: "60px",
            border: "1.2px solid #FFFFFF26",
            background: "#000000",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "19.2px",
              lineHeight: "31.2px",
              letterSpacing: 0,
              textTransform: "uppercase",
              backgroundImage:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Trading Rewards Hub
          </span>
        </div>

        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "56px",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
          }}
        >
          Rewards Built for
          <br />
          Active Traders &amp;
          <br />
          Partners
        </h1>

        <p
          style={{
            margin: 0,
            width: "560px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#94A3B8",
          }}
        >
          Earn more for trading and partnering with Finsai — across promotions,
          loyalty tiers and our global affiliate network.
        </p>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Link
            href="#promotions"
            className="btn-text"
            style={{
              boxSizing: "border-box",
              height: "48px",
              padding: "11px 24px",
              borderRadius: "8px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
            }}
          >
            Explore Rewards
          </Link>
          <div
            style={{
              boxSizing: "border-box",
              height: "48px",
              padding: "1px",
              borderRadius: "8px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            }}
          >
            <Link
              href="/partnerships"
              style={{
                boxSizing: "border-box",
                height: "100%",
                padding: "10px 23px",
                borderRadius: "7px",
                background: "#050208",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 500,
                fontSize: "14px",
                color: "#FFFFFF",
              }}
            >
              Become an Affiliate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function RewardsVaultArtwork() {
  return (
    <svg
      width="640"
      height="440"
      viewBox="0 0 640 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        right: "60px",
        top: "80px",
        pointerEvents: "none",
        userSelect: "none",
      }}
      aria-hidden
    >
      <defs>
        <linearGradient id="rw-grad" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#7DB9D6" />
          <stop offset="1" stopColor="#056FB4" />
        </linearGradient>
        <radialGradient id="rw-glow" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="rgba(5,111,180,0.55)" />
          <stop offset="1" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>

      {/* Soft floor glow */}
      <ellipse cx="320" cy="380" rx="280" ry="40" fill="url(#rw-glow)" />

      {/* Central vault */}
      <g transform="translate(220 130)">
        <rect
          x="0"
          y="0"
          width="200"
          height="170"
          rx="14"
          fill="#0B1726"
          stroke="url(#rw-grad)"
          strokeWidth="1.5"
        />
        <circle
          cx="100"
          cy="85"
          r="50"
          fill="#08111C"
          stroke="url(#rw-grad)"
          strokeWidth="1.5"
        />
        <circle
          cx="100"
          cy="85"
          r="32"
          fill="none"
          stroke="url(#rw-grad)"
          strokeWidth="1"
          opacity="0.7"
        />
        <line
          x1="100"
          y1="55"
          x2="100"
          y2="85"
          stroke="url(#rw-grad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Vault handles */}
        <line x1="100" y1="35" x2="100" y2="15" stroke="url(#rw-grad)" strokeWidth="2" />
        <line x1="100" y1="135" x2="100" y2="155" stroke="url(#rw-grad)" strokeWidth="2" />
        <line x1="50" y1="85" x2="30" y2="85" stroke="url(#rw-grad)" strokeWidth="2" />
        <line x1="150" y1="85" x2="170" y2="85" stroke="url(#rw-grad)" strokeWidth="2" />
      </g>

      {/* Floating coins / cubes */}
      <g transform="translate(90 90)">
        <rect
          x="0"
          y="0"
          width="60"
          height="60"
          rx="8"
          fill="#0B1726"
          stroke="url(#rw-grad)"
          strokeWidth="1.4"
          transform="rotate(-12 30 30)"
        />
        <text
          x="30"
          y="38"
          textAnchor="middle"
          fontFamily="Inter"
          fontSize="22"
          fontWeight="700"
          fill="url(#rw-grad)"
          transform="rotate(-12 30 30)"
        >
          $
        </text>
      </g>

      <g transform="translate(110 240)">
        <circle cx="30" cy="30" r="30" fill="#0B1726" stroke="url(#rw-grad)" strokeWidth="1.4" />
        <text
          x="30"
          y="38"
          textAnchor="middle"
          fontFamily="Inter"
          fontSize="22"
          fontWeight="700"
          fill="url(#rw-grad)"
        >
          %
        </text>
      </g>

      <g transform="translate(450 70)">
        <rect
          x="0"
          y="0"
          width="50"
          height="50"
          rx="8"
          fill="#0B1726"
          stroke="url(#rw-grad)"
          strokeWidth="1.4"
          transform="rotate(15 25 25)"
        />
        <path
          d="M14 25l8 8 14-16"
          fill="none"
          stroke="url(#rw-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="rotate(15 25 25)"
        />
      </g>

      <g transform="translate(490 240)">
        <rect
          x="0"
          y="0"
          width="56"
          height="56"
          rx="10"
          fill="#0B1726"
          stroke="url(#rw-grad)"
          strokeWidth="1.4"
          transform="rotate(-8 28 28)"
        />
        <path
          d="M28 14L36 24H32V42H24V24H20Z"
          fill="url(#rw-grad)"
          transform="rotate(-8 28 28)"
        />
      </g>
    </svg>
  );
}
