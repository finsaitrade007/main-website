"use client";

import { useRouter } from "next/navigation";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

type FAQLinkProps = {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
};

/**
 * Smart FAQ link.
 * - If the current page renders an element with id="faq", smoothly scrolls
 *   to it (without navigating away).
 * - Otherwise navigates to the home page and scrolls to the FAQ section.
 */
export default function FAQLink({ children, style, className }: FAQLinkProps) {
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (typeof window === "undefined") return;
    const el = document.getElementById("faq");
    if (el) {
      event.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update the URL hash without triggering a full navigation.
      history.replaceState(null, "", "#faq");
      return;
    }
    event.preventDefault();
    router.push("/#faq");
  }

  return (
    <a href="/#faq" onClick={handleClick} style={style} className={className}>
      {children}
    </a>
  );
}
