"use client";

import React from "react";

export function MeshGradient() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <div 
        className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[80px] opacity-60"
        style={{
          background: "radial-gradient(circle at center, var(--accent-glow) 0%, transparent 60%)",
          top: "10%",
          left: "10%",
        }}
      />
      <div 
        className="absolute w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full blur-[80px] opacity-60"
        style={{
          background: "radial-gradient(circle at center, var(--purple-glow) 0%, transparent 60%)",
          bottom: "10%",
          right: "10%",
        }}
      />
    </div>
  );
}
