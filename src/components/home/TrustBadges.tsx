"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const badges = [
  { title: "No.1", label: "Customer Service" },
  { title: "No.1", label: "Trading Volume" },
  { title: "No.1", label: "Crypto Exchange" },
];

export function TrustBadges() {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 px-5 lg:px-8 max-w-[1280px] mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {badges.map((badge, idx) => (
          <motion.div
            key={badge.label}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="flex items-center gap-3 bg-surface-card-dark rounded-lg px-5 py-4 min-w-[200px]"
          >
            <span className="text-xl font-bold text-primary font-mono tracking-tight">
              {badge.title}
            </span>
            <span className="text-sm text-muted font-medium">{badge.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
