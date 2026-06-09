"use client";

import { useMemo, useState } from "react";

type Term = { term: string; definition: string };

const TERMS: Term[] = [
  // A
  { term: "Ask Price", definition: "The lowest price a seller is willing to accept for an instrument. Also called the offer; the price you pay when you buy." },
  { term: "Algorithmic Trading", definition: "Using pre-programmed rules and code to automate order placement based on price, time, volume, or other inputs." },
  { term: "Arbitrage", definition: "Buying an asset in one market and simultaneously selling it in another to profit from a small price difference." },
  { term: "Averaging Down", definition: "Buying more of a falling asset to reduce the average entry price. High-risk strategy if the trend continues." },

  // B
  { term: "Bid Price", definition: "The highest price a buyer is willing to pay. You sell at the bid and buy at the ask; the gap between the two is the spread." },
  { term: "Bear Market", definition: "A sustained period of falling prices, typically 20% or more from recent highs, paired with widespread pessimism." },
  { term: "Bull Market", definition: "A sustained period of rising prices and strong investor confidence." },
  { term: "Base Currency", definition: "The first currency in a forex pair. In EUR/USD, EUR is the base; quotes show how much USD one EUR buys." },
  { term: "Breakout", definition: "When price moves decisively outside a defined range or chart pattern, often on rising volume." },

  // C
  { term: "CFD", definition: "Contract for Difference - a derivative that lets you trade the price movement of an asset without owning it, using leverage." },
  { term: "Commodity", definition: "A raw material that's traded on global markets - gold, silver, oil, natural gas, wheat, and similar." },
  { term: "Cross Pair", definition: "A forex pair that doesn't include the US Dollar, such as EUR/GBP or AUD/JPY." },
  { term: "Candlestick", definition: "A chart marker showing the open, high, low, and close of a session - the body shows direction, wicks show the range." },

  // D
  { term: "Drawdown", definition: "The peak-to-trough decline in an account balance before a new high is reached. Measures downside risk." },
  { term: "Day Trading", definition: "Opening and closing positions within the same trading day to capture short-term price moves." },
  { term: "Demo Account", definition: "A funded-with-virtual-money account that lets you practice trading in live market conditions without financial risk." },
  { term: "Derivative", definition: "A contract whose value is derived from an underlying asset - futures, options, CFDs and swaps are all derivatives." },

  // E
  { term: "ECN", definition: "Electronic Communications Network - a venue that matches buy and sell orders directly, typically with raw spreads and a commission." },
  { term: "Equity", definition: "The real-time value of your account, including unrealised profit or loss on open positions." },
  { term: "Execution", definition: "The process of filling a trade order at the available market price." },
  { term: "Expert Advisor (EA)", definition: "An automated trading program that runs on MetaTrader to manage orders based on coded logic." },

  // F
  { term: "Forex", definition: "The global market for trading currencies; the largest financial market in the world by daily volume." },
  { term: "Fundamental Analysis", definition: "Studying economic data, central bank policy, and company financials to estimate an asset's intrinsic value." },
  { term: "Futures Contract", definition: "A standardised agreement to buy or sell an asset at a set price on a future date." },

  // G
  { term: "Gap", definition: "A visible jump on a chart between the close of one session and the open of the next - common after weekends or news shocks." },
  { term: "Going Long", definition: "Buying an asset with the expectation that its price will rise." },
  { term: "Going Short", definition: "Selling an asset you've borrowed (or a CFD) with the expectation that its price will fall." },

  // H
  { term: "Hedging", definition: "Opening an offsetting position to reduce the risk of an existing exposure." },
  { term: "High-Frequency Trading", definition: "Algorithmic trading that uses ultra-fast infrastructure to execute many trades in microseconds." },

  // I
  { term: "Index", definition: "A basket of stocks tracked together as one instrument - examples include the S&P 500, NASDAQ 100 and FTSE 100." },
  { term: "Inflation", definition: "The rate at which the general level of prices rises, eroding purchasing power over time." },
  { term: "Interest Rate", definition: "The cost of borrowing money, set by central banks. A key driver of currency strength and risk appetite." },

  // L
  { term: "Leverage", definition: "Using borrowed funds to control a position larger than your deposit. 100x leverage means a $1,000 margin controls a $100,000 position." },
  { term: "Limit Order", definition: "An order to buy below the current market price or sell above it - executes only at the specified price or better." },
  { term: "Liquidity", definition: "How easily an asset can be bought or sold without moving its price. Major forex pairs are the most liquid markets." },
  { term: "Lot", definition: "A standardised unit of trade size. In forex a standard lot is 100,000 units of the base currency; mini and micro lots are 10,000 and 1,000." },

  // M
  { term: "Margin", definition: "The deposit required to open and maintain a leveraged position. Margin = (Trade Size × Price) / Leverage." },
  { term: "Margin Call", definition: "A broker warning that your account equity has fallen below the required margin; you must add funds or positions will be closed." },
  { term: "Market Order", definition: "An order to buy or sell immediately at the best available price." },
  { term: "MetaTrader 5 (MT5)", definition: "A multi-asset trading platform offering advanced charting, indicators, and algorithmic trading via the MQL5 language." },

  // P
  { term: "Pip", definition: "The smallest standard price move in a forex pair - typically the fourth decimal place (0.0001), except for JPY pairs where it's the second." },
  { term: "Pip Value", definition: "The monetary value of a one-pip move for a given trade size. Used to size positions and calculate P&L." },
  { term: "Position", definition: "An open trade. Long if you bought, short if you sold." },
  { term: "Pullback", definition: "A temporary reversal against the prevailing trend, often used as an entry opportunity by trend traders." },

  // Q
  { term: "Quote Currency", definition: "The second currency in a forex pair. In EUR/USD, USD is the quote - it tells you how much one EUR is worth." },

  // R
  { term: "Range", definition: "A price band between defined support and resistance levels where an asset trades sideways." },
  { term: "Resistance", definition: "A price level where selling tends to overwhelm buying, often pausing or reversing an uptrend." },
  { term: "Risk-Reward Ratio", definition: "The ratio of potential loss to potential gain on a trade. A 1:3 setup risks $1 to make $3." },
  { term: "Rollover", definition: "The overnight interest charged or credited on positions held past the daily close. Also called swap." },

  // S
  { term: "Scalping", definition: "A short-term strategy that takes many small profits from intraday price moves, often holding positions for seconds to minutes." },
  { term: "Slippage", definition: "The difference between the expected price of a trade and the actual fill price, common during volatility or thin liquidity." },
  { term: "Spread", definition: "The difference between the bid and ask price - effectively the cost of opening a position." },
  { term: "Stop Loss", definition: "A protective order that closes a losing trade at a predefined price to cap your downside." },
  { term: "Support", definition: "A price level where buying tends to overwhelm selling, often pausing or reversing a downtrend." },
  { term: "Swap", definition: "The interest paid or received for holding a position overnight. On swap-free (Islamic) accounts, this charge is waived." },
  { term: "Swap-Free Account", definition: "An account that doesn't apply overnight interest charges, designed to comply with Islamic finance principles." },

  // T
  { term: "Take Profit", definition: "An order that automatically closes a winning trade at a predefined target price." },
  { term: "Technical Analysis", definition: "Forecasting price by studying chart patterns, indicators, and historical price action." },
  { term: "Trailing Stop", definition: "A stop loss that automatically moves in the direction of profit, locking in gains while limiting downside." },
  { term: "Trend", definition: "The general direction of price - uptrend (higher highs/lows), downtrend (lower highs/lows), or sideways." },

  // U
  { term: "Underlying Asset", definition: "The real-world instrument a derivative is based on - the EUR/USD currency pair, gold spot price, or a stock, for example." },

  // V
  { term: "Volatility", definition: "How much an asset's price moves over a period. High volatility = larger swings = more risk and opportunity." },
  { term: "Volume", definition: "The number of units traded over a given period. Used to confirm price moves and gauge market participation." },

  // W
  { term: "Whipsaw", definition: "A sharp price move in one direction followed by an equally sharp reversal, often stopping out traders on both sides." },

  // Y
  { term: "Yield", definition: "The income return on an investment, typically expressed as an annual percentage of the price paid." },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossarySection() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TERMS;
    return TERMS.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q),
    );
  }, [query]);

  // Group filtered terms by first letter (A, B, C, ...).
  const grouped = useMemo(() => {
    const map = new Map<string, Term[]>();
    for (const t of filtered) {
      const letter = t.term.charAt(0).toUpperCase();
      const arr = map.get(letter);
      if (arr) arr.push(t);
      else map.set(letter, [t]);
    }
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const availableLetters = useMemo(
    () => new Set(grouped.map(([letter]) => letter)),
    [grouped],
  );

  function jumpTo(letter: string) {
    if (typeof window === "undefined") return;
    const el = document.getElementById(`glossary-${letter}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      className="page-section"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        paddingBottom: "120px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* Search bar */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "640px",
            margin: "0 auto",
            padding: "1px",
            borderRadius: "14px",
            background:
              "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "13px",
              background: "#0B0F1A",
              padding: "14px 18px 14px 48px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                position: "absolute",
                top: "50%",
                left: "16px",
                transform: "translateY(-50%)",
              }}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="search"
              placeholder="Search any term, e.g. leverage, pip, ECN..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#FFFFFF",
                fontFamily: "var(--font-inter, Inter)",
                fontSize: "15px",
                lineHeight: "22px",
              }}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "rgba(255,255,255,0.55)",
                  cursor: "pointer",
                  fontSize: "18px",
                  lineHeight: 1,
                  padding: "0 4px",
                }}
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* A-Z nav */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {ALPHABET.map((letter) => {
            const enabled = availableLetters.has(letter);
            return (
              <button
                key={letter}
                type="button"
                onClick={() => enabled && jumpTo(letter)}
                disabled={!enabled}
                aria-label={`Jump to ${letter}`}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: enabled ? "#FFFFFF" : "rgba(255,255,255,0.25)",
                  background: enabled
                    ? "linear-gradient(159.73deg, #050208 63.16%, #056FB4 447.31%)"
                    : "rgba(255,255,255,0.03)",
                  border: enabled
                    ? "1px solid rgba(125,185,214,0.35)"
                    : "1px solid rgba(255,255,255,0.06)",
                  cursor: enabled ? "pointer" : "not-allowed",
                  transition: "transform 0.15s ease, border-color 0.15s ease",
                }}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Result count / empty state */}
        {query && (
          <p
            style={{
              textAlign: "center",
              margin: 0,
              fontFamily: "var(--font-inter, Inter)",
              fontSize: "14px",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            {filtered.length === 0
              ? `No results for "${query}"`
              : `${filtered.length} result${filtered.length === 1 ? "" : "s"} for "${query}"`}
          </p>
        )}

        {/* Glossary groups */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "56px",
            marginTop: "8px",
          }}
        >
          {grouped.map(([letter, items]) => (
            <div
              key={letter}
              id={`glossary-${letter}`}
              style={{
                scrollMarginTop: "120px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 700,
                    fontSize: "44px",
                    lineHeight: "1",
                    margin: 0,
                    background:
                      "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {letter}
                </h2>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background:
                      "linear-gradient(90deg, rgba(125,185,214,0.4) 0%, rgba(125,185,214,0) 100%)",
                  }}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(360px, 1fr))",
                  gap: "16px",
                }}
              >
                {items.map((t) => (
                  <article
                    key={t.term}
                    style={{
                      padding: "1px",
                      borderRadius: "16px",
                      background:
                        "linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%)",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "15px",
                        background:
                          "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%)",
                        padding: "20px 22px",
                        height: "100%",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          fontFamily: "var(--font-sora, Sora)",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          color: "#FFFFFF",
                        }}
                      >
                        {t.term}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "var(--font-inter, Inter)",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "22px",
                          color: "rgba(255,255,255,0.72)",
                        }}
                      >
                        {t.definition}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
