import Image from "next/image";
import { TOOLS_CALCULATORS } from "@/components/tools-content";

export default function ToolsCalculatorsSection() {
  return (
    <section className="tl-section">
      <h2 className="tl-h2">Trading Tools &amp; Calculators</h2>
      <p className="tl-sub">
        Make informed trading decisions with calculators and tools designed to help
        you manage risk and plan your trades.
      </p>

      <div className="tl-calc-grid">
        {TOOLS_CALCULATORS.map((c) => (
          <article key={c.title} className="tl-calc-card">
            <Image src={c.icon} alt="" width={64} height={64} className="tl-calc-icon" />
            <div>
              <h3 className="tl-calc-title">{c.title}</h3>
              <p className="tl-calc-desc">{c.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
