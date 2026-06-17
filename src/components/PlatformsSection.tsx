import Image from "next/image";
import Link from "@/components/SmartLink";
import {
  getHomepage,
  getPlatforms,
  strapiImageUrl,
  type StrapiPlatform,
} from "@/lib/strapi";

function platformHref(title: string): string {
  const t = title.toLowerCase();
  if (/mt\s?5/.test(t)) return "/services#mt5";
  if (t.includes("social")) return "/social-trading";
  return "/services#app";
}

const CARD_BORDER_GRADIENT =
  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)";
const CARD_FILL_BG =
  "linear-gradient(119.3deg, rgba(0, 0, 0, 0) 23.34%, rgba(73, 109, 171, 0.3) 96.36%), #050208";
const RADIUS = "21.32px";
const INNER_RADIUS = "20.32px";
const WIDE_H = "249px";
const H = "212.10px";
const ROW_GAP = "28.42px";
const COL_GAP = "20.32px";
const SMALL = "1fr";
const LARGE = "1.52fr";

const FALLBACK_HEADER = {
  platformsBadge: "Seamless Trading Experience",
  platformsTitle: "Advanced Platforms for Every Trader",
  platformsDescription:
    "Trade with speed, stability, and total control from your desk or on the move. Finsai Trade delivers professional-grade platforms to match your trading needs.",
};

const FALLBACK_PLATFORMS: StrapiPlatform[] = [
  {
    id: 1,
    documentId: "fb-mt5",
    title: "MT5",
    description:
      " Access 44+ advanced charting tools, 38 built-in indicators, and 2,000+ custom indicators for deeper market analysis. Monitor price action across 21 timeframes, create custom Expert Advisors (EAs) with MQL5, and test strategies faster with multi-threaded optimization.",
    size: "large",
    row: 1,
    order: 1,
    mockupImage: null,
    iconImage: null,
    localMockupImage: "/platforms/mt-mockup.png",
  },
  {
    id: 3,
    documentId: "fb-social",
    title: "Social Trading",
    description:
      "Follow top-performing traders, mirror proven strategies in real time, and grow your portfolio with confidence — all from within the Finsai Trade platform.",
    size: "large",
    row: 2,
    order: 3,
    mockupImage: null,
    iconImage: null,
    localIconImage: "/platforms/change.png",
  },
  {
    id: 4,
    documentId: "fb-app",
    title: "App & More — Coming soon",
    description:
      "Stay connected to the markets on the go with a fast, secure, and intuitive mobile trading experience.",
    size: "small",
    row: 2,
    order: 4,
    mockupImage: null,
    iconImage: null,
    localIconImage: "/platforms/mobile-application.png",
  },
];

