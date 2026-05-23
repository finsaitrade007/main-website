"use client";
import { useState } from "react";
import Link from "next/link";


const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Accounts", href: "/accounts" },
  { label: "Webinar", href: "/webinar" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", justifyContent: "center", padding: "12px 0" }}>
      <div style={{ width: "1297.05px" }}>
        <div style={{
          width: "1297.05px",
          height: "80.65px",
          borderRadius: "41.57px",
          border: "0.83px solid transparent",
          background: "linear-gradient(90deg, #031823 0%, #01111A 100%) padding-box, linear-gradient(181.89deg, #747474 1.6%, #000000 98.4%) border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
        }}>
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/finsai-logo.png" alt="Finsai Trade" style={{ height: "36px", width: "auto", display: "block" }} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 500,
                  fontSize: "13.3px",
                  lineHeight: "100%",
                  letterSpacing: 0,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  padding: "6px 16px",
                  borderRadius: "60px",
                  transition: "background 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8.31px",
              height: "40.94px",
              padding: "12.47px 19.95px",
              background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              border: "0.83px solid #496DAB",
              borderRadius: "19.95px",
              boxShadow: "0px 3.33px 3.33px 0px #00000040",
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "14px",
              color: "#FFFFFF",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              Login
            </Link>
            <Link href="/register" style={{
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
            }}>
              Start Trading
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 bg-[#050208]/95 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-2 pt-3 border-t border-white/10">
              <Link href="/login" className="flex-1 text-center btn-primary text-sm justify-center">
                Login
              </Link>
              <Link href="/register" className="flex-1 text-center btn-secondary text-sm justify-center">
                Start Trading
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
