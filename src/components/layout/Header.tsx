"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Buy Crypto", href: "#buy" },
  { label: "Markets", href: "#markets" },
  { label: "Trade", href: "#trade" },
  { label: "Futures", href: "#futures" },
  { label: "Earn", href: "#earn" },
  { label: "Square", href: "#square" },
  { label: "More", href: "#more" },
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
            ? "bg-canvas-dark/95 backdrop-blur-md border-b border-hairline-dark"
            : "bg-canvas-dark"
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-16 px-5 lg:px-8">
          {/* Left: Wordmark + Nav */}
          <div className="flex items-center gap-8">
            {/* Wordmark */}
            <Link href="/" className="flex items-center gap-1 shrink-0">
              <svg
                width="120"
                height="24"
                viewBox="0 0 120 24"
                fill="none"
                className="text-primary"
              >
                <text
                  x="0"
                  y="19"
                  fontFamily="var(--font-sans)"
                  fontWeight="700"
                  fontSize="18"
                  fill="currentColor"
                  letterSpacing="-0.02em"
                >
                  BINANCE
                </text>
              </svg>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-muted hover:text-body transition-colors duration-150 rounded-md hover:bg-surface-card-dark"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {/* Language / Dark mode toggles — simplified */}
            <div className="hidden md:flex items-center gap-2 text-sm text-muted">
              <button className="px-2 py-1 rounded hover:bg-surface-card-dark transition-colors">
                EN
              </button>
              <button className="px-2 py-1 rounded hover:bg-surface-card-dark transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </button>
            </div>

            {/* Log In */}
            <Link
              href="#"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-body hover:text-primary transition-colors"
            >
              Log In
            </Link>

            {/* Sign Up Pill */}
            <Link
              href="#"
              className="inline-flex items-center justify-center h-10 px-6 bg-primary text-on-primary text-sm font-semibold rounded-md hover:bg-primary-active active:scale-[0.98] transition-all duration-150"
            >
              Sign Up
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-muted hover:text-body transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-canvas-dark flex flex-col"
          >
            <div className="flex items-center justify-between h-16 px-5 border-b border-hairline-dark">
              <span className="text-lg font-bold text-primary">BINANCE</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-muted hover:text-body transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col flex-1 px-5 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3.5 text-base font-medium text-body hover:text-primary border-b border-hairline-dark transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-auto flex flex-col gap-3 pb-8">
                <Link
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center h-12 text-sm font-semibold text-body hover:text-primary transition-colors border border-hairline-dark rounded-md"
                >
                  Log In
                </Link>
                <Link
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center h-12 bg-primary text-on-primary text-sm font-semibold rounded-md"
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
