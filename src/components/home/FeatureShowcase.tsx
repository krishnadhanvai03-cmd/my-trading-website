"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, BarChart3, ShieldAlert, Brain, Target, BookOpen, Globe2, Activity } from "lucide-react";

const features = [
  { id: "ai", label: "AI Market Copilot", icon: Brain },
  { id: "portfolio", label: "Portfolio Intelligence", icon: BarChart3 },
  { id: "risk", label: "Risk Analytics", icon: ShieldAlert },
  { id: "journal", label: "Trading Journal", icon: BookOpen },
  { id: "research", label: "Market Research", icon: Target },
  { id: "demo", label: "Demo Trading", icon: Activity },
  { id: "multi", label: "Multi-Market Access", icon: Globe2 },
];

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <section className="py-24 bg-surface-card-dark/30 relative z-10" id="features">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-ink mb-10 tracking-tight leading-tight"
            >
              Everything A Trader Needs. <br />
              <span className="text-primary">One Platform.</span>
            </motion.h2>

            <div className="space-y-2">
              {features.map((feature, idx) => {
                const isActive = activeFeature === feature.id;
                return (
                  <motion.button
                    key={feature.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "bg-surface-elevated-dark border border-white/10 shadow-lg" 
                        : "hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? "bg-primary/20 text-primary" : "bg-white/5 text-muted group-hover:text-ink"
                      }`}>
                        <feature.icon size={20} />
                      </div>
                      <span className={`font-semibold text-lg transition-colors ${
                        isActive ? "text-ink" : "text-muted hover:text-ink"
                      }`}>
                        {feature.label}
                      </span>
                    </div>
                    {isActive && (
                      <motion.div layoutId="activeFeatureArrow">
                        <ChevronRight className="text-primary" size={20} />
                      </motion.div>
                    )}
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Right: Dashboard Visualization */}
          <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                className="w-full h-full glass-card p-6 border border-white/10 flex flex-col shadow-2xl relative overflow-hidden"
              >
                {/* Simulated UI Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-danger/50" />
                    <div className="w-3 h-3 rounded-full bg-primary/50" />
                    <div className="w-3 h-3 rounded-full bg-success/50" />
                  </div>
                  <div className="h-6 w-32 bg-white/5 rounded-md" />
                </div>

                {/* Dashboard Grid Simulation */}
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="col-span-2 bg-white/5 rounded-xl p-4 flex flex-col justify-between">
                    <div className="h-4 w-24 bg-white/10 rounded mb-4" />
                    <div className="flex-1 w-full bg-gradient-to-t from-primary/20 to-transparent rounded-lg border border-primary/10 relative">
                      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0,100 C20,80 30,90 50,40 C70,10 80,30 100,0" fill="none" stroke="var(--primary)" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="h-4 w-20 bg-white/10 rounded mb-4" />
                    <div className="flex items-center justify-center h-24">
                      <div className="w-16 h-16 rounded-full border-4 border-secondary/30 border-t-secondary animate-spin" style={{ animationDuration: "3s" }} />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 space-y-3">
                    <div className="h-4 w-24 bg-white/10 rounded" />
                    <div className="h-2 w-full bg-white/10 rounded" />
                    <div className="h-2 w-3/4 bg-white/10 rounded" />
                    <div className="h-2 w-5/6 bg-white/10 rounded" />
                  </div>
                </div>

                {/* Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] mix-blend-screen pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
