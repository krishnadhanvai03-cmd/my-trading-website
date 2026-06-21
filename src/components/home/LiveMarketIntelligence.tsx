"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

const marketData = [
  { symbol: "NIFTY 50", price: "22,453.30", change: "+0.85%", isUp: true },
  { symbol: "BANK NIFTY", price: "48,159.00", change: "+1.24%", isUp: true },
  { symbol: "SENSEX", price: "73,903.91", change: "-0.15%", isUp: false },
  { symbol: "GOLD", price: "71,230.00", change: "+0.45%", isUp: true },
  { symbol: "USD/INR", price: "83.52", change: "-0.08%", isUp: false },
  { symbol: "BTC", price: "$64,230.00", change: "+3.12%", isUp: true },
];

export function LiveMarketIntelligence() {
  return (
    <section className="py-24 relative z-10" id="markets">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
            <Activity className="text-primary" size={20} />
          </div>
          <h2 className="text-3xl font-heading font-bold text-ink tracking-tight">Live Market Intelligence</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketData.map((market, idx) => (
            <motion.div
              key={market.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              className="glass-card p-6 group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg text-ink">{market.symbol}</h3>
                <div className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium ${
                  market.isUp ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
                }`}>
                  {market.isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {market.change}
                </div>
              </div>
              
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold tabular-nums text-ink">{market.price}</span>
                
                {/* Mini chart placeholder */}
                <div className="w-16 h-8 flex items-end gap-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: "20%" }}
                      animate={{ height: `${Math.random() * 80 + 20}%` }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: i * 0.1 }}
                      className={`w-2 rounded-t-sm ${market.isUp ? "bg-success" : "bg-danger"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
