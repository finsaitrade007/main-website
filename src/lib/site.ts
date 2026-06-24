/** Canonical marketing site origin (no trailing slash). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://finsaitrade.com";

export const SITE_LOGO_URL = `${SITE_URL}/finsai-logo.svg`;
