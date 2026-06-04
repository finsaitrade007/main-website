import { NextResponse } from "next/server";

const TV_SCANNER = "https://scanner.tradingview.com";

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
  try {
    const res = await fetch(`${TV_SCANNER}/${market}/scan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        symbols: { tickers },
        columns: ["close", "change"],
      }),
      next: { revalidate: 0 },
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
