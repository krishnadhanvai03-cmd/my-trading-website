"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

export function PricingSection() {
  const tiers = [
    {
      name: "Starter",
      price: "₹0",
      desc: "For retail beginners entering the markets.",
      features: [
        "Basic overlay charts & indicators",
        "Watchlist monitoring & alerts",
        "NSE/BSE delayed market feeds",
        "Mobile & Web access panels"
      ],
      cta: "Initialize Account",
      highlight: false
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
        "Real-time exchange feed access"
      ],
      cta: "Upgrade to Pro",
      highlight: true
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
        "Unlimited API command calls"
      ],
      cta: "Contact Quant Desk",
      highlight: false
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="pricing">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[0.95] font-bold font-display tracking-tighter uppercase text-white mb-6">
          Premium Access <span className="text-emerald-500">Tiers.</span>
        </h2>
        <p className="text-text-muted text-base md:text-lg font-medium leading-tight max-w-[50ch] mx-auto">
          Flexible transparent plans configured for individual and quantitative desk traders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className={`double-bezel p-10 flex flex-col justify-between relative transition-all duration-500 border-white/5 bg-[#080E1A]/40 backdrop-blur-md ${
              tier.highlight 
                ? "border-emerald-500/25 bg-emerald-500/5 shadow-[0_30px_70px_rgba(16,185,129,0.1)] scale-102 z-30" 
                : "hover:-translate-y-2 hover:border-white/10"
            }`}
          >
            {tier.highlight && (
              <span className="absolute top-0 right-10 transform -translate-y-1/2 bg-emerald-500 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                Popular
              </span>
            )}

            <div>
              <div className={`font-display font-black text-xl uppercase tracking-tighter mb-4 ${
                tier.highlight ? "text-emerald-400" : "text-white"
              }`}>
                {tier.name}
              </div>
              
              <div className="flex items-baseline mb-3">
                <span className="text-5xl font-black text-white font-mono tracking-tighter">{tier.price}</span>
                {tier.period && <span className="text-xs text-text-muted font-bold font-sans uppercase tracking-widest ml-2">{tier.period}</span>}
              </div>

              <p className="text-[10px] text-text-muted font-medium mb-8 leading-tight">{tier.desc}</p>
              
              <ul className="space-y-4 text-xs font-medium text-white/80 mb-10">
                {tier.features.map((f, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check size={14} className={`flex-shrink-0 mt-0.5 ${
                      tier.highlight ? "text-emerald-400" : "text-text-muted"
                    }`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`flex items-center justify-center gap-2 w-full py-4 rounded-full font-black uppercase tracking-tighter text-xs active:scale-[0.98] transition-all cursor-pointer ${
                tier.highlight 
                  ? "bg-emerald-500 text-black hover:brightness-110 shadow-[0_0_35px_rgba(16,185,129,0.2)]" 
                  : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
              }`}
            >
              {tier.cta}
              <ArrowUpRight size={14} strokeWidth={3} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
