import Image from "next/image";
import { getPaymentsPage } from "@/lib/strapi";
import ResponsiveScale from "@/components/ResponsiveScale";

const CARD_FILL_BG =
  "linear-gradient(119.3deg, rgba(0, 0, 0, 0) 23.34%, rgba(73, 109, 171, 0.3) 96.36%), #050208";
const BORDER_GRADIENT =
  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)";
const PILL_BG = "linear-gradient(90deg, rgba(5, 111, 180, 0.14) 0%, rgba(5, 111, 180, 0.2) 100%)";

function LightningIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"
        fill="#56A4E0"
        stroke="#56A4E0"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z"
        stroke="#56A4E0"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="#56A4E0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Logo = { src: string; w: number; h: number; alt: string };

type Footer =
  | { type: "logos"; logos: Logo[] }
  | {
      type: "pill";
      label: string;
      icon: "lightning" | "shield";
      width: number;
      height: number;
      top: number;
      left: number;
    };

type CardData = {
  left: number;
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  footer: Footer;
};

const CARDS: CardData[] = [
  {
    left: 74,
    icon: "/payments/payment-stack-icon.png",
    iconAlt: "Payment Stack",
    title: "Payment Stack",
    description:
      "Choose from convenient funding and withdrawal options designed for global traders.",
    footer: {
      type: "logos",
      logos: [
        { src: "/crypto/btc.svg", w: 36, h: 36, alt: "Bitcoin" },
        { src: "/crypto/eth.svg", w: 36, h: 36, alt: "Ethereum" },
        { src: "/crypto/usdt.svg", w: 36, h: 36, alt: "Tether" },
      ],
    },
  },
  {
    left: 515,
    icon: "/payments/fast-processing-icon.png",
    iconAlt: "Fast Processing",
    title: "Fast Processing",
    description:
      "Fund your account instantly and access withdrawals without unnecessary delays.",
    footer: {
      type: "pill",
      label: "Fast Processing",
      icon: "lightning",
      width: 197,
      height: 56,
      top: 382,
      left: 106,
    },
  },
  {
    left: 956,
    icon: "/payments/secure-transactions-icon.png",
    iconAlt: "Secure Transactions",
    title: "Secure Transactions",
    description:
      "Advanced security systems help protect every deposit and payout.",
    footer: {
      type: "pill",
      label: "100% secure",
      icon: "shield",
      width: 186,
      height: 56,
      top: 384,
      left: 111,
    },
  },
];

function MobilePaymentCard({ card }: { card: CardData }) {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "16px",
        background: BORDER_GRADIENT,
        padding: "1px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          borderRadius: "15px",
          background: CARD_FILL_BG,
          boxSizing: "border-box",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px 20px 24px",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: "#020303",
            border: "2px solid #056FB499",
            boxShadow: "0px 0px 20px 12px #056FB43D",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Image
            src={card.icon}
            alt={card.iconAlt}
            width={44}
            height={44}
            style={{ objectFit: "contain" }}
          />
        </div>

        <h3
          style={{
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "1.2",
            color: "#FFFFFF",
            margin: 0,
            textAlign: "center",
          }}
        >
          {card.title}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "1.6",
            color: "rgba(255,255,255,0.6)",
            margin: 0,
            textAlign: "center",
            flex: 1,
          }}
        >
          {card.description}
        </p>

        <div
          style={{
            width: "100%",
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.014) -2.94%, rgba(5,111,180,0.7) 51.23%, rgba(255,255,255,0.014) 102.37%)",
          }}
        />

        {card.footer.type === "logos" ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              height: "36px",
            }}
          >
            {card.footer.logos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={28}
                height={28}
                style={{ objectFit: "contain" }}
              />
            ))}
          </div>
        ) : (
          <button
            type="button"
            style={{
              padding: "10px 20px",
              borderRadius: "28px",
              border: "1px solid #056FB4",
              background: PILL_BG,
              color: "#56A4E0",
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 500,
              fontSize: "13px",
              lineHeight: "1",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              whiteSpace: "nowrap",
              boxSizing: "border-box",
            }}
          >
            {card.footer.icon === "lightning" ? <LightningIcon /> : <ShieldCheckIcon />}
            <span>{card.footer.label}</span>
          </button>
        )}
      </div>
    </div>
  );
}

