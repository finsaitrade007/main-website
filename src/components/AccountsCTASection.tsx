import Link from "next/link";
import Image from "next/image";

export default function AccountsCTASection() {
  return (
    <section style={{ background: "#050208", padding: "80px 0", display: "flex", justifyContent: "center" }}>
      <div style={{
        width: "1194px",
        height: "437px",
        borderRadius: "30px",
        border: "1px solid #056FB4",
        background: "#000000",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        {/* Glow */}
        <div style={{
          position: "absolute",
          width: "600px",
          height: "300px",
          background: "rgba(5,111,180,0.15)",
          borderRadius: "50%",
          filter: "blur(100px)",
          pointerEvents: "none",
        }} />

        {/* Content */}
        <div style={{ position: "relative", textAlign: "center", padding: "0 80px" }}>
          {/* Icon */}
          <div style={{
            width: "64px",
            height: "64px",
            background: "rgba(5,111,180,0.15)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}>
            <Image src="/service/protection.png" alt="" width={32} height={32} style={{ objectFit: "contain" }} />
          </div>

          <h2 style={{
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "120%",
            color: "#FFFFFF",
            margin: "0 0 16px",
          }}>
            Ready to Start Trading with Finsai?
          </h2>

          <p style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "25px",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "600px",
            margin: "0 auto 36px",
          }}>
            Open a live account or start with a demo account and explore global markets with Finsai
            Trade — at your pace, on your terms.
          </p>

          <Link href="/register" className="btn-text" style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 40px",
            borderRadius: "28.83px",
            background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            textDecoration: "none",
          }}>
            Deposit Funds
          </Link>
        </div>
      </div>
    </section>
  );
}
