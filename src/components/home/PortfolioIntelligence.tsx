"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Award, ChevronRight, TrendingUp, Info } from "lucide-react";

export function PortfolioIntelligence() {
  const [activeMetric, setActiveMetric] = useState("performance");

  // Mock benchmark lines for SVG
  const benchmarkData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    portfolio: [100, 108, 105, 114, 120, 124.5],
    nifty: [100, 103, 102, 107, 109, 112.4]
  };

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="portfolio">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[0.95] font-bold font-display tracking-tighter uppercase text-white mb-4">
            Institutional Portfolio <span className="text-emerald-500">Intelligence.</span>
          </h2>
        </div>
        <p className="text-text-muted max-w-sm font-medium leading-tight text-base md:text-lg">
          Benchmark performance, optimize asset allocations, and scan asset vulnerabilities using advanced mathematical engines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Summary Metrics (Cockpit view) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="double-bezel p-6 border-white/5 bg-[#080E1A]/40 backdrop-blur-md">
            <span className="text-[9px] uppercase tracking-widest text-text-muted font-bold font-mono block mb-1">Portfolio NAV</span>
            <div className="text-3xl font-black text-white font-mono">₹24,50,120.00</div>
            <div className="mt-2.5 flex items-center gap-1.5 text-xs text-emerald-400 font-bold font-mono">
              <TrendingUp size={14} />
              <span>+₹3,80,240.00 (+18.4% YTD)</span>
            </div>
          </div>

          <div className="double-bezel p-6 border-white/5 bg-[#080E1A]/40 backdrop-blur-md grid grid-cols-2 gap-4">
            <div>
              <span className="text-[8px] uppercase tracking-widest text-text-muted font-bold font-mono">Diversification</span>
              <div className="text-base font-black text-white mt-1 uppercase tracking-tight">Optimal</div>
            </div>
            <div>
              <span className="text-[8px] uppercase tracking-widest text-text-muted font-bold font-mono">Vulnerability</span>
              <div className="text-base font-black text-emerald-400 mt-1 uppercase tracking-tight">Impenetrable</div>
            </div>
            <div>
              <span className="text-[8px] uppercase tracking-widest text-text-muted font-bold font-mono">Volatility (Beta)</span>
              <div className="text-base font-black text-white mt-1 font-mono">0.82</div>
            </div>
            <div>
              <span className="text-[8px] uppercase tracking-widest text-text-muted font-bold font-mono">Sharpe Ratio</span>
              <div className="text-base font-black text-white mt-1 font-mono">2.84</div>
            </div>
          </div>

          <div className="double-bezel p-5 border-emerald-500/10 bg-emerald-500/5 backdrop-blur-md flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Award size={20} />
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-widest text-emerald-400 font-black">Optimization Score</div>
              <div className="text-lg font-black text-white font-mono mt-0.5">88/100</div>
            </div>
          </div>
        </div>

        {/* Right Side: Benchmark comparison chart */}
        <div className="lg:col-span-8">
          <div className="double-bezel p-6 sm:p-8 border-white/5 bg-[#080E1A]/40 backdrop-blur-md flex flex-col justify-between h-full min-h-[380px]">
            <div className="flex flex-wrap justify-between items-center pb-4 border-b border-white/5 gap-4">
              <div>
                <h3 className="text-sm font-black uppercase text-white tracking-tight">Performance Benchmarking</h3>
                <span className="text-[9px] uppercase tracking-widest text-text-muted font-bold block mt-0.5">YTD Portfolio Growth vs NIFTY 50 Index</span>
              </div>
              <div className="flex gap-4 text-xs font-bold uppercase tracking-tighter">
                <div className="flex items-center gap-1.5 text-white">
                  <span className="w-2.5 h-1.5 bg-emerald-500 rounded" />
                  <span>Portfolio (+24.5%)</span>
                </div>
                <div className="flex items-center gap-1.5 text-text-muted">
                  <span className="w-2.5 h-1.5 bg-white/20 rounded" />
                  <span>NIFTY 50 (+12.4%)</span>
                </div>
              </div>
            </div>

            {/* SVG Benchmark Area Chart */}
            <div className="flex-1 w-full min-h-[220px] mt-6 relative">
              <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                {/* Grid guidelines */}
                <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

                {/* Portfolio path */}
                <path
                  d="M0,35 L20,31 L40,32.5 L60,24 L80,21 L100,16.5"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                
                {/* NIFTY 50 path */}
                <path
                  d="M0,35 L20,33.5 L40,34 L60,31 L80,29.5 L100,28.2"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="1 2"
                />
                
                {/* Glow markers for vertices */}
                <circle cx="100" cy="16.5" r="2.5" fill="#10b981" />
                <circle cx="100" cy="28.2" r="2.5" fill="rgba(255,255,255,0.4)" />
              </svg>

              {/* Chart X Labels */}
              <div className="flex justify-between items-center text-[8px] text-text-muted font-bold font-mono uppercase tracking-widest mt-2">
                {benchmarkData.labels.map((lbl, idx) => (
                  <span key={idx}>{lbl}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
