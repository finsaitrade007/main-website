/* ---------------------------------------------------------------------------
 * PLACEHOLDER — replace or delete before shipping.
 *
 * `src/app/layout.tsx` loads this file on every page:
 *
 *     <Script src="/chat/widget-bridge.js" strategy="afterInteractive" />
 *
 * but `public/chat/` did not exist, so every page view produced a 404. This
 * file exists purely to stop that 404 without changing behaviour.
 *
 * ACTION REQUIRED — pick one:
 *
 *   1. If the real bridge exists elsewhere in your repo, copy it over this
 *      file. (It was absent from the archive that was analysed.)
 *   2. If the portal widget at portal.finsaitrade.com/chat/widget.js is
 *      self-configuring and no bridge is needed, delete this file AND remove
 *      the second <Script> tag from layout.tsx.
 *
 * The bridge is presumably where widget config lives — identifying the current
 * page, passing locale, or wiring "Contact Us" buttons to open the chat. None
 * of that is reconstructed here; this is an intentional no-op.
 * ------------------------------------------------------------------------- */

(function () {
  "use strict";

  // Guard against double execution during client-side navigation.
  if (window.__finsaiChatBridgeLoaded) return;
  window.__finsaiChatBridgeLoaded = true;

  // No-op. See the header comment above.
})();
