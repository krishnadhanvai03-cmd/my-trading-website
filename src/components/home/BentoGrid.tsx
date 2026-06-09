"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Activity, ShieldCheck, Headset, TrendingUp } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] } 
  }
};

export function BentoGrid() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-10" id="services">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="eyebrow-tag mb-6">Capabilities</div>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-display">Institutional Tools for Every Trader</h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]"
      >
        <motion.article variants={itemVariants} className="double-bezel md:col-span-8 md:row-span-2 group">
          <div className="p-6 md:p-8 h-full flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
            <Activity className="text-accent mb-6 w-10 h-10" strokeWidth={1.25} />
            <h3 className="text-2xl font-display mb-4">Real-time AI Analytics</h3>
            <p className="text-text-muted">Our proprietary neural networks process millions of data points per second to identify high-probability setups before they hit the mainstream.</p>
          </div>
        </motion.article>

        <motion.article variants={itemVariants} className="double-bezel md:col-span-4 md:row-span-1 group">
          <div className="p-6 md:p-8 h-full flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
            <ShieldCheck className="text-accent mb-4 w-8 h-8" strokeWidth={1.25} />
            <h3 className="text-xl font-display mb-2">Secured Protocol</h3>
            <p className="text-text-muted text-sm">Multi-signature auth and cold-storage integrations.</p>
          </div>
        </motion.article>

        <motion.article variants={itemVariants} className="double-bezel md:col-span-4 md:row-span-1 group">
          <div className="p-6 md:p-8 h-full flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
            <Headset className="text-accent mb-4 w-8 h-8" strokeWidth={1.25} />
            <h3 className="text-xl font-display mb-2">Priority Support</h3>
            <p className="text-text-muted text-sm">Direct access to quant analysts 24/7.</p>
          </div>
        </motion.article>

        <motion.article variants={itemVariants} className="double-bezel md:col-span-12 md:row-span-1 group">
          <div className="p-6 md:p-8 h-full flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
            <TrendingUp className="text-accent mb-4 w-10 h-10" strokeWidth={1.25} />
            <h3 className="text-2xl font-display mb-4">Automated Execution</h3>
            <p className="text-text-muted">Deploy complex algorithmic strategies with sub-millisecond latency. Execute with the same speed as the big firms.</p>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}
