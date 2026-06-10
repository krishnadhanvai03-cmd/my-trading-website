"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { BrokerageCalculator } from "@/components/pricing/BrokerageCalculator";
import { Check, UserPlus, TrendingUp, Briefcase } from "lucide-react";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("equity");

  const tables: Record<string, React.ReactNode> = {
    equity: (
      <table className="w-full text-left text-sm border-collapse rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(124,58,237,0.1)]">
        <thead className="bg-background/50 border-b border-surface-border text-text-muted font-display uppercase tracking-wider text-xs">
          <tr>
            <th className="p-4">Segment</th>
            <th className="p-4">Brokerage</th>
            <th className="p-4">Other Charges</th>
          </tr>
        </thead>
        <tbody className="bg-surface/50 divide-y divide-surface-border">
          <tr className="hover:bg-white/5 transition-colors">
            <td className="p-4">Equity Delivery</td>
            <td className="p-4 font-bold text-accent">₹0</td>
            <td className="p-4 text-text-muted">STT + Exchange charges</td>
          </tr>
          <tr className="hover:bg-white/5 transition-colors">
            <td className="p-4">Equity Intraday</td>
            <td className="p-4 font-bold text-accent">₹20 or 0.03%</td>
            <td className="p-4 text-text-muted">STT + GST</td>
          </tr>
        </tbody>
      </table>
    ),
    fo: (
      <table className="w-full text-left text-sm border-collapse rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(124,58,237,0.1)]">
        <thead className="bg-background/50 border-b border-surface-border text-text-muted font-display uppercase tracking-wider text-xs">
          <tr>
            <th className="p-4">Segment</th>
            <th className="p-4">Brokerage</th>
            <th className="p-4">Other Charges</th>
          </tr>
        </thead>
        <tbody className="bg-surface/50 divide-y divide-surface-border">
          <tr className="hover:bg-white/5 transition-colors">
            <td className="p-4">Futures</td>
            <td className="p-4 font-bold text-accent">₹20 / order</td>
            <td className="p-4 text-text-muted">Exchange + GST</td>
          </tr>
          <tr className="hover:bg-white/5 transition-colors">
            <td className="p-4">Options</td>
            <td className="p-4 font-bold text-accent">₹20 / order</td>
            <td className="p-4 text-text-muted">Exchange + GST</td>
          </tr>
        </tbody>
      </table>
    ),
    commodity: (
      <table className="w-full text-left text-sm border-collapse rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(124,58,237,0.1)]">
        <thead className="bg-background/50 border-b border-surface-border text-text-muted font-display uppercase tracking-wider text-xs">
          <tr>
            <th className="p-4">Segment</th>
            <th className="p-4">Brokerage</th>
            <th className="p-4">Other Charges</th>
          </tr>
        </thead>
        <tbody className="bg-surface/50 divide-y divide-surface-border">
          <tr className="hover:bg-white/5 transition-colors">
            <td className="p-4">Commodity Futures</td>
            <td className="p-4 font-bold text-accent">₹20 / order</td>
            <td className="p-4 text-text-muted">Exchange + GST</td>
          </tr>
          <tr className="hover:bg-white/5 transition-colors">
            <td className="p-4">Commodity Options</td>
            <td className="p-4 font-bold text-accent">₹20 / order</td>
            <td className="p-4 text-text-muted">Exchange + GST</td>
          </tr>
        </tbody>
      </table>
    ),
  };

  return (
    <>
      <MeshGradient />
      <Header />
      
      <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto relative z-10 flex-1 w-full">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(3rem,8vw,5rem)] font-display font-black leading-none mb-6 uppercase tracking-tighter"
          >
            PLANS & <span className="text-accent">PRICING</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg font-medium"
          >
            Simple and transparent pricing built for modern traders and investors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {/* Starter */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="double-bezel p-10 flex flex-col group hover:-translate-y-2 hover:border-accent/30 transition-all duration-500 border-white/5">
            <div className="text-accent font-display font-black text-xl uppercase tracking-tighter mb-4">Starter</div>
            <div className="text-6xl font-black mb-8 tracking-tighter text-white">₹0</div>
            <motion.button whileTap={{ scale: 0.97 }} className="flex items-center justify-center gap-2 w-full bg-accent text-black py-4 rounded-full font-black uppercase tracking-tighter text-sm mb-8 hover:brightness-110 transition-all shadow-[0_0_30px_rgba(0,229,255,0.15)]">
              <UserPlus size={18} strokeWidth={3} /> Open Account
            </motion.button>
            <ul className="space-y-4 text-sm text-text-muted mt-auto font-medium">
              {['₹0 Equity delivery', 'Basic charts', 'Watchlist & alerts', 'Mobile & web trading'].map(item => (
                <li key={item} className="flex items-center gap-3"><Check size={16} className="text-accent flex-shrink-0" /> {item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Active Trader */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="double-bezel p-10 flex flex-col group hover:-translate-y-2 hover:border-action/30 transition-all duration-500 relative border-white/5">
            <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-action text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Popular</div>
            <div className="text-action font-display font-black text-xl uppercase tracking-tighter mb-4">Active Trader</div>
            <div className="text-6xl font-black mb-8 tracking-tighter text-white">₹20<span className="text-lg text-text-muted font-medium ml-2">/order</span></div>
            <motion.button whileTap={{ scale: 0.97 }} className="flex items-center justify-center gap-2 w-full bg-action text-black py-4 rounded-full font-black uppercase tracking-tighter text-sm mb-8 hover:brightness-110 transition-all shadow-[0_0_40px_rgba(174,234,0,0.15)]">
              <TrendingUp size={18} strokeWidth={3} /> Start Trading
            </motion.button>
            <ul className="space-y-4 text-sm text-text-muted mt-auto font-medium">
              {['₹20 Intraday', '₹20 F&O', 'Advanced charts', 'Market depth', 'Trading API'].map(item => (
                <li key={item} className="flex items-center gap-3"><Check size={16} className="text-action flex-shrink-0" /> {item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Enterprise */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="double-bezel p-10 flex flex-col group hover:-translate-y-2 hover:border-accent/30 transition-all duration-500 border-white/5">
            <div className="text-accent font-display font-black text-xl uppercase tracking-tighter mb-4">Enterprise</div>
            <div className="text-6xl font-black mb-8 text-accent tracking-tighter text-white">Custom</div>
            <motion.button whileTap={{ scale: 0.97 }} className="flex items-center justify-center gap-2 w-full bg-accent text-black py-4 rounded-full font-black uppercase tracking-tighter text-sm mb-8 hover:brightness-110 transition-all shadow-[0_0_30px_rgba(0,229,255,0.15)]">
              <Briefcase size={18} strokeWidth={3} /> Contact Sales
            </motion.button>
            <ul className="space-y-4 text-sm text-text-muted mt-auto font-medium">
              {['Custom brokerage', 'Dedicated manager', 'High frequency trading', 'Institutional tools', 'Advanced analytics'].map(item => (
                <li key={item} className="flex items-center gap-3"><Check size={16} className="text-accent flex-shrink-0" /> {item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <section className="double-bezel p-8 md:p-12 border-white/5">
          <h2 className="text-3xl font-display font-black text-center mb-10 text-accent uppercase tracking-tighter">BROKERAGE <span className="text-white">CHARGES</span>.</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { id: 'equity', label: 'Equity' },
              { id: 'fo', label: 'F&O' },
              { id: 'commodity', label: 'Commodity' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-2.5 rounded-full font-black uppercase tracking-tighter text-xs transition-all ${
                  activeTab === tab.id 
                    ? 'bg-accent text-black shadow-[0_0_20px_rgba(0,229,255,0.2)]' 
                    : 'bg-white/5 border border-white/10 text-text-muted hover:text-foreground hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto overflow-x-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {tables[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>

          <BrokerageCalculator />
        </section>
      </main>

      <Footer />
    </>
  );
}
