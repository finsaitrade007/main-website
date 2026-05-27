import Link from "next/link";
import Image from "next/image";

export default function PaymentsCTASection() {
  return (
    <section style={{
      background: "#050208",
      padding: "80px 0",
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{
        width: "1194px",
        height: "437px",
        borderRadius: "30px",
        border: "1px solid #056FB4",
        background: "linear-gradient(137.88deg, #050208 1.04%, #056FB4 536.19%)",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
      }}>
        <Image
          src="/accounts/wallet.png"
          alt=""
          width={157}
          height={157}
          style={{ position: "absolute", top: "33px", left: "518px", objectFit: "contain" }}
        />

        <h2 style={{
          position: "absolute",
          top: "192px",
          left: "244px",
          width: "707px",
          height: "50px",
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "36px",
          lineHeight: "50px",
          textAlign: "center",
          color: "#FFFFFF",
          margin: 0,
          overflow: "hidden",
        }}>
          Ready to Fund Your Account?
        </h2>

        <p style={{
          position: "absolute",
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "32px",
          textAlign: "center",
          color: "#FFFFFF",
          margin: 0,
          top: "254px",
          left: "211px",
          width: "773px",
          height: "64px",
        }}>
          Deposit instantly with the method you prefer — your funds are protected
          end-to-end and available the moment they arrive.
        </p>

        <Link href="/register" className="btn-text" style={{
          position: "absolute",
          top: "330px",
          left: "508px",
          width: "178px",
          height: "56px",
          borderRadius: "28.83px",
          paddingTop: "14px",
          paddingBottom: "14px",
          paddingLeft: "25px",
          paddingRight: "25px",
          background: "linear-gradient(90deg, rgba(5,111,180,0.7) 0%, #056FB4 100%)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          textDecoration: "none",
          boxSizing: "border-box",
        }}>
          Deposit Funds
        </Link>
      </div>
    </section>
  );
}
