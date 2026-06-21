"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";


const features = [
  {
    title: "Real-time Price Alerts",
    desc: "Set custom alerts and never miss a trading opportunity.",
    gradient: "from-primary/20 to-surface-card-dark",
  },
  {
    title: "Advanced Charts",
    desc: "Professional-grade candlestick charts with 100+ indicators.",
    gradient: "from-trading-up/15 to-surface-card-dark",
  },
  {
    title: "Secure Wallet",
    desc: "Multi-signature cold storage for maximum asset protection.",
    gradient: "from-info/15 to-surface-card-dark",
  },
];

export function FeatureCards() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 px-5 lg:px-8 max-w-[1280px] mx-auto" id="features">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Photo Feature Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`binance-card overflow-hidden group cursor-pointer`}
            >
              {/* Placeholder gradient area simulating photo */}
              <div
                className={`h-40 bg-gradient-to-br ${feat.gradient} flex items-center justify-center`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-on-dark mb-1.5">
                  {feat.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: QR Promo Card */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 binance-card p-8 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-[clamp(1.25rem,3vw,1.5rem)] leading-[1.2] font-bold text-on-dark mb-4">
              Trade on the go.
              <br />
              Anywhere, anytime.
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-8 max-w-sm">
              Download the Binance app and access your portfolio, trade crypto,
              and earn rewards — all from your phone.
            </p>
          </div>

          <div className="flex items-end justify-between">
            {/* App Store Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-2.5 bg-surface-elevated-dark border border-hairline-dark rounded-lg px-4 py-2.5 hover:border-muted-strong transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-on-dark"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div>
                  <div className="text-[10px] text-muted leading-none">
                    Download on the
                  </div>
                  <div className="text-sm font-semibold text-on-dark">
                    App Store
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 bg-surface-elevated-dark border border-hairline-dark rounded-lg px-4 py-2.5 hover:border-muted-strong transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-on-dark"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
                <div>
                  <div className="text-[10px] text-muted leading-none">
                    Get it on
                  </div>
                  <div className="text-sm font-semibold text-on-dark">
                    Google Play
                  </div>
                </div>
              </a>
            </div>

            {/* QR Code Placeholder */}
            <div className="w-20 h-20 bg-on-dark rounded-lg flex items-center justify-center">
              <div className="grid grid-cols-5 gap-0.5">                    {[1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1].map((filled, i) => (
                      <div
                        key={i}
                        className={`w-2.5 h-2.5 ${
                          filled ? "bg-canvas-dark" : "bg-transparent"
                        }`}
                      />
                    ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
