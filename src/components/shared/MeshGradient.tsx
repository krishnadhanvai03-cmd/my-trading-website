"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function MeshGradient() {
  const reduce = useReducedMotion();

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {/* Primary accent orb - top right */}
      <motion.div
        animate={
          reduce
            ? {}
            : {
                x: ["0%", "10%", "-3%", "0%"],
                y: ["0%", "-5%", "8%", "0%"],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full blur-[140px] opacity-[0.07]"
        style={{
          background: "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
          top: "-25%",
          right: "-15%",
        }}
      />

      {/* Secondary orb - bottom left */}
      <motion.div
        animate={
          reduce
            ? {}
            : {
                x: ["0%", "-8%", "4%", "0%"],
                y: ["0%", "10%", "-3%", "0%"],
              }
        }
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] opacity-[0.05]"
        style={{
          background: "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
          bottom: "-10%",
          left: "-10%",
        }}
      />

      {/* Subtle center glow */}
      <div
        className="absolute w-full h-full opacity-[0.02] blur-3xl"
        style={{
          background: "radial-gradient(circle at center, var(--accent) 0%, transparent 80%)",
        }}
      />
    </div>
  );
}
