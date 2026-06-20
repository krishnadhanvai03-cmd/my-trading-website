"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Markets", href: "#markets" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "AI Copilot", href: "#ai-copilot" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" }
  ];

  return (
    <>
      <header className="fixed top-6 left-0 right-0 w-full z-50 pointer-events-none px-4">
        <motion.div 
          layout
          className={`pointer-events-auto mx-auto flex items-center justify-between transition-all duration-500 max-w-5xl rounded-full border border-white/5 bg-black/60 backdrop-blur-xl px-4 py-2 sm:px-6 shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] ${
            isScrolled ? "scale-[0.98] border-emerald-500/20 py-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)]" : "scale-100"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 text-white font-display font-black uppercase tracking-tighter text-xl">
            <span className="text-emerald-500 drop-shadow-[0_0_12px_rgba(16,185,129,0.3)] font-sans">◊</span>
            <span>TradeBuddy <span className="text-emerald-500">X</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="px-4 py-2 text-xs font-bold uppercase tracking-tighter text-text-muted hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link 
              href="#pricing"
              className="flex items-center gap-2 px-5 py-2 bg-emerald-500 text-black font-black text-xs uppercase tracking-tighter rounded-full hover:bg-emerald-400 active:scale-95 transition-all shadow-[0_0_25px_rgba(16,185,129,0.2)]"
            >
              Get Early Access
              <ArrowUpRight size={14} strokeWidth={3} />
            </Link>
            <button 
              className="md:hidden p-2 text-white hover:text-emerald-500 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2 text-white font-display font-black uppercase tracking-tighter text-xl">
                <span className="text-emerald-500">◊</span>
                <span>TradeBuddy <span className="text-emerald-500">X</span></span>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:text-emerald-500 transition-colors"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navItems.map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-display font-bold text-white hover:text-emerald-500 transition-colors uppercase tracking-tighter"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 flex items-center gap-2 px-8 py-4 bg-emerald-500 text-black font-black text-lg uppercase tracking-tighter rounded-full active:scale-95 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                Get Early Access
                <ArrowUpRight size={20} strokeWidth={3} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
