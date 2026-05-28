import Link from "next/link";

export default function AboutCompetitiveEdgeSection() {
  return (
    <section style={{ background: "#050208", padding: "40px 0 80px" }}>
      <div
        style={{
          width: "1280px",
          maxWidth: "calc(100% - 80px)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        <article
          style={{
            padding: "32px",
            borderRadius: "20px",
            border: "1px solid rgba(125,185,214,0.2)",
            background:
              "linear-gradient(157.26deg, rgba(10,18,32,0.85) 0%, rgba(5,111,180,0.18) 100%)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "24px",
              color: "#FFFFFF",
            }}
          >
            About Finsai Trade
          </h3>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22px",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            We&apos;re a multi-asset broker headquartered in Singapore with a
            global network of liquidity providers, banking partners and
            regulators. Independent, well-capitalised and engineering-first —
            built to be the most reliable place to grow your trading edge.
          </p>
          <Link
            href="/services"
            className="btn-text"
            style={{
              alignSelf: "flex-start",
              padding: "10px 22px",
              borderRadius: "8px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Discover More
          </Link>
        </article>

        <article
          style={{
            padding: "32px",
            borderRadius: "20px",
            border: "1px solid rgba(125,185,214,0.2)",
            background:
              "linear-gradient(157.26deg, rgba(10,18,32,0.85) 0%, rgba(5,111,180,0.18) 100%)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "24px",
              color: "#FFFFFF",
            }}
          >
            Our Competitive Edge
          </h3>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22px",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Institutional-grade pricing engineered for retail. Tight spreads,
            ultra-low latency execution, segregated client funds and a
            partnership programme that genuinely scales — all backed by 24/7
            multilingual support.
          </p>
          <Link
            href="/services"
            className="btn-text"
            style={{
              alignSelf: "flex-start",
              padding: "10px 22px",
              borderRadius: "8px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            See the Difference
          </Link>
        </article>
      </div>
    </section>
  );
}
