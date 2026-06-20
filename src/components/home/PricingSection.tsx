"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

export function PricingSection() {
  const reduce = useReducedMotion();

  const tiers = [
    {
      name: "Starter",
      price: "₹0",
      desc: "For retail beginners entering the markets.",
      features: [
        "Basic overlay charts & indicators",
        "Watchlist monitoring & alerts",
        "NSE/BSE delayed market feeds",
        "Mobile & Web access",
      ],
      cta: "Initialize Account",
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹2,450",
      period: "/month",
      desc: "For active traders seeking data edges.",
      features: [
        "AI Copilot NLP filings queries",
        "Portfolio health score profiling",
        "Risk Engine VaR stress tests",
        "Direct API transaction routes",
        "Real-time exchange feed access",
      ],
      cta: "Upgrade to Pro",
      highlight: true,
    },
    {
      name: "Elite",
      price: "₹9,990",
      period: "/month",
      desc: "For quantitative desks and active quants.",
      features: [
        "Co-located trade execution routes",
        "Custom neural network training feeds",
        "Dedicated quant analyst manager",
        "Unlimited API command calls",
      ],
      cta: "Contact Quant Desk",
      highlight: false,
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="pricing">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] font-bold tracking-tight text-white mb-5">
          Premium access{" "}
          <span className="text-accent">tiers.</span>
        </h2>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-[48ch] mx-auto">
          Flexible transparent plans configured for individual and quantitative desk traders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch max-w-5xl mx-auto">
        {tiers.map((tier, idx) => (
          <motion.div
            key={idx}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.08,
              ease: [0.23, 1, 0.32, 1],
            }}
            className={`relative flex flex-col justify-between p-7 rounded-2xl border transition-all duration-300 ${
              tier.highlight
                ? "border-accent/20 bg-accent/[0.04] shadow-[0_0_40px_rgba(16,185,129,0.06)] scale-[1.02] z-10"
                : "border-white/5 bg-surface/40 hover:border-white/10 hover:-translate-y-1"
            }`}
          >
            {tier.highlight && (
              <span className="absolute top-0 right-6 transform -translate-y-1/2 bg-accent text-black text-[9px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                Popular
              </span>
            )}

            <div>
              <div
                className={`font-display font-bold text-base mb-3 ${
                  tier.highlight ? "text-accent" : "text-white"
                }`}
              >
                {tier.name}
              </div>

              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-white font-mono tracking-tight">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-xs text-text-muted font-semibold ml-1.5">
                    {tier.period}
                  </span>
                )}
              </div>

              <p className="text-xs text-text-muted font-medium mb-6 leading-relaxed">
                {tier.desc}
              </p>

              <ul className="space-y-3 text-xs font-medium text-white/70 mb-8">
                {tier.features.map((f, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className={`flex-shrink-0 mt-0.5 ${
                        tier.highlight ? "text-accent" : "text-text-muted"
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-xs active:scale-[0.97] transition-all duration-200 cursor-pointer ${
                tier.highlight
                  ? "bg-accent text-black hover:bg-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.12)]"
                  : "bg-white/5 hover:bg-white/8 text-white border border-white/8"
              }`}
            >
              {tier.cta}
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
