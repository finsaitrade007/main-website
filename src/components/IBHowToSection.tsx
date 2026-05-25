import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    img: "/steps/register.png",
    title: "Sign Up",
    desc: "Submit your application to become an IB.",
  },
  {
    img: "/steps/verify.png",
    title: "Promote",
    desc: "Use our marketing materials to introduce traders to our trading platforms.",
  },
  {
    img: "/steps/start-trading.png",
    title: "Earn",
    desc: "Collect your commissions for every trade your referred traders execute.",
  },
];

export default function IBHowToSection() {
  return (
    <section style={{ background: "#050208", padding: "80px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px", textAlign: "center" }}>

        <h2 className="section-title" style={{ marginBottom: "8px" }}>
          Fast application. Fast process. So easy.
        </h2>
        <p className="section-desc" style={{ marginBottom: "56px" }}>
          How to become an IB
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
          marginBottom: "48px",
        }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              background: "linear-gradient(135deg, #0D1927 0%, #0a1628 100%)",
              border: "1px solid rgba(5,111,180,0.3)",
              borderRadius: "20px",
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}>
              <Image src={step.img} alt={step.title} width={64} height={64} style={{ objectFit: "contain" }} />
              <h3 style={{
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 600,
                fontSize: "20px",
                color: "#FFFFFF",
                margin: 0,
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-inter, Inter)",
                fontSize: "15px",
                lineHeight: "26px",
                color: "rgba(255,255,255,0.6)",
                margin: 0,
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <Link href="/register" className="btn-text" style={{
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
          Become an IB
        </Link>

      </div>
    </section>
  );
}
