"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Bot, BarChart3, ShieldCheck, BookOpen, Search, Sparkles, Globe } from "lucide-react";

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion();

  const features = [
    {
      title: "AI Market Copilot",
      icon: <Bot size={18} />,
      tagline: "Natural language intelligence at your service",
      rightComponent: (
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-white/5">
            <span className="text-xs text-text-muted font-semibold uppercase tracking-wider">AI Sentiment</span>
            <span className="text-[10px] text-accent bg-accent/10 px-2.5 py-0.5 rounded-md font-semibold">Extremely Bullish</span>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">Latest Recommendation:</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Heavy institutional accumulation detected in large-cap IT stocks. 
              Historical patterns suggest a 4.2% sector breakout within the next 4 sessions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3 rounded-lg bg-black/30 border border-white/5">
              <span className="text-[9px] text-text-muted uppercase tracking-wider font-semibold">Confidence</span>
              <div className="text-base font-bold text-white font-mono mt-1">92.8%</div>
            </div>
            <div className="p-3 rounded-lg bg-black/30 border border-white/5">
              <span className="text-[9px] text-text-muted uppercase tracking-wider font-semibold">Accuracy</span>
              <div className="text-base font-bold text-white font-mono mt-1">87.4%</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Portfolio Intelligence",
      icon: <BarChart3 size={18} />,
      tagline: "Deep insights into your capital distribution",
      rightComponent: (
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-white/5">
            <span className="text-xs text-text-muted font-semibold uppercase tracking-wider">Asset Allocation</span>
            <span className="text-[10px] text-info bg-info/10 px-2.5 py-0.5 rounded-md font-semibold">Balanced</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-[80px] h-[80px]">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#10b981" strokeWidth="3.2" strokeDasharray="50 100" strokeDashoffset="0" />
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3b82f6" strokeWidth="3.2" strokeDasharray="30 100" strokeDashoffset="-50" />
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f59e0b" strokeWidth="3.2" strokeDasharray="20 100" strokeDashoffset="-80" />
              </svg>
            </div>
            <div className="space-y-2 flex-1">
              {[
                { label: "Equities", pct: "50%", color: "bg-accent" },
                { label: "Commodities", pct: "30%", color: "bg-info" },
                { label: "Crypto", pct: "20%", color: "bg-warning" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between text-xs items-center">
                  <span className="flex items-center gap-2 text-white font-medium">
                    <span className={`w-2 h-2 rounded-full ${item.color}`} />
                    {item.label}
                  </span>
                  <span className="font-mono text-text-muted">{item.pct}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-3 rounded-lg bg-accent/5 border border-accent/10 flex justify-between items-center">
            <span className="text-xs text-white font-semibold">Portfolio Health</span>
            <span className="text-lg font-bold text-accent font-mono">88/100</span>
          </div>
        </div>
      ),
    },
    {
      title: "Risk Analytics",
      icon: <ShieldCheck size={18} />,
      tagline: "Institutional-grade stress testing",
      rightComponent: (
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-white/5">
            <span className="text-xs text-text-muted font-semibold uppercase tracking-wider">Risk Profiler</span>
            <span className="text-[10px] text-accent bg-accent/10 px-2.5 py-0.5 rounded-md font-semibold">Low Risk</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Sharpe Ratio", value: "2.84" },
              { label: "Beta", value: "0.82" },
              { label: "Value at Risk", value: "₹14,500" },
              { label: "Max Drawdown", value: "-3.42%", danger: true },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-lg bg-black/30 border border-white/5">
                <div className="text-[9px] text-text-muted uppercase tracking-wider font-semibold">{item.label}</div>
                <div className={`text-lg font-bold font-mono mt-1 ${item.danger ? "text-danger" : "text-white"}`}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Trading Journal",
      icon: <BookOpen size={18} />,
      tagline: "Auto-record and tag execution logic",
      rightComponent: (
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-3 border-b border-white/5">
            <span className="text-xs text-text-muted font-semibold uppercase tracking-wider">Recent Trades</span>
            <span className="text-[10px] text-text-muted font-mono">3 today</span>
          </div>
          <div className="space-y-2">
            {[
              { time: "14:32", asset: "RELIANCE", type: "BUY", price: "₹2,450.50" },
              { time: "11:15", asset: "TCS", type: "SELL", price: "₹3,820.10" },
            ].map((t, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-black/30 border border-white/5 text-xs">
                <div className="flex items-center gap-2">
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                    t.type === "BUY" ? "bg-accent/15 text-accent" : "bg-danger/15 text-danger"
                  }`}>
                    {t.type}
                  </span>
                  <span className="font-semibold text-white">{t.asset}</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-white">{t.price}</span>
                  <span className="text-[9px] text-text-muted block font-mono">{t.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Market Research",
      icon: <Search size={18} />,
      tagline: "Instant query matching on financial filings",
      rightComponent: (
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-white/5">
            <span className="text-xs text-text-muted font-semibold uppercase tracking-wider">Earnings Intelligence</span>
            <span className="text-[10px] text-accent bg-accent/10 px-2.5 py-0.5 rounded-md font-semibold">Active</span>
          </div>
          <div className="p-3.5 rounded-lg bg-black/30 border border-white/5 space-y-2">
            <span className="text-[9px] text-text-muted uppercase tracking-wider font-mono font-semibold">
              Query: SEC filing Q1 capital allocation
            </span>
            <p className="text-xs text-white leading-relaxed">
              Capital expenditures increased by <span className="text-accent font-bold font-mono">14.2% YoY</span>. 
              R&amp;D investments focus on neural engines.
            </p>
          </div>
          <div className="flex justify-between items-center text-[10px] text-text-muted font-semibold uppercase tracking-wider">
            <span>Sources: 12 reports</span>
            <span className="text-accent">Summarized by AI</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="features">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Selector List */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] font-bold tracking-tight mb-10 text-white">
            Everything a trader needs.{" "}
            <span className="text-accent">One platform.</span>
          </h2>

          <div className="space-y-1.5">
            {features.map((f, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-3.5 rounded-xl flex items-center gap-3.5 transition-all duration-200 relative group cursor-pointer ${
                    isActive
                      ? "bg-surface-elevated/80 border border-white/8"
                      : "border border-transparent hover:bg-white/3"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureBar"
                      className="absolute left-0 top-1/4 bottom-1/4 w-0.5 bg-accent rounded-r"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      isActive ? "bg-accent/10 text-accent" : "bg-white/5 text-text-muted group-hover:text-white"
                    }`}
                  >
                    {f.icon}
                  </div>

                  <div>
                    <h3
                      className={`text-sm font-semibold transition-colors duration-200 ${
                        isActive ? "text-white" : "text-text-muted group-hover:text-white"
                      }`}
                    >
                      {f.title}
                    </h3>
                    <p className="text-[10px] text-text-muted mt-0.5 font-medium">
                      {f.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Preview Panel */}
        <div className="lg:col-span-7">
          <div className="glass-card p-6 sm:p-8 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
            <div className="mt-2 flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                >
                  {features[activeIndex].rightComponent}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
