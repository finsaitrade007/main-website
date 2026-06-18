import Link from "next/link";
import Image from "next/image";
import FAQLink from "./FAQLink";

const quickLinks = [
  { label: "Home",         href: "/" },
  { label: "About Us",     href: "/about" },
  { label: "Services",     href: "/services" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Accounts",     href: "/accounts" },
  { label: "Payments",     href: "/payments" },
  { label: "Blogs",        href: "/blogs" },
];

const helpLinks: { label: string; href: string }[] = [
  { label: "Contact Us",        href: "/contactus" },
  { label: "Careers",           href: "/careers" },
  { label: "Customer Support",  href: "/contactus" },
  { label: "FAQs",              href: "#" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

const legalLinks: { label: string; href: string }[] = [
  { label: "Regulations",                       href: "/regulations" },
  { label: "Anti-Money Laundering Policy",      href: "/aml-policy" },
  { label: "Conflicts Of Interest Policy",      href: "/conflicts-of-interest-policy" },
  { label: "Privacy Policy",                    href: "/privacy-policy" },
  { label: "Refund Policy",                     href: "/refund-policy" },
  { label: "Risk Disclosure & Warnings Notice", href: "/risk-disclosure" },
  { label: "Upfront Disclosure",                href: "/upfront-disclosure" },
  { label: "Complaints Management",             href: "/complaints-management" },
  { label: "Client Agreement",                  href: "/client-agreement" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/finsaiitrade",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://x.com/FinsaiTrade",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/finsai.trade",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/finsai-trade",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@FinsaiTrade-UI",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#050208"/>
      </svg>
    ),
  },
];

const LINK_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter)",
  fontSize: "14px",
  lineHeight: "32px",
  color: "rgba(255,255,255,0.6)",
  textDecoration: "none",
  display: "block",
  transition: "color 0.2s",
};

const HEADING_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-sora, Sora)",
  fontWeight: 600,
  fontSize: "15px",
  color: "#056FB4",
  marginBottom: "16px",
};

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(114.32deg, #050208 1.5%, #056FB4 778.83%)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>

      {/* Main footer content */}
      <div className="footer-inner" style={{ paddingTop: "43px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "clamp(220px,24%,349px) 1fr 1fr 1.6fr", gap: "clamp(20px,3vw,48px)" }} className="footer-grid">

          {/* Col 1: Logo + desc */}
          <div>
            {/* Logo */}
            <Link href="/" style={{ display: "inline-block", textDecoration: "none", marginBottom: "20px" }}>
              <Image src="/finsai-logo.svg" alt="Finsai Trade" width={140} height={48} style={{ objectFit: "contain" }} />
            </Link>

            <p style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "14.6px",
              lineHeight: "26.2px",
              letterSpacing: 0,
              color: "#D4D4D4",
              maxWidth: "300px",
            }}>
              An award-winning multi-asset trading platform delivering fast, transparent, and secure access to Forex, stocks, crypto, and commodities - powered by fully regulated, institutional-grade infrastructure built for modern traders.
            </p>
          </div>

          {/* Col 2: Quick Link */}
          <div>
            <h4 style={HEADING_STYLE}>Quick Link</h4>
            {quickLinks.map((l) => (
              <a key={l.label} href={l.href} style={LINK_STYLE}>{l.label}</a>
            ))}
          </div>

          {/* Col 3: Help */}
          <div>
            <h4 style={HEADING_STYLE}>Help</h4>
            {helpLinks.map((l) =>
              l.label === "FAQs" ? (
                <FAQLink key={l.label} style={LINK_STYLE}>
                  {l.label}
                </FAQLink>
              ) : (
                <a key={l.label} href={l.href} style={LINK_STYLE}>
                  {l.label}
                </a>
              ),
            )}
          </div>

          {/* Col 4: Legal Documents */}
          <div>
            <h4 style={HEADING_STYLE}>Legal Documents</h4>
            {legalLinks.map((l) => (
              <Link key={l.label} href={l.href} style={LINK_STYLE}>{l.label}</Link>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="footer-inner" style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "12px",
        }}>
          <p style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "14.6px",
            lineHeight: "29.2px",
            letterSpacing: 0,
            color: "#8C8C8C",
            margin: 0,
          }}>
            © Copyright 2026, All Rights Reserved by Finsai Trade
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "10px" }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
              }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Legal disclaimer */}
      <div>
        <div className="footer-inner" style={{ paddingTop: "32px", paddingBottom: "32px" }}>
          {[
            "Finsai Trade (Mauritius) Ltd is a company regulated by the Financial Services Commission Mauritius with License no: GB25204899, Registered in Mauritius under company number C228371. Registered address: 3 Emerald Park, Trianon, Quatre Bornes 72257, MAURITIUS",
            "Physical Address Mauritius: 3rd Floor, Manor House, 30 St Georges Street, Port Louis, Mauritius",
            "Finsai Trade (Mauritius) Ltd",
            "Incorporated on – 19th November 2025, main License no : GB25204899, Regulated by Financial Services Commission Mauritius",
            "For Risk Disclosure and information __VISIT_HERE__",
            "Risk Disclaimer: An investment in derivatives may mean investors may lose an amount even greater than their original investment. Anyone wishing to invest in any of the products mentioned in www.finsaitrade.com should seek their own financial or professional advice.",
            "Investing and Trading of forex CFDs, stock market, commodities, options and futures, Cryptocurrencies CFDs, securities, may not be suitable for everyone as it involves significant risks and is not suitable for all investors. You should carefully consider your financial situation, investment objectives, experience, and risk tolerance before engaging in such transactions",
            "You must be aware of the risks and be willing to accept them in order to invest in the markets. Don't invest and trade with money which you can't afford to lose. Trading is not allowed in some countries, before investing your money, make sure whether your country is allowing this or not.",
            "Restricted Regions: Finsai Trade Ltd does not provide services for citizens/residents of the United States of America, Cuba, Iraq, Myanmar, North Korea, Sudan and UAE. The services of Finsai Trade Ltd are not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.",
            "OR",
            "Information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.",
            "We urge all users to undertake their own research and due diligence before making any investment decisions.",
            "Thank you for choosing Finsai Trade Ltd. We prioritize the safety and well-being of our community and encourage informed and responsible trading.",
          ].map((text, i, arr) => (
            <p key={i} style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "14.6px",
              lineHeight: "29.2px",
              letterSpacing: 0,
              color: "#8C8C8C",
              margin: i === arr.length - 1 ? 0 : "0 0 6px",
            }}>
              {text.includes("__VISIT_HERE__") ? (
                <>
                  For Risk Disclosure and information{" "}
                  <a href="/risk-disclosure" style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 400,
                    fontSize: "14.6px",
                    lineHeight: "29.2px",
                    letterSpacing: 0,
                    color: "#8C8C8C",
                    textDecoration: "underline",
                    textDecorationStyle: "solid",
                    textUnderlineOffset: "auto",
                    textDecorationSkipInk: "auto",
                  }}>visit here</a>
                </>
              ) : text}
            </p>
          ))}
        </div>
      </div>

    </footer>
  );
}
