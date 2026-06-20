"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MarketItem {
  name: string;
  symbol: string;
  basePrice: number;
  changePercent: number;
  isCrypto?: boolean;
  sparkline: number[];
}

export function LiveMarkets() {
  const reduce = useReducedMotion();
  const [markets, setMarkets] = useState<MarketItem[]>([
    { name: "NIFTY 50", symbol: "NIFTY", basePrice: 23501.20, changePercent: 1.24, sparkline: [23200, 23310, 23250, 23400, 23450, 23501.20] },
    { name: "BANK NIFTY", symbol: "BANKNIFTY", basePrice: 51280.50, changePercent: 0.85, sparkline: [50800, 51000, 50950, 51100, 51200, 51280.50] },
    { name: "SENSEX", symbol: "SENSEX", basePrice: 77340.10, changePercent: 1.15, sparkline: [76500, 76800, 76700, 77000, 77200, 77340.10] },
    { name: "GOLD", symbol: "GOLD", basePrice: 72400.00, changePercent: -0.45, sparkline: [72800, 72600, 72750, 72500, 72450, 72400] },
    { name: "USD/INR", symbol: "USDINR", basePrice: 83.54, changePercent: 0.05, sparkline: [83.45, 83.48, 83.52, 83.50, 83.52, 83.54] },
    { name: "BTC", symbol: "BTCUSD", basePrice: 64240.00, changePercent: 4.25, isCrypto: true, sparkline: [61200, 62000, 61800, 63100, 63800, 64240] }
  ]);

  const lastPrices = useRef<Record<string, number>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setMarkets((prev) =>
        prev.map((item) => {
          lastPrices.current[item.name] = item.basePrice;
          const volatility = item.isCrypto ? 15.0 : item.name === "USD/INR" ? 0.005 : 2.5;
          const delta = (Math.random() - 0.48) * volatility;
          const newPrice = Math.max(0.1, item.basePrice + delta);
          const originalPrice = item.sparkline[0];
          const newChg = ((newPrice - originalPrice) / originalPrice) * 100;
          const newSpark = [...item.sparkline.slice(1), newPrice];
          return { ...item, basePrice: newPrice, changePercent: newChg, sparkline: newSpark };
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="markets">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div className="max-w-xl">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] font-bold tracking-tight text-white">
            Real-time market{" "}
            <span className="text-accent">intelligence.</span>
          </h2>
        </div>
        <p className="text-text-secondary max-w-sm text-sm leading-relaxed">
          Institutional-grade feeds with sub-millisecond precision. 
          Powered by direct exchange hooks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {markets.map((m, idx) => {
          const isUp = m.changePercent >= 0;
          const prevPrice = lastPrices.current[m.name] || m.basePrice;
          const isPriceUp = m.basePrice > prevPrice;
          const isPriceDown = m.basePrice < prevPrice;

          const maxVal = Math.max(...m.sparkline);
          const minVal = Math.min(...m.sparkline);
          const range = maxVal - minVal || 1;
          const points = m.sparkline
            .map((val, i) => {
              const x = (i / (m.sparkline.length - 1)) * 100;
              const y = 28 - ((val - minVal) / range) * 24;
              return `${x},${y}`;
            })
            .join(" ");

          return (
            <motion.div
              key={m.name}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.23, 1, 0.32, 1] }}
              className="glass-card-sm p-5 flex flex-col justify-between group hover:border-accent/15 transition-all duration-300 relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                  isPriceUp ? "bg-accent/[0.03] opacity-100" : isPriceDown ? "bg-danger/[0.03] opacity-100" : ""
                }`}
              />

              <div className="flex justify-between items-start mb-4 relative">
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-tight">{m.name}</h3>
                  <span className="text-[10px] text-text-muted font-mono">{m.symbol}</span>
                </div>
                <div
                  className={`flex items-center gap-1 text-xs font-semibold font-mono px-2 py-0.5 rounded-md ${
                    isUp ? "bg-accent/10 text-accent" : "bg-danger/10 text-danger"
                  }`}
                >
                  {isUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                  <span>
                    {isUp ? "+" : ""}
                    {m.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>

              <div className="flex items-end justify-between mt-4 relative">
                <div>
                  <div className="text-[10px] text-text-muted font-semibold uppercase tracking-wider mb-1">
                    LTP
                  </div>
                  <motion.div
                    key={m.basePrice}
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 1 }}
                    className="text-xl font-bold font-mono tracking-tight text-white"
                  >
                    {m.basePrice.toLocaleString(undefined, {
                      minimumFractionDigits: m.name === "USD/INR" ? 4 : 2,
                      maximumFractionDigits: m.name === "USD/INR" ? 4 : 2,
                    })}
                  </motion.div>
                </div>

                <div className="w-[90px] h-[28px]">
                  <svg viewBox="0 0 100 30" className="w-full h-full">
                    <polyline
                      fill="none"
                      stroke={isUp ? "#10b981" : "#ef4444"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={points}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
