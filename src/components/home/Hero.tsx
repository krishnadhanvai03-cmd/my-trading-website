"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24 relative z-10 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
          className="eyebrow-tag mb-8"
        >
          ALGORITHMIC TRADING TERMINAL
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
          className="text-[clamp(3rem,8vw,5.5rem)] leading-none font-bold mb-8 font-display"
        >
          Systematic <span className="text-accent">Execution</span> at Scale
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mb-12 font-light"
        >
          Process millions of order book events per second. Execute trades with sub-millisecond latency. A terminal built specifically for quantitative analysts.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
        >
          <Link href="/login" className="inline-flex items-center gap-3 bg-foreground text-background font-semibold px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:-translate-y-1 hover:brightness-110 active:scale-[0.97] transition-all duration-200">
            Initialize Account
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-background/10">
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
