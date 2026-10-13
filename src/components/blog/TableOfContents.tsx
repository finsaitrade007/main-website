"use client";

import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import type { TocEntry } from "@/lib/blog-helpers";
import s from "./blog.module.css";

/** Tracks which heading the reader is currently in. */
function useActiveHeading(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (ids.length === 0) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      // The active heading is the last one whose top has passed the line
      // just below the fixed navbar.
      const line = 140;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current ?? ids[0]);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}

function scrollToHeading(e: MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

function TocList({
  entries,
  active,
  onNavigate,
}: {
  entries: TocEntry[];
  active: string | null;
  onNavigate?: () => void;
}) {
  return (
    <ol className={s.tocList}>
      {entries.map((entry) => {
        const isActive = entry.id === active;
        const cls = [s.tocLink, entry.level === 3 ? s.tocL3 : "", isActive ? s.tocActive : ""]
          .filter(Boolean)
          .join(" ");
        return (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className={cls}
              aria-current={isActive ? "location" : undefined}
              onClick={(e) => {
                // Collapse the mobile panel first so the scroll target is
                // measured after the layout above it has settled.
                onNavigate?.();
                scrollToHeading(e, entry.id);
              }}
            >
              {entry.text}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Table of contents. `desktop` renders the sticky sidebar (hidden below
 * 1100px); `mobile` renders a collapsible block (shown only below 1100px)
 * that closes after a link is chosen.
 */
export default function TableOfContents({
  entries,
  variant,
}: {
  entries: TocEntry[];
  variant: "desktop" | "mobile";
}) {
  const key = entries.map((e) => e.id).join("|");
  const ids = useMemo(() => (key ? key.split("|") : []), [key]);
  const active = useActiveHeading(ids);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  if (entries.length < 2) return null;

  if (variant === "mobile") {
    return (
      <details ref={detailsRef} className={s.tocMobile}>
        <summary className={s.tocMobileSummary}>
          On this page
          <span className={s.faqChevron} aria-hidden>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </summary>
        <nav aria-label="Table of contents" className={s.tocMobileBody}>
          <TocList
            entries={entries}
            active={active}
            onNavigate={() => detailsRef.current?.removeAttribute("open")}
          />
        </nav>
      </details>
    );
  }

  return (
    <aside className={s.tocAside}>
      <nav aria-label="Table of contents" className={s.toc}>
        <p className={s.tocTitle}>On this page</p>
        <TocList entries={entries} active={active} />
      </nav>
    </aside>
  );
}
