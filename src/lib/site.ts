/** Canonical marketing site origin (no trailing slash). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://finsaitrade.com";

export const SITE_LOGO_URL = `${SITE_URL}/finsai-logo.svg`;

/** FSC Mauritius license number for Finsai Trade (Mauritius) Ltd. */
export const FINSAI_LICENSE_NO = "GB25204899";

/** Mauritius company registration number for Finsai Trade (Mauritius) Ltd. */
export const FINSAI_COMPANY_REG_NO = "C228371";
