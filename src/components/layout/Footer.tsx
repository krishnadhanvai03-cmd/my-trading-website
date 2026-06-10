import React from "react";
import Link from "next/link";

const Twitter = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Github = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  return (
    <footer className="pt-24 pb-12 mt-20 border-t border-white/5 relative z-10 bg-black/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 text-white font-display font-black uppercase tracking-tighter text-xl">
              <span className="text-accent drop-shadow-[0_0_12px_var(--accent-glow)]">◊</span>
              <span>TradeBuddy</span>
            </Link>
            <p className="text-text-muted text-sm font-medium leading-tight max-w-xs">
              Empower your trading decisions with TradeBuddy&apos;s state-of-the-art AI tools. Analyze, strategize, and execute with confidence on one platform.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Terminal</h4>
            <ul className="flex flex-col gap-4 text-sm text-text-muted">
              <li><Link href="#" className="hover:text-accent transition-colors">Order Flow</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Strategy Builder</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Risk Engine</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">API Access</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm text-text-muted">
              <li><Link href="#" className="hover:text-accent transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Quant Blog</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Community</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Market Hours</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Institutional</h4>
            <ul className="flex flex-col gap-4 text-sm text-text-muted">
              <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Risk Disclosure</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold">
          <p>&copy; {new Date().getFullYear()} TRADEBUDDY TERMINAL. ALL RIGHTS RESERVED.</p>
          <p>BUILT BY SOLIMAN POET - POWERED BY FIGMA.</p>
        </div>
      </div>
    </footer>
  );
}
