"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, Globe, AreaChart, Briefcase, Bot, Cpu } from "lucide-react";

export function TrustSection() {
  const integrations = [
    { name: "NSE Coverage", icon: <Landmark size={20} /> },
    { name: "BSE Coverage", icon: <Cpu size={20} /> },
    { name: "Global Markets", icon: <Globe size={20} /> },
    { name: "TradingView Integration", icon: <AreaChart size={20} /> },
    { name: "Portfolio Tracking", icon: <Briefcase size={20} /> },
    { name: "AI Intelligence", icon: <Bot size={20} /> },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-[#030303] overflow-hidden" id="about">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-[10px] text-center uppercase tracking-[0.2em] font-black text-text-muted mb-8">
          Trusted By Modern Traders
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-40 hover:opacity-75 transition-opacity duration-300">
          {integrations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex items-center gap-2.5 text-white"
            >
              <div className="text-text-muted">{item.icon}</div>
              <span className="text-xs font-black uppercase tracking-tighter whitespace-nowrap">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
