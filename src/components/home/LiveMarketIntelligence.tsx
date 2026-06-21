"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

const marketData = [
  { symbol: "BTC / USDT", name: "Bitcoin", price: "$64,230.00", change: "+3.12%", isUp: true, color: "var(--primary)" },
  { symbol: "ETH / USDT", name: "Ethereum", price: "$3,450.20", change: "+1.85%", isUp: true, color: "var(--secondary)" },
  { symbol: "SOL / USDT", name: "Solana", price: "$184.20", change: "+12.40%", isUp: true, color: "var(--primary)" },
  { symbol: "BNB / USDT", name: "BNB", price: "$590.15", change: "-0.45%", isUp: false, color: "var(--danger)" },
  { symbol: "XRP / USDT", name: "Ripple", price: "$0.582", change: "+2.10%", isUp: true, color: "var(--secondary)" },
  { symbol: "ADA / USDT", name: "Cardano", price: "$0.451", change: "-1.12%", isUp: false, color: "var(--danger)" },
];

export function LiveMarketIntelligence() {
  return (
    <section className="py-24 relative z-10" id="markets">
      {/* Mesh Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-canvas-dark to-canvas-dark pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <Activity className="text-primary" size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-ink tracking-tight">Market Overview</h2>
              <p className="text-sm text-muted">Real-time cryptocurrency prices</p>
            </div>
          </div>
          <button className="hidden sm:block px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 text-sm font-semibold transition-all">
            View All Markets
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketData.map((market, idx) => (
            <motion.div
              key={market.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              className="glass-card p-6 group cursor-pointer hover:-translate-y-1 transition-all duration-300 neon-glow"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-lg text-ink">{market.symbol}</h3>
                  <p className="text-xs text-muted">{market.name}</p>
                </div>
                <div className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold border ${
                  market.isUp ? "bg-success/10 text-success border-success/20" : "bg-danger/10 text-danger border-danger/20"
                }`}>
                  {market.isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {market.change}
                </div>
              </div>
              
              <div className="flex items-end justify-between">
                <span className="text-3xl font-heading font-bold tabular-nums text-ink">{market.price}</span>
                
                {/* Mini chart placeholder */}
                <div className="w-20 h-10 flex items-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: "20%" }}
                      animate={{ height: `${Math.random() * 80 + 20}%` }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: i * 0.1 }}
                      className="w-2 rounded-t-sm"
                      style={{ backgroundColor: market.color }}
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
