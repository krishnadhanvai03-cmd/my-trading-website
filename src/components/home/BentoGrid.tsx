"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Activity, ShieldCheck, Zap, BarChart3 } from "lucide-react";

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
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } 
  }
};

export function BentoGrid() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="services">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2rem,6vw,4rem)] leading-[0.9] font-black font-display tracking-tighter text-balance uppercase">
            INSTITUTIONAL <span className="text-accent">TOOLS</span> FOR EVERY TRADER.
          </h2>
        </div>
        <p className="text-text-muted max-w-sm font-medium leading-tight text-lg">
          We provide the infrastructure typically reserved for top-tier quantitative hedge funds.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(250px,auto)] md:auto-rows-[minmax(280px,auto)]"
      >
        {/* Large Feature 1 */}
        <motion.article variants={itemVariants} className="double-bezel md:col-span-8 md:row-span-2 group overflow-hidden relative border-white/5">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent/10 via-transparent to-transparent pointer-events-none" />
          <div className="p-6 md:p-12 h-full flex flex-col relative z-10">
            <Activity className="text-accent mb-6 md:mb-8 w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
            <div className="mt-auto">
              <h3 className="text-2xl md:text-3xl font-black font-display mb-4 uppercase tracking-tighter">Real-time AI Analytics</h3>
              <p className="text-text-muted text-base md:text-lg max-w-md font-medium leading-tight">
                Our proprietary neural networks process millions of data points per second to identify high-probability setups before they hit the mainstream.
              </p>
            </div>
          </div>
        </motion.article>

        {/* Small Feature 1 */}
        <motion.article variants={itemVariants} className="double-bezel md:col-span-4 md:row-span-1 group bg-gradient-to-br from-white/5 to-transparent border-white/5">
          <div className="p-6 md:p-8 h-full flex flex-col relative z-10">
            <ShieldCheck className="text-action mb-4 md:mb-6 w-8 h-8" strokeWidth={1.5} />
            <h3 className="text-lg md:text-xl font-black font-display mb-2 uppercase tracking-tighter">Secured Protocol</h3>
            <p className="text-text-muted text-sm font-medium leading-tight">
              Multi-signature authentication and cold-storage integrations ensure your assets remain impenetrable.
            </p>
          </div>
        </motion.article>

        {/* Small Feature 2 */}
        <motion.article variants={itemVariants} className="double-bezel md:col-span-4 md:row-span-1 group border-white/5">
          <div className="p-6 md:p-8 h-full flex flex-col relative z-10">
            <BarChart3 className="text-accent mb-4 md:mb-6 w-8 h-8" strokeWidth={1.5} />
            <h3 className="text-lg md:text-xl font-black font-display mb-2 uppercase tracking-tighter">Priority Support</h3>
            <p className="text-text-muted text-sm font-medium leading-tight">
              Direct access to our quantitative analysts and technical support team, 24/7.
            </p>
          </div>
        </motion.article>

        {/* Medium Feature 1 */}
        <motion.article variants={itemVariants} className="double-bezel md:col-span-12 md:row-span-1 group overflow-hidden relative bg-action/5 border-white/5">
          <div className="p-6 md:p-10 h-full flex flex-col relative z-10">
            <Zap className="text-action mb-4 md:mb-6 w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
            <h3 className="text-xl md:text-2xl font-black font-display mb-2 md:mb-4 uppercase tracking-tighter">Automated Execution</h3>
            <p className="text-text-muted font-medium text-base md:text-lg leading-tight">
              Deploy complex algorithmic strategies with sub-millisecond latency. Execute with the same speed as the big firms.
            </p>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}
