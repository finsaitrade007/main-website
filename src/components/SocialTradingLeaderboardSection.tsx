"use client";

import { useCallback, useEffect, useState } from "react";

type TabType = "Trending" | "Top";
type RiskLevel = "Low" | "Medium" | "High";

/** Page size — forward/back buttons step in chunks of this many rows. */
const PAGE_SIZE = 5;

/**
 * API endpoint that returns paginated leaderboard data. Override at deploy
 * time via NEXT_PUBLIC_LEADERBOARD_API_URL. Expected shape:
 *   GET <URL>?tab=trending|top&page=<0-based>&limit=5
 *   → { rows: LeaderboardRow[], hasMore?: boolean, total?: number }
 *
 * If the request fails (404, network, etc.) we silently fall back to the
 * hardcoded sample data below on page 0 so the section still renders.
 */
const LEADERBOARD_API_URL =
  process.env.NEXT_PUBLIC_LEADERBOARD_API_URL ||
  "/api/social-trading/leaderboard";

interface LeaderboardResponse {
  rows?: LeaderboardRow[];
  hasMore?: boolean;
  total?: number;
}

interface LeaderboardRow {
  rank: number;
  name: string;
  /** Background gradient used for the avatar placeholder circle. */
  avatar: string;
  verified: boolean;
  strategyType: string;
  sixMonthReturn: string;
  risk: RiskLevel;
  copiers: string;
  minCopy: string;
  winRate: number;
}

const trendingData: LeaderboardRow[] = [
  {
    rank: 1,
    name: "RTFKT x RIMOWA Meta...",
    avatar: "radial-gradient(circle at 30% 30%, #F472B6 0%, #831843 70%)",
    verified: true,
    strategyType: "Growth",
    sixMonthReturn: "+23.78 %",
    risk: "Medium",
    copiers: "2.3k",
    minCopy: "$250",
    winRate: 81,
  },
  {
    rank: 2,
    name: "EVERYBODYS",
    avatar: "radial-gradient(circle at 40% 30%, #FFFFFF 0%, #67E8F9 80%)",
    verified: true,
    strategyType: "Swing",
    sixMonthReturn: "+67.90 %",
    risk: "Low",
    copiers: "9.1k",
    minCopy: "$150",
    winRate: 75,
  },
  {
    rank: 3,
    name: "DentedFeelsNFT",
    avatar: "radial-gradient(circle at 35% 35%, #93C5FD 0%, #1E3A8A 80%)",
    verified: true,
    strategyType: "Scalping",
    sixMonthReturn: "+32.54 %",
    risk: "Medium",
    copiers: "3.4k",
    minCopy: "$400",
    winRate: 89,
  },
  {
    rank: 4,
    name: "Kitaro World Official",
    avatar: "radial-gradient(circle at 35% 35%, #FCA5A5 0%, #7F1D1D 80%)",
    verified: false,
    strategyType: "Trend",
    sixMonthReturn: "+51.43 %",
    risk: "Medium",
    copiers: "6.7k",
    minCopy: "$300",
    winRate: 90,
  },
  {
    rank: 5,
    name: "Degenheim",
    avatar: "radial-gradient(circle at 35% 35%, #E5E7EB 0%, #4B5563 80%)",
    verified: false,
    strategyType: "Position",
    sixMonthReturn: "+89.21 %",
    risk: "High",
    copiers: "4.2k",
    minCopy: "$200",
    winRate: 61,
  },
];

