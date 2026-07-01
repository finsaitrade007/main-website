"use client";
import { useState } from "react";
import Link from "@/components/SmartLink";

type SubLink = { label: string; href: string };
type NavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "dropdown"; label: string; items: SubLink[] };

const NAV_ITEMS: NavItem[] = [
  { kind: "link", label: "Home", href: "/" },
  {
    kind: "dropdown",
    label: "Trading",
    items: [
      { label: "Platform", href: "/platform" },
      { label: "Social Trading", href: "/social-trading" },
      { label: "Account", href: "/accounts" },
      { label: "Payments", href: "/payments" },
    ],
  },
  {
    kind: "dropdown",
    label: "Learn and Grow",
    items: [
      { label: "Webinar", href: "https://lms.finsaitrade.com/#webinars" },
      { label: "Blog", href: "/blogs" },
      { label: "Glossary", href: "/glossary" },
    ],
  },
  { kind: "link", label: "Partnerships", href: "/partnerships" },
  {
    kind: "dropdown",
    label: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Career", href: "/careers" },
    ],
  },
  {
    kind: "dropdown",
    label: "Help/Support",
    items: [{ label: "Contact Us", href: "/contactus" }],
  },
];

const TRIGGER_BASE_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter)",
  fontWeight: 500,
  fontSize: "13.3px",
  lineHeight: "100%",
  letterSpacing: 0,
  color: "#FFFFFF",
  textDecoration: "none",
  padding: "6px 16px",
  borderRadius: "60px",
  display: "inline-flex",
  alignItems: "center",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  whiteSpace: "nowrap",
  transition: "background 0.2s",
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      style={{
        marginLeft: "6px",
        transform: open ? "rotate(180deg)" : "none",
        transition: "transform 0.2s ease",
      }}
      aria-hidden
    >
      <path
        d="M2.5 4l2.5 2.5L7.5 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavDropdown({ label, items }: { label: string; items: SubLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        style={{
          ...TRIGGER_BASE_STYLE,
          background: open ? "rgba(255,255,255,0.08)" : "transparent",
        }}
      >
        {label}
        <ChevronIcon open={open} />
      </button>

      {/* Hover bridge so the cursor can travel from trigger to panel
          without the dropdown closing. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          height: "12px",
          pointerEvents: open ? "auto" : "none",
        }}
      />

      {open && (
        <div
          role="menu"
          style={{
            position: "absolute",
            top: "calc(100% + 12px)",
            left: "50%",
            transform: "translateX(-50%)",
            minWidth: "220px",
            padding: "8px",
            borderRadius: "16px",
            border: "1px solid transparent",
            background:
              "linear-gradient(180deg, #0A1B26 0%, #050208 100%) padding-box, linear-gradient(180deg, rgba(125,185,214,0.5) 0%, rgba(5,111,180,0.18) 100%) border-box",
            boxShadow: "0 14px 36px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            zIndex: 60,
          }}
        >
          {items.map((item) => (
            <DropdownLink key={item.label} href={item.href} label={item.label} />
          ))}
        </div>
      )}
    </div>
  );
}

function isExternal(href: string): boolean {
  return /^(https?:)?\/\//i.test(href);
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  const [hover, setHover] = useState(false);
  const external = isExternal(href);
  return (
    <Link
      href={href}
      role="menuitem"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        padding: "10px 14px",
        borderRadius: "10px",
        color: hover ? "#FFFFFF" : "rgba(255,255,255,0.78)",
        background: hover ? "rgba(255,255,255,0.06)" : "transparent",
        fontFamily: "var(--font-inter, Inter)",
        fontWeight: 500,
        fontSize: "13px",
        lineHeight: "20px",
        textDecoration: "none",
        whiteSpace: "nowrap",
        transition: "background 0.15s, color 0.15s",
      }}
    >
      {label}
    </Link>
  );
}

function MobileItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (item.kind === "link") {
    const external = isExternal(item.href);
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="flex flex-col">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
      >
        <span>{item.label}</span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="flex flex-col pl-3 mt-1 gap-1 border-l border-white/10 ml-4">
          {item.items.map((sub) => {
            const external = isExternal(sub.href);
            return (
              <Link
                key={sub.label}
                href={sub.href}
                onClick={onNavigate}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
              >
                {sub.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: "1.2px",
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        paddingTop: "15.6px",
        paddingBottom: "15.6px",
        paddingLeft: "16px",
        paddingRight: "16px",
        background: "transparent",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1297.05px" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "1297.05px",
            height: "clamp(58px, 5.6vw, 80.65px)",
            borderRadius: "clamp(29px, 2.89vw, 41.57px)",
            border: "0.83px solid transparent",
            background:
              "linear-gradient(90deg, #031823 0%, #01111A 100%) padding-box, linear-gradient(181.89deg, #747474 1.6%, #000000 98.4%) border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 clamp(14px, 1.94vw, 28px)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/finsai-logo.svg"
              alt="Finsai Trade"
              style={{
                width: "144.84px",
                height: "55.83px",
              }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.kind === "link" ? (
                <Link
                  key={item.label}
                  href={item.href}
                  style={TRIGGER_BASE_STYLE}
                >
                  {item.label}
                </Link>
              ) : (
                <NavDropdown
                  key={item.label}
                  label={item.label}
                  items={item.items}
                />
              ),
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://fx.finsaitrade.com/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8.31px",
                height: "40.94px",
                padding: "12.47px 19.95px",
                background:
                  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
                border: "0.83px solid #496DAB",
                borderRadius: "19.95px",
                boxShadow: "0px 3.33px 3.33px 0px #00000040",
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 600,
                fontSize: "14px",
                color: "#FFFFFF",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Login
            </Link>
            <Link
              href="https://fx.finsaitrade.com/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8.31px",
                height: "40.94px",
                padding: "12.47px 19.95px",
                background: "transparent",
                border: "0.83px solid #747474",
                borderRadius: "19.95px",
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 600,
                fontSize: "14px",
                color: "#FFFFFF",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Start Trading
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 bg-[#050208]/95 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-4 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <MobileItem
                key={item.label}
                item={item}
                onNavigate={() => setOpen(false)}
              />
            ))}
            <div className="flex gap-3 mt-2 pt-3 border-t border-white/10">
              <Link
                href="https://fx.finsaitrade.com/auth/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center btn-primary text-sm justify-center"
              >
                Login
              </Link>
              <Link
                href="https://fx.finsaitrade.com/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center btn-secondary text-sm justify-center"
              >
                Start Trading
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
