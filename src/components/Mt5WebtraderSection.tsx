import Image from "next/image";
import SmartLink from "@/components/SmartLink";
import { MT5_WEBTRADER_HREF } from "@/lib/mt5";

const bullets = [
  "Trade instantly from your browser",
  "No download or installation required",
  "Access advanced charts and trading tools",
  "Secure, fast, and seamless trading experience",
];

function ShieldCheckIcon({ size = 32 }: { size?: number }) {
  return (
    <svg aria-hidden focusable="false" width={size} height={size} viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.5248 4.7697C24.817 6.1589 19.752 2.2633 17.843 0.524371C17.4748 0.188489 16.9974 0.00180523 16.5018 1.30243e-05C16.0063 -0.00177918 15.5275 0.181446 15.157 0.514656C13.2288 2.25359 8.13503 6.1589 2.48484 4.7697C2.21376 4.70667 1.93244 4.70363 1.66009 4.76078C1.38775 4.81794 1.13079 4.93394 0.90676 5.10086C0.682733 5.26779 0.496916 5.48171 0.361998 5.72802C0.22708 5.97433 0.14624 6.24722 0.124996 6.52806C-0.469761 15.1256 0.499116 27.3078 15.7038 33.8361C15.9557 33.9443 16.2264 34 16.5 34C16.7736 34 17.0443 33.9443 17.2962 33.8361C32.5009 27.3078 33.4698 15.1256 32.875 6.52806C32.8605 6.24552 32.7843 5.96974 32.6521 5.72055C32.5198 5.47135 32.3346 5.25492 32.1099 5.0868C31.8852 4.91869 31.6265 4.80306 31.3525 4.74824C31.0784 4.69341 30.7957 4.70074 30.5248 4.7697ZM24.3278 15.5433L16.6237 22.9362C16.1961 23.3466 15.6272 23.5718 15.0381 23.5639C14.449 23.5559 13.8862 23.3153 13.4696 22.8935L9.71593 19.0921C9.29182 18.6626 9.05355 18.0801 9.05355 17.4727C9.05355 16.8652 9.29182 16.2827 9.71593 15.8532C10.14 15.4237 10.7153 15.1824 11.3151 15.1824C11.9149 15.1824 12.4901 15.4237 12.9142 15.8532L15.111 18.0788L21.2168 12.2189C21.4323 12.0119 21.686 11.8499 21.9634 11.7422C22.2408 11.6345 22.5364 11.5833 22.8334 11.5914C23.1303 11.5995 23.4228 11.6668 23.694 11.7895C23.9653 11.9122 24.2099 12.0878 24.4141 12.3064C24.6184 12.5246 24.7783 12.7815 24.8845 13.0623C24.9908 13.3431 25.0413 13.6423 25.0333 13.943C25.0253 14.2436 24.9588 14.5396 24.8378 14.8142C24.7167 15.0888 24.5434 15.3366 24.3278 15.5433Z" fill="#056FB4"/>
<path d="M30.5248 4.7697C24.817 6.1589 19.752 2.2633 17.843 0.524371C17.4748 0.188489 16.9974 0.00180523 16.5018 1.30243e-05C16.0063 -0.00177918 15.5275 0.181446 15.157 0.514656C13.2288 2.25359 8.13503 6.1589 2.48484 4.7697C2.21376 4.70667 1.93244 4.70363 1.66009 4.76078C1.38775 4.81794 1.13079 4.93394 0.90676 5.10086C0.682733 5.26779 0.496916 5.48171 0.361998 5.72802C0.22708 5.97433 0.14624 6.24722 0.124996 6.52806C-0.469761 15.1256 0.499116 27.3078 15.7038 33.8361C15.9557 33.9443 16.2264 34 16.5 34C16.7736 34 17.0443 33.9443 17.2962 33.8361C32.5009 27.3078 33.4698 15.1256 32.875 6.52806C32.8605 6.24552 32.7843 5.96974 32.6521 5.72055C32.5198 5.47135 32.3346 5.25492 32.1099 5.0868C31.8852 4.91869 31.6265 4.80306 31.3525 4.74824C31.0784 4.69341 30.7957 4.70074 30.5248 4.7697ZM24.3278 15.5433L16.6237 22.9362C16.1961 23.3466 15.6272 23.5718 15.0381 23.5639C14.449 23.5559 13.8862 23.3153 13.4696 22.8935L9.71593 19.0921C9.29182 18.6626 9.05355 18.0801 9.05355 17.4727C9.05355 16.8652 9.29182 16.2827 9.71593 15.8532C10.14 15.4237 10.7153 15.1824 11.3151 15.1824C11.9149 15.1824 12.4901 15.4237 12.9142 15.8532L15.111 18.0788L21.2168 12.2189C21.4323 12.0119 21.686 11.8499 21.9634 11.7422C22.2408 11.6345 22.5364 11.5833 22.8334 11.5914C23.1303 11.5995 23.4228 11.6668 23.694 11.7895C23.9653 11.9122 24.2099 12.0878 24.4141 12.3064C24.6184 12.5246 24.7783 12.7815 24.8845 13.0623C24.9908 13.3431 25.0413 13.6423 25.0333 13.943C25.0253 14.2436 24.9588 14.5396 24.8378 14.8142C24.7167 15.0888 24.5434 15.3366 24.3278 15.5433Z" fill="url(#shieldcheckicon-paint0_linear_626_494)"/>
<defs>
<linearGradient id="shieldcheckicon-paint0_linear_626_494" x1="44.9308" y1="12.4898" x2="-0.0277002" y2="12.7705" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
</defs>
</svg>
  );
}

/**
 * Figma: section 1440×604; image 587×524 @ top 34, left 799
 */
export default function Mt5WebtraderSection() {
  return (
    <section
      className="mt5-webtrader"
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        height: 604,
        margin: "0 auto",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Left copy */}
      <div
        className="mt5-webtrader-copy"
        style={{
          position: "absolute",
          top: 78,
          left: 100,
          width: 660,
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 700,
            fontSize: 40,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
            color: "#FFFFFF",
            margin: "0 0 20px",
          }}
        >
          Access MT5 on your web browser
        </h2>

        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: 1.7,
            color: "#94A3B8",
            margin: "0 0 34px",
            maxWidth: 560,
          }}
        >
          Track live crypto prices and use our calculator to estimate your
          margin or potential outcomes before you place a trade.
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 38px",
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          {bullets.map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                fontFamily: "var(--font-inter, Inter)",
                fontSize: 16,
                color: "#E2E8F0",
                lineHeight: 1.45,
              }}
            >
              <ShieldCheckIcon size={30} />
              {item}
            </li>
          ))}
        </ul>

        <SmartLink
          href={MT5_WEBTRADER_HREF}
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
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Launch MT5 Webtrade
          <span aria-hidden>→</span>
        </SmartLink>
      </div>

      {/* Panel matches the source aspect (2136×1601 = 1.3342) so nothing is
          letterboxed or cropped: 640×480. Flush right at 800+640=1440. */}
      <div
        className="mt5-webtrader-image"
        style={{
          position: "absolute",
          top: 62,
          left: 760,
          width: 640,
          height: 480,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <Image
          src="/mt5-assets/webtrader.jpeg"
          alt="MT5 web browser trading experience"
          fill
          sizes="(max-width: 900px) 100vw, 640px"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </section>
  );
}
