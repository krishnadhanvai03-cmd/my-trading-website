"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { number: "15,000", label: "BTC in user reserves" },
  { number: "7,488,223", label: "Traders helped" },
  { number: "$429,423,449", label: "Funds recovered since 2022" },
];

export function FundsSafu() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 px-5 lg:px-8 max-w-[1280px] mx-auto">
      <div className="text-center">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-bold tracking-tight text-primary mb-16"
        >
          FUNDS ARE SAFU
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-[clamp(2rem,4vw,2.5rem)] leading-[1.1] font-bold text-primary font-mono tabular-nums tracking-tight">
                {stat.number}
              </div>
              <div className="text-sm text-muted mt-3 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
