"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I create an account?",
    a: "Click the Sign Up button and enter your email address or phone number. You'll receive a verification code to confirm your identity. Once verified, you can set up 2FA and start trading within minutes.",
  },
  {
    q: "What are the trading fees?",
    a: "Binance offers some of the lowest fees in the industry. Spot trading fees start at 0.1% per trade, with further discounts available when using BNB. Futures trading fees start at 0.02% maker / 0.04% taker.",
  },
  {
    q: "How do I deposit funds?",
    a: "Navigate to your wallet and select Deposit. You can fund your account via bank transfer, credit/debit card, or by depositing cryptocurrency directly from an external wallet. Processing times vary by method.",
  },
  {
    q: "Is my crypto safe on Binance?",
    a: "Binance uses a multi-tiered security architecture with cold storage for the majority of user funds. We maintain the Secure Asset Fund for Users (SAFU) as an emergency insurance fund. Advanced features include anti-phishing codes, device management, and hardware key support.",
  },
  {
    q: "Can I use Binance in my country?",
    a: "Binance serves users in most countries worldwide, though some features may be restricted in certain jurisdictions due to local regulations. Check our restricted countries list for specific availability information.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section className="py-20 px-5 lg:px-8 max-w-[1280px] mx-auto" id="faq">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Heading */}
        <div className="lg:col-span-4">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] font-bold tracking-tight text-on-dark mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted text-sm leading-relaxed max-w-sm"
          >
            Everything you need to know about getting started with Binance.
          </motion.p>
        </div>

        {/* Right: FAQ Rows */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-8"
        >
          <div className="divide-y divide-hairline-dark border-t border-hairline-dark">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-on-dark group-hover:text-primary transition-colors pr-4">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={18} className="text-muted" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm text-muted leading-relaxed max-w-2xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
