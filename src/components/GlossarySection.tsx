"use client";

import { useMemo, useState } from "react";

type Term = { term: string; definition: string };

const TERMS: Term[] = [
  // A
  { term: "Account Statement", definition: "A periodic summary of account activity, including transactions, fees, charges, and balance." },
  { term: "Altcoin", definition: "Any cryptocurrency other than Bitcoin." },
  { term: "Annual Return", definition: "The yearly percentage return on an investment, including capital gains and income." },
  { term: "Appreciation", definition: "An increase in the value of an asset over time." },
  { term: "Arbitrage", definition: "Buying and selling the same asset across different markets to profit from price differences." },
  { term: "Ask Price", definition: "The lowest price a seller is willing to accept for an instrument; the price at which you buy." },
  { term: "Asset Allocation", definition: "How an investor distributes capital across asset classes such as stocks, bonds, and cash." },
  { term: "AUM (Assets Under Management)", definition: "The total market value of investments managed on behalf of clients." },
  { term: "Automated Trading", definition: "Executing trades through pre-programmed rules without manual intervention." },
  { term: "Averaging Down", definition: "Buying more of a declining asset to lower the average cost per unit." },

  // B
  { term: "Balance Sheet", definition: "A financial statement that lists a company's assets, liabilities, and shareholder equity at a point in time." },
  { term: "Bear Market", definition: "A prolonged period of falling prices, typically 20% or more from recent highs." },
  { term: "Bid Price", definition: "The highest price a buyer is willing to pay for an instrument; the price at which you sell." },
  { term: "Bitcoin", definition: "The first and largest cryptocurrency by market capitalization, created in 2009." },
  { term: "Blockchain", definition: "A distributed digital ledger that records transactions across many computers in tamper-resistant blocks." },
  { term: "Blue Chip Stocks", definition: "Shares of large, established, financially-sound companies with a history of reliable performance." },
  { term: "Bonds", definition: "Debt securities issued by governments or companies that pay interest until maturity." },
  { term: "Breakout", definition: "A price move beyond a defined support or resistance level, often signaling a new trend." },
  { term: "Broker", definition: "A firm or individual that executes trades on behalf of clients in exchange for a commission or spread." },
  { term: "Bull Market", definition: "A sustained period of rising prices and strong investor confidence." },

  // C
  { term: "Candlestick Chart", definition: "A price chart where each bar shows the open, high, low, and close of a session." },
  { term: "Capital Gain", definition: "The profit made when an asset is sold for more than its purchase price." },
  { term: "Commodities", definition: "Raw materials and primary agricultural products such as gold, oil, and wheat that are traded on markets." },
  { term: "Contract for Difference (CFD)", definition: "A derivative that lets you trade the price movement of an asset without owning it." },
  { term: "Convertible Bond", definition: "A bond that can be exchanged for a predetermined number of the issuing company's shares." },
  { term: "Correlation", definition: "A statistical measure of how two assets move in relation to each other, from -1 to +1." },
  { term: "Cost of Capital", definition: "The required return necessary to make a capital budgeting project worthwhile." },
  { term: "Credit Risk", definition: "The risk that a borrower will fail to repay a debt and cause the lender a financial loss." },
  { term: "Crowdfunding", definition: "Raising small amounts of capital from many people, usually online, to fund a project or venture." },
  { term: "Cryptocurrency", definition: "A digital or virtual currency secured by cryptography and recorded on a blockchain." },

  // D
  { term: "Day Trading", definition: "Opening and closing positions within the same trading day to capture short-term moves." },
  { term: "Debt-to-Equity Ratio (D/E)", definition: "A leverage metric calculated by dividing a company's total liabilities by its shareholder equity." },
  { term: "Default", definition: "Failure to meet the legal obligations of a loan, such as missing interest or principal payments." },
  { term: "Depreciation", definition: "The reduction in value of an asset over time due to use, wear, or obsolescence." },
  { term: "Derivatives", definition: "Financial contracts whose value is derived from an underlying asset, index, or rate." },
  { term: "Digital Wallet", definition: "An application or device that stores payment information and cryptographic keys to manage digital assets." },
  { term: "Diversification", definition: "Spreading investments across different assets to reduce the impact of any single one on the overall portfolio." },
  { term: "Dividend", definition: "A distribution of a portion of a company's earnings paid to shareholders, usually in cash." },
  { term: "Dow Jones Industrial Average (DJIA)", definition: "A price-weighted index of 30 large publicly-traded U.S. companies." },
  { term: "Due Diligence", definition: "The investigation and analysis carried out before entering a transaction to confirm the facts." },

  // E
  { term: "Earnings Per Share (EPS)", definition: "A company's net profit divided by its outstanding shares, indicating per-share profitability." },
  { term: "Economic Indicator", definition: "A piece of data, often macroeconomic, used to assess the health and direction of the economy." },
  { term: "Entry Point", definition: "The price level at which a trader opens a position in a market." },
  { term: "Equity", definition: "Ownership interest in a company, or the residual value of assets after liabilities are subtracted." },
  { term: "Equity Market", definition: "The financial market where company shares are issued and traded; also called the stock market." },
  { term: "Ethereum", definition: "A decentralized blockchain platform that supports smart contracts and the cryptocurrency Ether (ETH)." },
  { term: "Exchange Rate", definition: "The value of one currency expressed in terms of another." },
  { term: "Exchange Traded Fund (ETF)", definition: "A pooled investment fund that trades on an exchange like a stock." },
  { term: "Ex-Dividend Date", definition: "The cutoff date after which a buyer of a stock is no longer entitled to the next dividend payment." },
  { term: "Expense Ratio", definition: "The annual fee charged by a fund, expressed as a percentage of assets under management." },

  // F
  { term: "Fiat Money", definition: "Government-issued currency that isn't backed by a physical commodity such as gold." },
  { term: "Financial Market", definition: "Any marketplace where instruments such as equities, bonds, currencies, and derivatives are traded." },
  { term: "Fintech", definition: "Technology used to improve, automate, or deliver financial services." },
  { term: "Fixed Income", definition: "Investments that pay a set return on a regular schedule, such as bonds and treasury bills." },
  { term: "FOMO (Fear of Missing Out)", definition: "The anxiety that drives traders to enter positions based on others' gains rather than analysis." },
  { term: "Forex (Foreign Exchange)", definition: "The global market in which national currencies are bought and sold." },
  { term: "Forward Contract", definition: "A customized agreement to buy or sell an asset at a specified price on a future date." },
  { term: "Fractional Ownership", definition: "Owning a share of an asset together with other investors rather than holding it outright." },
  { term: "Fundamental Analysis", definition: "Evaluating an asset's intrinsic value by studying related economic, financial, and qualitative factors." },
  { term: "Futures Contract", definition: "A standardized exchange-traded agreement to buy or sell an asset at a set price on a future date." },

  // G
  { term: "Gann Fans", definition: "A technical analysis tool that draws angled trendlines from a key high or low to project support and resistance." },
  { term: "Gap", definition: "A visible space on a chart where price opens away from the previous close, with no trades in between." },
  { term: "Gearing Ratio", definition: "A financial ratio that compares a company's debt to its equity to measure leverage." },
  { term: "Going Public", definition: "The process by which a private company offers shares to the public for the first time, via an IPO." },
  { term: "Good Til Cancelled (GTC)", definition: "An order instruction that keeps an order active until the trader cancels it or it fills." },
  { term: "Government Bond", definition: "A debt security issued by a national government to fund spending and obligations." },
  { term: "Greenback", definition: "A nickname for the U.S. dollar." },
  { term: "Gross Domestic Product (GDP)", definition: "The total monetary value of all goods and services produced within a country in a period." },
  { term: "Gross Margin", definition: "Revenue minus cost of goods sold, expressed as a percentage of revenue." },
  { term: "Growth Stocks", definition: "Shares of companies expected to grow earnings faster than the market average." },

  // H
  { term: "Hanging Man", definition: "A bearish candlestick pattern that appears after an uptrend, with a small body and a long lower wick." },
  { term: "Hard Fork", definition: "A radical change to a blockchain's protocol that makes previously invalid blocks valid (or vice versa)." },
  { term: "Harmonic Patterns", definition: "Geometric price patterns based on Fibonacci ratios used to identify potential reversal points." },
  { term: "Hash Rate", definition: "The total computational power used by miners on a proof-of-work blockchain to validate transactions." },
  { term: "Hedge Fund", definition: "A pooled investment fund that uses a wide range of strategies, often including leverage and derivatives, to seek returns." },
  { term: "Hedging", definition: "Opening an offsetting position to reduce the risk of an existing exposure." },
  { term: "High-Frequency Trading (HFT)", definition: "Algorithmic trading that executes very large numbers of orders in fractions of a second." },
  { term: "High-Yield Bond", definition: "A bond that offers a higher interest rate to compensate for a higher risk of default; also called a junk bond." },
  { term: "HODL", definition: "Crypto slang for holding a position long-term rather than selling, regardless of short-term price moves." },
  { term: "Hot Wallet", definition: "A cryptocurrency wallet that is connected to the internet, allowing quick transactions but with higher security risk." },

  // I
  { term: "Illiquid", definition: "Describes an asset that cannot be quickly bought or sold without a significant price discount." },
  { term: "Implied Volatility (IV)", definition: "The market's forecast of how much an asset's price will move, derived from option prices." },
  { term: "Income Statement", definition: "A financial statement that reports a company's revenues, costs, and profit over a period." },
  { term: "Index Fund", definition: "A mutual fund or ETF designed to match the performance of a specific market index." },
  { term: "Inflation", definition: "The rate at which the general level of prices rises, eroding purchasing power over time." },
  { term: "Initial Coin Offering (ICO)", definition: "A fundraising method in which a new cryptocurrency project sells tokens to early investors." },
  { term: "Initial Public Offering (IPO)", definition: "The first sale of a private company's shares to the public, listing on a stock exchange." },
  { term: "Insider Trading", definition: "The illegal trading of a public company's stock by people with access to non-public material information." },
  { term: "Interest Rate", definition: "The percentage charged or paid for the use of money, typically expressed as an annual rate." },
  { term: "Investment Portfolio", definition: "A collection of financial assets held by an individual or institution." },

  // J
  { term: "Japanese Candlesticks", definition: "A charting style developed in Japan where each bar shows the open, high, low, and close of a session." },
  { term: "J-Curve", definition: "An economic curve showing that a metric initially worsens after a change before improving substantially." },
  { term: "Jensen's Measure (Jensen's Alpha)", definition: "A risk-adjusted performance metric comparing a portfolio's return to its expected return given its beta." },
  { term: "Jobber", definition: "An older term for a market maker who buys and sells securities for their own account." },
  { term: "Joint Account", definition: "A bank or investment account shared by two or more individuals with equal access." },
  { term: "Joint Venture", definition: "A business arrangement where two or more parties combine resources to pursue a specific project or activity." },
  { term: "Juice", definition: "Slang for interest charged on a loan or the commission/edge taken by a bookmaker or market maker." },
  { term: "Junior Debt", definition: "Debt that is subordinated to senior debt and only repaid after senior obligations in a default." },
  { term: "Junk Bond", definition: "A high-yield, high-risk bond rated below investment grade." },
  { term: "Just In Time (JIT)", definition: "An inventory strategy that aligns raw-material orders with production schedules to minimize stock on hand." },

  // K
  { term: "Kappa", definition: "An options Greek that measures the sensitivity of an option's price to changes in implied volatility." },
  { term: "Keogh Plan", definition: "A U.S. tax-deferred pension plan available to self-employed individuals." },
  { term: "Keynesian Economics", definition: "An economic theory advocating active government intervention to manage demand and stabilize the economy." },
  { term: "Key Performance Indicators (KPIs)", definition: "Quantifiable metrics used to evaluate the success of an organization or activity." },
  { term: "Key Rate", definition: "The benchmark interest rate set by a central bank that influences borrowing costs across the economy." },
  { term: "Kitchen Sink Bond", definition: "A bond backed by a mix of mortgage-backed securities and other collateral with varying risk profiles." },
  { term: "Knock-In Option", definition: "An option that becomes active only when the underlying asset reaches a specified price." },
  { term: "Knock-Out Option", definition: "An option that ceases to exist when the underlying asset reaches a specified price." },
  { term: "Kurtosis", definition: "A statistical measure describing the tails of a distribution relative to a normal distribution." },
  { term: "KYC (Know Your Customer)", definition: "The process by which a financial institution verifies the identity of its clients to prevent fraud and money laundering." },

  // L
  { term: "Laddering", definition: "An investment strategy of buying bonds or CDs with staggered maturities to manage interest-rate risk." },
  { term: "Leading Indicator", definition: "An economic data point that tends to change before the broader economy shifts direction." },
  { term: "Leverage", definition: "The use of various financial instruments or borrowed capital to increase the potential return of an investment." },
  { term: "Liability", definition: "A financial obligation a company or individual owes to others." },
  { term: "Limit Order", definition: "An order to buy below or sell above the current market price; executes only at the specified price or better." },
  { term: "Liquidity", definition: "How easily an asset can be bought or sold at a stable price." },
  { term: "Litecoin", definition: "An early peer-to-peer cryptocurrency designed as a faster alternative to Bitcoin." },
  { term: "Lock-Up Period", definition: "A predetermined timeframe during which investors are not allowed to redeem or sell their shares." },
  { term: "Long Position (Long)", definition: "Owning an asset with the expectation that its price will rise." },
  { term: "Lot Size", definition: "A standardized unit of trade quantity. In forex, a standard lot is 100,000 units of the base currency." },

  // M
  { term: "MACD (Moving Average Convergence Divergence)", definition: "A momentum indicator showing the relationship between two moving averages of an asset's price." },
  { term: "Margin Call", definition: "A broker's demand to deposit more funds when account equity falls below the required margin." },
  { term: "Market Capitalization", definition: "The total value of a company's outstanding shares, calculated as share price multiplied by shares outstanding." },
  { term: "Market Maker", definition: "A firm or individual that quotes both buy and sell prices for an asset, providing liquidity." },
  { term: "Market Order", definition: "An order to buy or sell immediately at the best available price." },
  { term: "Maturity Date", definition: "The date on which a bond's principal is repaid or a derivative contract expires." },
  { term: "Mining (Cryptocurrency)", definition: "The process of validating transactions and adding them to a blockchain in exchange for new coins." },
  { term: "Monetary Policy", definition: "Central-bank actions that manage the money supply and interest rates to influence the economy." },
  { term: "Money Market", definition: "The market for short-term debt instruments, typically maturing in less than one year." },
  { term: "Mutual Fund", definition: "A pooled investment vehicle managed by a professional that holds a diversified portfolio of assets." },

  // N
  { term: "Naked Shorting", definition: "Selling shares short without first borrowing them; restricted or banned in many markets." },
  { term: "NASDAQ", definition: "A U.S. electronic stock exchange known for hosting many technology and growth companies." },
  { term: "Net Asset Value (NAV)", definition: "The per-share value of a fund, calculated as total assets minus liabilities divided by shares outstanding." },
  { term: "Net Income", definition: "A company's total earnings after all expenses, taxes, and costs have been deducted from revenue." },
  { term: "Node", definition: "A computer that connects to a blockchain network and helps validate or relay transactions." },
  { term: "No Dealing Desk (NDD)", definition: "A broker model where client orders are passed directly to liquidity providers without intervention." },
  { term: "Nominal Value", definition: "The face or stated value of a security, separate from its market value." },
  { term: "Non-Deliverable Forward (NDF)", definition: "A cash-settled forward contract on a currency where no physical delivery of the currency occurs." },
  { term: "Nonfarm Payrolls", definition: "A monthly U.S. employment report showing job gains and losses outside farming, government, and households." },
  { term: "Non-Performing Loan (NPL)", definition: "A loan where the borrower has not made scheduled payments for an extended period." },

  // O
  { term: "Offer Price", definition: "Another name for the ask price - the price at which a seller is willing to sell." },
  { term: "Open Interest", definition: "The total number of outstanding derivative contracts that have not yet been settled." },
  { term: "Operating Income", definition: "The profit a company earns from its core business operations, before interest and tax." },
  { term: "Operating Margin", definition: "Operating income divided by revenue, expressed as a percentage." },
  { term: "Options", definition: "Contracts that give the buyer the right, but not the obligation, to buy or sell an asset at a set price by a date." },
  { term: "Order Book", definition: "A real-time list of buy and sell orders for an asset, organized by price level." },
  { term: "OTC Markets", definition: "Markets where securities are traded directly between two parties, away from a centralized exchange." },
  { term: "Outperform", definition: "An analyst rating indicating a security is expected to do better than the market or its peers." },
  { term: "Overbought", definition: "A condition where an asset has risen sharply and may be due for a pullback." },
  { term: "Over-the-Counter (OTC)", definition: "Trading that takes place directly between two parties without an exchange." },

  // P
  { term: "Par Value", definition: "The face value of a bond or stock as set by the issuer, separate from its market value." },
  { term: "Penny Stocks", definition: "Shares of small companies that trade at very low prices, typically below $5." },
  { term: "Pip (Percentage in Point)", definition: "The smallest price increment in a forex pair, usually the fourth decimal place." },
  { term: "Portfolio", definition: "A collection of investments held by an individual or institution." },
  { term: "Position Trading", definition: "A long-term strategy where positions are held for weeks, months, or years." },
  { term: "Price-Earnings Ratio (P/E Ratio)", definition: "A valuation metric calculated as share price divided by earnings per share." },
  { term: "Private Equity", definition: "Investment in private companies or buyouts of public companies, typically with a long-term horizon." },
  { term: "Profit Margin", definition: "Net profit divided by revenue, expressed as a percentage." },
  { term: "Public Company", definition: "A company whose shares are traded on a public stock exchange." },
  { term: "Put Option", definition: "A contract giving the buyer the right to sell an underlying asset at a set price within a set period." },

  // Q
  { term: "Q Ratio (Tobin's Q Ratio)", definition: "A ratio of a firm's market value to the replacement cost of its assets, used to gauge over- or under-valuation." },
  { term: "Quantitative Analysis", definition: "Using mathematical and statistical modeling to evaluate financial assets." },
  { term: "Quantitative Trading", definition: "Trading strategies that rely on mathematical models and computer-driven analysis to identify opportunities." },
  { term: "Quarterly Earnings Report", definition: "A company's financial report released every three months covering revenue, earnings, and other key metrics." },
  { term: "Quasi-Public Corporation", definition: "A company that operates in the private sector but has government links, such as the U.S. Postal Service." },
  { term: "Quick Ratio", definition: "A liquidity ratio measuring a company's ability to cover short-term liabilities with its most liquid assets." },
  { term: "Quiet Period", definition: "An SEC-mandated window before an IPO during which company executives are restricted in what they can say publicly." },
  { term: "Quote", definition: "The most recent price at which an asset was traded, or the current bid/ask available." },
  { term: "Quote Currency", definition: "The second currency in a forex pair; the amount required to buy one unit of the base currency." },
  { term: "Quoted Currency", definition: "Another name for the quote currency in a forex pair." },

  // R
  { term: "Real Estate Investment Trust (REIT)", definition: "A company that owns or finances income-producing real estate, and trades like a stock." },
  { term: "Rebalancing", definition: "Adjusting the weights of assets in a portfolio to return to a target allocation." },
  { term: "Recession", definition: "A significant decline in economic activity, typically defined as two consecutive quarters of negative GDP growth." },
  { term: "Relative Strength Index (RSI)", definition: "A momentum oscillator measuring the speed and change of price moves on a 0-100 scale." },
  { term: "Resistance (Resistance Level)", definition: "A price level where selling pressure tends to overwhelm buying, halting an uptrend." },
  { term: "Retail Investor", definition: "An individual investor trading their own money, as opposed to an institution." },
  { term: "Return On Equity (ROE)", definition: "Net income divided by shareholder equity, expressed as a percentage." },
  { term: "Return On Investment (ROI)", definition: "A performance measure showing gain or loss on an investment relative to its cost." },
  { term: "Ripple", definition: "A blockchain network and the cryptocurrency XRP, focused on fast cross-border payments." },
  { term: "Risk Management", definition: "The process of identifying, assessing, and controlling threats to capital and returns." },

  // S
  { term: "Securities and Exchange Commission (SEC)", definition: "The U.S. federal agency that regulates securities markets and protects investors." },
  { term: "Securitization", definition: "Pooling financial assets and packaging them into tradable securities, such as mortgage-backed securities." },
  { term: "Shareholder Equity", definition: "A company's net worth - total assets minus total liabilities, owned by shareholders." },
  { term: "Short Selling", definition: "Selling borrowed shares with the expectation of buying them back later at a lower price." },
  { term: "Spot Price", definition: "The current market price for immediate delivery of an asset." },
  { term: "Spread", definition: "The difference between the bid and the ask price of a security or asset." },
  { term: "Stock", definition: "A security representing partial ownership of a company." },
  { term: "Stop-Loss Order", definition: "An order that automatically closes a position when the price reaches a specified level to limit losses." },
  { term: "Supply Chain", definition: "The network of organizations, people, and activities involved in producing and delivering a product." },
  { term: "Swap", definition: "A derivative in which two parties exchange cash flows or other financial instruments over a set period." },

  // T
  { term: "Takeover", definition: "The acquisition of one company by another, either friendly or hostile." },
  { term: "Tax Lien", definition: "A legal claim by a government on property when the owner has failed to pay taxes owed." },
  { term: "Technical Analysis", definition: "Forecasting price moves by analyzing past market data, primarily price and volume charts." },
  { term: "Ticker Symbol", definition: "A short identifier representing a publicly-traded security on a stock exchange." },
  { term: "Time Value of Money (TVM)", definition: "The concept that money available today is worth more than the same amount in the future due to its earning potential." },
  { term: "Total Return", definition: "The full return on an investment including capital gains and income such as dividends or interest." },
  { term: "Trading Volume", definition: "The number of shares or contracts traded in a security or market during a period." },
  { term: "Treasury Bill (T-Bill)", definition: "A short-term debt instrument issued by the U.S. Treasury, typically maturing within a year." },
  { term: "Triple Witching", definition: "The simultaneous expiration of stock-index futures, stock-index options, and stock options, occurring four times a year." },
  { term: "Turnover Ratio", definition: "A measure of how frequently assets in a portfolio are bought and sold within a year." },

  // U
  { term: "Underlying Asset", definition: "The financial instrument on which a derivative's value is based." },
  { term: "Underlying Security", definition: "The security on which a derivative or related instrument is built." },
  { term: "Underperform", definition: "An analyst rating indicating a security is expected to do worse than the market or its peers." },
  { term: "Underwriting", definition: "The process by which an investment bank assesses risk and arranges the sale of securities to investors." },
  { term: "Unemployment Rate", definition: "The percentage of the labor force that is jobless and actively seeking work." },
  { term: "Unicorn", definition: "A privately-held startup company valued at over $1 billion." },
  { term: "Unit Trust", definition: "An open-ended investment fund structured as a trust that holds a portfolio of assets on behalf of investors." },
  { term: "Unlevered Beta (Asset Beta)", definition: "A measure of a company's market risk excluding the effects of its debt." },
  { term: "Up-Market Cap", definition: "A measure of how a portfolio performs relative to the market during up-trending periods." },
  { term: "Upside/Downside Ratio", definition: "A ratio comparing potential profit to potential loss on a trade or investment." },

  // V
  { term: "Value-Added Tax (VAT)", definition: "A consumption tax placed on a product whenever value is added at each stage of the supply chain." },
  { term: "Value Investing", definition: "An investment strategy that involves picking stocks that appear to be trading for less than their intrinsic value." },
  { term: "Variable Rate", definition: "An interest rate that changes over time, often tied to a benchmark such as the prime rate." },
  { term: "Vega", definition: "An options Greek that measures the sensitivity of an option's price to changes in implied volatility." },
  { term: "Venture Capital", definition: "Financing provided to early-stage, high-potential startups in exchange for equity." },
  { term: "Vesting", definition: "The process by which an employee earns full ownership of employer-granted assets, such as stock options, over time." },
  { term: "Virtual Currency", definition: "A digital representation of value that operates on its own network, distinct from fiat currency." },
  { term: "VIX (Volatility Index)", definition: "A real-time index reflecting the market's expectation of 30-day forward volatility on the S&P 500." },
  { term: "Volatility", definition: "A statistical measure of the dispersion of returns; higher volatility means larger price swings." },
  { term: "Volume", definition: "The total number of units of a security traded in a given period." },

  // W
  { term: "Warrant", definition: "A security that gives the holder the right to buy a company's stock at a specific price before expiration." },
  { term: "Wash-Sale Rule", definition: "A U.S. tax rule preventing a loss deduction if a similar security is repurchased within 30 days." },
  { term: "Weighted Average Cost of Capital (WACC)", definition: "A firm's average cost of financing, weighted by the proportion of debt and equity in its capital structure." },
  { term: "White Paper", definition: "An authoritative document providing detailed information about a project, often a crypto or business proposal." },
  { term: "Wholesale Price Index (WPI)", definition: "An index measuring price changes in goods sold in bulk between businesses, before consumer-level retail." },
  { term: "Wire Transfer", definition: "An electronic transfer of money from one bank account to another, often between banks or countries." },
  { term: "Withholding Tax", definition: "Income tax withheld by an employer or other payer and remitted directly to the government." },
  { term: "Working Capital", definition: "Current assets minus current liabilities, a measure of a company's short-term financial health." },
  { term: "Write-Down", definition: "A reduction in the book value of an asset because its fair market value has fallen." },
  { term: "Write-Off", definition: "An accounting action that recognizes the full loss of an asset's value, removing it from the books." },

  // X
  { term: "XAF (Central African CFA franc)", definition: "The currency used by six countries in Central Africa, pegged to the euro." },
  { term: "XBB (iShares Broad Investment-Grade Bond ETF)", definition: "An ETF that tracks a broad index of investment-grade Canadian bonds." },
  { term: "X-Dividend", definition: "Trading without the right to the most recently declared dividend; also written ex-dividend." },
  { term: "XDR (Special Drawing Rights)", definition: "An international reserve asset created by the International Monetary Fund (IMF)." },
  { term: "X-Efficiency", definition: "The level of efficiency a firm maintains given imperfect competition, where motivation and management affect output." },
  { term: "Xetra", definition: "A German electronic stock-trading system operated by the Deutsche Börse." },
  { term: "XIRR (Extended Internal Rate of Return)", definition: "A modified IRR calculation for cash flows that occur at irregular intervals." },
  { term: "X-Mark Signature", definition: "A signature consisting of an X mark, used by people who are unable to sign their full name." },
  { term: "XRP", definition: "The native digital asset of the Ripple payments network, used to facilitate cross-border transactions." },
  { term: "XRT (Excess Return)", definition: "Returns earned on an investment above the risk-free rate or a benchmark." },

  // Y
  { term: "Yankee Bond Market", definition: "The U.S. market for bonds issued by foreign entities in U.S. dollars." },
  { term: "Yankee CD", definition: "A U.S.-dollar-denominated certificate of deposit issued by a foreign bank's U.S. branch." },
  { term: "Yard", definition: "Trader slang for one billion units of a currency." },
  { term: "Yield", definition: "The income return on an investment, expressed as a percentage." },
  { term: "Yield Curve", definition: "A line plotting the yields of bonds with equal credit quality but different maturities." },
  { term: "Yield on Cost (YOC)", definition: "Annual dividend divided by the original cost of the investment, expressed as a percentage." },
  { term: "Yield Spread", definition: "The difference in yields between two debt instruments of differing credit quality or maturity." },
  { term: "Yield to Maturity (YTM)", definition: "The total return expected on a bond if held until it matures." },
  { term: "YoY (Year over Year)", definition: "A method of comparing a metric in one period to the same period a year earlier." },
  { term: "Yuan (CNY)", definition: "The base unit of currency in mainland China." },

  // Z
  { term: "Zakat", definition: "An obligatory annual charitable contribution in Islam, typically 2.5% of qualifying wealth." },
  { term: "ZAR (South African Rand)", definition: "The official currency of South Africa." },
  { term: "Zero-Beta Portfolio", definition: "A portfolio constructed to have zero systematic risk relative to a benchmark." },
  { term: "Zero-Coupon Bond", definition: "A bond that pays no interest but is issued at a discount to its face value." },
  { term: "Zeta Model", definition: "A statistical model used to predict the likelihood of corporate bankruptcy." },
  { term: "Zig Zag Indicator", definition: "A technical indicator that filters out minor price changes to highlight broader trend reversals." },
  { term: "Zombie Bank", definition: "An insolvent financial institution that continues to operate, often kept alive by government support." },
  { term: "Zombie Company", definition: "A heavily-indebted company that barely covers its interest costs and cannot grow." },
  { term: "Z-Score", definition: "A statistical measurement that describes a value's relationship to the mean of a group of values." },
  { term: "Z-Tranche", definition: "The last tranche in a collateralized mortgage obligation, receiving payments only after other tranches are paid." },
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
                    "repeat(auto-fill, minmax(min(360px, 100%), 1fr))",
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