const topData: LeaderboardRow[] = [
  {
    rank: 1,
    name: "AlphaEdge FX",
    avatar: "radial-gradient(circle at 30% 30%, #FBBF24 0%, #92400E 70%)",
    verified: true,
    strategyType: "Growth",
    sixMonthReturn: "+120.50 %",
    risk: "Medium",
    copiers: "9.4k",
    minCopy: "$300",
    winRate: 92,
  },
  {
    rank: 2,
    name: "ForexMasterPro",
    avatar: "radial-gradient(circle at 30% 30%, #7DD3FC 0%, #075985 70%)",
    verified: true,
    strategyType: "Swing",
    sixMonthReturn: "+95.20 %",
    risk: "Low",
    copiers: "7.8k",
    minCopy: "$250",
    winRate: 88,
  },
  {
    rank: 3,
    name: "StealthTrader",
    avatar: "radial-gradient(circle at 30% 30%, #C4B5FD 0%, #4C1D95 70%)",
    verified: true,
    strategyType: "Scalping",
    sixMonthReturn: "+87.40 %",
    risk: "High",
    copiers: "6.3k",
    minCopy: "$500",
    winRate: 79,
  },
  {
    rank: 4,
    name: "PrimeMarkets EA",
    avatar: "radial-gradient(circle at 30% 30%, #6EE7B7 0%, #064E3B 70%)",
    verified: true,
    strategyType: "Trend",
    sixMonthReturn: "+74.90 %",
    risk: "Medium",
    copiers: "5.5k",
    minCopy: "$400",
    winRate: 84,
  },
  {
    rank: 5,
    name: "EcoTrade Solutions",
    avatar: "radial-gradient(circle at 30% 30%, #FDA4AF 0%, #881337 70%)",
    verified: false,
    strategyType: "Position",
    sixMonthReturn: "+68.10 %",
    risk: "Low",
    copiers: "3.2k",
    minCopy: "$200",
    winRate: 71,
  },
];

const RISK_STYLES: Record<RiskLevel, { color: string; border: string; bg: string }> = {
  Low: {
    color: "#22C55E",
    border: "1px solid rgba(34,197,94,0.6)",
    bg: "rgba(34,197,94,0.08)",
  },
  Medium: {
    color: "#F59E0B",
    border: "1px solid rgba(245,158,11,0.6)",
    bg: "rgba(245,158,11,0.08)",
  },
  High: {
    color: "#EC4899",
    border: "1px solid rgba(236,72,153,0.6)",
    bg: "rgba(236,72,153,0.08)",
  },
};

function VerifiedBadge() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M8 1l1.5 1.5L11.5 2 12 4l2 0.5-0.5 2L15 8l-1.5 1.5L14 11.5 12 12l-0.5 2-2-0.5L8 15l-1.5-1.5L4.5 14 4 12l-2-0.5 0.5-2L1 8l1.5-1.5L2 4.5 4 4l0.5-2 2 0.5L8 1z"
        fill="#056FB4"
      />
      <path
        d="M5.5 8L7 9.5L10.5 6"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WinRateRing({ value }: { value: number }) {
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 16,
          color: "#ffffff",
          fontWeight: 500,
        }}
      >
        {value}%
      </span>
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <circle
          cx="16"
          cy="16"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2.5"
        />
        <circle
          cx="16"
          cy="16"
          r={radius}
          fill="none"
          stroke="#22C55E"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 16 16)"
        />
      </svg>
    </div>
  );
}

function TrophyIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 4h12v3a6 6 0 11-12 0V4zM3 5h3v2a3 3 0 003 3M21 5h-3v2a3 3 0 01-3 3"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13v3M9 20h6M10 20v-2h4v2"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const TH_STYLE: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 13,
  color: "rgba(255,255,255,0.45)",
  fontWeight: 500,
  padding: "0 16px",
  textAlign: "left",
  whiteSpace: "nowrap",
  letterSpacing: 0,
};

const TD_STYLE: React.CSSProperties = {
  padding: "24px 16px",
  borderTop: "1px solid rgba(255,255,255,0.04)",
};

