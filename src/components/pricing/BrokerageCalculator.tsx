"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BrokerageCalculator() {
  const [type, setType] = useState("equity");
  const [qty, setQty] = useState(100);
  const [price, setPrice] = useState(100);
  const [premium, setPremium] = useState(50);
  
  const [result, setResult] = useState<{
    brokerage: number;
    stt: number;
    exchange: number;
    gst: number;
    total: number;
  } | null>(null);

  const calculate = () => {
    const turnover = qty * price;
    let brokerage = 0;
    let stt = 0;
    let exchange = 0;

    if (type === 'equity') {
      brokerage = 0;
      stt = turnover * 0.001;
      exchange = turnover * 0.000307;
    } else if (type === 'intraday') {
      brokerage = Math.min(20, turnover * 0.0003);
      stt = turnover * 0.00025;
      exchange = turnover * 0.000307;
    } else if (type === 'futures' || type === 'commodity') {
      brokerage = 20;
      stt = turnover * 0.0001;
      exchange = turnover * 0.000307;
    } else if (type === 'options') {
      brokerage = 20;
      stt = premium * qty * 0.0005;
      exchange = premium * qty * 0.0005;
    }

    const gst = 0.18 * (brokerage + exchange);
    const total = brokerage + stt + exchange + gst;

    setResult({ brokerage, stt, exchange, gst, total });
  };

  return (
    <div className="p-1 rounded-[2.5rem] bg-white/5 border border-white/10 max-w-2xl mx-auto mt-16">
      <div className="double-bezel p-8 md:p-12 flex flex-col items-center">
        <h2 className="text-3xl font-display font-black text-white mb-10 uppercase tracking-tighter italic">BROKERAGE <span className="text-accent text-normal not-italic">CALCULATOR</span>.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full">
          <label className="flex flex-col gap-3 text-xs font-black uppercase tracking-widest text-text-muted">
            Trade Type
            <select 
              value={type} 
              onChange={(e) => { setType(e.target.value); setResult(null); }}
              className="bg-surface/60 border border-white/10 text-white rounded-xl p-4 focus:outline-none focus:border-accent transition-all cursor-pointer appearance-none"
            >
              <option value="equity">Equity Delivery</option>
              <option value="intraday">Equity Intraday</option>
              <option value="futures">Futures</option>
              <option value="options">Options</option>
              <option value="commodity">Commodity</option>
            </select>
          </label>
          
          <label className="flex flex-col gap-3 text-xs font-black uppercase tracking-widest text-text-muted">
            Quantity
            <input 
              type="number" 
              min="1" 
              value={qty} 
              onChange={(e) => { setQty(Number(e.target.value)); setResult(null); }}
              className="bg-surface/60 border border-white/10 text-white rounded-xl p-4 focus:outline-none focus:border-accent transition-all font-mono"
            />
          </label>

          <label className="flex flex-col gap-3 text-xs font-black uppercase tracking-widest text-text-muted">
            Price
            <input 
              type="number" 
              min="1" 
              value={price} 
              onChange={(e) => { setPrice(Number(e.target.value)); setResult(null); }}
              className="bg-surface/60 border border-white/10 text-white rounded-xl p-4 focus:outline-none focus:border-accent transition-all font-mono"
            />
          </label>

          {type === 'options' && (
            <label className="flex flex-col gap-3 text-xs font-black uppercase tracking-widest text-text-muted">
              Premium
              <input 
                type="number" 
                min="1" 
                value={premium} 
                onChange={(e) => { setPremium(Number(e.target.value)); setResult(null); }}
                className="bg-surface/60 border border-white/10 text-white rounded-xl p-4 focus:outline-none focus:border-accent transition-all font-mono"
              />
            </label>
          )}
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={calculate}
          className="w-full bg-action text-black py-4 rounded-full font-black uppercase tracking-tighter text-sm hover:brightness-110 transition-all shadow-[0_0_30px_rgba(174,234,0,0.15)] mb-10"
        >
          Execute Analysis
        </motion.button>

        <AnimatePresence mode="wait">
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="w-full bg-surface/40 rounded-2xl p-8 border border-white/5 overflow-hidden"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <span className="text-text-muted text-[10px] font-black uppercase tracking-[0.2em] block mb-2">Brokerage</span>
                  <span className="text-xl font-mono font-bold">₹{result.brokerage.toFixed(2)}</span>
                </div>
                <div>
                  <span className="text-text-muted text-[10px] font-black uppercase tracking-[0.2em] block mb-2">STT</span>
                  <span className="text-xl font-mono font-bold">₹{result.stt.toFixed(2)}</span>
                </div>
                <div>
                  <span className="text-text-muted text-[10px] font-black uppercase tracking-[0.2em] block mb-2">Exchange</span>
                  <span className="text-xl font-mono font-bold">₹{result.exchange.toFixed(2)}</span>
                </div>
                <div>
                  <span className="text-text-muted text-[10px] font-black uppercase tracking-[0.2em] block mb-2">GST</span>
                  <span className="text-xl font-mono font-bold">₹{result.gst.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-white/10">
                <span className="text-xs font-black uppercase tracking-widest text-text-muted">Total Charges</span>
                <span className="text-3xl font-mono font-black text-action italic">₹{result.total.toFixed(2)}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
