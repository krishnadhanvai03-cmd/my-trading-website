"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function CTABand() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 px-5 lg:px-8 max-w-[1280px] mx-auto">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="binance-card p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <h2 className="text-[clamp(1.25rem,3vw,2rem)] leading-[1.2] font-bold tracking-tight text-on-dark mb-2">
            Secure, Low-Fee Trading on Binance
          </h2>
          <p className="text-sm text-muted max-w-lg">
            Join millions of users buying, selling, and earning crypto on the
            world&apos;s most trusted platform.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center justify-center h-12 px-8 bg-primary text-on-primary text-sm font-semibold rounded-md hover:bg-primary-active active:scale-[0.98] transition-all duration-150 shrink-0"
        >
          Sign Up Now
        </a>
      </motion.div>
    </section>
  );
}
