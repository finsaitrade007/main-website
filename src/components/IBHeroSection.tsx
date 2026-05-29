import Link from "next/link";
import Image from "next/image";
import { getPartnershipsPage, type StrapiPartnershipsPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiPartnershipsPage,
  | "heroTitle"
  | "heroDescription"
  | "heroPrimaryCtaLabel"
  | "heroPrimaryCtaHref"
> = {
  heroTitle: "Become an Introducing broker\nwith Finsai Trade",
  heroDescription:
    "Welcome to Finsai Trade's Introducing Broker (IB) Program. We offer a comprehensive partnership scheme where you can earn competitive commission for referring clients to us.",
  heroPrimaryCtaLabel: "Become an IB",
  heroPrimaryCtaHref: "/register",
};

export default async function IBHeroSection() {
  const data = (await getPartnershipsPage()) ?? FALLBACK;
  return (
    <section className="hero">
      <div style={{
        position: "absolute",
        width: "1752px",
        height: "986px",
        left: "-156px",
        top: "-168px",
        overflow: "hidden",
        zIndex: 0,
      }}>
        <Image src="/ib-hero.png" alt="" fill style={{ objectFit: "cover" }} priority />
      </div>


      <div className="hero__content" style={{ marginTop: "-120px" }}>
        <div className="hero__text-wrap" style={{ width: "750px", height: "276px", gap: "24px" }}>
          <h1 className="hero__title" style={{ width: "899px", height: "124px", whiteSpace: "pre-line" }}>
            {data.heroTitle}
          </h1>

          <p className="hero__subtitle" style={{ width: "837px", height: "56px", lineHeight: "155%", fontSize: "18px", fontWeight: 400, letterSpacing: 0 }}>
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
