"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Markets", href: "#markets" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "AI Copilot", href: "#ai-copilot" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-20 px-5 lg:px-8">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3V21H21" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 9L12 15L9 12L3 18" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-ink">
              TradeBuddy <span className="text-primary">X</span>
            </span>
          </Link>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted hover:text-ink transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {/* CTA */}
            <Link
              href="#"
              className="hidden sm:inline-flex items-center justify-center h-10 px-6 bg-ink text-canvas-dark text-sm font-semibold rounded-full hover:bg-primary hover:text-canvas-dark transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Get Early Access
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-muted hover:text-ink transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-canvas-dark/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between h-20 px-5 border-b border-hairline-dark">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V21H21" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 9L12 15L9 12L3 18" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-heading font-bold text-xl tracking-tight text-ink">
                  TradeBuddy <span className="text-primary">X</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-muted hover:text-ink transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col flex-1 px-5 py-8 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-heading font-medium text-muted hover:text-ink transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-auto pb-8">
                <Link
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center h-14 bg-ink text-canvas-dark text-lg font-semibold rounded-full hover:bg-primary transition-all duration-300"
                >
                  Get Early Access
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
