"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Assets Traded", value: "500M+" },
  { label: "Daily Transactions", value: "25M+" },
  { label: "Uptime Protocol", value: "99.99%" },
  { label: "Liquidity Depth", value: "100B+" },
];

export function TrustBar() {
  return (
    <section className="py-10 md:py-12 border-y border-white/5 bg-black/20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center md:items-start w-full"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-accent tracking-tighter">
                {stat.value}
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold text-text-muted mt-1 text-center md:text-left">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
