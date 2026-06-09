"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="double-bezel max-w-2xl mx-auto p-6 md:p-8 mt-16 flex flex-col items-center">
      <h2 className="text-2xl font-display font-bold text-accent mb-8">Brokerage Calculator</h2>
      
      <div className="flex flex-wrap gap-4 mb-8 justify-center w-full">
        <label className="flex flex-col gap-2 min-w-[140px] flex-1 text-sm font-semibold text-text-muted">
          Trade Type
          <select 
            value={type} 
            onChange={(e) => { setType(e.target.value); setResult(null); }}
            className="bg-background border border-surface-border text-foreground rounded-lg p-2.5 focus:outline-none focus:border-accent transition-colors"
          >
            <option value="equity">Equity Delivery</option>
            <option value="intraday">Equity Intraday</option>
            <option value="futures">Futures</option>
            <option value="options">Options</option>
            <option value="commodity">Commodity</option>
          </select>
        </label>
        
        <label className="flex flex-col gap-2 min-w-[140px] flex-1 text-sm font-semibold text-text-muted">
          Quantity
          <input 
            type="number" 
            min="1" 
            value={qty} 
            onChange={(e) => { setQty(Number(e.target.value)); setResult(null); }}
            className="bg-background border border-surface-border text-foreground rounded-lg p-2.5 focus:outline-none focus:border-accent transition-colors"
          />
        </label>

        <label className="flex flex-col gap-2 min-w-[140px] flex-1 text-sm font-semibold text-text-muted">
          Price
          <input 
            type="number" 
            min="1" 
            value={price} 
            onChange={(e) => { setPrice(Number(e.target.value)); setResult(null); }}
            className="bg-background border border-surface-border text-foreground rounded-lg p-2.5 focus:outline-none focus:border-accent transition-colors"
          />
        </label>

        {type === 'options' && (
          <label className="flex flex-col gap-2 min-w-[140px] flex-1 text-sm font-semibold text-text-muted">
            Premium
            <input 
              type="number" 
              min="1" 
              value={premium} 
              onChange={(e) => { setPremium(Number(e.target.value)); setResult(null); }}
              className="bg-background border border-surface-border text-foreground rounded-lg p-2.5 focus:outline-none focus:border-accent transition-colors"
            />
          </label>
        )}
      </div>

      <motion.button 
        whileTap={{ scale: 0.97 }}
        onClick={calculate}
        className="bg-foreground text-background px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all mb-8"
      >
        Calculate
      </motion.button>

      {result && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-background rounded-xl p-6 border border-surface-border shadow-inner"
        >
          <div className="flex flex-wrap justify-between gap-4 mb-6 text-center">
            <div><span className="text-text-muted text-xs uppercase block mb-1">Brokerage</span>₹{result.brokerage.toFixed(2)}</div>
            <div><span className="text-text-muted text-xs uppercase block mb-1">STT</span>₹{result.stt.toFixed(2)}</div>
            <div><span className="text-text-muted text-xs uppercase block mb-1">Exchange</span>₹{result.exchange.toFixed(2)}</div>
            <div><span className="text-text-muted text-xs uppercase block mb-1">GST</span>₹{result.gst.toFixed(2)}</div>
          </div>
          <div className="text-center text-xl font-bold text-accent pt-4 border-t border-surface-border">
            Total Charges: ₹{result.total.toFixed(2)}
          </div>
        </motion.div>
      )}
    </div>
  );
}
