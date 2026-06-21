"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Coin {
  symbol: string;
  name: string;
  price: string;
  change: string;
  volume: string;
  up: boolean;
}

type TabName = "Popular" | "New listing" | "Top gainers";

const tabs: TabName[] = ["Popular", "New listing", "Top gainers"];

const coinData: Record<TabName, Coin[]> = {
  Popular: [
    { symbol: "BTC", name: "Bitcoin", price: "64,240.50", change: "+4.25", volume: "1.2B", up: true },
    { symbol: "ETH", name: "Ethereum", price: "3,456.80", change: "+2.18", volume: "580M", up: true },
    { symbol: "BNB", name: "BNB", price: "598.40", change: "+1.92", volume: "210M", up: true },
    { symbol: "SOL", name: "Solana", price: "178.60", change: "-0.84", volume: "420M", up: false },
    { symbol: "XRP", name: "XRP", price: "0.6245", change: "+3.14", volume: "310M", up: true },
  ],
  "New listing": [
    { symbol: "JUP", name: "Jupiter", price: "1.24", change: "+18.40", volume: "85M", up: true },
    { symbol: "W", name: "Wormhole", price: "0.68", change: "+12.30", volume: "62M", up: true },
    { symbol: "ENA", name: "Ethena", price: "1.42", change: "+8.50", volume: "45M", up: true },
    { symbol: "REZ", name: "Renzo", price: "0.34", change: "-4.20", volume: "28M", up: false },
    { symbol: "BB", name: "BounceBit", price: "0.88", change: "+6.10", volume: "18M", up: true },
  ],
  "Top gainers": [
    { symbol: "PEPE", name: "Pepe", price: "0.0000124", change: "+42.80", volume: "1.8B", up: true },
    { symbol: "WIF", name: "dogwifhat", price: "2.84", change: "+28.50", volume: "920M", up: true },
    { symbol: "FLOKI", name: "FLOKI", price: "0.000214", change: "+22.10", volume: "410M", up: true },
    { symbol: "BONK", name: "Bonk", price: "0.0000248", change: "+18.60", volume: "380M", up: true },
    { symbol: "MEME", name: "Memecoin", price: "0.042", change: "+15.30", volume: "120M", up: true },
  ],
};

export function MarketsTable() {
  const [activeTab, setActiveTab] = useState(0);
  const reduce = useReducedMotion();

  const currentData = coinData[tabs[activeTab]];

  return (
    <section className="py-20 px-5 lg:px-8 max-w-[1280px] mx-auto" id="markets">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Heading */}
        <div className="lg:col-span-4">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] font-bold tracking-tight text-on-dark mb-4"
          >
            Explore 350+{" "}
            <span className="text-primary">cryptocurrencies</span>
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted text-sm leading-relaxed max-w-sm"
          >
            Buy and sell Bitcoin, Ethereum, and 350+ altcoins with the lowest
            fees in the industry. Institutional-grade security and deep liquidity.
          </motion.p>
        </div>

        {/* Right: Markets Table Card */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-8 binance-card overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex items-center gap-0 px-6 pt-5">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 text-sm font-semibold transition-colors duration-150 relative ${
                  idx === activeTab
                    ? "text-on-dark"
                    : "text-muted hover:text-muted-strong"
                }`}
              >
                {tab}
                {idx === activeTab && (
                  <motion.div
                    layoutId="marketTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-hairline-dark">
            <div className="col-span-4">Pair</div>
            <div className="col-span-2 text-right">Last Price</div>
            <div className="col-span-2 text-right">24h Change</div>
            <div className="col-span-2 text-right hidden sm:block">24h Volume</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-hairline-dark">
            {currentData.map((coin, idx) => (
              <motion.div
                key={`${tabs[activeTab]}-${coin.symbol}`}
                initial={reduce ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="grid grid-cols-12 gap-4 px-6 py-3.5 items-center hover:bg-surface-elevated-dark transition-colors duration-150 cursor-pointer"
              >
                {/* Pair */}
                <div className="col-span-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-elevated-dark flex items-center justify-center text-xs font-bold text-on-dark font-mono">
                    {coin.symbol.slice(0, 2)}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-on-dark block">
                      {coin.symbol}/USDT
                    </span>
                    <span className="text-xs text-muted">{coin.name}</span>
                  </div>
                </div>

                {/* Last Price */}
                <div className="col-span-2 text-right">
                  <span className="text-sm font-medium text-on-dark font-mono tabular-nums">
                    ${coin.price}
                  </span>
                </div>

                {/* 24h Change */}
                <div className="col-span-2 text-right">
                  <span
                    className={`text-sm font-medium font-mono tabular-nums ${
                      coin.up ? "text-trading-up" : "text-trading-down"
                    }`}
                  >
                    {coin.change}%
                  </span>
                </div>

                {/* 24h Volume */}
                <div className="col-span-2 text-right hidden sm:block">
                  <span className="text-sm text-muted font-mono tabular-nums">
                    {coin.volume}
                  </span>
                </div>

                {/* Action */}
                <div className="col-span-2 text-right flex items-center justify-end">
                  <button
                    className={`px-4 py-1.5 text-xs font-semibold rounded transition-all duration-150 ${
                      coin.up
                        ? "bg-trading-up/10 text-trading-up hover:bg-trading-up/20"
                        : "bg-trading-down/10 text-trading-down hover:bg-trading-down/20"
                    }`}
                  >
                    {coin.up ? "Buy" : "Sell"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All */}
          <div className="px-6 py-4 border-t border-hairline-dark">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-active transition-colors"
            >
              View All Markets
              <ChevronRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
