import type { Metadata } from "next";
import { Sora, Inter, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Site-wide metadata defaults. Per-page `generateMetadata()` (driven by the
// Strapi `shared.seo` component on every page single-type) overrides these.
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.finsaitrade.com",
  ),
  title: {
    default: "Finsai Trade — Trade Global Markets Without Limits",
    template: "%s | Finsai Trade",
  },
  description:
    "The powerful multi-asset trading platform for modern traders. Trade Forex, Crypto, Stocks, Indices, and Metals with tight spreads, up to 500x leverage, and 24/7 support.",
  applicationName: "Finsai Trade",
  authors: [{ name: "Finsai Trade", url: "https://www.finsaitrade.com" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

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
