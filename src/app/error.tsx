"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Route-level error boundary. Renders inside the root layout, so the navbar
 * and footer stay in place — unlike Next's unstyled default, which drops the
 * user onto a blank page with no way back.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app] unhandled render error:", error);
  }, [error]);

  return (
    <section
      style={{
        background: "#050208",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(100px, 12vw, 160px) clamp(20px, 6vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "620px", textAlign: "center" }}>
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "clamp(24px, 2.8vw, 36px)",
            lineHeight: 1.25,
            color: "#FFFFFF",
          }}
        >
          Something went wrong
        </h1>

        <p
          style={{
            margin: "16px 0 0",
            fontFamily: "var(--font-inter, Inter)",
            fontSize: "clamp(14px, 1.1vw, 16px)",
            lineHeight: "28px",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          This page didn&rsquo;t load correctly. Trying again usually fixes it.
          If it keeps happening, our team is happy to help.
        </p>

        {error.digest ? (
          <p
            style={{
              margin: "12px 0 0",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Reference: {error.digest}
          </p>
        ) : null}

        <div
          style={{
            marginTop: "36px",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          <button
            type="button"
            onClick={reset}
            style={{
              padding: "11px 24px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "14px",
              color: "#FFFFFF",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            }}
          >
            Try again
          </button>
          <Link
            href="/contactus"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "11px 24px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.18)",
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "14px",
              color: "#FFFFFF",
              textDecoration: "none",
            }}
          >
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}
