"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function TrustSection() {
  const reduce = useReducedMotion();

  const logos = [
    { name: "NSE", svg: <svg viewBox="0 0 80 24" className="h-5 fill-current"><text x="0" y="18" fontFamily="var(--font-display)" fontWeight="800" fontSize="16" letterSpacing="-0.05em">NSE</text></svg> },
    { name: "BSE", svg: <svg viewBox="0 0 80 24" className="h-5 fill-current"><text x="0" y="18" fontFamily="var(--font-display)" fontWeight="800" fontSize="16" letterSpacing="-0.05em">BSE</text></svg> },
    { name: "TradingView", svg: <svg viewBox="0 0 140 24" className="h-5 fill-current"><text x="0" y="18" fontFamily="var(--font-display)" fontWeight="700" fontSize="14" letterSpacing="-0.02em">TradingView</text></svg> },
    { name: "Bloomberg", svg: <svg viewBox="0 0 120 24" className="h-5 fill-current"><text x="0" y="18" fontFamily="var(--font-display)" fontWeight="800" fontSize="14" letterSpacing="-0.03em">Bloomberg</text></svg> },
    { name: "Reuters", svg: <svg viewBox="0 0 90 24" className="h-5 fill-current"><text x="0" y="18" fontFamily="var(--font-display)" fontWeight="700" fontSize="15" letterSpacing="-0.02em">Reuters</text></svg> },
    { name: "MCX", svg: <svg viewBox="0 0 80 24" className="h-5 fill-current"><text x="0" y="18" fontFamily="var(--font-display)" fontWeight="800" fontSize="16" letterSpacing="-0.05em">MCX</text></svg> },
  ];

  return (
    <section className="py-16 border-y border-white/5 overflow-hidden" id="about">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted mb-10"
        >
          Integrated with leading exchanges and platforms
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-text-muted/40">
          {logos.map((logo, idx) => (
            <motion.div
              key={logo.name}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="hover:text-text-muted/70 transition-colors duration-300"
            >
              {logo.svg}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
