"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Award, TrendingUp } from "lucide-react";

export function PortfolioIntelligence() {
  const reduce = useReducedMotion();

  const benchmarkData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  };

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="portfolio">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div className="max-w-xl">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] font-bold tracking-tight text-white mb-3">
            Institutional portfolio{" "}
            <span className="text-accent">intelligence.</span>
          </h2>
        </div>
        <p className="text-text-secondary max-w-sm text-sm leading-relaxed">
          Benchmark performance, optimize allocations, and scan vulnerabilities 
          using advanced mathematical engines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Summary Metrics */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="glass-card-sm p-5">
            <span className="text-[10px] text-text-muted font-semibold uppercase tracking-wider block mb-1">
              Portfolio NAV
            </span>
            <div className="text-2xl font-bold text-white font-mono tracking-tight">
              ₹24,50,120.00
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-accent font-semibold font-mono">
              <TrendingUp size={12} />
              <span>+₹3,80,240 (+18.4% YTD)</span>
            </div>
          </div>

          <div className="glass-card-sm p-5 grid grid-cols-2 gap-4">
            {[
              { label: "Diversification", value: "Optimal" },
              { label: "Vulnerability", value: "Low", accent: true },
              { label: "Volatility", value: "0.82", mono: true },
              { label: "Sharpe Ratio", value: "2.84", mono: true },
            ].map((item) => (
              <div key={item.label}>
                <span className="text-[9px] text-text-muted font-semibold uppercase tracking-wider block">
                  {item.label}
                </span>
                <div
                  className={`text-sm font-bold mt-1 ${
                    item.accent ? "text-accent" : "text-white"
                  } ${item.mono ? "font-mono" : ""}`}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card-sm p-4 bg-accent/[0.03] border-accent/10 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <Award size={18} />
            </div>
            <div>
              <div className="text-[10px] text-accent font-semibold uppercase tracking-wider">
                Optimization Score
              </div>
              <div className="text-lg font-bold text-white font-mono mt-0.5">
                88/100
              </div>
            </div>
          </div>
        </div>

        {/* Right: Benchmark Chart */}
        <div className="lg:col-span-8">
          <div className="glass-card p-6 sm:p-8 flex flex-col justify-between min-h-[380px]">
            <div className="flex flex-wrap justify-between items-center pb-4 border-b border-white/5 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-white">Performance Benchmarking</h3>
                <span className="text-[10px] text-text-muted font-semibold block mt-0.5">
                  YTD Portfolio Growth vs NIFTY 50
                </span>
              </div>
              <div className="flex gap-4 text-[11px] font-semibold">
                <div className="flex items-center gap-1.5 text-white">
                  <span className="w-2.5 h-1 rounded bg-accent" />
                  Portfolio (+24.5%)
                </div>
                <div className="flex items-center gap-1.5 text-text-muted">
                  <span className="w-2.5 h-1 rounded bg-white/15" />
                  NIFTY 50 (+12.4%)
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="flex-1 w-full min-h-[220px] mt-6 relative">
              <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                {/* Grid */}
                {[10, 20, 30].map((y) => (
                  <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                ))}

                {/* Portfolio line */}
                <path
                  d="M0,35 L20,31 L40,32.5 L60,24 L80,21 L100,16.5"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* NIFTY line */}
                <path
                  d="M0,35 L20,33.5 L40,34 L60,31 L80,29.5 L100,28.2"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="2 2"
                />

                {/* End dots */}
                <circle cx="100" cy="16.5" r="2.5" fill="#10b981" />
                <circle cx="100" cy="28.2" r="2.5" fill="rgba(255,255,255,0.3)" />
              </svg>

              {/* X Labels */}
              <div className="flex justify-between items-center text-[9px] text-text-muted font-semibold font-mono mt-2">
                {benchmarkData.labels.map((lbl) => (
                  <span key={lbl}>{lbl}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
