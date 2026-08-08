import Image from "next/image";
import SmartLink from "@/components/SmartLink";

const REGISTER_HREF = "https://fx.finsaitrade.com/auth/register";

function ClockStatIcon() {
  return (
    <svg aria-hidden focusable="false" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.29926 18.0182C3.77159 16.7443 3.5 15.3789 3.5 14C3.5 11.2152 4.60625 8.54451 6.57538 6.57538C8.54451 4.60625 11.2152 3.5 14 3.5C16.7848 3.5 19.4555 4.60625 21.4246 6.57538C23.3938 8.54451 24.5 11.2152 24.5 14C24.5 15.3789 24.2284 16.7443 23.7007 18.0182C23.1731 19.2921 22.3996 20.4496 21.4246 21.4246C20.4496 22.3996 19.2921 23.1731 18.0182 23.7007C16.7443 24.2284 15.3789 24.5 14 24.5C12.6211 24.5 11.2557 24.2284 9.98182 23.7007C8.70791 23.1731 7.55039 22.3996 6.57538 21.4246C5.60036 20.4496 4.82694 19.2921 4.29926 18.0182Z" stroke="url(#clockstaticon-paint0_linear_571_175)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 8.16669V14L17.5 17.5" stroke="url(#clockstaticon-paint1_linear_571_175)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="clockstaticon-paint0_linear_571_175" x1="32.0923" y1="11.2143" x2="3.48244" y2="11.3983" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
<linearGradient id="clockstaticon-paint1_linear_571_175" x1="18.7654" y1="11.5953" x2="13.9969" y2="11.6068" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
</defs>
</svg>
  );
}

function PeopleStatIcon() {
  return (
    <svg aria-hidden focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.427 13.88C18.2369 12.7484 18.6724 11.3916 18.6724 10C18.6724 8.60841 18.2369 7.25168 17.427 6.12003C18.1854 5.6034 19.0827 5.32909 20.0003 5.33336C21.238 5.33336 22.425 5.82503 23.3002 6.7002C24.1753 7.57537 24.667 8.76235 24.667 10C24.667 11.2377 24.1753 12.4247 23.3002 13.2999C22.425 14.175 21.238 14.6667 20.0003 14.6667C19.0827 14.671 18.1854 14.3967 17.427 13.88ZM7.33366 10C7.33366 9.07705 7.60735 8.1748 8.12013 7.40737C8.63291 6.63994 9.36175 6.0418 10.2145 5.68859C11.0672 5.33538 12.0055 5.24297 12.9107 5.42303C13.816 5.6031 14.6475 6.04755 15.3002 6.7002C15.9528 7.35284 16.3973 8.18436 16.5773 9.08961C16.7574 9.99485 16.665 10.9332 16.3118 11.7859C15.9586 12.6386 15.3604 13.3674 14.593 13.8802C13.8256 14.393 12.9233 14.6667 12.0003 14.6667C10.7626 14.6667 9.57566 14.175 8.70049 13.2999C7.82532 12.4247 7.33366 11.2377 7.33366 10ZM10.0003 10C10.0003 10.3956 10.1176 10.7823 10.3374 11.1112C10.5571 11.4401 10.8695 11.6964 11.235 11.8478C11.6004 11.9992 12.0025 12.0388 12.3905 11.9616C12.7785 11.8844 13.1348 11.6939 13.4145 11.4142C13.6942 11.1345 13.8847 10.7782 13.9619 10.3902C14.0391 10.0022 13.9995 9.60011 13.8481 9.23466C13.6967 8.86921 13.4404 8.55685 13.1115 8.33709C12.7826 8.11733 12.3959 8.00003 12.0003 8.00003C11.4699 8.00003 10.9612 8.21074 10.5861 8.58581C10.211 8.96089 10.0003 9.4696 10.0003 10ZM21.3337 22.6667V25.3334H2.66699V22.6667C2.66699 22.6667 2.66699 17.3334 12.0003 17.3334C21.3337 17.3334 21.3337 22.6667 21.3337 22.6667ZM18.667 22.6667C18.4803 21.6267 16.8937 20 12.0003 20C7.10699 20 5.42699 21.7467 5.33366 22.6667M21.267 17.3334C22.0842 17.969 22.7524 18.7758 23.2246 19.6972C23.6968 20.6186 23.9615 21.6321 24.0003 22.6667V25.3334H29.3337V22.6667C29.3337 22.6667 29.3337 17.8267 21.2537 17.3334H21.267Z" fill="url(#peoplestaticon-paint0_linear_571_167)"/>
<defs>
<linearGradient id="peoplestaticon-paint0_linear_571_167" x1="38.9747" y1="12.6803" x2="2.64586" y2="12.9919" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
</defs>
</svg>
  );
}

function SwapStatIcon() {
  return (
    <svg aria-hidden focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0062 29.3373C8.64219 29.3373 2.67285 23.368 2.67285 16.004C2.67285 8.63999 8.64219 2.67065 16.0062 2.67065C23.3702 2.67065 29.3395 8.63999 29.3395 16.004C29.3395 23.368 23.3702 29.3373 16.0062 29.3373ZM16.0062 26.6707C18.8352 26.6707 21.5483 25.5468 23.5487 23.5465C25.549 21.5461 26.6729 18.833 26.6729 16.004C26.6729 13.175 25.549 10.4619 23.5487 8.46151C21.5483 6.46113 18.8352 5.33732 16.0062 5.33732C13.1772 5.33732 10.4641 6.46113 8.46371 8.46151C6.46332 10.4619 5.33952 13.175 5.33952 16.004C5.33952 18.833 6.46332 21.5461 8.46371 23.5465C10.4641 25.5468 13.1772 26.6707 16.0062 26.6707ZM9.33952 12.004L13.3395 7.33732L17.3395 12.004H14.6729V17.3373H12.0062V12.004H9.33952ZM22.6729 20.004L18.6729 24.6707L14.6729 20.004H17.3395V14.6707H20.0062V20.004H22.6729Z" fill="url(#swapstaticon-paint0_linear_571_163)"/>
<path d="M16.0062 29.3373C8.64219 29.3373 2.67285 23.368 2.67285 16.004C2.67285 8.63999 8.64219 2.67065 16.0062 2.67065C23.3702 2.67065 29.3395 8.63999 29.3395 16.004C29.3395 23.368 23.3702 29.3373 16.0062 29.3373ZM16.0062 26.6707C18.8352 26.6707 21.5483 25.5468 23.5487 23.5465C25.549 21.5461 26.6729 18.833 26.6729 16.004C26.6729 13.175 25.549 10.4619 23.5487 8.46151C21.5483 6.46113 18.8352 5.33732 16.0062 5.33732C13.1772 5.33732 10.4641 6.46113 8.46371 8.46151C6.46332 10.4619 5.33952 13.175 5.33952 16.004C5.33952 18.833 6.46332 21.5461 8.46371 23.5465C10.4641 25.5468 13.1772 26.6707 16.0062 26.6707ZM9.33952 12.004L13.3395 7.33732L17.3395 12.004H14.6729V17.3373H12.0062V12.004H9.33952ZM22.6729 20.004L18.6729 24.6707L14.6729 20.004H17.3395V14.6707H20.0062V20.004H22.6729Z" fill="url(#swapstaticon-paint0_linear_571_163)"/>
<defs>
<linearGradient id="swapstaticon-paint0_linear_571_163" x1="38.9805" y1="12.4666" x2="2.65055" y2="12.7003" gradientUnits="userSpaceOnUse">
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
        Energy &amp; Agri
        <br />
        Markets
      </>
    ),
    icon: <ClockStatIcon />,
  },
  {
    label: (
      <>
        Supply-Driven
        <br />
        Pricing
      </>
    ),
    icon: <PeopleStatIcon />,
  },
  {
    label: (
      <>
        Diverse
        <br />
        Commodity Range
      </>
    ),
    icon: <SwapStatIcon />,
  },
];

export default function CommoditiesHeroSection() {
  return (
    <section
      className="commodities-hero"
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
        className="commodities-hero-image-wrap"
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
          src="/commodities/hero/Trade%20Oil%2C%20Gas%20%26%20Agri%20Markets_v1.jpeg"
          alt="Trade oil, gas and agricultural commodities with Finsai Trade"
          fill
          sizes="(max-width: 900px) 100vw, 708px"
          className="commodities-hero-image"
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      <div
        className="commodities-hero-left"
        style={{
          position: "absolute",
          // Vertically centred on the image panel band (149..720 -> centre
          // 434). Anchoring by centre rather than a fixed top keeps the copy
          // aligned with the artwork whatever the headline wraps to — the
          // fixed top:170 left it sitting well above the panel's mass.
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
          Trade Oil, Gas &amp; Agri Markets
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
          Trade energy, agricultural, and raw material commodities through our global multi-asset broker platform.
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
          className="commodities-hero-trust"
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
