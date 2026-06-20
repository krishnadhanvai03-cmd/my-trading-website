"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bot, BarChart3, ShieldAlert, BookOpen, Search, Eye, Globe, Sparkles } from "lucide-react";

export function CentralShowcase() {
  const nodes = [
    { name: "AI Copilot", icon: <Bot size={16} /> },
    { name: "Portfolio Intelligence", icon: <BarChart3 size={16} /> },
    { name: "Risk Engine", icon: <ShieldAlert size={16} /> },
    { name: "Trading Journal", icon: <BookOpen size={16} /> },
    { name: "Market Research", icon: <Search size={16} /> },
    { name: "Watchlists", icon: <Eye size={16} /> },
    { name: "Global Markets", icon: <Globe size={16} /> },
    { name: "Demo Trading", icon: <Sparkles size={16} /> }
  ];

  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-10 overflow-hidden bg-[#030303]" id="central-showcase">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] font-black font-display tracking-tighter uppercase text-white mb-6">
          THE CENTRAL <span className="text-emerald-500">OPERATING</span> SYSTEM.
        </h2>
        <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto font-medium leading-tight">
          Unify every tool, insight, and metric into one responsive layout. No lag, no friction.
        </p>
      </div>

      {/* Orbit Visualization Container */}
      <div className="relative w-full min-h-[500px] md:min-h-[700px] flex items-center justify-center">
        
        {/* Connection Lines (SVG) - visible only on desktop */}
        <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
          <svg className="w-[600px] h-[600px] opacity-25">
            {/* Main Outer Orbit Ring */}
            <circle
              cx="300"
              cy="300"
              r="240"
              fill="none"
              stroke="url(#orbitGlow)"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              className="animate-[spin_60s_linear_infinite]"
            />
            {/* Neon glowing center ring */}
            <circle
              cx="300"
              cy="300"
              r="170"
              fill="none"
              stroke="rgba(16,185,129,0.15)"
              strokeWidth="1"
            />
            
            {/* Dynamic radial link paths depending on hover */}
            {nodes.map((node, i) => {
              const angle = (i * 2 * Math.PI) / nodes.length;
              const x2 = 300 + 240 * Math.cos(angle);
              const y2 = 300 + 240 * Math.sin(angle);
              const isHovered = hoveredNode === node.name;
              
              return (
                <line
                  key={node.name}
                  x1="300"
                  y1="300"
                  x2={x2}
                  y2={y2}
                  stroke={isHovered ? "#10b981" : "rgba(255,255,255,0.05)"}
                  strokeWidth={isHovered ? "2" : "1"}
                  className="transition-all duration-300"
                />
              );
            })}
            
            <defs>
              <linearGradient id="orbitGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Center: Large Floating Mockup Dashboard */}
        <motion.div
          animate={{
            y: [-12, 12, -12],
            rotateX: [10, 12, 10],
            rotateY: [-5, 0, -5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ perspective: "1000px" }}
          className="relative z-20 w-[300px] sm:w-[400px] lg:w-[320px] xl:w-[380px] p-6 rounded-2xl bg-[#080E1A]/90 border border-white/10 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          {/* Mock Window bar */}
          <div className="flex items-center gap-1.5 mb-4 border-b border-white/5 pb-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
            <div className="w-2 h-2 rounded-full bg-blue-500/50" />
            <span className="text-[7px] text-text-muted font-bold font-mono tracking-widest uppercase ml-auto">Core.Terminal.sh</span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-[10px] text-text-muted font-bold">
              <span>Main Engine STATUS</span>
              <span className="text-emerald-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Online
              </span>
            </div>
            
            {/* Simulated main chart */}
            <div className="w-full h-[100px] bg-black/40 rounded-lg border border-white/5 overflow-hidden flex items-end p-2">
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <path
                  d="M0,35 Q10,12 25,30 T55,5 T80,18 L100,5"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Horizontal reference grids */}
                <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded bg-black/40 border border-white/5 text-center">
                <div className="text-[7px] text-text-muted font-bold uppercase tracking-wider">P&L Daily</div>
                <div className="text-[10px] font-black text-emerald-400 font-mono mt-0.5">+4.65%</div>
              </div>
              <div className="p-2 rounded bg-black/40 border border-white/5 text-center">
                <div className="text-[7px] text-text-muted font-bold uppercase tracking-wider">NAV</div>
                <div className="text-[10px] font-black text-white font-mono mt-0.5">₹2.4M</div>
              </div>
              <div className="p-2 rounded bg-black/40 border border-white/5 text-center">
                <div className="text-[7px] text-text-muted font-bold uppercase tracking-wider">Drawdown</div>
                <div className="text-[10px] font-black text-white font-mono mt-0.5">0.12%</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Orbit Node items - Absolute positioned in circles on Desktop, grid fallback on tablet/mobile */}
        <div className="absolute inset-0 lg:block flex items-center justify-center flex-wrap gap-4 pointer-events-none mt-[400px] lg:mt-0 max-w-[90%] sm:max-w-[70%] mx-auto lg:max-w-none">
          {nodes.map((node, i) => {
            const angle = (i * 2 * Math.PI) / nodes.length;
            const x = 240 * Math.cos(angle);
            const y = 240 * Math.sin(angle);
            const isHovered = hoveredNode === node.name;

            return (
              <motion.div
                key={node.name}
                onMouseEnter={() => setHoveredNode(node.name)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`pointer-events-auto rounded-full border border-white/10 bg-[#080E1A]/90 backdrop-blur-xl px-4 py-2 flex items-center gap-2 shadow-[0_10px_20px_rgba(0,0,0,0.5)] cursor-pointer text-white transition-all duration-300 ${
                  isHovered ? "border-emerald-500/40 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] scale-105 z-30" : ""
                }`}
                style={{
                  position: "absolute" as const,
                  transform: "translate(-50%, -50%)",
                  left: "50%",
                  top: "50%",
                }}
                // We use inline styling + custom motion to align them dynamically on Desktop,
                // while bypassing positioning rules on mobile by resetting style properties
                animate={{
                  x: typeof window !== "undefined" && window.innerWidth >= 1024 ? x : 0,
                  y: typeof window !== "undefined" && window.innerWidth >= 1024 ? y : 0,
                  // Adding a tiny floating oscillation
                  translateY: [0, (i % 2 === 0 ? 5 : -5), 0]
                }}
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  y: { type: "spring", stiffness: 200, damping: 25 },
                  translateY: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.3 }
                }}
              >
                <div className={`${isHovered ? "text-emerald-400 animate-pulse" : "text-text-muted"}`}>{node.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-wider">{node.name}</span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
