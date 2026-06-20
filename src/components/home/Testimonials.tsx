"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      body: "TradeBuddy X has completely redefined how our desk handles retail flows. The AI Copilot scans filings faster than our analysts can copy-paste them.",
      author: "Anish G.",
      role: "Head of Derivatives",
      company: "Alpha Capital"
    },
    {
      body: "The portfolio intelligence alerts saved us from heavy downside during the recent tech correction. A must-have tool for serious retail quant desks.",
      author: "Priya K.",
      role: "Portfolio Manager",
      company: "Capital Invest"
    },
    {
      body: "Sub-millisecond execution routes paired with real-time news summarization makes this terminal the closest retail investors will get to Bloomberg.",
      author: "Kabir M.",
      role: "Active Futures Trader",
      company: "Independent Desk"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="testimonials">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[0.95] font-bold font-display tracking-tighter uppercase text-white mb-6">
          PROVEN IN THE <span className="text-emerald-500">MARKETS.</span>
        </h2>
        <p className="text-text-muted text-base md:text-lg font-medium leading-tight max-w-[50ch] mx-auto">
          Hear from institutional desk managers and high-volume retail derivatives traders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="double-bezel p-8 border-white/5 bg-[#080E1A]/40 backdrop-blur-md flex flex-col justify-between min-h-[220px]"
          >
            <div className="mb-6 text-emerald-500 opacity-60">
              <Quote size={24} fill="#10b981" />
            </div>

            {/* Quote body max 3 lines */}
            <p className="text-xs md:text-sm text-white font-medium leading-relaxed mb-6 italic">
              "{r.body}"
            </p>

            <div className="border-t border-white/5 pt-4">
              <div className="text-xs font-black uppercase text-white tracking-tight">{r.author}</div>
              <div className="text-[9px] text-text-muted uppercase tracking-widest font-bold mt-0.5">
                {r.role}, <span className="text-emerald-400">{r.company}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
