import Image from "next/image";
import SmartLink from "@/components/SmartLink";

const REGISTER_HREF = "https://fx.finsaitrade.com/auth/register";

/* Figma hero stat icons (ri_currency-fill, teenyicons_candle-chart-solid,
 * ri_swap-line). Gradient ids namespaced per component. */

function CurrencyPairsIcon() {
  return (
    <svg aria-hidden focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6735 21.3373H25.3402V5.33732H12.0068V8.00399H22.6735V21.3373ZM22.6735 24.004V28.0027C22.6735 28.74 22.0735 29.336 21.3308 29.336H5.3495C5.17362 29.3372 4.99924 29.3036 4.83639 29.2372C4.67354 29.1707 4.52546 29.0727 4.40065 28.9488C4.27585 28.8248 4.1768 28.6774 4.10922 28.5151C4.04163 28.3527 4.00683 28.1785 4.00684 28.0027L4.0095 9.33865C4.0095 8.60132 4.6095 8.00399 5.35217 8.00399H9.33884V4.00399C9.33884 3.65037 9.47931 3.31123 9.72936 3.06118C9.97941 2.81113 10.3185 2.67065 10.6722 2.67065H26.6722C27.0258 2.67065 27.3649 2.81113 27.615 3.06118C27.865 3.31123 28.0055 3.65037 28.0055 4.00399V22.6707C28.0055 23.0243 27.865 23.3634 27.615 23.6135C27.3649 23.8635 27.0258 24.004 26.6722 24.004H22.6735ZM9.34017 21.3373V24.004H12.0068V25.3373H14.6735V24.004H15.3402C16.2242 24.004 17.0721 23.6528 17.6972 23.0277C18.3223 22.4026 18.6735 21.5547 18.6735 20.6707C18.6735 19.7866 18.3223 18.9388 17.6972 18.3136C17.0721 17.6885 16.2242 17.3373 15.3402 17.3373H11.3402C11.1634 17.3373 10.9938 17.2671 10.8688 17.1421C10.7437 17.017 10.6735 16.8475 10.6735 16.6707C10.6735 16.4938 10.7437 16.3243 10.8688 16.1992C10.9938 16.0742 11.1634 16.004 11.3402 16.004H17.3402V13.3373H14.6735V12.004H12.0068V13.3373H11.3402C10.4561 13.3373 9.60827 13.6885 8.98315 14.3136C8.35803 14.9388 8.00684 15.7866 8.00684 16.6707C8.00684 17.5547 8.35803 18.4026 8.98315 19.0277C9.60827 19.6528 10.4561 20.004 11.3402 20.004H15.3402C15.517 20.004 15.6865 20.0742 15.8116 20.1992C15.9366 20.3243 16.0068 20.4938 16.0068 20.6707C16.0068 20.8475 15.9366 21.017 15.8116 21.1421C15.6865 21.2671 15.517 21.3373 15.3402 21.3373H9.34017Z" fill="url(#currencypairsicon-paint0_linear_412_130)"/>
<path d="M22.6735 21.3373H25.3402V5.33732H12.0068V8.00399H22.6735V21.3373ZM22.6735 24.004V28.0027C22.6735 28.74 22.0735 29.336 21.3308 29.336H5.3495C5.17362 29.3372 4.99924 29.3036 4.83639 29.2372C4.67354 29.1707 4.52546 29.0727 4.40065 28.9488C4.27585 28.8248 4.1768 28.6774 4.10922 28.5151C4.04163 28.3527 4.00683 28.1785 4.00684 28.0027L4.0095 9.33865C4.0095 8.60132 4.6095 8.00399 5.35217 8.00399H9.33884V4.00399C9.33884 3.65037 9.47931 3.31123 9.72936 3.06118C9.97941 2.81113 10.3185 2.67065 10.6722 2.67065H26.6722C27.0258 2.67065 27.3649 2.81113 27.615 3.06118C27.865 3.31123 28.0055 3.65037 28.0055 4.00399V22.6707C28.0055 23.0243 27.865 23.3634 27.615 23.6135C27.3649 23.8635 27.0258 24.004 26.6722 24.004H22.6735ZM9.34017 21.3373V24.004H12.0068V25.3373H14.6735V24.004H15.3402C16.2242 24.004 17.0721 23.6528 17.6972 23.0277C18.3223 22.4026 18.6735 21.5547 18.6735 20.6707C18.6735 19.7866 18.3223 18.9388 17.6972 18.3136C17.0721 17.6885 16.2242 17.3373 15.3402 17.3373H11.3402C11.1634 17.3373 10.9938 17.2671 10.8688 17.1421C10.7437 17.017 10.6735 16.8475 10.6735 16.6707C10.6735 16.4938 10.7437 16.3243 10.8688 16.1992C10.9938 16.0742 11.1634 16.004 11.3402 16.004H17.3402V13.3373H14.6735V12.004H12.0068V13.3373H11.3402C10.4561 13.3373 9.60827 13.6885 8.98315 14.3136C8.35803 14.9388 8.00684 15.7866 8.00684 16.6707C8.00684 17.5547 8.35803 18.4026 8.98315 19.0277C9.60827 19.6528 10.4561 20.004 11.3402 20.004H15.3402C15.517 20.004 15.6865 20.0742 15.8116 20.1992C15.9366 20.3243 16.0068 20.4938 16.0068 20.6707C16.0068 20.8475 15.9366 21.017 15.8116 21.1421C15.6865 21.2671 15.517 21.3373 15.3402 21.3373H9.34017Z" fill="url(#currencypairsicon-paint0_linear_412_130)"/>
<defs>
<linearGradient id="currencypairsicon-paint0_linear_412_130" x1="36.6819" y1="12.4661" x2="3.98651" y2="12.6554" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
</defs>
</svg>
  );
}

function BullBearIcon() {
  return (
    <svg aria-hidden focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#bullbearicon-clip0_412_143)">
<path d="M17.0666 0V6.4H14.9333V17.0667H21.3333V6.4H19.1999V0H17.0666ZM6.39994 8.53333V10.6667H4.2666V21.3333H6.39994V25.6H8.53327V21.3333H10.6666V10.6667H8.53327V8.53333H6.39994ZM25.5999 12.8H27.7333V8.53333H29.8666V12.8H31.9999V23.4667H29.8666V27.7333H27.7333V23.4667H25.5999V12.8Z" fill="url(#bullbearicon-paint0_linear_412_143)"/>
</g>
<defs>
<linearGradient id="bullbearicon-paint0_linear_412_143" x1="42.0266" y1="10.1878" x2="4.24341" y2="10.4308" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
<clipPath id="bullbearicon-clip0_412_143">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
  );
}

function ZeroSwapIcon() {
  return (
    <svg aria-hidden focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0067 29.3373C8.64267 29.3373 2.67334 23.368 2.67334 16.004C2.67334 8.63999 8.64267 2.67065 16.0067 2.67065C23.3707 2.67065 29.34 8.63999 29.34 16.004C29.34 23.368 23.3707 29.3373 16.0067 29.3373ZM16.0067 26.6707C18.8356 26.6707 21.5488 25.5468 23.5491 23.5465C25.5495 21.5461 26.6733 18.833 26.6733 16.004C26.6733 13.175 25.5495 10.4619 23.5491 8.46151C21.5488 6.46113 18.8356 5.33732 16.0067 5.33732C13.1777 5.33732 10.4646 6.46113 8.4642 8.46151C6.46381 10.4619 5.34001 13.175 5.34001 16.004C5.34001 18.833 6.46381 21.5461 8.4642 23.5465C10.4646 25.5468 13.1777 26.6707 16.0067 26.6707ZM9.34001 12.004L13.34 7.33732L17.34 12.004H14.6733V17.3373H12.0067V12.004H9.34001ZM22.6733 20.004L18.6733 24.6707L14.6733 20.004H17.34V14.6707H20.0067V20.004H22.6733Z" fill="url(#zeroswapicon-paint0_linear_412_168)"/>
<path d="M16.0067 29.3373C8.64267 29.3373 2.67334 23.368 2.67334 16.004C2.67334 8.63999 8.64267 2.67065 16.0067 2.67065C23.3707 2.67065 29.34 8.63999 29.34 16.004C29.34 23.368 23.3707 29.3373 16.0067 29.3373ZM16.0067 26.6707C18.8356 26.6707 21.5488 25.5468 23.5491 23.5465C25.5495 21.5461 26.6733 18.833 26.6733 16.004C26.6733 13.175 25.5495 10.4619 23.5491 8.46151C21.5488 6.46113 18.8356 5.33732 16.0067 5.33732C13.1777 5.33732 10.4646 6.46113 8.4642 8.46151C6.46381 10.4619 5.34001 13.175 5.34001 16.004C5.34001 18.833 6.46381 21.5461 8.4642 23.5465C10.4646 25.5468 13.1777 26.6707 16.0067 26.6707ZM9.34001 12.004L13.34 7.33732L17.34 12.004H14.6733V17.3373H12.0067V12.004H9.34001ZM22.6733 20.004L18.6733 24.6707L14.6733 20.004H17.34V14.6707H20.0067V20.004H22.6733Z" fill="url(#zeroswapicon-paint0_linear_412_168)"/>
<defs>
<linearGradient id="zeroswapicon-paint0_linear_412_168" x1="38.981" y1="12.4666" x2="2.65104" y2="12.7003" gradientUnits="userSpaceOnUse">
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
        100+ Currency
        <br />
        Pairs
      </>
    ),
    icon: <CurrencyPairsIcon />,
  },
  {
    label: (
      <>
        Bull &amp; Bear
        <br />
        Markets
      </>
    ),
    icon: <BullBearIcon />,
  },
  {
    label: (
      <>
        Zero Swap
        <br />
        Options
      </>
    ),
    icon: <ZeroSwapIcon />,
  },
];

export default function ForexHeroSection() {
  return (
    <section
      className="forex-hero commodities-hero"
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
      {/*
        Figma: filled panel flush to the right edge and the bottom of the hero.
        Previously 806x529 with objectFit:contain — the source is 2112x1587
        (1.33) so a 1.52 box letterboxed it, and the panel ended at y=624 inside
        a 720-tall section, leaving a black band underneath.
      */}
      <div
        className="forex-hero-image-wrap commodities-hero-image-wrap"
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
          src="/forex/hero/Trade%20the%20Global%20Forex%20Market_v1.jpeg"
          alt="Trade the global forex market with Finsai Trade"
          fill
          sizes="(max-width: 900px) 100vw, 842px"
          className="forex-hero-image commodities-hero-image"
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      <div
        className="forex-hero-left commodities-hero-left"
        style={{
          position: "absolute",
          // Centred on the image panel band (179..720).
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
          Trade the Global Forex Market
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
           Access major, minor, and exotic currency pairs with tight spreads and fast, reliable order execution
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
          className="forex-hero-trust commodities-hero-trust"
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
