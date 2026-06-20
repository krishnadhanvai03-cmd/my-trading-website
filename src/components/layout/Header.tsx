"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Markets", href: "#markets" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "AI Copilot", href: "#ai-copilot" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 pt-4">
        <motion.div
          layout
          className={`pointer-events-auto mx-auto flex items-center justify-between max-w-5xl rounded-2xl px-5 py-3 sm:px-6 transition-all duration-500 ${
            isScrolled
              ? "glass-card py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-transparent"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5 text-white font-display font-bold tracking-tight text-lg"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 12L8 4L14 12" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>TradeBuddy</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 text-[13px] font-medium text-text-secondary hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#pricing"
              className="flex items-center gap-1.5 px-5 py-2.5 bg-accent text-black font-semibold text-[13px] rounded-xl hover:bg-emerald-400 active:scale-[0.97] transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
            >
              Get Started
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
            <button
              className="md:hidden p-2 text-white hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="flex items-center gap-2.5 text-white font-display font-bold tracking-tight text-lg"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 12L8 4L14 12" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>TradeBuddy</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:text-accent transition-colors"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-semibold text-white hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 flex items-center gap-2 px-8 py-4 bg-accent text-black font-semibold text-base rounded-xl active:scale-95 transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)]"
              >
                Get Started
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
