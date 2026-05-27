import Image from "next/image";

const CARD_INNER_BG = "linear-gradient(137.88deg, #050208 1.04%, #056FB4 536.19%)";
const BORDER_GRADIENT = "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)";

type PaymentMethod = {
  icon: string;
  title: string;
  desc: string;
  logos: { src: string; w: number; h: number; label?: string }[];
};

const paymentMethods: PaymentMethod[] = [
  {
    icon: "/accounts/payments.png",
    title: "UPI & Bank Transfer",
    desc: "Instant bank transfers through UPI",
    logos: [
      { src: "/accounts/upi.png", w: 72, h: 48 },
      { src: "/accounts/bank-transfer.png", w: 96, h: 48 },
    ],
  },
  {
    icon: "/accounts/payments.png",
    title: "Cards",
    desc: "Debit & credit cards processed instantly",
    logos: [
      { src: "/accounts/visa.png", w: 90, h: 48 },
      { src: "/accounts/mastercard.png", w: 72, h: 48 },
    ],
  },
  {
    icon: "/accounts/payments.png",
    title: "E-Wallets",
    desc: "Quick top-ups via popular Indian wallets",
    logos: [
      { src: "/accounts/paytm.png", w: 68, h: 40 },
      { src: "/accounts/gpay.png", w: 56, h: 40 },
      { src: "/accounts/phonepe.png", w: 40, h: 40 },
    ],
  },
  {
    icon: "/accounts/payments.png",
    title: "International Wallets",
    desc: "PayPal, Skrill, Neteller — funds in minutes",
    logos: [
      { src: "/accounts/paypal.png", w: 80, h: 40 },
      { src: "/accounts/skrill.png", w: 60, h: 40 },
      { src: "/accounts/neteller.png", w: 48, h: 40 },
    ],
  },
  {
    icon: "/accounts/payments.png",
    title: "Crypto Payments",
    desc: "Deposit BTC, ETH, USDT and more, on-chain",
    logos: [
      { src: "/accounts/bitcoin.png", w: 44, h: 44 },
      { src: "/accounts/ethereum.png", w: 44, h: 44 },
      { src: "/accounts/tether.png", w: 44, h: 44 },
    ],
  },
  {
    icon: "/accounts/payments.png",
    title: "Bank Card (Intl.)",
    desc: "Visa, Mastercard, and Amex cards worldwide",
    logos: [
      { src: "/accounts/visa.png", w: 72, h: 40 },
      { src: "/accounts/mastercard.png", w: 56, h: 40 },
      { src: "/accounts/amex.png", w: 64, h: 40 },
    ],
  },
  {
    icon: "/accounts/payments.png",
    title: "Local Payment",
    desc: "Region-specific payment rails for fast settlement",
    logos: [
      { src: "/accounts/paytm.png", w: 72, h: 44 },
      { src: "/accounts/gpay.png", w: 60, h: 44 },
    ],
  },
  {
    icon: "/accounts/payments.png",
    title: "Buy Now, Pay Later",
    desc: "Flexible deferred-payment options",
    logos: [
      { src: "/accounts/paypal.png", w: 80, h: 40 },
      { src: "/accounts/zestmoney.png", w: 48, h: 40 },
      { src: "/accounts/laybuy.png", w: 48, h: 40 },
    ],
  },
];

function PaymentCard({ method }: { method: PaymentMethod }) {
  return (
    <div style={{
      width: "302px",
      height: "271px",
      borderRadius: "21.32px",
      background: BORDER_GRADIENT,
      padding: "2px",
      boxSizing: "border-box",
      flexShrink: 0,
    }}>
      <div style={{
        width: "100%",
        height: "100%",
        borderRadius: "20.32px",
        background: CARD_INNER_BG,
        padding: "33px 22px 24px 22px",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
          <Image src={method.icon} alt="" width={40} height={40} style={{ objectFit: "contain", flexShrink: 0 }} />
          <h3 style={{
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "140%",
            color: "#FFFFFF",
            margin: 0,
          }}>
            {method.title}
          </h3>
        </div>

        <p style={{
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "22px",
          color: "rgba(255,255,255,0.5)",
          margin: "0 0 auto",
        }}>
          {method.desc}
        </p>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}>
          {method.logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt=""
              width={logo.w}
              height={logo.h}
              style={{ objectFit: "contain" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PaymentsMethodsSection() {
  return (
    <section style={{
      background: "#050208",
      width: "1440px",
      boxSizing: "border-box",
      padding: "80px 80px",
    }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "120%",
          color: "#FFFFFF",
          margin: "0 0 16px",
        }}>
          Our Payment Partners
        </h2>
        <p style={{
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "25px",
          color: "rgba(255,255,255,0.6)",
          maxWidth: "700px",
          margin: "0 auto",
        }}>
          Trade with speed, stability, and total control from your desk or on the move. Finsai Trade
          delivers professional-grade platforms to match your trading needs.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 302px)",
        gap: "24px",
      }}>
        {paymentMethods.map((method) => (
          <PaymentCard key={method.title} method={method} />
        ))}
      </div>
    </section>
  );
}
