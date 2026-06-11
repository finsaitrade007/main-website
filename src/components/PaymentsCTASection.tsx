import Link from "@/components/SmartLink";
import Image from "next/image";
import { getPaymentsPage, type StrapiPaymentsPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiPaymentsPage,
  "ctaTitle" | "ctaDescription" | "ctaPrimaryLabel" | "ctaPrimaryHref"
> = {
  ctaTitle: "Ready to Fund Your Account?",
  ctaDescription:
    "Deposit instantly with the method you prefer — your funds are protected end-to-end and available the moment they arrive.",
  ctaPrimaryLabel: "Deposit Funds",
  ctaPrimaryHref: "https://fx.finsaitrade.com/auth/register",
};

export default async function PaymentsCTASection() {
  const data = (await getPaymentsPage()) ?? FALLBACK;
  return (
    <section
      className="page-section"
      style={{
        background: "#050208",
        paddingBottom: "80px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "1194px",
        minHeight: "437px",
        margin: "0 auto",
        borderRadius: "30px",
        border: "1px solid #056FB4",
        background: "linear-gradient(137.88deg, #050208 1.04%, #056FB4 536.19%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        padding: "48px clamp(20px, 5.5%, 80px)",
        textAlign: "center",
      }}>
        <Image
          src="/accounts/wallet.png"
          alt=""
          width={157}
          height={157}
          style={{ objectFit: "contain" }}
        />

        <h2 style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "clamp(22px, 2.5vw, 36px)",
          lineHeight: "50px",
          textAlign: "center",
          color: "#FFFFFF",
          margin: 0,
          maxWidth: "707px",
        }}>
          {data.ctaTitle}
        </h2>

        <p style={{
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "32px",
          textAlign: "center",
          color: "#FFFFFF",
          margin: 0,
          maxWidth: "773px",
        }}>
          {data.ctaDescription}
        </p>

        <Link href={data.ctaPrimaryHref} className="btn-text" style={{
          width: "178px",
          height: "56px",
          borderRadius: "28.83px",
          paddingTop: "14px",
          paddingBottom: "14px",
          paddingLeft: "25px",
          paddingRight: "25px",
          background: "linear-gradient(90deg, rgba(5,111,180,0.7) 0%, #056FB4 100%)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          textDecoration: "none",
          boxSizing: "border-box",
        }}>
          {data.ctaPrimaryLabel}
        </Link>
      </div>
    </section>
  );
}
