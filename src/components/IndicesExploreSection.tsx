import Image from "next/image";
import SmartLink from "@/components/SmartLink";

const instruments = [
  {
    title: "Metals",
    image: "/Explore%20More%20Instruments/metals_v5%20Medium.png",
    href: "/metals",
    top: 182.61,
    left: 59,
  },
  {
    title: "Energies",
    image: "/Explore%20More%20Instruments/oils_v1%20Medium.png",
    href: "/energies",
    top: 182.61,
    left: 509,
  },
  {
    title: "Forex",
    image: "/Explore%20More%20Instruments/euro-dollor_v1%20Medium.png",
    href: "/forex",
    top: 182.61,
    left: 959,
  },
  {
    title: "Stocks",
    image: "/Explore%20More%20Instruments/trade_graph_v3%20Medium.png",
    href: "/wordstock",
    top: 330.61,
    left: 59,
  },
  {
    title: "Cryptocurrencies",
    image: "/Explore%20More%20Instruments/crypto_v4%20Medium.png",
    href: "/platform",
    top: 330.61,
    left: 509,
  },
  {
    title: "Commodities",
    image: "/Explore%20More%20Instruments/comodities_v4%20Medium.png",
    href: "/commodities",
    top: 330.61,
    left: 959,
  },
];

const BOX_WIDTH = 421.31;
const BOX_HEIGHT = 122.78;
const BOX_RADIUS = 12.04;
const BOX_BORDER = 1.2;
const IMAGE_WIDTH = 102.62;
const IMAGE_HEIGHT = 67.62;
const IMAGE_LEFT = 24;
const IMAGE_TOP = 27.39;
const TITLE_LEFT = 134;
const TITLE_TOP = 48.39;
const ARROW_SIZE = 68.61;
const ARROW_LEFT = 340.55;
const ARROW_TOP = 26.48;

export default function IndicesExploreSection() {
  return (
    <section
      className="indices-explore commodities-explore"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <div
        className="indices-explore-inner commodities-explore-inner"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1440,
          height: 521,
          margin: "0 auto",
        }}
      >
        <h2
          className="indices-explore-heading commodities-explore-heading"
          style={{
            position: "absolute",
            top: 48,
            left: 0,
            right: 0,
            margin: 0,
            textAlign: "center",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 700,
            fontSize: 36,
            lineHeight: "100%",
            color: "#FFFFFF",
          }}
        >
          Explore More Instruments
        </h2>
        <p
          className="indices-explore-subtitle commodities-explore-subtitle"
          style={{
            position: "absolute",
            top: 100,
            left: "50%",
            transform: "translateX(-50%)",
            margin: 0,
            width: "max-content",
            maxWidth: "calc(100% - 48px)",
            padding: "0 24px",
            boxSizing: "border-box",
            textAlign: "center",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#7F8D9E",
            whiteSpace: "nowrap",
          }}
        >
          Diversify your holdings effortlessly across thousands of CFDs through a single,
          integrated multi-asset account.
        </p>

        <div className="indices-explore-grid commodities-explore-grid">
          {instruments.map((item) => (
            <div
              key={item.title}
              className="indices-explore-card-wrap commodities-explore-card-wrap"
              style={{
                position: "absolute",
                top: item.top,
                left: item.left,
                width: BOX_WIDTH,
                height: BOX_HEIGHT,
                borderRadius: BOX_RADIUS,
                padding: BOX_BORDER,
                boxSizing: "border-box",
                background:
                  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              }}
            >
              <SmartLink
                href={item.href}
                className="indices-explore-card commodities-explore-card"
                style={{
                  position: "relative",
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: BOX_RADIUS - BOX_BORDER,
                  boxSizing: "border-box",
                  background: "#000612",
                  textDecoration: "none",
                  overflow: "hidden",
                }}
              >
                <div
                  className="indices-explore-card-icon commodities-explore-card-icon"
                  style={{
                    position: "absolute",
                    top: IMAGE_TOP,
                    left: IMAGE_LEFT,
                    width: IMAGE_WIDTH,
                    height: IMAGE_HEIGHT,
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={item.image}
                    alt=""
                    width={103}
                    height={68}
                    style={{
                      width: IMAGE_WIDTH,
                      height: IMAGE_HEIGHT,
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>
                <span
                  className="indices-explore-card-title commodities-explore-card-title"
                  style={{
                    position: "absolute",
                    top: TITLE_TOP,
                    left: TITLE_LEFT,
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 600,
                    fontSize: 22,
                    lineHeight: "100%",
                    color: "#BEBFC1",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.title}
                </span>
                <span
                  aria-hidden
                  className="indices-explore-card-arrow commodities-explore-card-arrow"
                  style={{
                    position: "absolute",
                    top: ARROW_TOP,
                    left: ARROW_LEFT,
                    width: ARROW_SIZE,
                    height: ARROW_SIZE,
                    borderRadius: "50%",
                    background: "#011327",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 16H24M24 16L16 8M24 16L16 24"
                      stroke="#036FE3"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </SmartLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
