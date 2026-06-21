"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Wallet } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center mesh-bg">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 backdrop-blur-md">
                <span className="flex w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_var(--primary)]" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">The Next-Gen Exchange</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="block text-ink">Trade Crypto</span>
              <span className="block text-muted">Like a Pro.</span>
              <span className="block text-gradient-primary">Zero Limits.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-lg md:text-xl text-body mb-10 max-w-xl leading-relaxed"
            >
              Experience lightning-fast execution, deep liquidity, and institutional-grade security on the most advanced trading platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-8 bg-primary text-on-primary text-base font-bold rounded-full hover:bg-primary-active transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] group"
              >
                Start Trading
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-8 bg-transparent text-ink border border-white/10 text-base font-semibold rounded-full hover:bg-white/5 transition-all duration-300 group"
              >
                <Play size={18} className="text-secondary group-hover:scale-110 transition-transform" fill="currentColor" />
                How it works
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Floating Bento Box / Dribbble Style Mockup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block perspective-1000"
          >
            {/* Main Portfolio Card */}
            <motion.div
              animate={{ y: [0, -15, 0], rotateX: [5, 2, 5], rotateY: [-5, -2, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-0 right-10 z-20 glass-card p-8 shadow-2xl neon-glow transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                    <Wallet className="text-secondary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-0.5">Total Balance</p>
                    <h3 className="text-3xl font-heading font-bold tabular-nums text-ink">$142,390.50</h3>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-full bg-success/10 text-success text-sm font-bold flex items-center gap-1 border border-success/20">
                  <TrendingUp size={16} />
                  +18.4%
                </div>
              </div>
              
              {/* Crypto Balances */}
              <div className="space-y-4">
                {[
                  { name: "Bitcoin", sym: "BTC", val: "2.45 BTC", usd: "$104,820", p: "+5.2%" },
                  { name: "Ethereum", sym: "ETH", val: "14.2 ETH", usd: "$35,500", p: "+2.1%" },
                ].map((coin) => (
                  <div key={coin.sym} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-ink text-sm">
                        {coin.sym[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-ink text-sm">{coin.name}</p>
                        <p className="text-xs text-muted">{coin.val}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-ink text-sm tabular-nums">{coin.usd}</p>
                      <p className="text-xs text-success font-medium">{coin.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Market Card 1 */}
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 top-48 z-30 glass-card p-5 w-64 shadow-2xl backdrop-blur-xl border border-primary/20"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-ink">SOL / USDT</span>
                <span className="text-success text-xs font-bold px-2 py-1 bg-success/10 rounded border border-success/20">+12.4%</span>
              </div>
              <div className="text-2xl font-bold font-heading tabular-nums text-ink mb-4">$184.20</div>
              <div className="h-12 w-full flex items-end gap-1 opacity-80">
                {[40, 65, 45, 80, 55, 90, 75, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: "10%" }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: i * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm"
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Action Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute left-8 -bottom-4 z-30 glass-card p-6 w-72 shadow-2xl border-t border-white/20"
            >
              <p className="text-sm text-muted mb-4">Quick Buy</p>
              <div className="bg-surface-elevated-dark rounded-xl p-3 mb-4 flex justify-between items-center border border-white/5">
                <span className="text-ink font-semibold tabular-nums">1,000</span>
                <span className="text-muted text-sm pr-2">USDT</span>
              </div>
              <button className="w-full py-3 bg-secondary text-white font-bold rounded-xl shadow-[0_0_15px_rgba(138,43,226,0.4)] hover:shadow-[0_0_25px_rgba(138,43,226,0.6)] transition-all">
                Buy BTC
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
