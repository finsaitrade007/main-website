import Link from "next/link";
import Image from "next/image";
import { getRewardsPage, type StrapiRewardsPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiRewardsPage,
  "ctaTitle" | "ctaDescription" | "ctaPrimaryLabel" | "ctaPrimaryHref"
> = {
  ctaTitle: "Trade With the right tools at your side",
  ctaDescription:
    "Open a live account or start with a demo account and explore global markets with Finsai Trade — at your pace, on your terms.",
  ctaPrimaryLabel: "Open Live Account",
  ctaPrimaryHref: "https://fx.finsaitrade.com/auth/register",
};

export default async function RewardsCTASection() {
  const data = (await getRewardsPage()) ?? FALLBACK;
  return (
    <section
      style={{
        background: "#050208",
        padding: "40px 0 100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "1194px",
          height: "437px",
          borderRadius: "30px",
          border: "1px solid #056FB4",
          background: "#050208",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* Background image at 30% opacity */}
        <Image
          src="/rewards/cta-bg.png"
          alt=""
          fill
          sizes="1194px"
          priority
          style={{
            objectFit: "cover",
            opacity: 0.3,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        {/* Foreground content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "20px",
            padding: "72px 80px",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              margin: 0,
              maxWidth: "640px",
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "32px",
              lineHeight: "40px",
              color: "#FFFFFF",
            }}
          >
            {data.ctaTitle}
          </h2>

          <p
            style={{
              margin: 0,
              maxWidth: "560px",
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22px",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            {data.ctaDescription}
          </p>

        </div>

        <Link
          href={data.ctaPrimaryHref}
          className="btn-text"
          style={{
            position: "absolute",
            top: "290px",
            left: "488px",
            width: "219px",
            height: "56px",
            paddingTop: "14px",
            paddingBottom: "14px",
            paddingLeft: "25px",
            paddingRight: "25px",
            gap: "16px",
            borderRadius: "28.83px",
            background:
              "linear-gradient(90deg, rgba(5, 111, 180, 0.7) 0%, #056FB4 100%)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 500,
            boxSizing: "border-box",
            zIndex: 2,
          }}
        >
          {data.ctaPrimaryLabel}
        </Link>
      </div>
    </section>
  );
}
