"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

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
                <Twitter size={18} />
              </Link>
              <Link href="/" className="p-2 bg-white/5 rounded-md hover:bg-primary/20 hover:text-primary transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="/" className="p-2 bg-white/5 rounded-md hover:bg-primary/20 hover:text-primary transition-colors">
                <Github size={18} />
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
