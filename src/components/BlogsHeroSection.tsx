import Link from "next/link";
import Image from "next/image";
import { getBlogsPage, type StrapiBlogsPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiBlogsPage,
  | "heroTitle"
  | "heroDescription"
  | "heroPrimaryCtaLabel"
  | "heroPrimaryCtaHref"
> = {
  heroTitle: "Become an\nIntroducing broker",
  heroDescription:
    "Welcome to Finsai Trade's Introducing Broker (IB) Program. We offer a comprehensive\npartnership scheme where you can earn competitive",
  heroPrimaryCtaLabel: "Become an IB",
  heroPrimaryCtaHref: "/register",
};

export default async function IBHeroSection() {
  const data = (await getBlogsPage()) ?? FALLBACK;
  return (
    <section className="hero">

      {/* Background image */}
      <div style={{
        position: "absolute",
        width: "1440px",
        height: "811px",
        top: "-67px",
        overflow: "hidden",
        zIndex: 0,
      }}>
        <Image
          src="/blogs.png"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Content */}
      <div className="hero__content" style={{ marginTop: "-120px" }}>
        <div className="hero__text-wrap" style={{ width: "750px", height: "276px", gap: "24px" }}>

          <h1 className="hero__title" style={{ width: "678px", whiteSpace: "pre-line" }}>
            {data.heroTitle}
          </h1>

          <p className="hero__subtitle" style={{ width: "750px", height: "56px", lineHeight: "155%", whiteSpace: "pre-line" }}>
            {data.heroDescription}
          </p>

          <div className="hero__ctas">
            <Link href={data.heroPrimaryCtaHref} className="btn-text" style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "195px",
              height: "48px",
              borderRadius: "8px",
              background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              {data.heroPrimaryCtaLabel}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
