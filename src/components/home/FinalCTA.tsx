"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="double-bezel p-12 sm:p-20 text-center border-emerald-500/25 bg-emerald-500/5 overflow-hidden relative shadow-[0_30px_70px_rgba(16,185,129,0.1)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-40 pointer-events-none" />
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-display mb-6 text-white relative z-10 uppercase tracking-tighter leading-none">
          The Future Of Trading <br className="hidden sm:inline" />
          Starts <span className="text-emerald-500">Here.</span>
        </h2>
        
        <p className="text-text-muted text-base md:text-lg max-w-lg mx-auto mb-10 relative z-10 font-medium leading-tight">
          Join thousands of traders using AI-powered market intelligence. Securing alpha has never been this unified.
        </p>
        
        <motion.div whileTap={{ scale: 0.97 }} className="relative z-10 inline-block">
          <a
            href="#pricing"
            className="flex items-center gap-2 bg-emerald-500 text-black font-black px-10 py-5 rounded-full uppercase tracking-tighter text-xs hover:bg-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all"
          >
            Get Early Access
            <ArrowUpRight size={14} strokeWidth={3} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
