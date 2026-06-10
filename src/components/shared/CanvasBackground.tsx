"use client";

import React, { useEffect, useRef } from "react";

interface Candle {
  x: number;
  y: number;
  open: number;
  close: number;
  high: number;
  low: number;
  depth: number;
  speed: number;
  color: string;
}

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let candles: Candle[] = [];
    const baseSpeed = 0.8;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const generateCandle = (y: number): Candle => {
      const open = Math.random() * 40 + y;
      const close = open + (Math.random() * 30 - 15);
      const high = Math.min(open, close) - Math.random() * 10;
      const low = Math.max(open, close) + Math.random() * 10;
      const x = Math.random() * canvas.width;
      const depth = Math.random();
      const speed = baseSpeed + depth * 1.5;
      const color = close > open ? "#ccff00" : "#ffffff";
      return { x, y, open, close, high, low, depth, speed, color };
    };

    const createCandles = () => {
      candles = [];
      for (let i = 0; i < 60; i++) {
        candles.push(generateCandle(Math.random() * canvas.height));
      }
    };

    const drawCandlestick = (c: Candle) => {
      const scale = 0.5 + c.depth * 0.7;
      ctx.globalAlpha = 0.1 + c.depth * 0.2;
      ctx.strokeStyle = c.color;
      ctx.lineWidth = 1 + c.depth * 2;
      ctx.beginPath();
      ctx.moveTo(c.x, c.high);
      ctx.lineTo(c.x, c.low);
      ctx.stroke();
      ctx.fillStyle = c.color;
      ctx.fillRect(
        c.x - (4 * scale), 
        Math.min(c.open, c.close),
        8 * scale, 
        Math.abs(c.open - c.close)
      );
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      candles.forEach((c) => {
        c.y += c.speed;
        c.open += c.speed;
        c.close += c.speed;
        c.high += c.speed;
        c.low += c.speed;
        drawCandlestick(c);
      });
      for (let i = 0; i < candles.length; i++) {
        if (candles[i].open > canvas.height + 20) {
          candles[i] = generateCandle(-20);
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    createCandles();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-[#020202]" />;
}
