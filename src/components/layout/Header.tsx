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

  return (
    <>
      <header className="fixed top-6 left-0 right-0 w-full z-50 pointer-events-none px-4">
        <motion.div 
          layout
          className={`pointer-events-auto mx-auto flex items-center justify-between transition-all duration-500 max-w-5xl rounded-full border border-surface-border bg-surface/80 backdrop-blur-xl px-4 py-2 sm:px-6 shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] ${
            isScrolled ? "scale-[0.98] border-accent/30 py-1.5" : "scale-100"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 text-foreground font-display font-black uppercase tracking-tighter text-xl">
            <span className="text-accent drop-shadow-[0_0_12px_var(--accent-glow)]">◊</span>
            <span>TradeBuddy</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {["Trade", "Contact", "Pricing", "Services"].map((item) => (
              <Link 
                key={item} 
                href={item === "Pricing" ? "/pricing" : `/#${item.toLowerCase()}`}
                className="px-4 py-2 text-xs font-bold uppercase tracking-tighter text-text-muted hover:text-foreground hover:bg-white/5 rounded-full transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link 
              href="/login"
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-accent text-black font-black text-xs uppercase tracking-tighter rounded-full hover:-translate-y-0.5 hover:brightness-110 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
            >
              Login
              <ArrowUpRight size={14} strokeWidth={3} />
            </Link>
            <button 
              className="md:hidden p-2 text-foreground"
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
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-3xl p-6 flex flex-col"
          >
            <div className="flex justify-end">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-foreground hover:text-accent transition-colors"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {["Trade", "Services", "Pricing"].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Pricing' ? '/pricing' : `/#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-display font-bold text-foreground hover:text-accent transition-colors"
                >
                  {item}
                </Link>
              ))}
              <Link 
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold text-lg uppercase tracking-wider rounded-full active:scale-95 transition-all"
              >
                Login to Terminal
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
