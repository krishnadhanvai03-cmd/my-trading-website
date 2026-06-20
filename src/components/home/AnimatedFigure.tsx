"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Candle {
  id: string;
  open: number;
  close: number;
  high: number;
  low: number;
  isGreen: boolean;
}

export function AnimatedFigure() {
  const [candles, setCandles] = useState<Candle[]>([]);
  const [currentPrice, setCurrentPrice] = useState(64240);
  
  // Use a ref for the base price to keep simulation consistent
  const lastPriceRef = useRef(64240);

  const generateUID = () => Math.random().toString(36).substring(2, 15);

  // Initialize with some data on mount
  useEffect(() => {
    let lastClose = 64200;
    const initialCandles = [...Array(15)].map(() => {
      const open = lastClose;
      const close = open + (Math.random() * 40 - 20);
      const high = Math.max(open, close) + Math.random() * 10;
      const low = Math.min(open, close) - Math.random() * 10;
      lastClose = close;
      return {
        id: generateUID(),
        open,
        close,
        high,
        low,
        isGreen: close >= open,
      };
    });
    setCandles(initialCandles);
    setCurrentPrice(lastClose);
    lastPriceRef.current = lastClose;
  }, []);

  // Live simulation
  useEffect(() => {
    if (candles.length === 0) return;

    const interval = setInterval(() => {
      setCandles((prev) => {
        if (prev.length === 0) return prev;
        
        const lastCandle = prev[prev.length - 1];
        
        // Fluctuating current candle price
        const priceChange = (Math.random() * 4 - 2);
        const newClose = lastCandle.close + priceChange;
        const newHigh = Math.max(lastCandle.high, newClose);
        const newLow = Math.min(lastCandle.low, newClose);
        
        setCurrentPrice(newClose);
        lastPriceRef.current = newClose;

        const updatedLast = {
          ...lastCandle,
          close: newClose,
          high: newHigh,
          low: newLow,
          isGreen: newClose >= lastCandle.open,
        };

        // Decision: update last or start new
        // Approx every 10 ticks (3s) we start a new candle
        const shouldStartNew = Math.random() > 0.9;

        if (shouldStartNew) {
          const nextOpen = updatedLast.close;
          const nextCandle = {
            id: generateUID(),
            open: nextOpen,
            close: nextOpen,
            high: nextOpen,
            low: nextOpen,
            isGreen: true,
          };
          // Keep array size stable (max 15)
          return [...prev.slice(1, -1), updatedLast, nextCandle];
        }

        // Just update the last one
        return [...prev.slice(0, -1), updatedLast];
      });
    }, 300);

    return () => clearInterval(interval);
  }, [candles.length]); // Re-run when candles are initialized

  // Scales calculation
  const { minPrice, maxPrice, priceRange } = useMemo(() => {
    if (candles.length === 0) return { minPrice: 0, maxPrice: 100, priceRange: 100 };
    const low = Math.min(...candles.map(c => c.low));
    const high = Math.max(...candles.map(c => c.high));
    const pad = (high - low) * 0.1 || 10;
    return {
      minPrice: low - pad,
      maxPrice: high + pad,
      priceRange: (high - low) + (pad * 2)
    };
  }, [candles]);

  const getRelativeY = (price: number) => {
    return ((maxPrice - price) / priceRange) * 100;
  };

  if (candles.length === 0) return null;

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
          <div className="flex-1 p-6 flex flex-col relative overflow-hidden">
            <div className="relative flex-1 flex items-stretch justify-between gap-1.5">
              <AnimatePresence initial={false}>
                {candles.map((c) => {
                  const top = getRelativeY(Math.max(c.open, c.close));
                  const bottom = getRelativeY(Math.min(c.open, c.close));
                  const height = Math.max(1, Math.abs(bottom - top));
                  const wickTop = getRelativeY(c.high);
                  const wickBottom = getRelativeY(c.low);

                  return (
                    <motion.div 
                      key={c.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.5, x: -40 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="flex-1 relative"
                    >
                      {/* Wick */}
                      <div 
                        className={`absolute left-1/2 -translate-x-1/2 w-[1px] ${c.isGreen ? 'bg-action/50' : 'bg-accent/50'}`}
                        style={{ 
                          top: `${wickTop}%`, 
                          height: `${wickBottom - wickTop}%` 
                        }}
                      />
                      {/* Body */}
                      <div 
                        className={`absolute left-0 right-0 rounded-sm transition-colors duration-200 ${c.isGreen ? 'bg-action shadow-[0_0_8px_rgba(174,234,0,0.4)]' : 'bg-accent shadow-[0_0_8px_rgba(0,229,255,0.4)]'}`}
                        style={{ 
                          top: `${top}%`,
                          height: `${height}%`
                        }}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              
              {/* Price Line */}
              <motion.div 
                className="absolute right-0 left-0 border-t border-dashed border-white/30 z-10 pointer-events-none"
                style={{ top: `${getRelativeY(currentPrice)}%` }}
              >
                <div className="absolute right-0 -top-2.5 bg-action text-black text-[9px] font-black px-1.5 py-0.5 rounded-sm shadow-lg">
                  {currentPrice.toFixed(2)}
                </div>
              </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-white/5">
              <div className="space-y-1">
                <div className="text-[7px] font-black text-text-muted uppercase tracking-widest font-sans">Symbol</div>
                <div className="text-[10px] font-black text-white tracking-tighter uppercase">BTC.PERP</div>
              </div>
              <div className="space-y-1">
                <div className="text-[7px] font-black text-text-muted uppercase tracking-widest font-sans text-center">Volume</div>
                <div className="text-[10px] font-black text-white text-center tracking-tighter italic uppercase">12.4M</div>
              </div>
              <div className="space-y-1 text-right">
                <div className="text-[7px] font-black text-text-muted uppercase tracking-widest font-sans">Spread</div>
                <div className="text-[10px] font-black text-action tracking-tighter uppercase font-mono">0.01%</div>
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
          className="absolute -top-12 -right-6 z-30 p-4 rounded-2xl bg-surface/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="text-[10px] font-black uppercase tracking-widest flex flex-col">
            <span className="text-text-muted mb-1">RSI.14</span>
            <span className="text-action text-2xl tracking-tighter italic">68.42</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
