"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown, Activity, Sparkles, AlertCircle } from "lucide-react";

export function WhyTradeBuddy() {
  const reduce = useReducedMotion();

  const oldStack = [
    { name: "Broker", desc: "Clunky execution interfaces" },
    { name: "TradingView", desc: "Expensive charting tiers" },
    { name: "News App", desc: "Lagging public feeds" },
    { name: "Research Tool", desc: "Manual SEC digging" },
    { name: "Spreadsheet", desc: "Broken formulas" },
    { name: "Notes", desc: "Scattered journal records" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="why-tradebuddy">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] font-bold tracking-tight text-white mb-5">
          Fragmented tools vs.{" "}
          <span className="text-accent">unified OS.</span>
        </h2>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-[50ch] mx-auto">
          Six disjointed systems vs. one highly optimized terminal environment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Fragmented Stack */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle size={14} className="text-danger" />
            <h3 className="text-xs font-semibold text-danger uppercase tracking-wider">
              Traditional Stack
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {oldStack.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-white/5 bg-surface/30 flex flex-col justify-between h-[88px] opacity-50"
              >
                <span className="text-xs font-semibold text-white/70">{item.name}</span>
                <span className="text-[10px] text-text-muted leading-tight font-medium">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Middle: Arrow */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0">
          <div className="hidden lg:flex w-10 h-10 rounded-full border border-white/8 bg-white/3 items-center justify-center text-text-muted">
            <ArrowRight size={16} />
          </div>
          <div className="lg:hidden flex w-8 h-8 rounded-full border border-white/8 bg-white/3 items-center justify-center text-text-muted">
            <ArrowDown size={14} />
          </div>
        </div>

        {/* Right: Unified Platform */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={14} className="text-accent" />
            <h3 className="text-xs font-semibold text-accent uppercase tracking-wider">
              TradeBuddy X System
            </h3>
          </div>

          <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-accent/5 blur-[40px] rounded-full pointer-events-none" />

            <span className="text-lg font-bold text-white block mb-5">
              One Unified Platform
            </span>

            <div className="space-y-3.5">
              {[
                { title: "Direct Execution Hooks", desc: "Sub-millisecond order route latency." },
                { title: "Institutional Charting", desc: "Real-time indicators and overlay sparklines." },
                { title: "Natural Language AI", desc: "Earnings extraction, sentiment, and news digests." },
                { title: "Auto-synced Journal", desc: "Scans trades and tags metadata automatically." },
              ].map((cap, idx) => (
                <div key={idx} className="flex gap-2.5">
                  <div className="p-1 rounded bg-accent/10 text-accent h-fit mt-0.5">
                    <Activity size={10} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white mb-0.5">{cap.title}</h4>
                    <p className="text-[10px] text-text-muted leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
