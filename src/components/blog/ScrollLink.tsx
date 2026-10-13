"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

/**
 * In-page anchor that scrolls smoothly to its target (instantly when the
 * visitor prefers reduced motion) and updates the URL hash. Without JS it is
 * a plain #anchor link, so it always works.
 */
export default function ScrollLink({
  targetId,
  className,
  style,
  children,
}: {
  targetId: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${targetId}`);
  };
  return (
    <a href={`#${targetId}`} onClick={onClick} className={className} style={style}>
      {children}
    </a>
  );
}
