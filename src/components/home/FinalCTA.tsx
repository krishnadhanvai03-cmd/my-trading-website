"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32 px-6 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="glass-card p-10 sm:p-16 text-center overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/[0.06] via-transparent to-transparent pointer-events-none" />

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 text-white relative z-10 tracking-tight leading-none">
          The future of trading{" "}
          <br className="hidden sm:inline" />
          starts <span className="text-accent">here.</span>
        </h2>

        <p className="text-text-secondary text-sm md:text-base max-w-lg mx-auto mb-8 relative z-10 leading-relaxed">
          Join thousands of traders using AI-powered market intelligence. 
          Securing alpha has never been this unified.
        </p>

        <motion.div whileTap={{ scale: 0.97 }} className="relative z-10 inline-block">
          <a
            href="#pricing"
            className="flex items-center gap-2 bg-accent text-black font-semibold px-8 py-4 rounded-xl text-sm hover:bg-emerald-400 shadow-[0_0_32px_rgba(16,185,129,0.15)] transition-all duration-200"
          >
            Get Early Access
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
