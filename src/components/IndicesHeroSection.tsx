import Image from "next/image";
import SmartLink from "@/components/SmartLink";

const REGISTER_HREF = "https://fx.finsaitrade.com/auth/register";

function BasketStatIcon() {
  return (
    <svg aria-hidden focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.15204 21.94C4.00804 17.364 3.43604 15.0773 4.63738 13.5387C5.83871 12 8.19738 12 12.9134 12H19.0867C23.804 12 26.1614 12 27.3627 13.5387C28.564 15.0773 27.992 17.3653 26.848 21.94C26.12 24.8507 25.7574 26.3053 24.672 27.1533C23.5867 28 22.0867 28 19.0867 28H12.9134C9.91338 28 8.41338 28 7.32804 27.1533C6.24271 26.3053 5.87871 24.8507 5.15204 21.94Z" stroke="url(#basketstaticon-paint0_linear_432_577)" strokeWidth="2"/>
<path d="M26 12.6666L25.0533 9.19331C24.688 7.85331 24.5053 7.18398 24.1307 6.67865C23.7571 6.1766 23.2497 5.78985 22.6667 5.56265C22.08 5.33331 21.3867 5.33331 20 5.33331M6 12.6666L6.94667 9.19331C7.312 7.85331 7.49467 7.18398 7.86933 6.67865C8.2429 6.1766 8.75025 5.78985 9.33333 5.56265C9.92 5.33331 10.6133 5.33331 12 5.33331" stroke="url(#basketstaticon-paint1_linear_432_577)" strokeWidth="2"/>
<path d="M12 5.33333C12 4.97971 12.1405 4.64057 12.3905 4.39052C12.6406 4.14048 12.9797 4 13.3333 4H18.6667C19.0203 4 19.3594 4.14048 19.6095 4.39052C19.8595 4.64057 20 4.97971 20 5.33333C20 5.68696 19.8595 6.02609 19.6095 6.27614C19.3594 6.52619 19.0203 6.66667 18.6667 6.66667H13.3333C12.9797 6.66667 12.6406 6.52619 12.3905 6.27614C12.1405 6.02609 12 5.68696 12 5.33333Z" stroke="url(#basketstaticon-paint2_linear_432_577)" strokeWidth="2"/>
<defs>
<linearGradient id="basketstaticon-paint0_linear_432_577" x1="36.7292" y1="17.8776" x2="3.95132" y2="18.1947" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
<linearGradient id="basketstaticon-paint1_linear_432_577" x1="33.2308" y1="8.02719" x2="5.99054" y2="8.50514" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
<linearGradient id="basketstaticon-paint2_linear_432_577" x1="22.8923" y1="4.97959" x2="11.9969" y2="5.18988" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
</defs>
</svg>
  );
}

function CandleStatIcon() {
  return (
    <svg aria-hidden focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#candlestaticon-clip0_432_572)">
<path d="M17.0666 0V6.4H14.9333V17.0667H21.3333V6.4H19.1999V0H17.0666ZM6.39994 8.53333V10.6667H4.2666V21.3333H6.39994V25.6H8.53327V21.3333H10.6666V10.6667H8.53327V8.53333H6.39994ZM25.5999 12.8H27.7333V8.53333H29.8666V12.8H31.9999V23.4667H29.8666V27.7333H27.7333V23.4667H25.5999V12.8Z" fill="url(#candlestaticon-paint0_linear_432_572)"/>
</g>
<defs>
<linearGradient id="candlestaticon-paint0_linear_432_572" x1="42.0266" y1="10.1878" x2="4.24341" y2="10.4308" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
<clipPath id="candlestaticon-clip0_432_572">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
  );
}

function OptionsStatIcon() {
  return (
    <svg aria-hidden focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9999 19C12.8868 18.9998 13.7487 19.2944 14.45 19.8374C15.1513 20.3805 15.6522 21.1412 15.8739 22H26.9999C27.2498 21.9995 27.4908 22.0927 27.6755 22.261C27.8601 22.4294 27.9751 22.6608 27.9976 22.9096C28.0202 23.1585 27.9488 23.4068 27.7974 23.6057C27.6461 23.8045 27.4258 23.9395 27.1799 23.984L26.9999 24L15.8739 24.002C15.6529 24.8615 15.1523 25.6231 14.451 26.167C13.7497 26.7108 12.8874 27.0059 11.9999 27.0059C11.1124 27.0059 10.2501 26.7108 9.54879 26.167C8.84745 25.6231 8.34689 24.8615 8.12589 24.002L4.99989 24C4.75 24.0005 4.50899 23.9073 4.32432 23.739C4.13966 23.5706 4.02472 23.3392 4.00214 23.0904C3.97956 22.8415 4.05098 22.5932 4.20233 22.3943C4.35368 22.1955 4.574 22.0605 4.81989 22.016L4.99989 22H8.12589C8.34763 21.1412 8.84852 20.3805 9.54979 19.8374C10.2511 19.2944 11.1129 18.9998 11.9999 19ZM11.9999 21C11.4695 21 10.9608 21.2107 10.5857 21.5858C10.2106 21.9609 9.99989 22.4696 9.99989 23C9.99989 23.5304 10.2106 24.0391 10.5857 24.4142C10.9608 24.7893 11.4695 25 11.9999 25C12.5303 25 13.039 24.7893 13.4141 24.4142C13.7892 24.0391 13.9999 23.5304 13.9999 23C13.9999 22.4696 13.7892 21.9609 13.4141 21.5858C13.039 21.2107 12.5303 21 11.9999 21ZM19.9999 5C20.8868 4.99977 21.7487 5.29435 22.45 5.83741C23.1513 6.38047 23.6522 7.14121 23.8739 8H26.9999C27.2498 7.99954 27.4908 8.09266 27.6755 8.26102C27.8601 8.42938 27.9751 8.66077 27.9976 8.90964C28.0202 9.15851 27.9488 9.40682 27.7974 9.60566C27.6461 9.80451 27.4258 9.93948 27.1799 9.984L26.9999 10L23.8739 10.002C23.6529 10.8615 23.1523 11.6231 22.451 12.167C21.7497 12.7108 20.8874 13.0059 19.9999 13.0059C19.1124 13.0059 18.2501 12.7108 17.5488 12.167C16.8475 11.6231 16.3469 10.8615 16.1259 10.002L4.99989 10C4.75 10.0005 4.50899 9.90734 4.32432 9.73898C4.13966 9.57062 4.02472 9.33923 4.00214 9.09036C3.97956 8.84149 4.05098 8.59318 4.20233 8.39434C4.35368 8.19549 4.574 8.06052 4.81989 8.016L4.99989 8H16.1259C16.3476 7.14121 16.8485 6.38047 17.5498 5.83741C18.2511 5.29435 19.1129 4.99977 19.9999 5ZM19.9999 7C19.4695 7 18.9607 7.21071 18.5857 7.58579C18.2106 7.96086 17.9999 8.46957 17.9999 9C17.9999 9.53043 18.2106 10.0391 18.5857 10.4142C18.9607 10.7893 19.4695 11 19.9999 11C20.5303 11 21.039 10.7893 21.4141 10.4142C21.7892 10.0391 21.9999 9.53043 21.9999 9C21.9999 8.46957 21.7892 7.96086 21.4141 7.58579C21.039 7.21071 20.5303 7 19.9999 7Z" fill="url(#optionsstaticon-paint0_linear_432_568)"/>
<defs>
<linearGradient id="optionsstaticon-paint0_linear_432_568" x1="36.68" y1="13.0838" x2="3.97823" y2="13.3133" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
</defs>
</svg>
  );
}

const trustItems = [
  {
    label: (
      <>
        Diversified
        <br />
        Company Basket
      </>
    ),
    icon: <BasketStatIcon />,
  },
  {
    label: (
      <>
        Long &amp; Short
        <br />
        Positions
      </>
    ),
    icon: <CandleStatIcon />,
  },
  {
    label: (
      <>
        Flexible Leverage
        <br />
        Options
      </>
    ),
    icon: <OptionsStatIcon />,
  },
];

export default function IndicesHeroSection() {
  return (
    <section
      className="indices-hero commodities-hero"
      style={{
        position: "relative",
        background: "#000000",
        width: "100%",
        maxWidth: 1440,
        margin: "0 auto",
        height: 812,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        className="indices-hero-image-wrap commodities-hero-image-wrap"
        style={{
          position: "absolute",
          top: 160,
          left: 676,
          width: 708,
          height: 532,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <Image
          src="/indices/hero/Trade%20Major%20Global%20Indices_v2.jpeg"
          alt="Trade major global indices with Finsai Trade"
          fill
          sizes="(max-width: 900px) 100vw, 708px"
          className="indices-hero-image commodities-hero-image"
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      <div
        className="indices-hero-left commodities-hero-left"
        style={{
          position: "absolute",
          top: 426,
          transform: "translateY(-50%)",
          left: 80,
          width: 590,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          zIndex: 2,
        }}
      >
        <h1
          style={{
            margin: 0,
            /* Figma dev spec: Sora / 600 SemiBold / 56px / 110% / -1% / w536 */
            maxWidth: 570,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "clamp(34px, 3.9vw, 56px)",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
          }}
        >
          Trade Major Global Indices
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: 560,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 18,
            lineHeight: "31.11px",
            letterSpacing: "0%",
            color: "#FFFFFFBF",
          }}
        >
          Take positions on the S&P 500, NASDAQ, FTSE 100, DAX, and more from one trading account.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <SmartLink
            href={REGISTER_HREF}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 8,
              padding: "12px 24px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            Open Live Account
            <span aria-hidden>→</span>
          </SmartLink>
          <SmartLink
            href={REGISTER_HREF}
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 8,
              padding: "12px 24px",
              border: "1px solid rgba(125, 185, 214, 0.55)",
              color: "#C8CDD5",
              textDecoration: "none",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: 15,
              fontWeight: 500,
              background: "transparent",
            }}
          >
            Try Free Demo
          </SmartLink>
        </div>

        <div
          className="indices-hero-trust commodities-hero-trust"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            gap: 0,
            marginTop: 12,
            width: 590,
            height: 40,
          }}
        >
          {trustItems.map((item, i) => (
            <div
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                width: 196.67,
                minWidth: 0,
                paddingRight: i < trustItems.length - 1 ? 16 : 0,
                marginRight: i < trustItems.length - 1 ? 16 : 0,
                borderRight:
                  i < trustItems.length - 1
                    ? "1px solid rgba(125, 130, 139, 0.45)"
                    : undefined,
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 300,
                fontSize: 14.91,
                lineHeight: "100%",
                color: "#797E89",
                whiteSpace: "normal",
                flexShrink: 0,
              }}
            >
              {item.icon}
              <span style={{ display: "inline-block" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
