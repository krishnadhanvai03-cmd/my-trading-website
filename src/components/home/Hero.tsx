"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Search } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="pt-24 pb-20 px-5 lg:px-8 max-w-[1280px] mx-auto" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Hero Content */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Hero Headline */}
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] font-bold tracking-tight text-on-dark mb-6">
            <span className="font-mono text-primary">316,258,026</span>{" "}
            USERS TRUST US
          </h1>

          <p className="text-muted text-base leading-relaxed max-w-lg mb-10">
            Buy, trade, and hold 350+ cryptocurrencies on the world&apos;s most trusted
            crypto exchange. Enjoy low fees, high liquidity, and institutional-grade security.
          </p>

          {/* Search Input + Sign Up */}
          <div className="flex items-center gap-0 max-w-lg">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                placeholder="Search currencies"
                className="w-full h-12 pl-10 pr-4 bg-surface-card-dark text-on-dark text-sm font-sans rounded-l-md border border-hairline-dark border-r-0 focus:outline-none focus:ring-2 focus:ring-info/50 placeholder:text-muted"
              />
            </div>
            <button className="h-12 px-8 bg-primary text-on-primary text-sm font-semibold rounded-r-md hover:bg-primary-active active:scale-[0.98] transition-all duration-150 shrink-0">
              Sign Up
            </button>
          </div>
        </motion.div>

        {/* Right: Stats Grid */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { number: "15,000", label: "BTC in user reserves" },
            { number: "7,488,223", label: "Traders helped worldwide" },
            { number: "$429,423,449", label: "Funds recovered since 2022" },
            { number: "350+", label: "Cryptocurrencies listed" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.25 + idx * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="p-5"
            >
              <div className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] font-bold text-primary font-mono tracking-tight tabular-nums">
                {stat.number}
              </div>
              <div className="text-sm text-muted mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
