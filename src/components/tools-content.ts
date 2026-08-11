export const TOOLS_CALCULATORS = [
  { title: "Position Size Calculator", description: "Calculate the ideal position size based on your risk and stop-loss.", icon: "/tools/icons/position-size-calculator.svg" },
  { title: "Lot Size Calculator", description: "Convert risk settings into the exact lot size for every trade.", icon: "/tools/icons/lot-size-calculator.svg" },
  { title: "Margin Calculator", description: "Estimate required margin before opening leveraged positions across any market.", icon: "/tools/icons/margin-calculator.svg" },
  { title: "Risk Management Calculator", description: "Evaluate risk-to-reward ratios before entering any trade with confidence.", icon: "/tools/icons/risk-management-calculator.svg" },
  { title: "Profit Target Calculator", description: "Set precise take-profit levels aligned with your trading goals.", icon: "/tools/icons/profit-target-calculator.svg" },
  { title: "Pip Value Calculator", description: "Calculate pip values instantly across forex pairs and trading instruments.", icon: "/tools/icons/pip-value-calculator.svg" },
];

export const TOOLS_INSIGHTS = [
  { no: "01", title: "Real-Time Market News", description: "Stay ahead with live global market news. Filter by asset class for relevant insights and sentiment tailored to your portfolio.", image: "/tools/panel-market-news.png" },
  { no: "02", title: "Interactive Economic Calendar", description: "Track key economic events, live countdowns, and expected vs. actual data to plan smarter trades.", image: "/tools/panel-economic-calendar.png" },
  { no: "03", title: "Volatility Index (VIX) Tracker", description: "Monitor market sentiment in real time to manage risk, adjust leverage, and spot trading opportunities.", image: "/tools/panel-vix-tracker.png" },
];

/** manage-risk-smarter.svg ships with its own 64px ring; the rest are bare glyphs. */
export const TOOLS_WORKFLOW = [
  {
    step: "01",
    title: "Find Better Trade Setups",
    description:
      "Scan live market news and the economic calendar to see which sessions and instruments are worth your attention today.",
    icon: "/tools/icons/find-better-trade-setups.svg",
    ring: true,
  },
  {
    step: "02",
    title: "Size Positions Instantly",
    description:
      "Work out lot size, margin and pip value before you commit, so every position matches the risk you actually planned for.",
    icon: "/tools/icons/size-positions-instantly.svg",
    ring: true,
  },
  {
    step: "03",
    title: "Time Market Entries",
    description:
      "Line entries up against scheduled high-impact releases instead of reacting once the move has already happened.",
    icon: "/tools/icons/time-market-entries.svg",
    ring: true,
  },
  {
    step: "04",
    title: "Execute with Precision",
    description:
      "Place the order on MetaTrader 5 with raw spreads and low-latency routing to keep slippage off your entry price.",
    icon: "/tools/icons/execute-with-precision.svg",
    ring: true,
  },
  {
    step: "05",
    title: "Manage Risk Smarter",
    description:
      "Set stop-loss levels, profit targets and exposure limits up front, then track them as the position runs.",
    icon: "/tools/icons/manage-risk-smarter.svg",
    ring: false,
  },
];

export const TOOLS_INSTRUMENTS = [
  { slug: "forex", label: "Forex", description: "Trade major, minor, and exotic currency pairs with institutional spreads.", art: "/markets/shared/instruments/forex.png" },
  { slug: "metals", label: "Metals", description: "Hedge against inflation with Gold, Silver, and Platinum CFDs.", art: "/markets/shared/instruments/metals.png" },
  { slug: "energies", label: "Energies", description: "Trade Brent Crude, WTI, and Natural Gas CFDs.", art: "/markets/shared/instruments/energies.png" },
  { slug: "indices", label: "Indices", description: "Capture global market moves with the S&P 500, NASDAQ, DAX, and FTSE.", art: "/markets/shared/instruments/indices.png" },
  { slug: "stocks", label: "Stocks", description: "Trade CFDs on leading companies like Apple, Tesla, and Nvidia.", art: "/markets/shared/instruments/stocks.png" },
  { slug: "crypto", label: "Cryptocurrencies", description: "Access 24/7 crypto markets with Bitcoin, Ethereum, and top altcoins.", art: "/markets/shared/instruments/crypto.png" },
  { slug: "commodities", label: "Commodities", description: "Trade agricultural commodities to diversify beyond metals and energy.", art: "/markets/shared/instruments/commodities.png" },
];
