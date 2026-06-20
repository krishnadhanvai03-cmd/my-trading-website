"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const reduce = useReducedMotion();

  const reviews = [
    {
      body: "TradeBuddy X has completely redefined how our desk handles retail flows. The AI Copilot scans filings faster than our analysts can copy-paste them.",
      author: "Anish G.",
      role: "Head of Derivatives",
      company: "Alpha Capital",
      featured: true,
    },
    {
      body: "The portfolio intelligence alerts saved us from heavy downside during the recent tech correction.",
      author: "Priya K.",
      role: "Portfolio Manager",
      company: "Capital Invest",
      featured: false,
    },
    {
      body: "Sub-millisecond execution routes paired with real-time news summarization makes this the closest retail investors will get to Bloomberg.",
      author: "Kabir M.",
      role: "Futures Trader",
      company: "Independent Desk",
      featured: false,
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="testimonials">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] font-bold tracking-tight text-white mb-5">
          Proven in the{" "}
          <span className="text-accent">markets.</span>
        </h2>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-[48ch] mx-auto">
          Hear from institutional desk managers and high-volume retail derivatives traders.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Featured testimonial - full width */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="glass-card-sm p-8 flex flex-col justify-between"
        >
          <div className="mb-5 text-accent/40">
            <Quote size={24} fill="currentColor" stroke="none" />
          </div>
          <p className="text-base text-white font-medium leading-relaxed mb-6">
            &ldquo;{reviews[0].body}&rdquo;
          </p>
          <div className="border-t border-white/5 pt-4">
            <div className="text-sm font-semibold text-white">{reviews[0].author}</div>
            <div className="text-xs text-text-muted font-medium mt-0.5">
              {reviews[0].role}, <span className="text-accent">{reviews[0].company}</span>
            </div>
          </div>
        </motion.div>

        {/* Two supporting testimonials - side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.slice(1).map((r, idx) => (
            <motion.div
              key={idx}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: (idx + 1) * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="glass-card-sm p-6 flex flex-col justify-between"
            >
              <div className="mb-4 text-accent/40">
                <Quote size={20} fill="currentColor" stroke="none" />
              </div>
              <p className="text-sm text-white font-medium leading-relaxed mb-5">
                &ldquo;{r.body}&rdquo;
              </p>
              <div className="border-t border-white/5 pt-4 mt-auto">
                <div className="text-xs font-semibold text-white">{r.author}</div>
                <div className="text-[10px] text-text-muted font-medium mt-0.5">
                  {r.role}, <span className="text-accent">{r.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
