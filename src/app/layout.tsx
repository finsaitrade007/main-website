import type { Metadata } from "next";
import { Sora, Inter, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { PAGE_SEO } from "@/lib/page-seo";
import { SITE_URL } from "@/lib/site";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Site-wide metadata defaults. Per-page `generateMetadata()` (driven by the
// Strapi `shared.seo` component on every page single-type) overrides these.
//
// NOTE: there is deliberately NO `title.template` here. Next.js applies a
// parent template to any child that returns a plain-string title, and every
// page's title already arrives complete from the CMS — the SEO team writes the
// full string, brand suffix included or not, per page. With a template in place
// those titles were silently getting " | Finsai Trade" appended a second time
// ("Compare Forex Trading Account Types | ECN & Swap-Free | Finsai Trade |
// Finsai Trade"), pushing them past the SERP truncation limit and burying the
// keywords. Blog posts, which build their own suffix, were double-suffixed too.
//
// `seoToMetadata` now returns `title: { absolute }` so nothing is ever
// re-templated. Do not reintroduce `template` without removing that.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Plain string, not `{ default, template }`: Next requires `template`
  // whenever `default` is used, and a template is precisely what we must not
  // have. A plain string is inherited by pages that define no title of their
  // own and is never appended to those that do.
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  applicationName: "Finsai Trade",
  authors: [{ name: "Finsai Trade", url: SITE_URL }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

/**
 * Google Tag Manager container.
 *
 * Declared once and used by both the loader script and the <noscript>
 * fallback below — GTM's own install snippet repeats the ID in two places,
 * which is a well-known way for the two to drift apart.
 */
const GTM_ID = "GTM-WBZW9L8T";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${dmSans.variable} h-full antialiased bg-[#050208] overflow-x-clip`}
    >
      <body className="min-h-full flex flex-col bg-[#050208] w-full max-w-[1440px] mx-auto">
        {/* Google Tag Manager (noscript) — must be the first node in <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            title="Google Tag Manager"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/*
          Google Tag Manager loader.

          GTM's instructions say to paste this as high in <head> as possible.
          There is no hand-written <head> in the App Router, and Next
          recommends "afterInteractive" for tag managers — the same strategy
          @next/third-parties uses for its own GoogleTagManager component.
          Tags still fire normally; the container is simply requested once
          hydration starts rather than blocking first paint.
        */}
        <Script id="gtm-loader" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://portal.finsaitrade.com/chat/widget.js"
          strategy="afterInteractive"
        />
        <Script src="/chat/widget-bridge.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
