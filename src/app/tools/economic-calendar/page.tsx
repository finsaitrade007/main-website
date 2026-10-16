import type { Metadata } from "next";
import Link from "@/components/SmartLink";
import EconomicCalendarWidget from "@/components/EconomicCalendarWidget";
import ToolsCtaSection from "@/components/ToolsCtaSection";
import PageJsonLd from "@/components/PageJsonLd";
import { cmsPageMetadata, PAGE_SEO } from "@/lib/page-seo";

const SEO = PAGE_SEO.economicCalendar;

export const metadata: Metadata = cmsPageMetadata(null, SEO);

const READ_GUIDE = [
  {
    title: "Impact",
    text: "Each event is rated low, medium or high impact. High-impact releases such as interest rate decisions, CPI and US non-farm payrolls can move currencies, gold and indices sharply within seconds.",
  },
  {
    title: "Forecast, previous and actual",
    text: "Markets price in the forecast. When the actual figure lands far from it, prices tend to react; a figure in line with the forecast usually moves them far less.",
  },
  {
    title: "Your local time",
    text: "Event times follow your device's time zone. Use the filters above the calendar to choose dates, countries and the minimum impact you want to see.",
  },
];

export default function EconomicCalendarPage() {
  return (
    <>
      <PageJsonLd path={SEO.path} title={SEO.title} description={SEO.description} />

      <section className="ec-hero">
        <nav aria-label="Breadcrumb" className="ec-crumbs">
          <Link href="/tools">Tools</Link>
          <span aria-hidden>/</span>
          <span aria-current="page">Economic Calendar</span>
        </nav>
        <span className="tl-badge">Live market events</span>
        <h1 className="tl-hero-title ec-title">Economic Calendar</h1>
        <p className="tl-hero-desc ec-desc">
          Central bank decisions, inflation, jobs and GDP releases from the world&rsquo;s
          major economies, with forecast, previous and actual figures as they are
          published. Plan your trades around the events that move the market.
        </p>
      </section>

      <section className="ec-calendar-section" aria-label="Economic calendar">
        <EconomicCalendarWidget />
      </section>

      <section className="tl-section">
        <p className="tl-eyebrow">How to read it</p>
        <h2 className="tl-h2">Make the calendar part of your plan</h2>
        <div className="ec-guide">
          {READ_GUIDE.map((g, i) => (
            <article key={g.title} className="tl-insight-card ec-guide-card">
              <div className="tl-insight-head">
                <span className="tl-insight-no">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="tl-insight-title ec-guide-title">{g.title}</h3>
              </div>
              <p className="tl-insight-desc ec-guide-text">{g.text}</p>
            </article>
          ))}
        </div>
        <p className="ec-note">
          Spreads can widen and prices can gap around major releases. The calendar is
          provided for information only and is not investment advice. Trading CFDs
          carries a high level of risk; see our{" "}
          <Link href="/risk-disclosure">risk disclosure</Link>.
        </p>
        <div className="tl-center">
          <Link href="/tools" className="tl-btn-outline">All trading tools</Link>
        </div>
      </section>

      <ToolsCtaSection />
    </>
  );
}
