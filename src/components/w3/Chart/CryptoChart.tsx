
'use client';

import { useEffect, useRef } from 'react';

// CurrencyChart class to configure the TradingView widget
class CurrencyChart {
  symbol;
  width = "100%";
  height = "300";
  locale = "en";
  dateRange = "3M";
  colorTheme = "light";
  trendLineColor = "rgba(0, 72, 203, 1)";
  underLineColor = "rgba(0, 72, 203, 0.3)";
  underLineBottomColor = "rgba(0, 72, 203, 0)";
  isTransparent = true;
  autosize = true;
  largeChartUrl = "";

  constructor(pair: any) {
    this.symbol = pair;
  }
}

export default function CryptoChart({ pair }: any) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to load the TradingView widget
  const loadTradingViewWidget = () => {
    if (!containerRef.current) return;

    // Remove existing script if it exists
    const existingScript = containerRef.current.querySelector('script');
    if (existingScript) {
      containerRef.current.removeChild(existingScript);
    }

    // Create new script element
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify(new CurrencyChart(pair));

    // Add the script to the container
    containerRef.current.appendChild(script);
  };

  // Load the widget when component mounts or when pair changes
  useEffect(() => {
    loadTradingViewWidget();

    // Cleanup function to remove script when component unmounts
    return () => {
      if (containerRef.current) {
        const script = containerRef.current.querySelector('script');
        if (script) {
          containerRef.current.removeChild(script);
        }
      }
    };
  }, [pair]);

  return (
    <div className="w-full">
      <div className="tradingview-widget-container" ref={containerRef}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}