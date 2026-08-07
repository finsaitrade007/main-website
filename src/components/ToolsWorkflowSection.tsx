import Image from "next/image";
import { TOOLS_WORKFLOW } from "@/components/tools-content";

export default function ToolsWorkflowSection() {
  return (
    <section className="tl-section">
      <h2 className="tl-h2">Your Complete Trading Workflow</h2>
      <p className="tl-sub">
        Use Finsai Trade&apos;s trading tools to analyze markets, manage risk, and
        trade with greater confidence.
      </p>

      <div className="tl-flow">
        <span className="tl-flow-rail" aria-hidden />
        {TOOLS_WORKFLOW.map((s) => (
          <article key={s.title} className="tl-flow-step">
            {/* manage-risk-smarter.svg carries its own ring, so it is rendered
                bare; the other four get the ring from CSS. */}
            <span className={s.ring ? "tl-flow-icon tl-flow-ring" : "tl-flow-icon"}>
              <Image src={s.icon} alt="" width={64} height={64} />
            </span>
            <span className="tl-flow-label">{s.title}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
