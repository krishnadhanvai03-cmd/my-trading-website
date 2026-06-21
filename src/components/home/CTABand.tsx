"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABand() {
  return (
    <section className="py-32 relative z-10 overflow-hidden bg-canvas-dark border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      </div>

      <div className="max-w-[1000px] mx-auto px-5 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-ink mb-8 tracking-tight">
            The Future Of Trading <br className="hidden md:block" />
            <span className="text-primary">Starts Here.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-body mb-12 max-w-2xl mx-auto font-medium">
            Join thousands of traders using AI-powered market intelligence to edge out the competition.
          </p>

          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 h-16 px-10 bg-ink text-canvas-dark text-lg font-bold rounded-full hover:bg-primary transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] group hover:-translate-y-1"
          >
            Get Early Access
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
