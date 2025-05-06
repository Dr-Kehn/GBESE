"use client";

import CryptoChart from "../Chart/CryptoChart";

interface CryptoDetailsProps {
  currency: string;
  onBack: () => void;
}
export function CryptoDetailPage({ currency, onBack }: CryptoDetailsProps) {
  // Map crypto IDs to TradingView symbols
  const symbolMap: Record<string, string> = {
    ETH: "BITSTAMP:ETHUSD",
    USDC: "COINBASE:USDTUSDC",
    gbese: "BINANCE:GBSUSDT", 
    bitcoin: "BITSTAMP:BTCUSD",
  };

  const tradingViewSymbol = symbolMap[currency] ?? "BITSTAMP:BTCUSD";

  return (
    <div className="p-4 bg-black text-white">
      <button className="text-blue-500 underline mb-4" onClick={onBack}>
        Back
      </button>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">
          {currency.charAt(0).toUpperCase() + currency.slice(1)} Chart
        </h1>
        <p className="text-gray-400">Live price chart and market data</p>
      </div>

      {/* TradingView Chart */}
      <div className="bg-white rounded-lg p-4 mb-6">
        <CryptoChart pair={tradingViewSymbol} />
      </div>
    </div>
  );
}
