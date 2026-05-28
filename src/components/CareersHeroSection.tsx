import Link from "next/link";

export default function CareersHeroSection() {
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
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 78% 50%, rgba(5,111,180,0.25) 0%, rgba(0,0,0,0) 60%)",
          pointerEvents: "none",
        }}
      />

      <FinsaixArtwork />

      <div
        style={{
          position: "absolute",
          top: "130px",
          left: "80px",
          width: "560px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 2,
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            width: "240px",
            height: "44px",
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
              fontSize: "15px",
              lineHeight: "24px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              backgroundImage:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Careers at Finsai Trade
          </span>
        </div>

        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "52px",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
          }}
        >
          Build the Future of
          <br />
          Multi-Asset Trading
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: "540px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "24px",
            color: "#94A3B8",
          }}
        >
          Join a vibrant global team focused on fintech, trading technology,
          global markets, and customer growth. If you thrive on velocity and
          ownership — we&apos;d love to hear from you.
        </p>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Link
            href="#open-roles"
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
            View Open Roles →
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
              href="#apply"
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
              Join Our Team →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinsaixArtwork() {
  return (
    <svg
      width="720"
      height="500"
      viewBox="0 0 720 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        right: "20px",
        top: "30px",
        pointerEvents: "none",
        userSelect: "none",
      }}
      aria-hidden
    >
      <defs>
        <linearGradient id="fx-grad" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#7DB9D6" />
          <stop offset="1" stopColor="#056FB4" />
        </linearGradient>
        <linearGradient id="fx-grad-h" x1="0" x2="1" y1="0.5" y2="0.5">
          <stop stopColor="#4D8AB6" />
          <stop offset="1" stopColor="#0A4A85" />
        </linearGradient>
        <radialGradient id="fx-glow" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="rgba(5,111,180,0.45)" />
          <stop offset="1" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>

      <ellipse cx="360" cy="430" rx="320" ry="40" fill="url(#fx-glow)" />

      {/* Big FINSAIX 3D wordmark (stylised isometric) */}
      <g transform="translate(140 180) skewY(-12)">
        {[
          { x: 0, text: "F" },
          { x: 70, text: "I" },
          { x: 110, text: "N" },
          { x: 190, text: "S" },
          { x: 260, text: "A" },
          { x: 340, text: "I" },
          { x: 380, text: "X" },
        ].map(({ x, text }) => (
          <g key={x}>
            <rect
              x={x}
              y={-10}
              width="60"
              height="120"
              rx="6"
              fill="#0B1726"
              stroke="url(#fx-grad)"
              strokeWidth="1"
            />
            <text
              x={x + 30}
              y={70}
              textAnchor="middle"
              fontFamily="Sora"
              fontSize="46"
              fontWeight="700"
              fill="url(#fx-grad)"
            >
              {text}
            </text>
          </g>
        ))}
      </g>

      {/* Floating UI cards */}
      {/* Top-left chart card */}
      <g transform="translate(50 60)">
        <rect
          x="0"
          y="0"
          width="120"
          height="90"
          rx="10"
          fill="#0B1726"
          stroke="url(#fx-grad)"
          strokeWidth="1.2"
        />
        <path
          d="M14 70 L34 50 L54 60 L74 30 L94 40 L106 22"
          stroke="url(#fx-grad)"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="106" cy="22" r="3" fill="url(#fx-grad)" />
      </g>

      {/* Top-right calendar */}
      <g transform="translate(560 60)">
        <rect
          x="0"
          y="0"
          width="110"
          height="100"
          rx="10"
          fill="#0B1726"
          stroke="url(#fx-grad)"
          strokeWidth="1.2"
        />
        <path d="M0 30h110" stroke="url(#fx-grad)" strokeWidth="1.2" />
        <g fill="url(#fx-grad)">
          {[12, 32, 52, 72, 92].map((cx) =>
            [44, 60, 76, 92].map((cy) => (
              <rect key={`${cx}-${cy}`} x={cx} y={cy} width="6" height="6" rx="1" opacity="0.7" />
            )),
          )}
        </g>
      </g>

      {/* Bottom-left clipboard */}
      <g transform="translate(30 320)">
        <rect
          x="0"
          y="0"
          width="110"
          height="130"
          rx="10"
          fill="#0B1726"
          stroke="url(#fx-grad)"
          strokeWidth="1.2"
        />
        {[24, 46, 68, 90, 112].map((y) => (
          <rect
            key={y}
            x="14"
            y={y - 14}
            width={y % 2 === 0 ? 80 : 60}
            height="6"
            rx="2"
            fill="url(#fx-grad)"
            opacity="0.7"
          />
        ))}
      </g>

      {/* Middle-bottom bars */}
      <g transform="translate(220 340)">
        <rect
          x="0"
          y="0"
          width="160"
          height="120"
          rx="10"
          fill="#0B1726"
          stroke="url(#fx-grad)"
          strokeWidth="1.2"
        />
        {[20, 50, 80, 110, 140].map((x, i) => {
          const h = 30 + i * 12;
          return (
            <rect
              key={x}
              x={x}
              y={100 - h}
              width="14"
              height={h}
              fill="url(#fx-grad)"
              opacity={0.5 + i * 0.1}
            />
          );
        })}
      </g>

      {/* Bottom-right pie */}
      <g transform="translate(530 360)">
        <rect
          x="0"
          y="0"
          width="150"
          height="100"
          rx="10"
          fill="#0B1726"
          stroke="url(#fx-grad)"
          strokeWidth="1.2"
        />
        <circle cx="34" cy="50" r="22" stroke="url(#fx-grad)" strokeWidth="2" fill="none" />
        <path
          d="M34 28 A22 22 0 0 1 56 50 L34 50 Z"
          fill="url(#fx-grad)"
          opacity="0.8"
        />
        {[14, 30, 46, 62].map((y, i) => (
          <rect
            key={y}
            x="72"
            y={y}
            width={50 - i * 8}
            height="6"
            rx="2"
            fill="url(#fx-grad)"
            opacity="0.6"
          />
        ))}
      </g>

      {/* Connection lines */}
      <g stroke="url(#fx-grad-h)" strokeWidth="1" opacity="0.4">
        <path d="M170 110 Q260 180 320 200" fill="none" />
        <path d="M560 100 Q480 170 420 200" fill="none" />
        <path d="M150 380 Q220 320 280 320" fill="none" />
        <path d="M530 380 Q480 320 420 320" fill="none" />
      </g>
    </svg>
  );
}
