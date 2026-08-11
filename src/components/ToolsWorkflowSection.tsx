import Image from "next/image";
import { TOOLS_WORKFLOW } from "@/components/tools-content";

/**
 * "Your Complete Trading Workflow" — continuously scrolling marquee.
 *
 * No arrow buttons: the row moves on its own, so there is nothing to press and
 * nothing that can sit disabled. Hovering pauses it, and the track stays
 * manually scrollable (trackpad / touch swipe) at any time.
 *
 * The list is rendered twice and the track animates to -50%, so the second copy
 * lands exactly where the first started and the loop is seamless in both
 * directions. `aria-hidden` on the duplicate keeps screen readers from hearing
 * every card twice.
 *
 * Pure CSS — no JS, no state, no client bundle. Motion cannot break because
 * there is no measurement step to get wrong.
 */
export default function ToolsWorkflowSection() {
  return (
    <section className="tl-section">
      <h2 className="tl-h2">Your Complete Trading Workflow</h2>
      <p className="tl-sub">
        Use Finsai Trade&apos;s trading tools to analyze markets, manage risk, and
        trade with greater confidence.
      </p>

      <style>{`
        .fw-marquee{position:relative;margin:clamp(32px,3.7vw,53px) auto 0;
          max-width:1400px;overflow:hidden;
          /* Cards dissolve into the background at both edges instead of being
             chopped off, which is what signals "this keeps going". */
          -webkit-mask-image:linear-gradient(to right,transparent 0,#000 9%,#000 91%,transparent 100%);
          mask-image:linear-gradient(to right,transparent 0,#000 9%,#000 91%,transparent 100%);}
        .fw-viewport{overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;}
        .fw-viewport::-webkit-scrollbar{display:none;}
        /* padding-right equals the gap so the two copies are exactly
           symmetric — that makes -50% land precisely one full set later.
           Without it the track is one gap short (9 gaps, not 10) and the loop
           jumps 24px on every repeat. */
        .fw-track{display:flex;gap:24px;width:max-content;
          padding:6px 24px 10px 0;
          animation:fw-scroll 38s linear infinite;}
        .fw-marquee:hover .fw-track{animation-play-state:paused;}
        @keyframes fw-scroll{
          from{transform:translate3d(0,0,0);}
          to{transform:translate3d(-50%,0,0);}
        }
        .fw-step{flex:0 0 264px;box-sizing:border-box;min-height:186px;
          border-radius:18px;border:1px solid rgba(56,130,246,.28);
          background:linear-gradient(160deg,#040A14 0%,#010712 100%);
          padding:30px 24px;display:flex;flex-direction:column;
          align-items:flex-start;gap:20px;
          transition:border-color .28s ease,transform .28s ease,box-shadow .28s ease;}
        .fw-step:hover{border-color:rgba(56,130,246,.85);transform:translateY(-6px);
          box-shadow:0 14px 38px -18px rgba(56,130,246,.75);}
        .fw-icon{display:inline-flex;align-items:center;justify-content:center;
          width:72px;height:72px;flex-shrink:0;
          transition:background .28s ease,border-color .28s ease;}
        .fw-ring{border-radius:9999px;border:1px solid rgba(5,111,180,.32);
          background:rgba(5,111,180,.07);}
        .fw-step:hover .fw-ring{border-color:rgba(56,130,246,.7);
          background:rgba(5,111,180,.16);}
        .fw-icon img{width:38px;height:38px;object-fit:contain;}
        .fw-step:not(:has(.fw-ring)) .fw-icon img{width:72px;height:72px;}
        .fw-label{font-family:var(--font-sora,Sora);font-size:18px;font-weight:600;
          line-height:1.35;color:#D8DEE9;text-align:left;
          transition:color .28s ease;}
        .fw-step:hover .fw-label{color:#fff;}
        @media (max-width:768px){
          .fw-step{flex:0 0 228px;min-height:168px;padding:26px 20px;}
          .fw-track{animation-duration:30s;}
        }
        @media (prefers-reduced-motion:reduce){
          .fw-track{animation:none;}
          .fw-step:hover{transform:none;}
        }
      `}</style>

      <div className="fw-marquee">
        <div className="fw-viewport">
          <div className="fw-track">
            {[0, 1].map((copy) =>
              TOOLS_WORKFLOW.map((s) => (
                <article
                  key={`${copy}-${s.title}`}
                  className="fw-step"
                  aria-hidden={copy === 1 || undefined}
                >
                  {/* manage-risk-smarter.svg carries its own ring, so it is
                      rendered bare; the other four get the ring from CSS. */}
                  <span className={s.ring ? "fw-icon fw-ring" : "fw-icon"}>
                    <Image src={s.icon} alt="" width={72} height={72} />
                  </span>
                  <span className="fw-label">{s.title}</span>
                </article>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
