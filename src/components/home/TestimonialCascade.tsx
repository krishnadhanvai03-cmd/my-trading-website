"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const cascadeVariants: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] } 
  }
};

export function TestimonialCascade() {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto relative z-10 overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="eyebrow-tag mb-6">Validation</div>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-display">Trusted by Quantitative Experts</h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 lg:[perspective:1000px] group"
      >
        <motion.div 
          variants={cascadeVariants}
          className="double-bezel w-full lg:w-96 p-8 flex-shrink-0 z-10 lg:translate-x-16 lg:-translate-z-[100px] lg:rotate-y-[10deg] lg:brightness-75 lg:blur-[2px] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] lg:group-hover:translate-x-0 lg:group-hover:translate-z-0 lg:group-hover:rotate-y-0 lg:group-hover:brightness-100 lg:group-hover:blur-0 lg:group-hover:-mx-4 border-white/5"
        >
          <p className="text-lg leading-tight text-foreground font-medium mb-8">
            &ldquo;The sub-millisecond execution and latency architecture are unmatched. TradeBuddy&apos;s infrastructure is what gives us our edge.&rdquo;
          </p>
          <div className="flex items-center gap-4 mt-auto">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-black text-xs border border-accent/20">JD</div>
            <div>
              <strong className="block text-accent font-display font-black tracking-tighter">John Doe</strong>
              <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Head of Algo Trading</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={cascadeVariants}
          className="double-bezel w-full lg:w-[28rem] p-6 md:p-10 flex-shrink-0 z-30 shadow-[0_40px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(0,229,255,0.1)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] border-accent/20 bg-accent/5"
        >
          <p className="text-xl leading-tight text-foreground font-medium mb-8">
            &ldquo;Finally, an interface that doesn&apos;t compromise power for aesthetics. The dark tech aesthetic reduces eye strain during heavy sessions.&rdquo;
          </p>
          <div className="flex items-center gap-4 mt-auto">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent font-black text-sm border border-accent/30">AS</div>
            <div>
              <strong className="block text-white font-display text-lg font-black tracking-tighter">Alice Smith</strong>
              <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Quantitative Analyst</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={cascadeVariants}
          className="double-bezel w-full lg:w-96 p-6 md:p-8 flex-shrink-0 z-20 lg:-translate-x-16 lg:-translate-z-[100px] lg:-rotate-y-[10deg] lg:brightness-75 lg:blur-[2px] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] lg:group-hover:translate-x-0 lg:group-hover:translate-z-0 lg:group-hover:rotate-y-0 lg:group-hover:brightness-100 lg:group-hover:blur-0 lg:group-hover:-mx-4 border-white/5"
        >
          <p className="text-lg leading-tight text-foreground font-medium mb-8">
            &ldquo;Security is non-negotiable. The multi-signature protocols and deep encryption give us complete peace of mind when moving volume.&rdquo;
          </p>
          <div className="flex items-center gap-4 mt-auto">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/50 font-black text-xs border border-white/10">MB</div>
            <div>
              <strong className="block text-white/80 font-display font-black tracking-tighter">Michael Brown</strong>
              <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Risk Management Director</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
