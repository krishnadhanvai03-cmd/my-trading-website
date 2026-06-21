"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Activity, PieChart, ShieldAlert } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
                <span className="flex w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-primary uppercase tracking-wider">TradeBuddy X 2.0 is Live</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight mb-6"
            >
              <span className="block text-ink">Trade Smarter.</span>
              <span className="block text-muted">Research Faster.</span>
              <span className="block text-gradient-primary">Decide With Confidence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-lg md:text-xl text-body mb-10 max-w-xl leading-relaxed"
            >
              AI-powered trading intelligence, portfolio analytics, market research, risk management, and market monitoring in one unified platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-8 bg-ink text-canvas-dark text-base font-semibold rounded-full hover:bg-primary transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group"
              >
                Start Free
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-8 bg-transparent text-ink border border-hairline-light/10 text-base font-semibold rounded-full hover:bg-surface-elevated-dark transition-all duration-300 group"
              >
                <Play size={18} className="text-primary group-hover:scale-110 transition-transform" fill="currentColor" />
                Watch Demo
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Floating Command Center */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Main Dashboard Widget */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 right-10 z-20 glass-card p-6 border-t border-l border-white/10 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted mb-1">Total Portfolio Value</p>
                  <h3 className="text-3xl font-heading font-bold tabular-nums text-ink">₹24,50,000.00</h3>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-success/10 text-success text-sm font-medium flex items-center gap-1">
                  <TrendingUp size={16} />
                  +12.4%
                </div>
              </div>
              <div className="h-32 w-full flex items-end gap-2">
                {[40, 65, 45, 80, 55, 90, 75, 100, 85, 110, 95, 120].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/20 rounded-t-sm relative group">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className="absolute bottom-0 w-full bg-gradient-to-t from-primary/50 to-primary rounded-t-sm group-hover:brightness-125 transition-all"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI Copilot Widget */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 top-32 z-30 glass-card p-5 w-64 shadow-2xl backdrop-blur-xl bg-surface-card-dark/80"
            >
              <div className="flex items-center gap-3 mb-3 border-b border-white/5 pb-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Activity size={16} className="text-secondary" />
                </div>
                <span className="text-sm font-medium text-ink">AI Copilot Alert</span>
              </div>
              <p className="text-xs text-body leading-relaxed">
                <strong className="text-ink">NIFTY 50</strong> breakout detected above resistance 22,500. Volume confirms trend. Consider adjusting stop-loss.
              </p>
            </motion.div>

            {/* Risk Score Widget */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -left-12 bottom-32 z-30 glass-card p-5 w-48 shadow-2xl"
            >
              <div className="flex flex-col items-center justify-center">
                <ShieldAlert size={24} className="text-success mb-2" />
                <span className="text-2xl font-bold font-heading text-ink">A+</span>
                <span className="text-xs text-muted uppercase tracking-wider mt-1">Risk Score</span>
              </div>
            </motion.div>

            {/* Asset Allocation Widget */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute right-10 bottom-20 z-10 glass-card p-5 w-56 shadow-2xl bg-surface-card-dark/90"
            >
              <div className="flex items-center gap-2 mb-4">
                <PieChart size={16} className="text-primary" />
                <span className="text-sm font-medium text-ink">Allocation</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Equities", val: "65%", bg: "bg-primary" },
                  { label: "F&O", val: "20%", bg: "bg-secondary" },
                  { label: "Cash", val: "15%", bg: "bg-muted" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-body">{item.label}</span>
                      <span className="text-ink font-medium tabular-nums">{item.val}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${item.bg}`} style={{ width: item.val }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
