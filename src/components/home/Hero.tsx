"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Play, Bot, TrendingUp, Shield, BarChart3 } from "lucide-react";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const floatTransition = (delay: number) => ({
    y: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
      delay: delay,
    },
  });

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-16 px-6 overflow-hidden bg-[#030303]">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Editorial Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
        >
          {/* Eyebrow restriction: max 1 eyebrow per 3 sections. Hero has it, it counts as 1. */}
          <motion.div 
            variants={itemVariants}
            className="text-[10px] uppercase tracking-[0.2em] font-black text-emerald-500 mb-6 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20"
          >
            Institutional intelligence v4.1
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] font-bold mb-6 font-display tracking-tighter uppercase text-white"
          >
            Trade Smarter.<br />
            Research Faster.<br />
            Decide With <span className="text-emerald-500">Confidence.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-text-muted mb-8 font-medium leading-relaxed max-w-[42ch]"
          >
            AI-powered trading intelligence, portfolio analytics, market research, risk management, and market monitoring in one unified platform.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a 
              href="#pricing" 
              className="group relative inline-flex items-center gap-3 bg-emerald-500 text-black font-black px-8 py-4 rounded-full uppercase tracking-tighter text-xs active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)]"
            >
              Start Free
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black/10 group-hover:bg-black/20 transition-colors">
                <ArrowUpRight size={14} strokeWidth={3} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
            
            <button 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white font-bold uppercase tracking-tighter text-xs hover:bg-white/5 active:scale-[0.98] transition-all"
            >
              <Play size={12} fill="white" />
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Floating Dashboard Mockup Command Center */}
        <div className="relative w-full h-[480px] lg:h-[580px] flex items-center justify-center">
          
          {/* Main Grid Wrapper with subtle rotate */}
          <div className="relative w-[340px] sm:w-[480px] h-[400px] sm:h-[480px] flex items-center justify-center scale-90 sm:scale-100">
            
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

            {/* 1. NIFTY Dashboard Card (Centered Anchor) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={floatTransition(0)}
              whileHover={{ scale: 1.02, zIndex: 50 }}
              className="absolute w-[200px] sm:w-[240px] p-4 rounded-xl border border-white/10 bg-[#080E1A]/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] cursor-pointer"
              style={{ top: "10%", left: "5%" }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] uppercase tracking-widest text-text-muted font-bold">Index Watch</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-bold text-white font-display">NIFTY 50</span>
                <span className="text-[10px] text-emerald-400 font-bold font-mono">+1.24%</span>
              </div>
              <div className="text-lg font-black tracking-tight text-white font-mono mt-1">23,501.20</div>
            </motion.div>

            {/* 2. AI Copilot Tile */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={floatTransition(1)}
              whileHover={{ scale: 1.02, zIndex: 50 }}
              className="absolute w-[220px] sm:w-[260px] p-4 rounded-xl border border-emerald-500/20 bg-[#030303]/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.05)] cursor-pointer"
              style={{ bottom: "8%", left: "0%" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Bot size={16} className="text-emerald-500 animate-pulse" />
                <span className="text-[9px] uppercase tracking-widest text-emerald-500 font-black">AI Copilot</span>
              </div>
              <p className="text-[11px] text-white leading-tight">
                "Bullish divergence spotted on <span className="text-emerald-400 font-bold font-mono">INFY</span> daily chart. Support holds at 1,420."
              </p>
              <div className="mt-2.5 flex items-center justify-between text-[8px] uppercase tracking-widest text-text-muted font-bold">
                <span>Confidence score</span>
                <span className="text-emerald-400 font-mono">94%</span>
              </div>
            </motion.div>

            {/* 3. Portfolio Analytics Sparkline */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={floatTransition(1.5)}
              whileHover={{ scale: 1.02, zIndex: 50 }}
              className="absolute w-[240px] sm:w-[280px] p-4 rounded-xl border border-white/10 bg-[#080E1A]/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] cursor-pointer"
              style={{ top: "25%", right: "-5%" }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-blue-500" />
                  <span className="text-[9px] uppercase tracking-widest text-text-muted font-bold">Portfolio Intelligence</span>
                </div>
                <span className="text-[9px] text-blue-400 font-bold font-mono">+18.4% YTD</span>
              </div>
              
              {/* Mini SVG Chart */}
              <div className="w-full h-[50px] mt-2">
                <svg viewBox="0 0 100 30" className="w-full h-full">
                  <defs>
                    <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,25 Q15,10 30,22 T60,5 T90,8 L100,2 L100,30 L0,30 Z"
                    fill="url(#blueGrad)"
                  />
                  <path
                    d="M0,25 Q15,10 30,22 T60,5 T90,8 L100,2"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </motion.div>

            {/* 4. Risk Score Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={floatTransition(2)}
              whileHover={{ scale: 1.02, zIndex: 50 }}
              className="absolute w-[150px] p-4 rounded-xl border border-white/10 bg-[#030303]/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] cursor-pointer"
              style={{ bottom: "28%", right: "5%" }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] uppercase tracking-widest text-text-muted font-bold">Risk Matrix</span>
                <Shield size={12} className="text-emerald-500" />
              </div>
              <div className="text-2xl font-black font-display tracking-tight text-white mb-1">2.4<span className="text-xs text-text-muted font-medium ml-1">/10</span></div>
              <div className="text-[8px] uppercase tracking-widest text-emerald-400 font-black">Conservative</div>
            </motion.div>

            {/* 5. Watchlist Widget */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={floatTransition(0.5)}
              whileHover={{ scale: 1.02, zIndex: 50 }}
              className="absolute w-[180px] sm:w-[200px] p-4 rounded-xl border border-white/10 bg-[#080E1A]/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] cursor-pointer"
              style={{ top: "-5%", left: "45%" }}
            >
              <div className="text-[9px] uppercase tracking-widest text-text-muted font-bold mb-3">Watchlist</div>
              <div className="space-y-2">
                {[
                  { sym: "BTC", val: "$64,240", chg: "+4.2%", up: true },
                  { sym: "RELIANCE", val: "₹2,450", chg: "-0.8%", up: false },
                  { sym: "GOLD", val: "₹72,400", chg: "+1.1%", up: true }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-xs">
                    <span className="font-bold text-white">{item.sym}</span>
                    <div className="text-right">
                      <div className="text-white font-mono">{item.val}</div>
                      <div className={`text-[8px] font-mono ${item.up ? "text-emerald-400" : "text-red-400"}`}>{item.chg}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 6. Market Heatmap Grid */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={floatTransition(2.5)}
              whileHover={{ scale: 1.02, zIndex: 50 }}
              className="absolute w-[160px] p-3 rounded-xl border border-white/10 bg-[#030303]/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] cursor-pointer"
              style={{ bottom: "-8%", right: "35%" }}
            >
              <div className="text-[9px] uppercase tracking-widest text-text-muted font-bold mb-2">Market Sectors</div>
              <div className="grid grid-cols-4 gap-1">
                {[
                  "bg-emerald-500", "bg-emerald-600", "bg-emerald-400", "bg-red-500",
                  "bg-emerald-600", "bg-red-600", "bg-emerald-500", "bg-emerald-700",
                  "bg-emerald-500", "bg-emerald-400", "bg-red-500", "bg-red-700"
                ].map((bg, idx) => (
                  <div key={idx} className={`w-full h-4 rounded-sm ${bg} opacity-80`} />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[8px] text-text-muted font-bold uppercase tracking-wider">
                <span>IT</span>
                <span>FIN</span>
                <span>ENE</span>
                <span>MET</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
