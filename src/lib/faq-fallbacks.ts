export type FaqSection =
  | "homepage"
  | "accounts"
  | "platform"
  | "payments"
  | "partnerships"
  | "social-trading";

export const FAQ_SECTIONS: FaqSection[] = [
  "homepage",
  "accounts",
  "platform",
  "payments",
  "partnerships",
  "social-trading",
];

export type FaqItem = { question: string; answer: string };

export const FAQ_FALLBACKS: Record<FaqSection, FaqItem[]> = {
  homepage: [
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
  ],
  accounts: [
    {
      question: "Can I upgrade or switch my account type later?",
      answer:
        "Yes. You can upgrade or switch your account type anytime as your trading needs evolve.",
    },
    {
      question: "Are there any deposit or withdrawal fees?",
      answer:
        "Finsai Trade does not charge internal deposit or withdrawal fees. Third-party payment providers may apply transaction charges.",
    },
    {
      question: "What documents are required for account verification?",
      answer:
        "You'll need a valid government-issued ID and proof of address, such as a utility bill or bank statement.",
    },
    {
      question: "What's the difference between Smart Pro and Smart ECN?",
      answer:
        "Smart ECN is designed for advanced traders, offering Raw spreads, enhanced execution conditions, VPS access, and support for advanced trading tools.",
    },
  ],
  platform: [
    {
      question: "Which trading platform is best for beginners?",
      answer:
        "If you're new to trading, the Finsai Trade App and Social Trading platform are great starting points. You can practice with demo accounts, copy experienced traders, and access user-friendly tools designed for beginners.",
    },
    {
      question: "What makes MetaTrader 5 (MT5) different from other platforms?",
      answer:
        "MT5 is one of the world's most advanced trading platforms, offering professional-grade charting, automated trading through Expert Advisors (EAs), multi-timeframe analysis, and advanced strategy testing tools.",
    },
    {
      question: "How does Social Trading work?",
      answer:
        "Social Trading allows you to automatically copy trades from experienced traders in real time. You can review performance metrics, manage risk settings, and follow strategies that match your trading goals.",
    },
    {
      question: "Can experienced traders earn through the platform?",
      answer:
        "Absolutely. With Social Trading, experienced traders can become strategy providers, build followers, and earn rewards based on their trading performance and community growth.",
    },
  ],
  payments: [
    {
      question: "What is the minimum deposit amount?",
      answer:
        "The minimum deposit amount may vary depending on your account type and selected payment method. You can review the exact requirements before completing your deposit.",
    },
    {
      question: "Are there any deposit or withdrawal fees?",
      answer:
        "No. Finsai Trade charges no fees and only provides transparent funding.",
    },
    {
      question: "How long do deposits take to process?",
      answer:
        "Most deposits are processed quickly, with some payment methods offering near-instant funding. Processing times may vary depending on the selected provider and verification requirements.",
    },
    {
      question: "Can I fund my account using crypto?",
      answer:
        "Yes, Finsai Trade supports crypto payments, allowing traders to fund their accounts through supported digital assets in a secure and flexible way.",
    },
    {
      question: "How do I withdraw my funds?",
      answer:
        "You can request a withdrawal directly from your trading account dashboard. Simply choose your preferred withdrawal method, enter the amount, and follow the required verification steps.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes. Finsai Trade uses secure payment infrastructure and advanced protection measures to help safeguard deposits, withdrawals, and sensitive payment details.",
    },
  ],
  partnerships: [
    {
      question: "What is the Finsai Trade Introducing Broker (IB) Program?",
      answer:
        "The Finsai Trade IB Program allows partners to earn commissions by referring traders to the platform. Whether you're an influencer, educator, affiliate, or trading community owner, you can build a recurring revenue stream by growing your client network with Finsai Trade.",
    },
    {
      question: "How do I earn commissions with Finsai Trade?",
      answer:
        "As an IB partner, you earn commissions based on the trading activity of the clients you refer. Finsai Trade offers transparent tracking, competitive payouts, and performance-based rewards to help maximize your earning potential.",
    },
    {
      question:
        "Do I need trading experience to join the Finsai Trade IB Program?",
      answer:
        "No. You don't need to be an experienced trader to become an IB partner. If you have an audience, network, or community interested in trading, you can start referring clients and earning commissions with Finsai Trade.",
    },
    {
      question: "What tools and support does Finsai Trade provide for IB partners?",
      answer:
        "Finsai Trade provides IB partners with dedicated support, marketing materials, referral tracking tools, analytics dashboards, and prompt assistance to help you onboard clients and grow your business efficiently.",
    },
  ],
  "social-trading": [
    {
      question:
        "What is Social Trading and how is it different from a managed account?",
      answer:
        "Social Trading lets you copy the trades of a strategy provider in real time through your own MT5 account — you retain full ownership and control. Unlike a managed account, no one has direct access to your funds. You can stop copying at any time, no notice required.",
    },
    {
      question: "Is my capital at risk?",
      answer:
        "Yes. Trading financial instruments involves significant risk and is not suitable for all investors. You can lose some or all of your invested capital. Social Trading does not eliminate market risk. Please read our full risk disclosure before proceeding.",
    },
    {
      question: "What is the minimum amount to start copying?",
      answer:
        "The minimum allocation per copy relationship is $200. Each copied trade must be above the minimum lot size supported by your account type. Positions below this threshold will not be opened in your account.",
    },
    {
      question: "How is the provider's commission calculated?",
      answer:
        "Providers earn a monthly performance-based commission set within a regulated range. The exact rate is disclosed on each provider's profile before you copy them. Commission is deducted from investor profits at the end of each billing cycle — providers only earn when you do.",
    },
    {
      question: "Can I copy multiple providers at the same time?",
      answer:
        "Yes. You can copy up to 10 strategy providers simultaneously from a single account, each with its own allocation and stop-loss configuration. This allows you to diversify across multiple strategies, instruments, and risk profiles.",
    },
    {
      question: "How do I qualify to become a strategy provider?",
      answer:
        "You need a live Finsai Trade MT5 account with at least 90 days of verified trading history, a minimum of 50 closed trades, and a risk score within our approved parameters. Apply through your client portal and our team will review your account within 5 business days.",
    },
    {
      question: "How quickly are trades copied to my account?",
      answer:
        "Trades are typically executed in your account within milliseconds of the provider's original order. Execution speed depends on server latency and market conditions, but the system is built for near-instantaneous replication.",
    },
  ],
};
