"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, BarChart2, Activity, Shield, Cpu, LineChart } from "lucide-react";

const trustItems = [
  { icon: BarChart2, label: "NSE Coverage" },
  { icon: LineChart, label: "BSE Coverage" },
  { icon: Globe, label: "Global Markets" },
  { icon: Activity, label: "TradingView Integration" },
  { icon: Shield, label: "Portfolio Tracking" },
  { icon: Cpu, label: "AI Intelligence" },
];

export function TrustBadges() {
  return (
    <section className="py-12 border-y border-white/5 bg-canvas-dark relative z-10">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <p className="text-center text-sm font-medium tracking-widest text-muted uppercase mb-8">
          Trusted By Modern Traders
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {trustItems.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 group"
            >
              <item.icon size={20} className="text-muted group-hover:text-primary transition-colors" />
              <span className="text-sm font-semibold text-muted group-hover:text-ink transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
