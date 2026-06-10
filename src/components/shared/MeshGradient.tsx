"use client";

import React from "react";
import { motion } from "framer-motion";

export function MeshGradient() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {/* Primary Accent Orb */}
      <motion.div 
        animate={{
          x: ["0%", "15%", "-5%", "0%"],
          y: ["0%", "-5%", "10%", "0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full blur-[150px] opacity-20"
        style={{
          background: "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
          top: "-20%",
          right: "-10%",
        }}
      />
      
      {/* Secondary Accent Orb */}
      <motion.div 
        animate={{
          x: ["0%", "-10%", "5%", "0%"],
          y: ["0%", "15%", "-5%", "0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full blur-[120px] opacity-15"
        style={{
          background: "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
          bottom: "0%",
          left: "0%",
        }}
      />

      {/* Tertiary Subtle Glow */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-full h-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.05) 0%, transparent 80%)",
        }}
      />
    </div>
  );
}
