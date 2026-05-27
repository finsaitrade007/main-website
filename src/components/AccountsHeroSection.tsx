import Link from "next/link";
import Image from "next/image";

export default function AccountsHeroSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050208",
        width: "1440px",
        height: "640px",
        overflow: "hidden",
      }}
    >
      <Image
        src="/accounts/hero.png"
        alt=""
        width={580}
        height={580}
        style={{
          position: "absolute",
          top: "30px",
          left: "820px",
          objectFit: "contain",
        }}
        priority
      />

      <div
        style={{
          position: "absolute",
          top: "180px",
          left: "80px",
          width: "640px",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          zIndex: 3,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "56px",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Trade Smart. Choose the
          <br />
          account that suits you
        </h1>

        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "520px",
            margin: 0,
          }}
        >
          Compare Finsai Trade account types side-by-side and pick the one that
          matches your style, risk, and trading goals.
        </p>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Link
            href="/register"
            className="btn-text"
            style={{
              padding: "14px 32px",
              borderRadius: "8px",
              background:
                "linear-gradient(90deg, #496DAB 0%, #496DAB 50%, #41ABE7 75%, #48C3F4 100%)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
            }}
          >
            Start Trading
          </Link>
          <Link
            href="/demo"
            className="btn-secondary"
            style={{ padding: "14px 32px" }}
          >
            Try Demo &nbsp;→
          </Link>
        </div>
      </div>
    </section>
  );
}
