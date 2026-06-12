import { NextResponse } from "next/server";

const TV_SCANNER = "https://scanner.tradingview.com";

const TV_HEADERS = {
  "Content-Type": "application/json",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  "Origin": "https://www.tradingview.com",
  "Referer": "https://www.tradingview.com/",
  "Accept": "application/json, text/javascript, */*; q=0.01",
  "Accept-Language": "en-US,en;q=0.9",
};

const FOREX_SYMBOLS = [
  "FX:USDCAD",
  "FX:AUDUSD",
  "FX:EURUSD",
  "FX:CHFUSD",
  "FX:NZDUSD",
  "FX:GBPUSD",
  "FX:USDJPY",
  "FX:USDCHF",
];

const CRYPTO_SYMBOLS = [
  "BINANCE:BTCUSDT",
  "BINANCE:ETHUSDT",
  "BINANCE:OGNUSDT",
  "BINANCE:ACTUSDT",
  "BINANCE:USDTUSDC",
];

async function tvScan(
  market: string,
  tickers: string[],
): Promise<Record<string, { price: number; change: number }>> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(`${TV_SCANNER}/${market}/scan`, {
      method: "POST",
      headers: TV_HEADERS,
      body: JSON.stringify({
        symbols: { tickers },
        columns: ["close", "change"],
      }),
      signal: controller.signal,
      cache: "no-store",
    });
    if (!res.ok) return {};
    const json = (await res.json()) as {
      data: { s: string; d: [number, number] }[];
    };
    const out: Record<string, { price: number; change: number }> = {};
    for (const item of json.data ?? []) {
      out[item.s] = { price: item.d[0], change: item.d[1] };
    }
    return out;
  } catch {
    return {};
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET() {
  const [forex, crypto] = await Promise.all([
    tvScan("forex", FOREX_SYMBOLS),
    tvScan("crypto", CRYPTO_SYMBOLS),
  ]);

  return NextResponse.json(
    { forex, crypto },
    {
      headers: {
        "Cache-Control": "s-maxage=30, stale-while-revalidate=60",
      },
    },
  );
}
