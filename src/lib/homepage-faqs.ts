export type HomepageFaq = {
  question: string;
  answer: string;
};

/** Visible homepage FAQs — must match FAQPage JSON-LD on the homepage. */
export const HOMEPAGE_FAQS: HomepageFaq[] = [
  {
    question: "What is Finsai Trade?",
    answer:
      "Finsai Trade is a multi-asset trading platform that gives traders access to global financial markets through a single account. Trade forex, stocks, cryptocurrencies, commodities, indices, and CFDs using the powerful MetaTrader 5 (MT5) platform, advanced trading tools, and fast order execution.",
  },
  {
    question: "Why choose Finsai Trade for online trading?",
    answer:
      "Finsai Trade combines a professional online trading platform with access to multiple asset classes, competitive trading conditions, fast execution, advanced charting tools, copy trading, and secure trading infrastructure. Whether you're a beginner or an experienced trader, you can access global markets through one integrated platform.",
  },
  {
    question: "Does Finsai Trade use MetaTrader 5 (MT5)?",
    answer:
      "Yes. Finsai Trade is powered by MetaTrader 5 (MT5), one of the world's leading trading platforms. MT5 provides advanced charting, technical indicators, algorithmic trading, Expert Advisors (EAs), real-time market data, and multi-asset trading capabilities from a single platform.",
  },
  {
    question: "What are the benefits of a multi-asset trading platform?",
    answer:
      "A multi-asset trading platform lets you trade multiple financial markets from a single account. This simplifies portfolio management, improves diversification, and allows you to capitalize on opportunities across forex, stocks, commodities, cryptocurrencies, indices, and CFDs without switching between platforms.",
  },
  {
    question: "How do I open a trading account with Finsai Trade?",
    answer:
      "Opening a trading account with Finsai Trade is simple. Register online, complete identity verification, fund your account, and start trading global markets using MetaTrader 5 (MT5). If you're new to trading, you can begin with a demo trading account before transitioning to live trading.",
  },
];