function PaymentCard({ card }: { card: CardData }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "214px",
        left: `${card.left}px`,
        width: "409px",
        height: "458px",
        borderRadius: "21.32px",
        background: BORDER_GRADIENT,
        padding: "1px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "20.32px",
          background: CARD_FILL_BG,
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {/* Icon circle */}
        <div
          style={{
            position: "absolute",
            top: "73px",
            left: "144px",
            width: "112px",
            height: "112px",
            borderRadius: "50%",
            background: "#020303",
            border: "2px solid #056FB499",
            boxShadow: "0px 0px 24px 16px #056FB43D",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={card.icon}
            alt={card.iconAlt}
            width={56}
            height={56}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Title */}
        <h3
          style={{
            position: "absolute",
            top: "212px",
            left: 0,
            width: "100%",
            margin: 0,
            padding: "0 24px",
            textAlign: "center",
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "26px",
            lineHeight: "100%",
            letterSpacing: 0,
            color: "#FFFFFF",
            boxSizing: "border-box",
          }}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          style={{
            position: "absolute",
            top: "258px",
            left: 0,
            width: "100%",
            margin: 0,
            padding: "0 44px",
            textAlign: "center",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: 0,
            color: "#FFFFFFBF",
            boxSizing: "border-box",
          }}
        >
          {card.description}
        </p>

        {/* Divider line */}
        <div
          style={{
            position: "absolute",
            top: "366px",
            left: "39px",
            width: "331px",
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.014) -2.94%, rgba(5, 111, 180, 0.7) 51.23%, rgba(255, 255, 255, 0.014) 102.37%)",
          }}
        />

        {/* Footer: logos or pill */}
        {card.footer.type === "logos" ? (
          <div
            style={{
              position: "absolute",
              top: "395px",
              left: "32px",
              width: "345px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            {card.footer.logos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                style={{ objectFit: "contain", flexShrink: 0 }}
              />
            ))}
          </div>
        ) : (
          <button
            type="button"
            style={{
              position: "absolute",
              top: `${card.footer.top}px`,
              left: `${card.footer.left}px`,
              width: `${card.footer.width}px`,
              height: `${card.footer.height}px`,
              paddingTop: "14px",
              paddingBottom: "14px",
              paddingLeft: "25px",
              paddingRight: "25px",
              gap: "6px",
              borderRadius: "28.83px",
              border: "1px solid #056FB4",
              background: PILL_BG,
              color: "#56A4E0",
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: 0,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              whiteSpace: "nowrap",
            }}
          >
            {card.footer.icon === "lightning" ? <LightningIcon /> : <ShieldCheckIcon />}
            <span>{card.footer.label}</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default async function PaymentsMethodsSection() {
  const data = await getPaymentsPage();
  const sectionTitle = data?.methodsTitle ?? "Deposits & Withdrawals You Can Trust .";
  const sectionDescription =
    data?.methodsDescription ??
    "Deposits hit your account in seconds. Withdrawals are processed quickly, so your funds stay safe, accessible, and always within reach.";
  return (
    <section
      className="page-section"
      style={{
        background: "#050208",
        overflow: "hidden",
      }}
    >
    {/* Desktop / tablet layout (≥ 425px) */}
    <div className="steps-horizontal">
    <ResponsiveScale designWidth={1440}>
    <div style={{ position: "relative", width: "1440px", minHeight: "771px" }}>
      <div
        style={{
          position: "absolute",
          top: "53px",
          left: "213px",
          width: "1013px",
          height: "120.02px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "18.02px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "120%",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          {sectionTitle}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "120%",
            letterSpacing: "0%",
            textAlign: "center",
            verticalAlign: "middle",
            color: "#FFFFFF",
            width: "851px",
            height: "57px",
            margin: 0,
          }}
        >
          {sectionDescription}
        </p>
      </div>

      {CARDS.map((card) => (
        <PaymentCard key={card.left} card={card} />
      ))}
    </div>
    </ResponsiveScale>
    </div>

    {/* Mobile layout (< 425px): standard heading + horizontal scroll cards */}
    <div className="steps-vertical">
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h2 className="section-title" style={{ marginBottom: "12px" }}>
          {sectionTitle}
        </h2>
        <p className="section-desc" style={{ margin: "0 auto" }}>
          {sectionDescription}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "0 20px",
        }}
      >
        {CARDS.map((card) => (
          <MobilePaymentCard key={card.left} card={card} />
        ))}
      </div>
    </div>
    </section>
  );
}
