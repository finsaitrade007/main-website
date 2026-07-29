import Image from "next/image";
import SmartLink from "@/components/SmartLink";
import { MT5_WEBTRADER_HREF } from "@/lib/mt5";

const bullets = [
  "Trade directly from your browser.",
  "No download or installation required.",
  "Access advanced charts and analysis tools.",
  "Secure and reliable trading experience.",
];

export default function Mt5WebtraderSection() {
  return (
    <section
      style={{
        background: "#050208",
        padding:
          "clamp(48px, 6vw, 100px) clamp(20px, 5.5vw, 80px)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          gap: "clamp(32px, 5vw, 64px)",
          alignItems: "center",
        }}
        className="mt5-webtrader-grid"
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "clamp(26px, 3.2vw, 40px)",
              lineHeight: 1.2,
              color: "#FFFFFF",
              margin: "0 0 16px",
            }}
          >
            Access MT5 on your web browser
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontSize: 16,
              lineHeight: 1.7,
              color: "#94A3B8",
              margin: "0 0 28px",
              maxWidth: 520,
            }}
          >
            Trade through phone, desktop, or web-based platform with advanced
            tools — anytime, anywhere.
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 32px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {bullets.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  fontFamily: "var(--font-inter, Inter)",
                  fontSize: 15,
                  color: "#E2E8F0",
                  lineHeight: 1.5,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    flexShrink: 0,
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "rgba(5,111,180,0.2)",
                    border: "1px solid #056FB4",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 1,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6.2L4.8 8.5 9.5 3.5"
                      stroke="#41ABE7"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <SmartLink
            href={MT5_WEBTRADER_HREF}
            className="btn-text"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 8,
              padding: "12px 24px",
              background:
                "linear-gradient(90deg, #496DAB 0%, #496DAB 50%, #41ABE7 75%, #48C3F4 100%)",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            Launch MT5 Webtrader
            <span aria-hidden>→</span>
          </SmartLink>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 3",
          }}
        >
          <Image
            src="/mt5-assets/webtrader.jpeg"
            alt="MT5 web browser trading experience"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}
