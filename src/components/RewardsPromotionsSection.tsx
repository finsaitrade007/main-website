import Link from "@/components/SmartLink";
import Image from "next/image";
import { getRewardsPage, type StrapiRewardsPage } from "@/lib/strapi";

type FallbackData = Pick<
  StrapiRewardsPage,
  "promotionsTitle" | "promotionsDescription" | "promotionsCtaLabel" | "promotionsCtaHref"
>;

const FALLBACK: FallbackData = {
  promotionsTitle: "Promotions",
  promotionsDescription:
    "Our suite of trading tools is designed to empower you at every step—from deep market analysis and strategy development to precise execution and robust risk control.",
  promotionsCtaLabel: "View All Promotions",
  promotionsCtaHref: "#",
};

const CARD_BG =
  "linear-gradient(159.73deg, #050208 63.16%, #056FB4 447.31%) padding-box, linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%) border-box";

type Promo = {
  image: string;
  title: string;
  description: string;
  ctaHref: string;
  left: number;
};

const PROMOS: Promo[] = [
  {
    image: "/rewards/clock.png",
    title: "Bonus Hours",
    description: "Deep dive into market dynamics with institutional tools.",
    ctaHref: "#",
    left: 74,
  },
  {
    image: "/rewards/shield.png",
    title: "Risk Free First Trade",
    description: "Deep dive into market dynamics with institutional tools.",
    ctaHref: "#",
    left: 74 + 273,
  },
  {
    image: "/rewards/gift.png",
    title: "Deposit Rewards",
    description: "Deep dive into market dynamics with institutional tools.",
    ctaHref: "#",
    left: 74 + 546,
  },
];

export default async function RewardsPromotionsSection() {
  const data = await getRewardsPage();
  const title = data?.promotionsTitle ?? FALLBACK.promotionsTitle;
  const description = data?.promotionsDescription ?? FALLBACK.promotionsDescription;
  const ctaLabel = data?.promotionsCtaLabel ?? FALLBACK.promotionsCtaLabel;
  const ctaHref = data?.promotionsCtaHref ?? FALLBACK.promotionsCtaHref;

  return (
    <section
      id="promotions"
      className="page-section"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1440px",
        minHeight: "454px",
        margin: "0 auto",
        background: "#050208",
      }}
    >
      {/* Cards */}
      {PROMOS.map((promo) => (
        <PromoCard key={promo.title} promo={promo} />
      ))}

      {/* Right content: title + description */}
      <div
        style={{
          position: "absolute",
          top: "76px",
          left: "964px",
          width: "402px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "44px",
            color: "#FFFFFF",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "24px",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {description}
        </p>
      </div>

      {/* View All Promotions button */}
      <Link
        href={ctaHref}
        className="btn-text"
        style={{
          position: "absolute",
          top: "300px",
          left: "964px",
          width: "277.108px",
          height: "56px",
          paddingTop: "14px",
          paddingBottom: "14px",
          paddingLeft: "33px",
          paddingRight: "33px",
          gap: "18px",
          borderRadius: "28.83px",
          background:
            "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "100%",
          boxSizing: "border-box",
          whiteSpace: "nowrap",
        }}
      >
        <span>{ctaLabel}</span>
        <ArrowRightIcon />
      </Link>
    </section>
  );
}

function PromoCard({ promo }: { promo: Promo }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "76px",
        left: `${promo.left}px`,
        width: "257px",
        height: "301px",
        borderRadius: "12px",
        border: "1px solid transparent",
        background: CARD_BG,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Image
        src={promo.image}
        alt={promo.title}
        width={148}
        height={148}
        style={{
          position: "absolute",
          top: "3px",
          left: "54px",
          objectFit: "contain",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "168px",
          left: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "24px",
            color: "#FFFFFF",
          }}
        >
          {promo.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "20px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {promo.description}
        </p>
      </div>

      <Link
        href={promo.ctaHref}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "18px",
          lineHeight: "27px",
          letterSpacing: "0%",
          color: "#056FB4",
          textDecoration: "none",
        }}
      >
        <span>Learn More</span>
        <ArrowRightIcon small />
      </Link>
    </div>
  );
}

function ArrowRightIcon({ small = false }: { small?: boolean }) {
  const size = small ? 14 : 18;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
