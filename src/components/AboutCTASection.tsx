import Image from "next/image";
import Link from "@/components/SmartLink";
import { getAboutPage, type StrapiAboutPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiAboutPage,
  | "ctaTitle"
  | "ctaDescription"
  | "ctaPrimaryLabel"
  | "ctaPrimaryHref"
> = {
  ctaTitle: "Ready to Trade Smarter?",
  ctaDescription:
    "Join a platform built for active traders with multi-asset access, educational support, trading rewards, and scalable partner opportunities.",
  ctaPrimaryLabel: "Get Started Today",
  ctaPrimaryHref: "https://fx.finsaitrade.com/auth/register",
};

export default async function AboutCTASection() {
  const data = (await getAboutPage()) ?? FALLBACK;
  return (
    <section
      className="page-section"
      style={{ background: "#050208", paddingBottom: "100px" }}
    >
      <div
        style={{
          boxSizing: "border-box",
          width: "100%",
          maxWidth: "1194px",
          minHeight: "437px",
          margin: "0 auto",
          position: "relative",
          padding: "56px clamp(20px, 5.5%, 80px)",
          borderRadius: "30px",
          border: "1px solid #056FB4",
          background:
            "linear-gradient(137.88deg, #050208 1.04%, #056FB4 536.19%)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <Image
          src="/accounts/wallet.png"
          alt=""
          width={157}
          height={157}
          style={{
            width: "157px",
            height: "157px",
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        <h2
          style={{
            margin: 0,
            maxWidth: "640px",
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "clamp(22px, 2.5vw, 36px)",
            lineHeight: "1.4",
            color: "#FFFFFF",
          }}
        >
          {data.ctaTitle}
        </h2>
        <p
          style={{
            margin: 0,
            maxWidth: "773px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "32px",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          {data.ctaDescription}
        </p>
        <Link
          href={data.ctaPrimaryHref}
          className="btn-text"
          style={{
            boxSizing: "border-box",
            width: "215px",
            height: "56px",
            gap: "16px",
            borderRadius: "28.83px",
            paddingTop: "14px",
            paddingRight: "25px",
            paddingBottom: "14px",
            paddingLeft: "25px",
            background:
              "linear-gradient(90deg, rgba(5, 111, 180, 0.7) 0%, #056FB4 100%)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 500,
            color: "#FFFFFF",
            whiteSpace: "nowrap",
            marginTop: "8px",
          }}
        >
          {data.ctaPrimaryLabel}
        </Link>
      </div>
    </section>
  );
}
