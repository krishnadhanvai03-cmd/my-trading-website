"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Database, ShieldAlert, Cpu } from "lucide-react";

export function MetricsSection() {
  const metrics = [
    {
      value: "500K+",
      label: "Active Traders",
      description: "Executing strategies globally across Indian and US exchanges.",
      icon: <Users size={20} className="text-emerald-500" />
    },
    {
      value: "20M+",
      label: "Market Data Points",
      description: "Ingested, parsed, and analyzed per second at sub-millisecond rates.",
      icon: <Database size={20} className="text-blue-500" />
    },
    {
      value: "99.99%",
      label: "Platform Reliability",
      description: "Redundant cluster hosting guaranteeing continuous trade capabilities.",
      icon: <ShieldAlert size={20} className="text-emerald-500" />
    },
    {
      value: "24/7",
      label: "AI Monitoring",
      description: "Autonomous models running perpetual diagnostics on order pipelines.",
      icon: <Cpu size={20} className="text-blue-500" />
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="metrics">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="double-bezel p-8 border-white/5 bg-[#080E1A]/40 backdrop-blur-md flex flex-col justify-between group hover:border-emerald-500/20 transition-all duration-300 min-h-[220px]"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-2.5 rounded-lg bg-white/5 text-text-muted group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-black font-mono tracking-tighter text-white mb-2">
                {item.value}
              </div>
              <h3 className="text-xs font-black uppercase text-white tracking-widest mb-1.5">
                {item.label}
              </h3>
              <p className="text-[10px] text-text-muted leading-tight font-medium">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
