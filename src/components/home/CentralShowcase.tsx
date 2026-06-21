"use client";

import React from "react";
import { motion } from "framer-motion";

const nodes = [
  "AI Copilot",
  "Portfolio Intelligence",
  "Risk Engine",
  "Trading Journal",
  "Market Research",
  "Watchlists",
  "Global Markets",
  "Demo Trading",
];

export function CentralShowcase() {
  return (
    <section className="py-32 relative z-10 overflow-hidden bg-canvas-dark" id="portfolio">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        
        <div className="text-center mb-20 relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold text-ink tracking-tight mb-6"
          >
            The Operating System <br className="hidden md:block" />
            <span className="text-primary">For Modern Traders</span>
          </motion.h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Unify trading, investing, research, portfolio intelligence, AI insights, and market analysis into one centralized command center.
          </p>
        </div>

        <div className="relative h-[600px] md:h-[800px] flex items-center justify-center mt-10">
          
          {/* Orbital Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-white/5"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
              className="absolute w-[550px] h-[550px] md:w-[850px] md:h-[850px] rounded-full border border-white/5 border-dashed"
            />
          </div>

          {/* Central Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-30 w-[320px] md:w-[600px] aspect-[4/3] glass-card p-2 md:p-4 shadow-[0_0_100px_rgba(16,185,129,0.15)]"
          >
            <div className="w-full h-full bg-surface-elevated-dark rounded-lg md:rounded-xl overflow-hidden flex flex-col border border-white/5">
              {/* Fake Window Header */}
              <div className="h-8 md:h-10 bg-surface-card-dark flex items-center px-4 border-b border-white/5 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              
              {/* Fake Dashboard Content */}
              <div className="flex-1 p-4 md:p-6 flex flex-col gap-4">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="h-3 w-20 bg-white/10 rounded mb-2" />
                    <div className="h-6 md:h-8 w-32 md:w-48 bg-white/20 rounded" />
                  </div>
                  <div className="h-8 md:h-10 w-24 bg-primary/20 rounded border border-primary/30" />
                </div>
                
                <div className="flex-1 w-full bg-gradient-to-t from-secondary/10 to-transparent border-b border-secondary/30 relative mt-4">
                   <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,80 C20,80 30,50 50,60 C70,70 80,20 100,10" fill="none" stroke="var(--secondary)" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-3 md:gap-4 mt-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-12 md:h-16 bg-white/5 rounded flex flex-col justify-center px-3">
                      <div className="h-2 w-10 bg-white/10 rounded mb-2" />
                      <div className="h-3 w-16 bg-white/20 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Central Glow */}
            <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 mix-blend-screen" />
          </motion.div>

          {/* Orbiting Nodes */}
          {nodes.map((node, idx) => {
            const angle = (idx / nodes.length) * Math.PI * 2;
            // responsive radius calculation roughly based on standard breakpoints
            const radiusDesktop = 380;
            const radiusMobile = 180;
            
            return (
              <motion.div
                key={node}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                className="absolute z-40 hidden md:flex items-center justify-center"
                style={{
                  left: `calc(50% + ${Math.cos(angle) * radiusDesktop}px)`,
                  top: `calc(50% + ${Math.sin(angle) * radiusDesktop}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="relative group cursor-default">
                  {/* Connection Line to Center (Fake) */}
                  <svg className="absolute top-1/2 left-1/2 w-64 h-64 -translate-y-1/2 origin-left pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity" style={{ transform: `rotate(${Math.atan2(-Math.sin(angle), -Math.cos(angle))}rad)` }}>
                    <line x1="0" y1="128" x2="256" y2="128" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                  
                  <div className="glass-card px-4 py-2 rounded-full border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all whitespace-nowrap shadow-lg backdrop-blur-md relative z-10">
                    <span className="text-sm font-medium text-muted group-hover:text-ink transition-colors">{node}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}
