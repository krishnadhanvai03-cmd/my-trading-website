"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Candle {
  id: number;
  open: number;
  close: number;
  high: number;
  low: number;
  isGreen: boolean;
}

export function AnimatedFigure() {
  const [candles, setCandles] = useState<Candle[]>([]);
  const [currentPrice, setCurrentPrice] = useState(64240);
  const nextId = useRef(0);

  // Initialize with some data
  useEffect(() => {
    let lastClose = 64200;
    const initialCandles = [...Array(15)].map(() => {
      const open = lastClose;
      const close = open + (Math.random() * 40 - 20);
      const high = Math.max(open, close) + Math.random() * 10;
      const low = Math.min(open, close) - Math.random() * 10;
      lastClose = close;
      return {
        id: nextId.current++,
        open,
        close,
        high,
        low,
        isGreen: close >= open,
      };
    });
    setCandles(initialCandles);
    setCurrentPrice(lastClose);
  }, []);

  // Live simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCandles((prev) => {
        const lastCandle = prev[prev.length - 1];
        if (!lastCandle) return prev;

        // Fluctuating current candle
        const newClose = lastCandle.close + (Math.random() * 4 - 2);
        const newHigh = Math.max(lastCandle.high, newClose);
        const newLow = Math.min(lastCandle.low, newClose);
        
        setCurrentPrice(newClose);

        const updatedLast = {
          ...lastCandle,
          close: newClose,
          high: newHigh,
          low: newLow,
          isGreen: newClose >= lastCandle.open,
        };

        // Every 3 seconds (approx 10 ticks), start a new candle
        if (Math.random() > 0.8 && prev.length > 0) {
          const nextOpen = updatedLast.close;
          const nextCandle = {
            id: nextId.current++,
            open: nextOpen,
            close: nextOpen,
            high: nextOpen,
            low: nextOpen,
            isGreen: true,
          };
          return [...prev.slice(1), updatedLast, nextCandle];
        }

        return [...prev.slice(0, -1), updatedLast];
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  if (candles.length === 0) return null;

  // Calculate scales
  const minPrice = Math.min(...candles.map(c => c.low)) - 5;
  const maxPrice = Math.max(...candles.map(c => c.high)) + 5;
  const priceRange = maxPrice - minPrice;

  const getRelativeY = (price: number) => {
    return 100 - ((price - minPrice) / priceRange) * 100;
  };

  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center pointer-events-none select-none">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full scale-75 animate-pulse" />
      
      {/* Scale Wrapper for Responsiveness */}
      <div className="scale-[0.7] md:scale-90 lg:scale-100 flex items-center justify-center w-full">
        {/* Main Terminal Frame */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotateX: [15, 20, 15],
            rotateY: [-10, -5, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ perspective: "1000px" }}
          className="relative z-20 w-[360px] sm:w-[480px] h-[320px] sm:h-[360px] rounded-2xl bg-surface/60 backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="h-8 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-accent/40" />
            <div className="w-2 h-2 rounded-full bg-action/40" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="ml-auto text-[8px] font-black text-white/20 tracking-widest uppercase font-sans flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-action animate-pulse" />
              Live.Terminal.v4
            </div>
          </div>

          {/* Chart Area */}
          <div className="flex-1 p-6 flex flex-col">
            <div className="relative flex-1 flex items-end justify-between gap-1">
              <AnimatePresence initial={false}>
                {candles.map((c) => (
                  <motion.div 
                    key={c.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 flex flex-col items-center relative h-full justify-center"
                  >
                    {/* Wick */}
                    <div 
                      className={`absolute w-[1px] ${c.isGreen ? 'bg-action/40' : 'bg-accent/40'}`}
                      style={{ 
                        top: `${getRelativeY(c.high)}%`, 
                        bottom: `${100 - getRelativeY(c.low)}%` 
                      }}
                    />
                    {/* Body */}
                    <div 
                      className={`relative w-full max-w-[10px] rounded-sm transition-colors duration-200 ${c.isGreen ? 'bg-action shadow-[0_0_10px_rgba(174,234,0,0.3)]' : 'bg-accent shadow-[0_0_10px_rgba(0,229,255,0.3)]'}`}
                      style={{ 
                        top: `${Math.min(getRelativeY(c.open), getRelativeY(c.close)) - 50}%`,
                        height: `${Math.max(2, Math.abs(getRelativeY(c.open) - getRelativeY(c.close)))}%`,
                        marginTop: '100%'
                      }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Price Line */}
              <motion.div 
                className="absolute right-0 left-0 border-t border-dashed border-white/20 z-10"
                style={{ top: `${getRelativeY(currentPrice)}%` }}
              >
                <div className="absolute right-0 -top-2 bg-action text-black text-[8px] font-black px-1 rounded-sm">
                  {currentPrice.toFixed(2)}
                </div>
              </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-white/5">
              <div className="space-y-1">
                <div className="text-[7px] font-black text-text-muted uppercase tracking-widest font-sans text-center md:text-left">Symbol</div>
                <div className="text-[10px] font-black text-white text-center md:text-left tracking-tighter uppercase">BTC.PERP</div>
              </div>
              <div className="space-y-1">
                <div className="text-[7px] font-black text-text-muted uppercase tracking-widest font-sans text-center">Volume</div>
                <div className="text-[10px] font-black text-white text-center tracking-tighter italic uppercase">12.4M</div>
              </div>
              <div className="space-y-1">
                <div className="text-[7px] font-black text-text-muted uppercase tracking-widest font-sans text-center md:text-right">Spread</div>
                <div className="text-[10px] font-black text-action text-center md:text-right tracking-tighter uppercase font-mono">0.01%</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Metrics */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-4 z-30 p-3 rounded-xl bg-surface border border-white/10 shadow-2xl"
        >
          <div className="text-[9px] font-black uppercase tracking-tighter flex flex-col">
            <span className="text-text-muted mb-1">RSI.14</span>
            <span className="text-action text-lg tracking-tighter">68.42</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