function WidePlatformCard({ p }: { p: StrapiPlatform }) {
  const mockup = strapiImageUrl(p.mockupImage) ?? p.localMockupImage;
  const icon = strapiImageUrl(p.iconImage) ?? p.localIconImage;

  return (
    <Link
      href={platformHref(p.title)}
      aria-label={`Learn more about ${p.title}`}
      className="platforms-wide-card"
      style={{
        position: "relative",
        display: "block",
        textDecoration: "none",
        color: "inherit",
        height: WIDE_H,
        padding: "1px",
        borderRadius: RADIUS,
        background: CARD_BORDER_GRADIENT,
        overflow: "visible",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: INNER_RADIUS,
          background: CARD_FILL_BG,
          padding: "24px 28px",
          boxSizing: "border-box",
          overflow: "visible",
        }}
      >
      <p
        className="platform-card-text platforms-wide-text"
        style={{
          position: "absolute",
          top: "20px",
          left: "21px",
          overflow: "hidden",
        }}
      >
        {p.description}
      </p>

      {icon && (
        <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: 11 }}>
          <Image
            src={icon}
            alt={p.title}
            width={52}
            height={52}
            style={{ borderRadius: "12px" }}
          />
        </div>
      )}

      <div
        className="platforms-wide-mt5-logo"
        style={{
          position: "absolute",
          top: "140px",
          left: "165px",
          zIndex: 11,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/platforms/MT5.png"
          alt="MT5"
          width={60}
          height={60}
          style={{ display: "block", objectFit: "contain" }}
        />
      </div>

      {mockup && (
        <div
          className="platforms-wide-mockup"
          style={{
            position: "absolute",
            bottom: 0,
            right: "20px",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <Image
            src={mockup}
            alt={p.title}
            width={233}
            height={281}
            style={{ objectFit: "contain", display: "block" }}
          />
        </div>
      )}

      <h3
        className="platforms-wide-title"
        style={{
          position: "absolute",
          top: "148px",
          left: "21.32px",
          height: "44px",
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 400,
          fontSize: "62px",
          lineHeight: "43.49px",
          letterSpacing: 0,
          color: "#FFFFFF",
          margin: 0,
        }}
      >
        {p.title}
      </h3>
      </div>
    </Link>
  );
}

function PlatformCard({ p }: { p: StrapiPlatform }) {
  const icon = strapiImageUrl(p.iconImage) ?? p.localIconImage;
  const isSmall = p.size !== "large";

  return (
    <Link
      href={platformHref(p.title)}
      aria-label={`Learn more about ${p.title}`}
      style={{
        position: "relative",
        display: "block",
        textDecoration: "none",
        color: "inherit",
        height: H,
        padding: "1px",
        borderRadius: RADIUS,
        background: CARD_BORDER_GRADIENT,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: INNER_RADIUS,
          background: CARD_FILL_BG,
          padding: "24px 28px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
      <p
        className="platform-card-text"
        style={{
          position: "absolute",
          top: "20px",
          left: "21px",
          right: "84px",
          height: "108px",
          overflow: "hidden",
        }}
      >
        {p.description}
      </p>

      {icon && (
        <div
          style={{
            position: "absolute",
            top: isSmall ? "16.3px" : "16.58px",
            right: "16.29px",
            width: "45.58px",
            height: "45.58px",
            borderRadius: "11.05px",
            background:
              "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            backdropFilter: isSmall ? "blur(47.37px)" : undefined,
            WebkitBackdropFilter: isSmall ? "blur(47.37px)" : undefined,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={icon}
            alt={p.title}
            width={28}
            height={28}
            style={{ display: "block", objectFit: "contain" }}
          />
        </div>
      )}

      <h3
        style={{
          position: "absolute",
          bottom: "24px",
          left: "28px",
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 400,
          fontSize: "clamp(20px, 2.2vw, 32px)",
          lineHeight: "1.35",
          color: "#FFFFFF",
          margin: 0,
        }}
      >
        {p.title}
      </h3>
      </div>
    </Link>
  );
}

export default async function PlatformsSection() {
  const [home, fetched] = await Promise.all([getHomepage(), getPlatforms()]);
  const header = home ?? FALLBACK_HEADER;
  const platforms =
    fetched && fetched.length > 0 ? fetched : FALLBACK_PLATFORMS;

  const row1All = platforms.filter((p) => p.row === 1);
  const row1Wide =
    row1All.find((p) => /mt\s?5/i.test(p.title)) ?? row1All[0];
  const row1 = row1Wide ? [row1Wide] : [];
  const row2 = platforms.filter((p) => p.row === 2);

  return (
    <section
      className="page-section"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        minHeight: "830px",
        paddingBottom: "96px",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "1013px",
            minHeight: "190.02px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 22px",
              background: "#000",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "60px",
              marginBottom: "20px",
            }}
          >
            <span className="badge-text">{header.platformsBadge}</span>
          </span>

          <h2
            className="section-title"
            style={{
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            {header.platformsTitle}
          </h2>

          <p
            className="section-desc"
            style={{
              maxWidth: "862px",
              textAlign: "center",
              margin: "0 auto",
              paddingBottom: "70px",
            }}
          >
            {header.platformsDescription}
          </p>
        </div>

        {row1.length === 1 ? (
          <div style={{ marginBottom: ROW_GAP }}>
            <WidePlatformCard p={row1[0]} />
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                row1.length === 2 && row1[0].size === "small"
                  ? `${SMALL} ${LARGE}`
                  : `${LARGE} ${SMALL}`,
              gap: COL_GAP,
              marginBottom: ROW_GAP,
            }}
          >
            {row1.map((p) => (
              <PlatformCard key={p.id} p={p} />
            ))}
          </div>
        )}

        <div
          className="platforms-grid-row2"
          style={{
            gridTemplateColumns:
              row2.length === 2 && row2[0].size === "large"
                ? `${LARGE} ${SMALL}`
                : `${SMALL} ${LARGE}`,
          }}
        >
          {row2.map((p) => (
            <PlatformCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