export default function SocialTradingLeaderboardSection() {
  const [activeTab, setActiveTab] = useState<TabType>("Trending");
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState<LeaderboardRow[]>(trendingData);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch rows whenever the tab or page changes.
  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    setLoading(true);

    const url = `${LEADERBOARD_API_URL}?tab=${activeTab.toLowerCase()}&page=${page}&limit=${PAGE_SIZE}`;

    fetch(url, { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<LeaderboardResponse>;
      })
      .then((data) => {
        if (cancelled) return;
        const apiRows = Array.isArray(data.rows) ? data.rows : [];
        if (apiRows.length > 0) {
          setRows(apiRows);
          setHasMore(
            typeof data.hasMore === "boolean"
              ? data.hasMore
              : apiRows.length === PAGE_SIZE,
          );
        } else if (page === 0) {
          // API returned no data on page 0 — show hardcoded fallback.
          setRows(activeTab === "Trending" ? trendingData : topData);
          setHasMore(false);
        } else {
          // Empty page beyond 0 — keep showing current rows, just block next.
          setHasMore(false);
        }
      })
      .catch((err) => {
        if (cancelled || (err as Error).name === "AbortError") return;
        // API unreachable — only paint the local sample on page 0.
        if (page === 0) {
          setRows(activeTab === "Trending" ? trendingData : topData);
        }
        setHasMore(false);
        // eslint-disable-next-line no-console
        console.warn("[Leaderboard] fetch failed, using fallback:", err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [activeTab, page]);

  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
    setPage(0);
  }, []);

  const handlePrev = useCallback(() => {
    setPage((p) => Math.max(0, p - 1));
  }, []);

  const handleNext = useCallback(() => {
    setPage((p) => p + 1);
  }, []);

  const canGoPrev = page > 0 && !loading;
  const canGoNext = hasMore && !loading;

  return (
    <section
      style={{
        background: "#050208",
        // Figma spec: 1440 × 1054. Width tracks the body's 1440 cap;
        // we lock the section height at 1054 so vertical rhythm matches.
        minHeight: 1054,
        // Narrower side padding so the inner card can stretch wider.
        padding: "clamp(60px,6vw,100px) clamp(16px,3vw,48px)",
        boxSizing: "border-box",
      }}
    >
      {/* Centered header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h2
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px,3.5vw,48px)",
            color: "#ffffff",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Live Strategy Leaderboard
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: "#94A3B8",
            margin: "12px 0 0",
          }}
        >
          Updated in real time. All stats are independently verified on MT5.
        </p>
      </div>

      {/* Card wrapper */}
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          borderRadius: 24,
          background:
            "linear-gradient(180deg, rgba(10,14,20,0.6) 0%, rgba(5,2,8,0.5) 100%)",
          border: "1px solid rgba(255,255,255,0.06)",
          padding: "clamp(28px,2.5vw,40px)",
        }}
      >
        {/* Card header: tabs + CTA */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 28,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          {/* Tabs */}
          <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {(["Trending", "Top"] as TabType[]).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: "0 0 12px",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.45)",
                    fontFamily: "'Sora', sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    cursor: "pointer",
                    borderBottom: isActive
                      ? "2px solid #056FB4"
                      : "2px solid transparent",
                    transition: "color 0.2s",
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* View All button */}
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background:
                "linear-gradient(90deg, #056FB4 0%, #41ABE7 100%)",
              border: "none",
              borderRadius: 999,
              padding: "12px 24px",
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            <TrophyIcon />
            View All Leaderboard
          </button>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: 0,
              minWidth: 1120,
              opacity: loading ? 0.55 : 1,
              transition: "opacity 0.2s ease",
            }}
          >
            <thead>
              <tr>
                <th style={{ ...TH_STYLE, width: 72, paddingBottom: 20 }}>Rank</th>
                <th style={{ ...TH_STYLE, paddingBottom: 20 }}></th>
                <th style={{ ...TH_STYLE, paddingBottom: 20 }}>Strategy Type</th>
                <th style={{ ...TH_STYLE, paddingBottom: 20 }}>6M Return</th>
                <th style={{ ...TH_STYLE, paddingBottom: 20 }}>6M Return</th>
                <th style={{ ...TH_STYLE, paddingBottom: 20 }}>Copiers</th>
                <th style={{ ...TH_STYLE, paddingBottom: 20 }}>Min.Copy</th>
                <th style={{ ...TH_STYLE, paddingBottom: 20 }}>Win Rate</th>
                <th style={{ ...TH_STYLE, paddingBottom: 20, textAlign: "right" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const risk = RISK_STYLES[row.risk];
                return (
                  <tr key={row.rank}>
                    {/* Rank */}
                    <td style={TD_STYLE}>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: 16,
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        {row.rank}
                      </span>
                    </td>

                    {/* Avatar + Name + Verified */}
                    <td style={TD_STYLE}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                          minWidth: 240,
                        }}
                      >
                        <div
                          aria-hidden
                          style={{
                            width: 56,
                            height: 56,
                            borderRadius: "50%",
                            // `avatar` can be either a CSS gradient string
                            // (sample data) or an image URL (from the API).
                            background:
                              row.avatar &&
                              (row.avatar.startsWith("http") ||
                                row.avatar.startsWith("/"))
                                ? `#0F2330 url(${row.avatar}) center/cover no-repeat`
                                : row.avatar,
                            flexShrink: 0,
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 600,
                            fontSize: 16,
                            color: "#ffffff",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {row.name}
                        </span>
                        {row.verified && <VerifiedBadge />}
                      </div>
                    </td>

                    {/* Strategy Type */}
                    <td style={TD_STYLE}>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          color: "#ffffff",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.strategyType}
                      </span>
                    </td>

                    {/* 6M Return (%) */}
                    <td style={TD_STYLE}>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 600,
                          fontSize: 16,
                          color: "#22C55E",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.sixMonthReturn}
                      </span>
                    </td>

                    {/* 6M Return (risk pill) */}
                    <td style={TD_STYLE}>
                      <span
                        style={{
                          display: "inline-block",
                          borderRadius: 999,
                          padding: "8px 22px",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 14,
                          fontWeight: 500,
                          color: risk.color,
                          border: risk.border,
                          background: risk.bg,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.risk}
                      </span>
                    </td>

                    {/* Copiers */}
                    <td style={TD_STYLE}>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          color: "#ffffff",
                        }}
                      >
                        {row.copiers}
                      </span>
                    </td>

                    {/* Min Copy */}
                    <td style={TD_STYLE}>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          color: "#ffffff",
                        }}
                      >
                        {row.minCopy}
                      </span>
                    </td>

                    {/* Win Rate */}
                    <td style={TD_STYLE}>
                      <WinRateRing value={row.winRate} />
                    </td>

                    {/* Action */}
                    <td style={{ ...TD_STYLE, textAlign: "right" }}>
                      <button
                        style={{
                          background:
                            "linear-gradient(90deg, #41ABE7 0%, #056FB4 100%)",
                          border: "none",
                          borderRadius: 8,
                          padding: "12px 24px",
                          color: "#ffffff",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 15,
                          fontWeight: 600,
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Copy Trade
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer: pagination (centered) + disclaimer (right) */}
      <div
        style={{
          maxWidth: 1360,
          margin: "20px auto 0",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div />
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <button
            aria-label="Previous page"
            onClick={handlePrev}
            disabled={!canGoPrev}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "transparent",
              color: "rgba(255,255,255,0.5)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: canGoPrev ? "pointer" : "not-allowed",
              opacity: canGoPrev ? 1 : 0.35,
              transition: "opacity 0.2s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            aria-label="Next page"
            onClick={handleNext}
            disabled={!canGoNext}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "linear-gradient(90deg, #056FB4 0%, #41ABE7 100%)",
              border: "none",
              color: "#ffffff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: canGoNext ? "pointer" : "not-allowed",
              opacity: canGoNext ? 1 : 0.35,
              transition: "opacity 0.2s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.4)",
            textAlign: "right",
            margin: 0,
            lineHeight: 1.5,
            maxWidth: 380,
            justifySelf: "end",
          }}
        >
          **Past performance is not indicative of future results. All returns
          are calculated based on MT5-verified account statements.**
        </p>
      </div>
    </section>
  );
}
