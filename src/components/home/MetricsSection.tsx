"use client";

import React from "react";
import { motion } from "framer-motion";

const metrics = [
  { value: "500K+", label: "Active Traders" },
  { value: "20M+", label: "Market Data Points" },
  { value: "99.99%", label: "Platform Reliability" },
  { value: "24/7", label: "AI Monitoring" },
];

export function MetricsSection() {
  return (
    <section className="py-24 relative z-10 border-t border-white/5 bg-canvas-dark">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="glass-card p-8 flex flex-col items-center justify-center text-center group hover:border-primary/30 transition-colors"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ink mb-3 tracking-tighter tabular-nums bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all">
                {metric.value}
              </h3>
              <p className="text-sm md:text-base font-medium text-muted uppercase tracking-widest group-hover:text-ink transition-colors">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
