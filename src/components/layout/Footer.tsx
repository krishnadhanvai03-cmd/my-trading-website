"use client";

import Link from "next/link";


const footerColumns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "AI Copilot", "Portfolio Insights", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact", "Partners"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Data Processing", "Security"],
  },
];

export function Footer() {
  return (
    <footer className="bg-canvas-dark pt-20 pb-10 border-t border-white/5 text-muted">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 shrink-0 group mb-6">
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
            <p className="text-sm max-w-xs leading-relaxed mb-6">
              The operating system for modern traders. Unify your intelligence, optimize your portfolio, and trade with confidence.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/" className="p-2 bg-white/5 rounded-md hover:bg-primary/20 hover:text-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Link>
              <Link href="/" className="p-2 bg-white/5 rounded-md hover:bg-primary/20 hover:text-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
              <Link href="/" className="p-2 bg-white/5 rounded-md hover:bg-primary/20 hover:text-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </Link>
            </div>
          </div>

          {/* Links Cols */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-ink mb-6">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm hover:text-ink transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} TradeBuddy X. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success relative flex items-center justify-center">
                <span className="absolute w-full h-full rounded-full bg-success animate-ping opacity-50" />
              </span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
