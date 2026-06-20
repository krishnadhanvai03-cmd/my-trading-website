"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Users, Database, ShieldAlert, Cpu } from "lucide-react";

export function MetricsSection() {
  const reduce = useReducedMotion();

  const metrics = [
    {
      value: "500K+",
      label: "Active Traders",
      description: "Executing strategies across Indian and US exchanges.",
      icon: <Users size={18} />,
    },
    {
      value: "20M+",
      label: "Data Points / Sec",
      description: "Ingested and analyzed at sub-millisecond rates.",
      icon: <Database size={18} />,
    },
    {
      value: "99.99%",
      label: "Uptime",
      description: "Redundant cluster hosting with zero downtime.",
      icon: <ShieldAlert size={18} />,
    },
    {
      value: "24/7",
      label: "AI Monitoring",
      description: "Autonomous models running perpetual diagnostics.",
      icon: <Cpu size={18} />,
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="metrics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((item, idx) => (
          <motion.div
            key={idx}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.06,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="glass-card-sm p-6 flex flex-col justify-between group hover:border-accent/15 transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-white/5 text-text-muted group-hover:text-accent transition-colors duration-200 w-fit mb-5">
              {item.icon}
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-white mb-1.5">
                {item.value}
              </div>
              <h3 className="text-xs font-semibold text-white tracking-tight mb-1">
                {item.label}
              </h3>
              <p className="text-[11px] text-text-muted leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
