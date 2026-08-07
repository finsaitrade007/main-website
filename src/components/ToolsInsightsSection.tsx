import Image from "next/image";
import Link from "@/components/SmartLink";
import { TOOLS_INSIGHTS } from "@/components/tools-content";

export default function ToolsInsightsSection() {
  return (
    <section className="tl-section">
      <p className="tl-eyebrow">Market Intelligence</p>
      <h2 className="tl-h2">Real-Time Insights</h2>
      <p className="tl-sub">
        Make informed decisions with live economic data, breaking financial news,
        and real-time market sentiment.
      </p>

      <div className="tl-insights">
        {TOOLS_INSIGHTS.map((c) => (
          <article key={c.no} className="tl-insight-card">
            <div className="tl-insight-head">
              <span className="tl-insight-no">{c.no}</span>
              <h3 className="tl-insight-title">{c.title}</h3>
            </div>
            <p className="tl-insight-desc">{c.description}</p>
            <Image src={c.image} alt="" width={509} height={885} quality={100} className="tl-insight-img" />
          </article>
        ))}
      </div>

      <div className="tl-center">
        <Link href="https://fx.finsaitrade.com/auth/register" className="tl-btn-pill">
          Open Dashboard
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
            <path d="M1 7h16m0 0-5.5-5.5M17 7l-5.5 5.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
