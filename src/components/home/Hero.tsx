"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedFigure } from "./AnimatedFigure";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-[10px] uppercase tracking-[0.2em] font-black text-accent mb-8 bg-accent/10 px-3 py-1 rounded-full border border-accent/20"
          >
            AI-POWERED TRADING TERMINAL
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] font-bold mb-8 font-display tracking-tighter text-balance uppercase"
          >
            THE FUTURE OF <span className="text-accent">ALGORITHMIC</span> TRADING.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-lg md:text-xl text-text-muted mb-12 font-medium leading-tight max-w-[45ch]"
          >
            Leverage institutional-grade AI analytics and real-time execution. Designed for the modern trader who demands precision, speed, and deep market insights.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-wrap justify-center lg:justify-start gap-6"
          >
            <Link 
              href="/login" 
              className="group relative inline-flex items-center gap-3 bg-action text-black font-black px-10 py-5 rounded-full uppercase tracking-tighter text-sm active:scale-[0.98] transition-all duration-300 shadow-[0_0_40px_rgba(174,234,0,0.2)]"
            >
              Initialize Account
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black/10 group-hover:bg-black/20 transition-colors">
                <ArrowUpRight size={16} strokeWidth={3} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
            
            <Link 
              href="#vision" 
              className="inline-flex items-center px-10 py-5 rounded-full border border-white/10 font-bold uppercase tracking-tighter text-sm hover:bg-white/5 active:scale-[0.98] transition-all duration-300"
            >
              System Specs
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Animated Asset */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="relative hidden md:block"
        >
          <AnimatedFigure />
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none hidden lg:block" />
    </section>
  );
}
