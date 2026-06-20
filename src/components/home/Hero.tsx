"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-28 pb-20 px-6 overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      
      {/* Accent glow - top right */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        
        {/* Left: Editorial Content */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-xl"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-semibold text-accent tracking-wide uppercase">
              AI-powered trading intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-bold mb-6 tracking-tight text-white"
          >
            Trade smarter.{" "}
            <br className="hidden sm:inline" />
            Decide with{" "}
            <span className="text-accent">confidence.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-text-secondary text-base md:text-lg mb-10 leading-relaxed max-w-[48ch]"
          >
            AI-powered market intelligence, portfolio analytics, and real-time execution. 
            Everything a serious trader needs, unified in one terminal.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 bg-accent text-black font-semibold px-7 py-3.5 rounded-xl text-sm active:scale-[0.97] transition-all duration-200 shadow-[0_0_24px_rgba(16,185,129,0.15)]"
            >
              Start Free
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>

            <button className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-white/8 text-white font-medium text-sm hover:bg-white/4 active:scale-[0.97] transition-all duration-200">
              <Play size={14} fill="white" />
              Watch Demo
            </button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-14 flex items-center gap-4 text-text-muted"
          >
            <div className="flex -space-x-2.5">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#030303] flex items-center justify-center text-[10px] font-bold text-white"
                  style={{
                    background: [
                      "linear-gradient(135deg, #10b981, #059669)",
                      "linear-gradient(135deg, #3b82f6, #2563eb)",
                      "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                      "linear-gradient(135deg, #f59e0b, #d97706)",
                    ][i],
                  }}
                >
                  {"AKRS"[i]}
                </div>
              ))}
            </div>
            <div className="text-xs font-medium">
              <span className="text-white">500K+</span> active traders worldwide
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Clean Product Visualization */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-full flex items-center justify-center"
        >
          {/* Main terminal card */}
          <div className="relative w-full max-w-[520px]">
            {/* Glow behind */}
            <div className="absolute -inset-8 bg-accent/5 blur-[60px] rounded-3xl pointer-events-none" />
            
            <div className="glass-card p-1 relative">
              {/* Terminal chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
                </div>
                <span className="text-[10px] text-text-muted font-mono ml-2">
                  tradebuddy-x terminal
                </span>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Status bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">
                      Live Feed
                    </span>
                  </div>
                  <span className="text-[10px] text-text-muted font-mono">
                    NSE / BSE / MCX
                  </span>
                </div>

                {/* Main chart area */}
                <div className="bg-black/40 rounded-xl border border-white/5 p-4">
                  <div className="flex items-end justify-between mb-3">
                    <div>
                      <span className="text-[10px] text-text-muted font-semibold uppercase tracking-wider">
                        NIFTY 50
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl font-bold text-white font-mono tracking-tight">
                          23,501.20
                        </span>
                        <span className="text-xs font-semibold text-accent font-mono">
                          +1.24%
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {["1D", "1W", "1M"].map((p) => (
                        <span
                          key={p}
                          className={`text-[9px] font-semibold px-2 py-0.5 rounded ${
                            p === "1D"
                              ? "bg-accent/10 text-accent"
                              : "text-text-muted"
                          }`}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="w-full h-[120px]">
                    <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      {[15, 30, 45].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          y1={y}
                          x2="200"
                          y2={y}
                          stroke="rgba(255,255,255,0.03)"
                          strokeWidth="0.5"
                        />
                      ))}
                      {/* Area fill */}
                      <path
                        d="M0,50 Q20,45 40,48 T80,35 T120,30 T160,22 T200,15 L200,60 L0,60 Z"
                        fill="url(#chartGrad)"
                      />
                      {/* Line */}
                      <path
                        d="M0,50 Q20,45 40,48 T80,35 T120,30 T160,22 T200,15"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      {/* Current price dot */}
                      <circle cx="200" cy="15" r="3" fill="#10b981" />
                      <circle cx="200" cy="15" r="6" fill="#10b981" opacity="0.2" />
                    </svg>
                  </div>
                </div>

                {/* Bottom metrics row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "AI Signal", value: "Bullish", color: "text-accent" },
                    { label: "Portfolio", value: "+18.4%", color: "text-accent" },
                    { label: "Risk Score", value: "2.4/10", color: "text-white" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="bg-black/30 rounded-lg border border-white/5 p-3 text-center"
                    >
                      <span className="text-[9px] text-text-muted font-semibold uppercase tracking-wider block">
                        {m.label}
                      </span>
                      <span className={`text-sm font-bold font-mono mt-1 block ${m.color}`}>
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={reduce ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-card-sm px-4 py-3 max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="#10b981" strokeWidth="1.5" />
                  <path d="M4 7L6 9L10 5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">
                  AI Detected
                </span>
              </div>
              <p className="text-[11px] text-white font-medium leading-snug">
                Bullish divergence on <span className="text-accent font-mono">INFY</span> daily chart
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
