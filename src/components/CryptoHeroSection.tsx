import Image from "next/image";
import SmartLink from "@/components/SmartLink";

const REGISTER_HREF = "https://fx.finsaitrade.com/auth/register";

function CurrencyStatIcon() {
  return (
    <svg aria-hidden focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6735 21.3373H25.3402V5.33732H12.0068V8.00399H22.6735V21.3373ZM22.6735 24.004V28.0027C22.6735 28.74 22.0735 29.336 21.3308 29.336H5.3495C5.17362 29.3372 4.99924 29.3036 4.83639 29.2372C4.67354 29.1707 4.52546 29.0727 4.40065 28.9488C4.27585 28.8248 4.1768 28.6774 4.10922 28.5151C4.04163 28.3527 4.00683 28.1785 4.00684 28.0027L4.0095 9.33865C4.0095 8.60132 4.6095 8.00399 5.35217 8.00399H9.33884V4.00399C9.33884 3.65037 9.47931 3.31123 9.72936 3.06118C9.97941 2.81113 10.3185 2.67065 10.6722 2.67065H26.6722C27.0258 2.67065 27.3649 2.81113 27.615 3.06118C27.865 3.31123 28.0055 3.65037 28.0055 4.00399V22.6707C28.0055 23.0243 27.865 23.3634 27.615 23.6135C27.3649 23.8635 27.0258 24.004 26.6722 24.004H22.6735ZM9.34017 21.3373V24.004H12.0068V25.3373H14.6735V24.004H15.3402C16.2242 24.004 17.0721 23.6528 17.6972 23.0277C18.3223 22.4026 18.6735 21.5547 18.6735 20.6707C18.6735 19.7866 18.3223 18.9388 17.6972 18.3136C17.0721 17.6885 16.2242 17.3373 15.3402 17.3373H11.3402C11.1634 17.3373 10.9938 17.2671 10.8688 17.1421C10.7437 17.017 10.6735 16.8475 10.6735 16.6707C10.6735 16.4938 10.7437 16.3243 10.8688 16.1992C10.9938 16.0742 11.1634 16.004 11.3402 16.004H17.3402V13.3373H14.6735V12.004H12.0068V13.3373H11.3402C10.4561 13.3373 9.60827 13.6885 8.98315 14.3136C8.35803 14.9388 8.00684 15.7866 8.00684 16.6707C8.00684 17.5547 8.35803 18.4026 8.98315 19.0277C9.60827 19.6528 10.4561 20.004 11.3402 20.004H15.3402C15.517 20.004 15.6865 20.0742 15.8116 20.1992C15.9366 20.3243 16.0068 20.4938 16.0068 20.6707C16.0068 20.8475 15.9366 21.017 15.8116 21.1421C15.6865 21.2671 15.517 21.3373 15.3402 21.3373H9.34017Z" fill="url(#currencystaticon-paint0_linear_432_754)"/>
<defs>
<linearGradient id="currencystaticon-paint0_linear_432_754" x1="36.6819" y1="12.4661" x2="3.98651" y2="12.6554" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
</defs>
</svg>
  );
}

function Clock2StatIcon() {
  return (
    <svg aria-hidden focusable="false" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.29926 18.0182C3.77159 16.7443 3.5 15.3789 3.5 14C3.5 11.2152 4.60625 8.54451 6.57538 6.57538C8.54451 4.60625 11.2152 3.5 14 3.5C16.7848 3.5 19.4555 4.60625 21.4246 6.57538C23.3938 8.54451 24.5 11.2152 24.5 14C24.5 15.3789 24.2284 16.7443 23.7007 18.0182C23.1731 19.2921 22.3996 20.4496 21.4246 21.4246C20.4496 22.3996 19.2921 23.1731 18.0182 23.7007C16.7443 24.2284 15.3789 24.5 14 24.5C12.6211 24.5 11.2557 24.2284 9.98182 23.7007C8.70791 23.1731 7.55039 22.3996 6.57538 21.4246C5.60036 20.4496 4.82694 19.2921 4.29926 18.0182Z" stroke="url(#clock2staticon-paint0_linear_432_749)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 8.16669V14L17.5 17.5" stroke="url(#clock2staticon-paint1_linear_432_749)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="clock2staticon-paint0_linear_432_749" x1="32.0923" y1="11.2143" x2="3.48244" y2="11.3983" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
<linearGradient id="clock2staticon-paint1_linear_432_749" x1="18.7654" y1="11.5953" x2="13.9969" y2="11.6068" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
</defs>
</svg>
  );
}

function CartStatIcon() {
  return (
    <svg aria-hidden focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.6665 5.33331H8.6665L11.9998 21.3333M11.9998 21.3333C11.2926 21.3333 10.6143 21.6143 10.1142 22.1144C9.61412 22.6145 9.33317 23.2927 9.33317 24C9.33317 24.7072 9.61412 25.3855 10.1142 25.8856C10.6143 26.3857 11.2926 26.6666 11.9998 26.6666C12.7071 26.6666 13.3854 26.3857 13.8855 25.8856C14.3856 25.3855 14.6665 24.7072 14.6665 24C14.6665 23.2927 14.3856 22.6145 13.8855 22.1144C13.3854 21.6143 12.7071 21.3333 11.9998 21.3333H22.6665M22.6665 21.3333C21.9593 21.3333 21.281 21.6143 20.7809 22.1144C20.2808 22.6145 19.9998 23.2927 19.9998 24C19.9998 24.7072 20.2808 25.3855 20.7809 25.8856C21.281 26.3857 21.9593 26.6666 22.6665 26.6666C23.3737 26.6666 24.052 26.3857 24.5521 25.8856C25.0522 25.3855 25.3332 24.7072 25.3332 24C25.3332 23.2927 25.0522 22.6145 24.5521 22.1144C24.052 21.6143 23.3737 21.3333 22.6665 21.3333ZM11.3332 17.3333H23.6665L25.3332 9.33331H9.74917" stroke="url(#cartstaticon-paint0_linear_421_163)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="cartstaticon-paint0_linear_421_163" x1="32.0819" y1="13.17" x2="6.65065" y2="13.3132" gradientUnits="userSpaceOnUse">
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
        100+ Crypto
        <br />
        Assets
      </>
    ),
    icon: <CurrencyStatIcon />,
  },
  {
    label: (
      <>
        Round-the-Clock
        <br />
        Trading
      </>
    ),
    icon: <Clock2StatIcon />,
  },
  {
    label: (
      <>
        Instant Order
        <br />
        Execution
      </>
    ),
    icon: <CartStatIcon />,
  },
];

export default function CryptoHeroSection() {
  return (
    <section
      className="crypto-hero commodities-hero"
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
        className="crypto-hero-image-wrap commodities-hero-image-wrap"
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
          src="/crypto-page/hero/Trade%20Top%20Cryptocurrencies_v1.jpeg"
          alt="Trade top cryptocurrencies with Finsai Trade"
          fill
          sizes="(max-width: 900px) 100vw, 708px"
          className="crypto-hero-image commodities-hero-image"
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      <div
        className="crypto-hero-left commodities-hero-left"
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
          Trade Top Cryptocurrencies
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
          Buy and sell Bitcoin, Ethereum, and other popular cryptocurrencies with secure, fast execution.
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
          className="crypto-hero-trust commodities-hero-trust"
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
