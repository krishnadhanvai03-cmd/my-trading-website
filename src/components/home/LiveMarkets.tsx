"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
          // Record current price as previous for comparison
          lastPrices.current[item.name] = item.basePrice;
          
          const volatility = item.isCrypto ? 15.0 : item.name === "USD/INR" ? 0.005 : 2.5;
          const delta = (Math.random() - 0.48) * volatility;
          const newPrice = Math.max(0.1, item.basePrice + delta);
          
          const originalPrice = item.sparkline[0];
          const newChg = ((newPrice - originalPrice) / originalPrice) * 100;
          
          const newSpark = [...item.sparkline.slice(1), newPrice];

          return {
            ...item,
            basePrice: newPrice,
            changePercent: newChg,
            sparkline: newSpark
          };
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="markets">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[0.95] font-bold font-display tracking-tighter text-balance uppercase text-white">
            Real-Time Market <span className="text-emerald-500">Intelligence.</span>
          </h2>
        </div>
        <p className="text-text-muted max-w-sm font-medium leading-tight text-base md:text-lg">
          Institutional-grade feeds with sub-millisecond precision. Powered by direct exchange hooks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {markets.map((m) => {
          const isUp = m.changePercent >= 0;
          const prevPrice = lastPrices.current[m.name] || m.basePrice;
          const isPriceUp = m.basePrice > prevPrice;
          const isPriceDown = m.basePrice < prevPrice;

          // Mini Chart path calculation
          const maxVal = Math.max(...m.sparkline);
          const minVal = Math.min(...m.sparkline);
          const range = maxVal - minVal || 1;
          const points = m.sparkline
            .map((val, idx) => {
              const x = (idx / (m.sparkline.length - 1)) * 100;
              const y = 30 - ((val - minVal) / range) * 26; // padding of 2px top/bottom
              return `${x},${y}`;
            })
            .join(" ");

          return (
            <div
              key={m.name}
              className="double-bezel p-6 border-white/5 bg-[#080E1A]/40 backdrop-blur-md flex flex-col justify-between group hover:border-emerald-500/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Pulse glow background based on real-time price change */}
              <div 
                className={`absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-300 ${
                  isPriceUp ? "bg-emerald-500/5 opacity-100" : isPriceDown ? "bg-red-500/5 opacity-100" : ""
                }`} 
              />
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-bold uppercase text-white tracking-tight">{m.name}</h3>
                  <span className="text-[9px] uppercase tracking-widest text-text-muted font-bold font-mono">{m.symbol}</span>
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold font-mono px-2 py-0.5 rounded-full ${
                  isUp ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                }`}>
                  {isUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                  <span>{isUp ? "+" : ""}{m.changePercent.toFixed(2)}%</span>
                </div>
              </div>

              <div className="flex items-end justify-between mt-6">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-1">Last Traded Price</div>
                  <motion.div 
                    key={m.basePrice}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-black font-mono tracking-tight text-white"
                  >
                    {m.basePrice.toLocaleString(undefined, {
                      minimumFractionDigits: m.name === "USD/INR" ? 4 : 2,
                      maximumFractionDigits: m.name === "USD/INR" ? 4 : 2,
                    })}
                  </motion.div>
                </div>
                
                {/* Mini sparkline chart */}
                <div className="w-[100px] h-[30px]">
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
            </div>
          );
        })}
      </div>
    </section>
  );
}
