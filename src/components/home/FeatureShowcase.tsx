"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, BarChart3, ShieldCheck, BookOpen, Search, Sparkles, Globe } from "lucide-react";

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "AI Market Copilot",
      icon: <Bot size={18} />,
      tagline: "Natural language intelligence at your service",
      rightComponent: (
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <span className="text-xs text-text-muted font-bold uppercase tracking-widest">AI Market Sentiment</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-black uppercase">Extremely Bullish</span>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white">Latest Co-pilot Recommendation:</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              "System detected heavy institutional accumulation in large-cap IT stocks. Historical backing suggests a 4.2% sector breakout within the next 4 trading sessions."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-3 rounded-lg bg-black/40 border border-white/5">
              <span className="text-[9px] text-text-muted uppercase tracking-widest font-bold">Confidence</span>
              <div className="text-base font-black text-white font-mono mt-1">92.8%</div>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5">
              <span className="text-[9px] text-text-muted uppercase tracking-widest font-bold">Accuracy rate</span>
              <div className="text-base font-black text-white font-mono mt-1">87.4%</div>
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
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <span className="text-xs text-text-muted font-bold uppercase tracking-widest">Asset Allocation</span>
            <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full font-black uppercase">Balanced</span>
          </div>
          
          <div className="flex items-center gap-6">
            {/* SVG Donut Chart */}
            <div className="w-[80px] h-[80px]">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#10b981" strokeWidth="3.2" strokeDasharray="50 100" strokeDashoffset="0" />
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3b82f6" strokeWidth="3.2" strokeDasharray="30 100" strokeDashoffset="-50" />
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f59e0b" strokeWidth="3.2" strokeDasharray="20 100" strokeDashoffset="-80" />
              </svg>
            </div>
            
            <div className="space-y-1.5 flex-1">
              <div className="flex justify-between text-xs items-center">
                <span className="flex items-center gap-1.5 text-white font-medium"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Equities</span>
                <span className="font-mono text-text-muted">50%</span>
              </div>
              <div className="flex justify-between text-xs items-center">
                <span className="flex items-center gap-1.5 text-white font-medium"><span className="w-2 h-2 rounded-full bg-blue-500" /> Commodities</span>
                <span className="font-mono text-text-muted">30%</span>
              </div>
              <div className="flex justify-between text-xs items-center">
                <span className="flex items-center gap-1.5 text-white font-medium"><span className="w-2 h-2 rounded-full bg-amber-500" /> Crypto</span>
                <span className="font-mono text-text-muted">20%</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10 flex justify-between items-center">
            <span className="text-xs text-white font-bold uppercase tracking-tight">Portfolio Health Score</span>
            <span className="text-lg font-black text-emerald-400 font-mono">88/100</span>
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
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <span className="text-xs text-text-muted font-bold uppercase tracking-widest">Risk Profiler</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-black uppercase">Low Risk</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-black/40 border border-white/5">
              <div className="text-[8px] text-text-muted uppercase tracking-widest font-bold">Sharpe Ratio</div>
              <div className="text-xl font-black text-white font-mono mt-1">2.84</div>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5">
              <div className="text-[8px] text-text-muted uppercase tracking-widest font-bold">Beta</div>
              <div className="text-xl font-black text-white font-mono mt-1">0.82</div>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5">
              <div className="text-[8px] text-text-muted uppercase tracking-widest font-bold">Value at Risk (99%)</div>
              <div className="text-xl font-black text-white font-mono mt-1">₹14,500</div>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5">
              <div className="text-[8px] text-text-muted uppercase tracking-widest font-bold">Max Drawdown</div>
              <div className="text-xl font-black text-red-400 font-mono mt-1">-3.42%</div>
            </div>
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
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <span className="text-xs text-text-muted font-bold uppercase tracking-widest">Recent Executions</span>
            <span className="text-[10px] text-text-muted font-bold font-mono">3 trades today</span>
          </div>
          <div className="space-y-2">
            {[
              { time: "14:32:05", asset: "RELIANCE", type: "BUY", price: "₹2,450.50", status: "Success" },
              { time: "11:15:20", asset: "TCS", type: "SELL", price: "₹3,820.10", status: "Success" }
            ].map((t, idx) => (
              <div key={idx} className="flex justify-between items-center p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs">
                <div className="flex items-center gap-2">
                  <span className={`text-[8px] font-black px-1.5 py-0.5 rounded ${
                    t.type === "BUY" ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                  }`}>{t.type}</span>
                  <span className="font-bold text-white">{t.asset}</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-white">{t.price}</span>
                  <span className="text-[8px] text-text-muted block font-mono">{t.time}</span>
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
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <span className="text-xs text-text-muted font-bold uppercase tracking-widest">Earnings Intelligence</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-black uppercase">Active Analysis</span>
          </div>
          <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-2">
            <span className="text-[9px] text-text-muted uppercase tracking-widest font-mono font-bold">Query: SEC filing Q1 capital allocation</span>
            <p className="text-xs text-white leading-relaxed">
              "Allocation towards capital expenditures increased by <span className="text-emerald-400 font-bold font-mono">14.2% YoY</span>. R&D investments focus on neural engines."
            </p>
          </div>
          <div className="flex justify-between items-center text-[10px] text-text-muted font-bold uppercase tracking-wider">
            <span>Sources: 12 reports</span>
            <span className="text-emerald-400">Summarized by AI</span>
          </div>
        </div>
      ),
    },
    {
      title: "Demo Trading",
      icon: <Sparkles size={18} />,
      tagline: "Zero risk strategy execution environment",
      rightComponent: (
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <span className="text-xs text-text-muted font-bold uppercase tracking-widest">Paper Environment</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-black uppercase font-mono">Live Demo</span>
          </div>
          <div className="flex justify-between items-baseline mt-2">
            <span className="text-xs text-text-muted font-bold">Mock Account Balance</span>
            <span className="text-2xl font-black text-white font-mono">₹10,00,000.00</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-black/40 border border-white/5">
              <span className="text-[8px] text-text-muted uppercase tracking-widest font-bold">Demo ROI</span>
              <div className="text-lg font-black text-emerald-400 font-mono mt-1">+14.65%</div>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5">
              <span className="text-[8px] text-text-muted uppercase tracking-widest font-bold">Virtual Win rate</span>
              <div className="text-lg font-black text-white font-mono mt-1">72.4%</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Multi-Market Access",
      icon: <Globe size={18} />,
      tagline: "Access cross-border derivatives directly",
      rightComponent: (
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <span className="text-xs text-text-muted font-bold uppercase tracking-widest">Global Watch</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-black uppercase">24h Live</span>
          </div>
          <div className="space-y-2">
            {[
              { index: "NASDAQ 100", price: "18,912.20", change: "+1.65%", up: true },
              { index: "FTSE 100", price: "8,245.50", change: "-0.32%", up: false },
              { index: "NIKKEI 225", price: "38,580.00", change: "+0.95%", up: true }
            ].map((idxData, i) => (
              <div key={i} className="flex justify-between items-center p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs">
                <span className="font-bold text-white">{idxData.index}</span>
                <div className="text-right flex items-center gap-3">
                  <span className="font-mono text-white font-medium">{idxData.price}</span>
                  <span className={`font-mono text-[10px] font-bold ${idxData.up ? "text-emerald-400" : "text-red-400"}`}>
                    {idxData.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="features">
      
      {/* Eyebrow restriction check: Maximum 1 eyebrow per 3 sections. Hero has it, Trust Section does not, LiveMarkets does not. So we can use one here if we want, but it's cleaner to keep it plain or drop the eyebrow entirely. Let's drop it to match Vercel/Linear minimal aesthetic. */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Text and Selector List */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[0.95] font-bold font-display tracking-tighter uppercase mb-10 text-white">
            Everything A Trader Needs.<br />
            <span className="text-emerald-500">One Platform.</span>
          </h2>
          
          <div className="space-y-2">
            {features.map((f, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-4 rounded-xl flex items-center gap-4 transition-all duration-300 relative group cursor-pointer ${
                    isActive 
                      ? "bg-[#080E1A] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" 
                      : "border border-transparent hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeFeatureBar"
                      className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-emerald-500 rounded-r"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className={`p-2.5 rounded-lg transition-colors duration-300 ${
                    isActive ? "bg-emerald-500/10 text-emerald-400" : "bg-white/5 text-text-muted group-hover:text-white"
                  }`}>
                    {f.icon}
                  </div>
                  
                  <div>
                    <h3 className={`text-sm font-black uppercase tracking-tight transition-colors duration-300 ${
                      isActive ? "text-white" : "text-text-muted group-hover:text-white"
                    }`}>
                      {f.title}
                    </h3>
                    <p className="text-[10px] text-text-muted mt-0.5 tracking-tight font-medium">
                      {f.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Interactive Mockup Visualizer */}
        <div className="lg:col-span-7">
          <div className="double-bezel border-white/5 bg-[#080E1A]/40 backdrop-blur-xl p-8 shadow-[0_30px_70px_rgba(0,0,0,0.9)] flex flex-col justify-between min-h-[380px] relative overflow-hidden">
            {/* Window header */}
            <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/5 bg-white/5 flex items-center px-6 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
              <div className="ml-auto text-[8px] font-black text-text-muted tracking-widest uppercase font-mono flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                {features[activeIndex].title.replace(/\s+/g, ".").toLowerCase()}.env
              </div>
            </div>

            <div className="mt-8 flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
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
