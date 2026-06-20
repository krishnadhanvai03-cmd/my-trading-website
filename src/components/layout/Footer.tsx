"use client";

import React from "react";
import Link from "next/link";

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-white font-display font-bold tracking-tight text-lg"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-md bg-accent/10 border border-accent/20">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M2 12L8 4L14 12" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>TradeBuddy</span>
            </Link>
            <p className="text-text-muted text-xs font-medium leading-relaxed max-w-xs">
              Unify trading, research, portfolio intelligence, and market analysis into one terminal.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/8 text-text-muted hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/8 text-text-muted hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/8 text-text-muted hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-5">
              Terminal
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-text-muted font-medium">
              {["AI Copilot", "Portfolio Health", "Live Market Feeds", "Risk Stress Testing"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#features" className="hover:text-accent transition-colors">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* System */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-5">
              System
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-text-muted font-medium">
              {["Documentation", "Quant Reports", "Status: 99.99%", "Integrations"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-accent transition-colors">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-5">
              Legal
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-text-muted font-medium">
              {["Privacy Policy", "Terms of Service", "Risk Disclosure", "Compliance"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-accent transition-colors">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-wider text-text-muted font-semibold">
          <p>&copy; {new Date().getFullYear()} TradeBuddy. All rights reserved.</p>
          <p>Built by R&amp;D Teams.</p>
        </div>
      </div>
    </footer>
  );
}
