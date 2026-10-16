"use client";
import { useEffect, useRef, useState } from "react";

/**
 * TradingView economic calendar (free embed widget).
 *
 * TradingView's loader script reads its JSON config from its own text and
 * replaces itself with an iframe that holds the calendar, so the script is
 * created here on mount rather than written into the server HTML. The
 * container is emptied first and on unmount, which keeps React's dev-mode
 * double effect (and client-side navigation back to the page) from stacking
 * two calendars.
 *
 * The "by TradingView" credit link below the widget is a condition of the
 * free widget licence; keep it.
 */

const SCRIPT_SRC = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";

// Markets our clients trade most: the majors, plus India, the Gulf and the
// emerging markets in our client base. ISO 3166 codes, "eu" = euro area.
const COUNTRIES = [
  "us", "eu", "gb", "jp", "cn", "in", "au", "ca", "ch", "nz",
  "de", "fr", "it", "es", "sa", "za", "br", "mx", "kr", "id", "tr",
];

const CONFIG = {
  colorTheme: "dark",
  isTransparent: true,
  width: "100%",
  height: "100%",
  locale: "en",
  importanceFilter: "-1,0,1",
  countryFilter: COUNTRIES.join(","),
};

type Status = "loading" | "ready" | "blocked";

export default function EconomicCalendarWidget() {
  const host = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    el.innerHTML = "";

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    widget.style.height = "100%";
    el.appendChild(widget);

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.type = "text/javascript";
    script.async = true;
    script.text = JSON.stringify(CONFIG);
    script.onerror = () => setStatus("blocked");
    el.appendChild(script);

    // the iframe appears once TradingView has rendered; until then a skeleton shows
    const seen = new MutationObserver(() => {
      if (el.querySelector("iframe")) {
        setStatus("ready");
        seen.disconnect();
      }
    });
    seen.observe(el, { childList: true, subtree: true });
    // an ad or script blocker can drop the request without an error event
    const timer = window.setTimeout(() => {
      if (!el.querySelector("iframe")) setStatus("blocked");
    }, 15000);

    return () => {
      seen.disconnect();
      window.clearTimeout(timer);
      el.innerHTML = "";
    };
  }, []);

  return (
    <div className="ec-widget">
      <div className="ec-widget-frame" aria-busy={status === "loading"}>
        <div ref={host} className="tradingview-widget-container ec-widget-host" />
        {status === "loading" && (
          <div className="ec-widget-skeleton" aria-hidden>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="ec-skeleton-row" />
            ))}
          </div>
        )}
        {status === "blocked" && (
          <div className="ec-widget-fallback" role="status">
            <p>The live calendar could not load. A browser extension or network filter may be blocking it.</p>
            <a href="https://www.tradingview.com/economic-calendar/" target="_blank" rel="noopener noreferrer" className="tl-btn-outline">
              Open the calendar on TradingView
            </a>
          </div>
        )}
      </div>
      <p className="ec-credit">
        <a href="https://www.tradingview.com/economic-calendar/" target="_blank" rel="noopener nofollow">
          Economic calendar by TradingView
        </a>
      </p>
    </div>
  );
}
