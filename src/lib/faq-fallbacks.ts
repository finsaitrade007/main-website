export type FaqSection =
  | "homepage"
  | "about"
  | "accounts"
  | "platform"
  | "payments"
  | "partnerships"
  | "social-trading"
  | "mt5"
  | "stocks"
  | "tools"
  | "metals"
  | "commodities"
  | "energies"
  | "forex"
  | "indices"
  | "crypto";

export const FAQ_SECTIONS: FaqSection[] = [
  "homepage",
  "about",
  "accounts",
  "platform",
  "payments",
  "partnerships",
  "social-trading",
  "mt5",
  "stocks",
  "tools",
  "metals",
  "commodities",
  "energies",
  "forex",
  "indices",
  "crypto",
];

export type FaqItem = { question: string; answer: string };

export const FAQ_FALLBACKS: Partial<Record<FaqSection, FaqItem[]>> = {
  about: [
    {
      question: "Who is the most trusted forex broker for multi-asset trading?",
      answer:
        "Finsai Trade is widely recognized as a trusted multi-asset broker, offering institutional liquidity, ultra-fast execution, and access to over 10,000 instruments (Forex, Crypto, Indices, Stocks, Commodities) backed by strict regulatory oversight.",
    },
    {
      question: "Is Finsai Trade a regulated international forex broker?",
      answer:
        "Yes. Finsai Trade operates among top regulated trading platforms and financial brokerages. Finsai Trade (Mauritius) Ltd is fully licensed and regulated by the Financial Services Commission (FSC) Mauritius under license number GB25204899. This regulatory framework guarantees strict compliance, client fund segregation, and transparent pricing execution standards.",
    },
    {
      question: "Does Finsai Trade support trading as a MetaTrader 5 broker?",
      answer:
        "Yes. As a dedicated MetaTrader 5 broker, Finsai Trade integrates MT5's advanced charting tools, real-time depth of market (DOM), custom technical indicators, and automated algorithmic trading (EAs) with institutional execution speeds.",
    },
    {
      question: "What asset classes can I trade with this multi asset broker?",
      answer:
        "As a full-service multi asset broker and forex and CFD broker, Finsai Trade allows you to trade Forex currency pairs, Crypto CFDs, major global indices, individual stocks, spot metals, and energies under one integrated trading ecosystem.",
    },
    {
      question: "Why is Finsai Trade considered a most trusted forex broker 2026?",
      answer:
        "Recognized as a trusted multi-asset broker 2026, Finsai Trade combines regulatory protection, tier-1 institutional liquidity, and comprehensive 24/7 client support. Whether you need a trader-centric brokerage firm or an online multi asset broker, Finsai Trade prioritizes low latency, price integrity, and trader security.",
    },
    {
      question: "Does Finsai Trade offer trader education and learning resources?",
      answer:
        "Yes. Finsai Trade provides comprehensive trader education through the Finsai Academy. Traders gain access to real-time market analysis, step-by-step trading guides, webinars, and risk management strategies to foster continuous skill development in any market condition.",
    },
  ],
  tools: [
    {
      question: "What is Finsai Trade?",
      answer:
        "Finsai Trade is an MT5 multi asset trading platform that gives traders access to global financial markets through a single account. Trade forex, stocks, cryptocurrencies, commodities, indices, and CFDs using MetaTrader 5, advanced trading tools, and fast order execution.",
    },
    {
      question: "What markets can I trade on Finsai Trade?",
      answer:
        "You can trade forex, metals, energies, indices, stocks, cryptocurrencies and commodities \u2014 major, minor and exotic currency pairs; Gold, Silver and Platinum CFDs; Brent Crude, WTI and Natural Gas; the S&P 500, NASDAQ, DAX and FTSE; leading company CFDs; Bitcoin, Ethereum and top altcoins; and agricultural commodities.",
    },
    {
      question: "Is Finsai Trade a regulated trading platform?",
      answer:
        "Finsai Trade currently operates in Mauritius, under the regulatory framework established by the Financial Services Commission (FSC).",
    },
    {
      question: "Does Finsai Trade support MetaTrader 5 (MT5)?",
      answer:
        "Yes. Finsai Trade is powered by MetaTrader 5 (MT5), one of the world's leading trading platforms. MT5 provides advanced charting, technical indicators, algorithmic trading, Expert Advisors (EAs), real-time market data, and multi-asset access from a single account.",
    },
  ],
  homepage: [
    {
      question: "What is Finsai Trade?",
      answer:
        "Finsai Trade is an MT5 multi asset trading platform that gives traders access to global financial markets through a single account. Trade forex, stocks, cryptocurrencies, commodities, indices, and CFDs using MetaTrader 5, advanced trading tools, and fast order execution.",
    },
    {
      question: "Why choose Finsai Trade as an FSC regulated forex broker?",
      answer:
        "Finsai Trade operates as a licensed FSC regulated forex broker, offering segregated client funds, transparent pricing, and access to raw ECN brokers low spread environments with up to 500x leverage.",
    },
    {
      question: "Does Finsai Trade use MetaTrader 5 (MT5)?",
      answer:
        "Yes. Finsai Trade operates as an MT5 multi asset trading platform, giving traders direct access to forex, crypto, stocks, indices, and commodities. Powered by MetaTrader 5, Finsai Trade supports up to 500x leverage, 44+ analytical charting tools, automated trading via MQL5 Expert Advisors (EAs), and seamless execution across desktop, web, and mobile devices.",
    },
    {
      question: "What are the benefits of a multi-asset trading platform?",
      answer:
        "A multi asset trading platform allows investors to manage, diversify, and trade across 5,000+ global financial markets including forex currency pairs, stock indices, precious metals, and crypto CFDs from a single Finsai Trade account. This eliminates the friction of managing multiple brokers, unifies portfolio margin controls, and lowers transaction costs through competitive spreads.",
    },
    {
      question: "How do I open a trading account with Finsai Trade?",
      answer:
        "Opening an account with Finsai Trade takes 3 simple steps. Register: create your profile online and select your account tier (Smart Choice, Smart Pro, or Raw ECN CFD Trading Platform). Verify: submit your KYC documents to activate institutional-grade security and segregated fund protection. Fund & Trade: deposit via secure payment channels, connect to MetaTrader 5 (MT5) or our crypto and forex copy trading platform, and start trading live or on a demo account.",
    },
    {
      question: "Does Finsai Trade offer a raw ECN CFD trading platform?",
      answer:
        "Yes. The SMART ECN account is engineered specifically for active traders, operating as a raw ECN CFD trading platform with institutional-grade execution speeds and ultra-low spreads directly from liquidity providers.",
    },
  ],
  accounts: [
    {
      question: "Can I upgrade or switch my forex trading account types later?",
      answer:
        "Yes. You can switch or upgrade your forex broker account at any time through your client portal as your trading capital and experience evolve. Traders often start with a low minimum deposit forex account (Smart Choice) and progress to a professional trading account (Smart ECN) for tighter spreads.",
    },
    {
      question: "Are there any deposit or withdrawal fees for an online trading account?",
      answer:
        "Finsai Trade charges zero internal fees to deposit or withdraw funds from your online investment account. While Finsai Trade provides fee-free transactions, third-party payment gateways, intermediary banks, or card issuers may impose independent processing fees.",
    },
    {
      question: "What documents are required for online investment account verification?",
      answer:
        "To complete KYC identity verification for a live forex trading account, you must upload: Proof of Identity — a valid, government-issued photo ID (passport, national ID, or driver's license). Proof of Address — a document issued within the last 3 months displaying your full legal name and address (utility bill, bank statement, or tax document).",
    },
    {
      question: "What is the difference between Smart Pro and the Smart ECN professional trading account?",
      answer:
        "The primary difference lies in the execution model and fee structure. Smart Pro is a commission-free account offering floating spreads from 0.6 pips, ideal for active day traders wanting high leverage without per-trade commissions. Smart ECN is a raw spread ECN trading account designed for institutional and high-volume traders, offering raw spreads starting from 0.0 pips, a low $0.03 commission, enhanced liquidity execution, complementary forex account VPS access, and optimized infrastructure for bot trading MT5 forex accounts.",
    },
    {
      question:
        "Does Finsai Trade offer a swap free forex trading account option?",
      answer:
        "Yes. Finsai Trade provides a swap free forex account option across all major forex account types (Smart Choice, Smart Pro, and Smart ECN). These accounts carry zero overnight interest charges, making them ideal for long-term position traders and investors requiring Islamic Sharia-compliant trading conditions.",
    },
  ],
  platform: [
    {
      question: "What is MetaTrader 5 (MT5)?",
      answer:
        "MetaTrader 5 (MT5) is a powerful multi-asset trading platform that enables traders to analyze markets, execute trades, and automate strategies. It offers advanced charting, technical indicators, Expert Advisors (EAs) for automated trading, and strategy back-testing, making it suitable for both beginner and professional traders.",
    },
    {
      question: "What makes MetaTrader 5 (MT5) different from other platforms?",
      answer:
        "MetaTrader 5 (MT5) is one of the world's most advanced trading platforms, offering professional-grade charting, powerful market analysis, automated trading through Expert Advisors (EAs), multi-timeframe analysis, and advanced strategy back-testing capabilities for traders of all experience levels.",
    },
    {
      question: "What is Copy Trading?",
      answer:
        "Copy trading is a feature of social trading that automatically replicates the trades of experienced traders in your account. Instead of placing trades manually, you follow a strategy provider, allowing you to participate in the markets while benefiting from their trading expertise.",
    },
    {
      question: "Can I earn from Copy Trading?",
      answer:
        "Yes. With Social Trading, you can earn in two ways: by using copy trading to follow successful strategy providers or by becoming a strategy provider yourself. Experienced traders can build a following, share their strategies, and earn rewards based on their verified trading performance.",
    },
    {
      question: "How does Social Trading work?",
      answer:
        "Social Trading enables you to automatically copy trades from experienced traders in real time. Review verified performance metrics, customize your risk management settings, and choose strategies that align with your financial goals using a trusted copy trading platform.",
    },
    {
      question: "Can experienced traders earn through the platform?",
      answer:
        "Absolutely. With Social Trading, experienced traders can become strategy providers, grow their community of followers, monetize their trading expertise, and earn rewards based on verified trading performance and long-term consistency.",
    },
    {
      question: "Can you use multiple trading platforms on Finsai Trade?",
      answer:
        "Yes. With a single Finsai Trade account, you can analyze and execute automated strategies on MetaTrader 5 (MT5), participate in real-time Copy Trading, and monitor positions on the mobile app simultaneously.",
    },
  ],
  payments: [
    {
      question: "What is the minimum deposit amount?",
      answer:
        "The minimum deposit amount may vary depending on your account type and selected payment method. You can review the exact requirements before completing your deposit.",
    },
    {
      question: "Are there any deposit or withdrawal fees for an online trading account?",
      answer:
        "Finsai Trade charges zero internal fees to deposit or withdraw funds from your online investment account. While Finsai Trade provides fee-free transactions, third-party payment gateways, intermediary banks, or card issuers may impose independent processing fees.",
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
  mt5: [
    {
      question: "What is MetaTrader 5 (MT5)?",
      answer:
        "MetaTrader 5 is an advanced online trading platform that allows traders to access Forex, CFDs, Stocks, Commodities, Indices, and other financial markets from a single platform.",
    },
    {
      question: "What's the difference between MT4 and MT5?",
      answer:
        "MT5 offers faster 64-bit processing, more technical indicators, additional timeframes, more order types, an integrated economic calendar, and support for multiple asset classes.",
    },
    {
      question: "Can I use Expert Advisors (EAs) on MT5?",
      answer:
        "Yes. MT5 supports Expert Advisors, algorithmic trading, custom indicators, and automated trading strategies through MQL5.",
    },
    {
      question: "Which markets can I trade on MT5?",
      answer:
        "You can trade Forex, CFDs, Stocks, Indices, Commodities, and Precious Metals from a single MT5 trading account.",
    },
  ],
  stocks: [
    {
      question: "What is stock CFD trading?",
      answer:
        "Stock CFD trading lets you speculate on the price movements of company shares without owning the underlying stock. You can profit from rising or falling prices by going long or short on Contracts for Difference.",
    },
    {
      question: "What stocks can I trade with Finsai Trade?",
      answer:
        "Finsai Trade offers CFDs on a wide range of global blue-chip stocks and major listed companies, giving you access to leading firms across international markets from a single trading account.",
    },
    {
      question: "Can I trade stock CFDs with a demo account?",
      answer:
        "Yes. You can practice stock CFD trading with a free demo account before switching to a live account, so you can explore markets and strategies risk-free.",
    },
    {
      question: "Do I own the shares when I trade stock CFDs?",
      answer:
        "No. When you trade stock CFDs you do not own the underlying shares. You are trading the price difference of the stock, which means you can take long or short positions without share ownership.",
    },
  ],
  metals: [
    {
      question: "What are spot metals and energies?",
      answer:
        "These are commodities like gold, silver, crude oil, and natural gas that can be traded at current market prices.",
    },
    {
      question: "Why trade metals and energies?",
      answer:
        "They act as hedges against inflation and provide diversification. Finsai Trade gives easy access to these assets.",
    },
    {
      question: "When can I trade commodities?",
      answer:
        "Most metals and energy markets are open almost 24 hours on trading days. Finsai Trade provides real-time access.",
    },
    {
      question: "Are commodities volatile?",
      answer:
        "Yes, prices can shift quickly based on supply and demand. Finsai Trade's tools help you manage this volatility.",
    },
    {
      question: "Can I trade with leverage?",
      answer:
        "Yes, Finsai Trade offers leverage on commodities with built-in risk management to support traders responsibly.",
    },
  ],
  commodities: [
    {
      question: "What is commodities trading?",
      answer:
        "Commodities trading lets you trade the price movements of products like gold, oil, natural gas, coffee, and sugar without owning the physical assets.",
    },
    {
      question: "Which commodities can I trade with Finsai Trade?",
      answer:
        "You can trade Gold, Silver, Crude Oil, Natural Gas, Coffee, Sugar, Cotton, and other commodity CFDs.",
    },
    {
      question: "Can I trade both rising and falling commodity prices?",
      answer:
        "Yes. Commodity CFDs let you take buy (long) or sell (short) positions based on market conditions.",
    },
    {
      question: "Do I own the commodity when I trade CFDs?",
      answer:
        "No. With commodity CFDs, you trade the price movement of the commodity without owning the underlying asset.",
    },
    {
      question: "Why do traders invest in commodities?",
      answer:
        "Many traders use commodities to diversify their portfolios and take advantage of price movements in global markets.",
    },
  ],
  energies: [
    {
      question: "What is energy trading and how does it work?",
      answer:
        "Energy trading lets you speculate on the price movements of energy assets such as Brent oil, WTI, and natural gas through CFDs, without owning the underlying commodity. You can go long or short based on your market view.",
    },
    {
      question: "Is energy trading suitable for beginners?",
      answer:
        "Energy markets can be volatile and are influenced by global events, so beginners should start carefully. A demo account, education resources, and risk-management tools on Finsai Trade can help you learn before trading live.",
    },
    {
      question: "How do I know if the trend is being reversed?",
      answer:
        "Traders often watch price action, volume, and technical indicators for signs of a reversal. No signal is certain, so combining analysis with stop-loss and position sizing is important when trading energy markets.",
    },
    {
      question: "How much do I need to start trading energy?",
      answer:
        "The amount you need depends on your account type, leverage, and trade size. You can start with a smaller deposit and scale up, or practice risk-free with a free demo account on Finsai Trade.",
    },
  ],
  forex: [
    {
      question: "What is forex trading and how does it work?",
      answer:
        "Forex (foreign exchange) trading is the exchange of one currency for another at an agreed price. It's the most liquid and active financial market in the world.",
    },
    {
      question: "Is forex trading suitable for beginners?",
      answer:
        "Forex can suit beginners who start carefully with education and risk management. A free demo account on Finsai Trade lets you practice trading major, minor, and exotic pairs before going live.",
    },
    {
      question: "How do I choose the best currency pairs to trade?",
      answer:
        "Many traders begin with major pairs like EUR/USD for high liquidity and tighter spreads. Your choice should also reflect market hours, volatility, and how familiar you are with the related economies.",
    },
    {
      question: "How much do I need to start trading forex?",
      answer:
        "The amount depends on your account type, leverage, and position size. You can start with a smaller deposit and scale up, or practice risk-free with a free demo account on Finsai Trade.",
    },
  ],
  indices: [
    {
      question: "What is index trading?",
      answer:
        "Index trading lets you speculate on the performance of a group of stocks that represent a market or sector — such as the S&P 500 or NASDAQ — through CFDs, without buying every individual share.",
    },
    {
      question: "Which indices can I trade with Finsai Trade?",
      answer:
        "You can trade major global indices including the S&P 500, NASDAQ, AUS 200, DAX, and more, depending on instrument availability on your account.",
    },
    {
      question: "Can I trade both rising and falling index markets?",
      answer:
        "Yes. Index CFDs let you take long (buy) or short (sell) positions so you can trade whether markets are rising or falling.",
    },
    {
      question: "How much leverage is available on indices?",
      answer:
        "Finsai Trade offers CFD indices leverage of up to 1:20, subject to your account type and applicable regulations. Always use risk management when trading with leverage.",
    },
  ],
  crypto: [
    {
      question: "Do I need a large capital to start trading cryptos at Finsai Trade?",
      answer:
        "No. You can start trading with a smaller deposit and choose trade sizes that fit your strategy. A free demo account is also available if you want to practice first.",
    },
    {
      question: "What are the benefits of crypto trading?",
      answer:
        "Crypto markets trade around the clock and offer opportunities to go long or short on major digital assets. Finsai Trade provides fast execution, transparent pricing, and access to 100+ crypto markets.",
    },
    {
      question: "Are there any hidden commissions on crypto trades?",
      answer:
        "No. Pricing is transparent, with clear spreads shown on the platform so you know the cost of each trade before you enter.",
    },
    {
      question: "Can I use Finsai Trade on mobile for crypto?",
      answer:
        "Yes. You can trade cryptocurrencies through Finsai Trade on supported web and mobile access points, including MetaTrader 5 where available for your account.",
    },
  ],
  "social-trading": [
    {
      question:
        "What is a social trading platform and how is it different from a managed account?",
      answer:
        "A social trading platform lets you copy the trades of an expert strategy provider in real time through your own trading account while retaining 100% ownership and control of your funds. Unlike traditional managed accounts (PAMM), no third party has direct withdrawal access to your capital, and you can stop copying or adjust your allocation at any time with no notice required.",
    },
    {
      question: "Is my capital at risk when copy trading?",
      answer:
        "Yes. All trading in financial markets involves risk. While choosing a verified copy trader allows you to mirror market pros, volatility remains a factor. This is why our social trading platform offers built-in risk management tools, allowing you to set custom drawdown limits and balance protection stop-losses.",
    },
    {
      question: "What is the minimum amount to start copying?",
      answer:
        "The minimum deposit varies depending on the specific investment strategies deployed by your chosen provider. You can view each provider's required minimum copy amount directly on our Live Leaderboard (starting as low as $150 to ensure proportional margin management).",
    },
    {
      question: "How is the strategy provider's commission calculated?",
      answer:
        "Strategy providers set a percentage-based performance commission on the net profits generated from the trades you copy. If a strategy does not perform well during a trading cycle, no performance fee is charged.",
    },
    {
      question: "Can I copy multiple strategy providers at the same time?",
      answer:
        "Yes! To achieve optimal portfolio diversification, you can allocate your capital across multiple experienced traders specializing in different asset classes, such as forex social trading, crypto copy trading, or commodities.",
    },
    {
      question: "How do I qualify to become a strategy provider on the platform?",
      answer:
        "If you have a solid track record in trading financial markets, you can apply by connecting your account. Once your historical trading statistics and drawdown metrics are verified, your profile will be listed on our global leaderboard for followers to discover.",
    },
    {
      question: "How quickly are trades copied to my account?",
      answer:
        "Our ultra-fast execution engine mirrors trade signals instantly via cloud-based technology, minimizing slippage so your entry prices align seamlessly with the professional investors you follow.",
    },
  ],
};
