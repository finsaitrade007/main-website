import Link from "next/link";
import Image from "next/image";

export default function PaymentsHeroSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050208",
        width: "1440px",
        height: "777px",
        overflow: "hidden",
      }}
    >
      <Image
        src="/accounts/hero.png"
        alt=""
        width={634}
        height={634}
        style={{
          position: "absolute",
          top: "93px",
          left: "806px",
          objectFit: "contain",
        }}
        priority
      />

      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "80px",
          width: "650px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 3,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            padding: "8px 22px",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "60px",
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 400,
            fontSize: "12px",
            color: "#FFFFFF",
            letterSpacing: "0.1em",
          }}
        >
          SECURE DEPOSITS & WITHDRAWALS
        </span>

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
          Fast &amp; Secure Account
          <br />
          Funding at Finsai&nbsp;Trade
        </h1>

        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "155%",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "560px",
            margin: 0,
          }}
        >
          Deposit and withdraw with confidence. Finsai Trade supports cards,
          UPI, e-wallets, crypto, and bank transfer — all secured by bank-grade
          encryption.
        </p>

        <Link
          href="/register"
          className="btn-text"
          style={{
            padding: "14px 32px",
            borderRadius: "28.83px",
            background:
              "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-start",
          }}
        >
          Deposit Funds
        </Link>
      </div>
    </section>
  );
}
