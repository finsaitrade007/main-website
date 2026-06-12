"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BORDER_GRADIENT = "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)";
const CARD_INNER_BG   = "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%)";

const cardPositions = [
  { top: "376px", left: "75px"  },
  { top: "376px", left: "507px" },
  { top: "376px", left: "939px" },
  { top: "685px", left: "75px"  },
  { top: "685px", left: "507px" },
  { top: "685px", left: "939px" },
];

export type BlogCard = {
  title:    string;
  category: string;
  image:    string;
  desc:     string;
  href:     string;
};

function useSearch(allCards: BlogCard[]) {
  const [query, setQuery] = useState("");
  const filtered = query.trim()
    ? allCards.filter((c) => {
        const q = query.toLowerCase();
        return (
          c.title.toLowerCase().includes(q) ||
          c.desc.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
        );
      })
    : allCards;
  return { query, setQuery, visible: filtered.slice(0, 6) };
}

function SearchInput({ value, onChange, placeholder, width }: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  width: number;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          fontFamily: "var(--font-inter, Inter)",
          fontSize: "14px",
          color: "rgba(255,255,255,0.85)",
          width: `${width}px`,
        }}
      />
    </div>
  );
}

function DesktopArticleCard({ desc, href, image, top, left }: { desc: string; href: string; image: string; top: string; left: string }) {
  return (
    <div style={{
      position: "absolute", top, left,
      width: "415px", height: "285px",
      borderRadius: "21.32px",
      border: "1px solid transparent",
      background: `${CARD_INNER_BG} padding-box, ${BORDER_GRADIENT} border-box`,
      boxSizing: "border-box",
      overflow: "hidden",
    }}>
      <div style={{ width: "100%", height: "100%", position: "relative", boxSizing: "border-box" }}>
        <div style={{ position: "absolute", top: "12px", left: "17px", width: "380px", height: "116px", borderRadius: "16px", overflow: "hidden" }}>
          <Image src={image} alt="" fill sizes="380px" style={{ objectFit: "cover" }} />
        </div>
        <p style={{
          position: "absolute", top: "144px", left: "21px",
          width: "378px", height: "81px", margin: 0, overflow: "hidden",
          fontFamily: "var(--font-inter, Inter)", fontWeight: 400, fontSize: "18px", lineHeight: "27px",
          color: "rgba(255,255,255,0.7)",
        }}>
          {desc}
        </p>
        <Link href={href} style={{
          position: "absolute", top: "238px", left: "21px",
          display: "inline-flex", alignItems: "center", gap: "8px",
          fontFamily: "var(--font-inter, Inter)", fontWeight: 400, fontSize: "18px", lineHeight: "27px",
          color: "#056FB4", textDecoration: "none",
        }}>
          Read More
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function MobileArticleCard({ desc, href, image }: { desc: string; href: string; image: string }) {
  return (
    <div style={{
      width: "100%", borderRadius: "16px",
      border: "1px solid transparent",
      background: `${CARD_INNER_BG} padding-box, ${BORDER_GRADIENT} border-box`,
      boxSizing: "border-box", overflow: "hidden",
    }}>
      <div style={{ width: "100%", height: "120px", position: "relative" }}>
        <Image src={image} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div style={{ padding: "16px" }}>
        <p style={{
          fontFamily: "var(--font-inter, Inter)", fontWeight: 400, fontSize: "13px", lineHeight: "1.6",
          color: "rgba(255,255,255,0.7)", margin: "0 0 12px",
          display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {desc}
        </p>
        <Link href={href} style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          fontFamily: "var(--font-inter, Inter)", fontWeight: 400, fontSize: "13px",
          color: "#056FB4", textDecoration: "none",
        }}>
          Read More
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

/** Drop-in replacement for the desktop heading + search bar + divider + cards block.
 *  Rendered inside the existing position:relative 1440px canvas. */
export function BlogsSearchDesktop({ allCards }: { allCards: BlogCard[] }) {
  const { query, setQuery, visible } = useSearch(allCards);

  return (
    <>
      {/* "Blogs" heading + search input */}
      <div style={{
        position: "absolute", top: "300px", left: "75px", right: "75px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <h2 style={{
          fontFamily: "var(--font-sora, Sora)", fontWeight: 700, fontSize: "36px",
          lineHeight: "100%", color: "#FFFFFF", margin: 0,
        }}>
          Blogs
        </h2>
        <SearchInput value={query} onChange={setQuery} placeholder="Search for a Keyword" width={200} />
      </div>

      {/* Divider */}
      <div style={{
        position: "absolute", top: "347px", left: "75px",
        width: "1279px", height: "0px", border: "2px solid #056FB44D",
      }} />

      {/* Filtered cards */}
      {visible.length > 0 ? (
        visible.map((card, i) => (
          <DesktopArticleCard
            key={card.href}
            image={card.image}
            desc={card.desc}
            href={card.href}
            top={cardPositions[i].top}
            left={cardPositions[i].left}
          />
        ))
      ) : (
        <div style={{
          position: "absolute", top: "440px", left: 0, right: 0,
          textAlign: "center",
          fontFamily: "var(--font-inter, Inter)", fontSize: "18px",
          color: "rgba(255,255,255,0.35)",
        }}>
          No articles found for &ldquo;{query}&rdquo;
        </div>
      )}
    </>
  );
}

/** Drop-in replacement for the mobile "Blogs" subheading + search + divider + stacked cards block. */
export function BlogsSearchMobile({ allCards }: { allCards: BlogCard[] }) {
  const { query, setQuery, visible } = useSearch(allCards);

  return (
    <>
      {/* "Blogs" subheading + search */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        marginBottom: "12px",
      }}>
        <h2 style={{
          fontFamily: "var(--font-sora, Sora)", fontWeight: 700, fontSize: "22px",
          lineHeight: "100%", color: "#FFFFFF", margin: 0,
        }}>
          Blogs
        </h2>
        <SearchInput value={query} onChange={setQuery} placeholder="Search…" width={120} />
      </div>

      {/* Divider */}
      <div style={{
        width: "100%", height: "1px",
        background: "linear-gradient(90deg, transparent 0%, rgba(5,111,180,0.7) 50%, transparent 100%)",
        marginBottom: "20px",
      }} />

      {/* Article cards */}
      {visible.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {visible.map((card) => (
            <MobileArticleCard key={card.href} desc={card.desc} href={card.href} image={card.image} />
          ))}
        </div>
      ) : (
        <p style={{
          fontFamily: "var(--font-inter, Inter)", fontSize: "14px",
          color: "rgba(255,255,255,0.35)", textAlign: "center",
        }}>
          No articles found for &ldquo;{query}&rdquo;
        </p>
      )}
    </>
  );
}
