import type { CSSProperties, ReactNode } from "react";

const PARAGRAPH_STYLE: CSSProperties = {
  fontFamily: "var(--font-inter, Inter)",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "28px",
  color: "rgba(255,255,255,0.78)",
  margin: 0,
};

const SECTION_HEADING_STYLE: CSSProperties = {
  fontFamily: "var(--font-sora, Sora)",
  fontWeight: 700,
  fontSize: "clamp(18px, 1.8vw, 26px)",
  lineHeight: "1.25",
  color: "#FFFFFF",
  margin: 0,
};

const SUBSECTION_HEADING_STYLE: CSSProperties = {
  fontFamily: "var(--font-sora, Sora)",
  fontWeight: 600,
  fontSize: "clamp(15px, 1.4vw, 20px)",
  lineHeight: "1.3",
  color: "#FFFFFF",
  margin: 0,
};

const PAGE_TITLE_STYLE: CSSProperties = {
  fontFamily: "var(--font-sora, Sora)",
  fontWeight: 700,
  fontSize: "clamp(26px, 3.1vw, 44px)",
  lineHeight: "1.15",
  color: "#FFFFFF",
  margin: 0,
};

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div style={{ background: "#050208", width: "100%" }}>
      <div
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "clamp(40px, 8vw, 120px) clamp(20px, 8vw, 120px)",
          display: "flex",
          flexDirection: "column",
          gap: "56px",
          boxSizing: "border-box",
        }}
      >
        <h1 style={PAGE_TITLE_STYLE}>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      {title && <h2 style={SECTION_HEADING_STYLE}>{title}</h2>}
      {children}
    </section>
  );
}

export function LegalSubsection({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        marginTop: "8px",
      }}
    >
      {title && <h3 style={SUBSECTION_HEADING_STYLE}>{title}</h3>}
      {children}
    </div>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p style={PARAGRAPH_STYLE}>{children}</p>;
}

export function UL({ items }: { items: ReactNode[] }) {
  return (
    <ul
      style={{
        margin: 0,
        paddingLeft: "22px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        listStyle: "disc",
        color: "rgba(255,255,255,0.78)",
      }}
    >
      {items.map((item, i) => (
        <li key={i} style={{ ...PARAGRAPH_STYLE, display: "list-item" }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function OL({ items }: { items: ReactNode[] }) {
  return (
    <ol
      style={{
        margin: 0,
        paddingLeft: "22px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        listStyle: "decimal",
        color: "rgba(255,255,255,0.78)",
      }}
    >
      {items.map((item, i) => (
        <li key={i} style={{ ...PARAGRAPH_STYLE, display: "list-item" }}>
          {item}
        </li>
      ))}
    </ol>
  );
}
