"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Loads Google reCAPTCHA v3 once per page and exposes an `execute(action)`
 * helper that resolves with a fresh token (or `null` if reCAPTCHA isn't
 * configured / failed to load — letting the API layer decide what to do).
 *
 * Configure with `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` in `.env.local`.
 */

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

const SCRIPT_ID = "google-recaptcha-v3";

export function useRecaptcha() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!siteKey || loadedRef.current) return;
    if (typeof document === "undefined") return;
    if (document.getElementById(SCRIPT_ID)) {
      loadedRef.current = true;
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    loadedRef.current = true;
  }, [siteKey]);

  const execute = useCallback(
    async (action: string): Promise<string | null> => {
      if (!siteKey) return null;
      if (typeof window === "undefined") return null;

      // Wait up to ~5 s for grecaptcha to attach.
      const start = Date.now();
      while (!window.grecaptcha?.execute) {
        if (Date.now() - start > 5000) return null;
        await new Promise((r) => setTimeout(r, 100));
      }

      try {
        return await new Promise<string>((resolve, reject) => {
          window.grecaptcha!.ready(() => {
            window
              .grecaptcha!.execute(siteKey, { action })
              .then(resolve, reject);
          });
        });
      } catch {
        return null;
      }
    },
    [siteKey],
  );

  return { execute, enabled: Boolean(siteKey) };
}
