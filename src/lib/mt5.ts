/** MetaTrader 5 download + portal links used on /mt5. */

export const MT5_OPEN_ACCOUNT_HREF =
  "https://fx.finsaitrade.com/auth/register";

export const MT5_WEBTRADER_HREF = "https://trade.mql5.com/trade";

export const MT5_DOWNLOADS = [
  {
    label: "Download for Windows",
    href: "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe",
    platform: "windows" as const,
  },
  {
    label: "Download for Mac",
    href: "https://download.mql5.com/cdn/web/metaquotes.ltd/mt5/MetaTrader5.pkg.zip",
    platform: "mac" as const,
  },
  {
    label: "Download for Linux",
    href: "https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux",
    platform: "linux" as const,
  },
] as const;
