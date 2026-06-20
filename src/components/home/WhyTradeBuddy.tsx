"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Activity, Sparkles, AlertCircle } from "lucide-react";

export function WhyTradeBuddy() {
  const oldStack = [
    { name: "Broker", desc: "Clunky execution interfaces" },
    { name: "TradingView", desc: "Expensive charting tiers" },
    { name: "News App", desc: "Lagging public feeds" },
    { name: "Research Tool", desc: "Manual SEC/exchange digging" },
    { name: "Spreadsheet", desc: "Broken formulas, manual syncs" },
    { name: "Notes", desc: "Scattered journal records" }
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="why-tradebuddy">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[0.95] font-bold font-display tracking-tighter uppercase text-white mb-6">
          Fragmented Tools vs. <span className="text-emerald-500">Unified OS.</span>
        </h2>
        <p className="text-text-muted text-base md:text-lg font-medium leading-tight max-w-[55ch] mx-auto">
          Confronting six disjointed systems vs. executing everything inside one highly optimized terminal environment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Fragmented Stack */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle size={16} className="text-red-400" />
            <h3 className="text-xs font-black uppercase text-red-400 tracking-wider">Traditional Fragmented Stack</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {oldStack.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl border border-white/5 bg-[#080E1A]/10 text-white flex flex-col justify-between h-[100px] opacity-60"
              >
                <span className="text-xs font-black uppercase tracking-tight text-white/80">{item.name}</span>
                <span className="text-[9px] text-text-muted leading-tight font-medium mt-2">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column: Arrow indicator */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center py-6 lg:py-0">
          <div className="hidden lg:flex w-12 h-12 rounded-full border border-white/10 bg-white/5 items-center justify-center text-text-muted">
            <ArrowRight size={20} />
          </div>
          <div className="lg:hidden flex w-10 h-10 rounded-full border border-white/10 bg-white/5 items-center justify-center text-text-muted">
            <ArrowDown size={18} />
          </div>
        </div>

        {/* Right Column: Unified TradeBuddy X Platform */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-emerald-400" />
            <h3 className="text-xs font-black uppercase text-emerald-400 tracking-wider">TradeBuddy X System</h3>
          </div>

          <div className="double-bezel p-8 border-emerald-500/25 bg-emerald-500/5 shadow-[0_30px_70px_rgba(16,185,129,0.1)] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none" />
            
            <span className="text-2xl font-bold font-display uppercase tracking-tight text-white block mb-6">
              One Unified Platform
            </span>

            <div className="space-y-4 text-xs font-medium">
              {[
                { title: "Direct Execution Hooks", desc: "Execute orders with sub-millisecond route latency." },
                { title: "Institutional Level Charting", desc: "Direct access to real-time indicators and overlay sparklines." },
                { title: "Natural Language AI Intelligence", desc: "Earnings filing extraction, sentiment models, and news digests." },
                { title: "Auto-synced Journal & Notes", desc: "Scans trades directly off broker hooks and tags metadata auto-triggers." }
              ].map((cap, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="p-1 rounded bg-emerald-500/10 text-emerald-400 h-fit mt-0.5">
                    <Activity size={12} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-tight text-white mb-0.5">{cap.title}</h4>
                    <p className="text-[10px] text-text-muted leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
