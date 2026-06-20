"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";

interface Message {
  sender: "user" | "copilot";
  text: string;
  timestamp: string;
}

export function AICopilot() {
  const reduce = useReducedMotion();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "copilot",
      text: "System initialized. Standing by for market analytics, news summarization, or trade execution queries.",
      timestamp: "10:00:00",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const scenarioResponses = [
    {
      trigger: "news",
      response:
        "Ingested 184 financial filings. Highlight: Large-cap IT sector shows heavy institutional accumulation (+4.2% block trades). Risk alert: Inflation indices release at 17:30, expected volatility spike.",
    },
    {
      trigger: "portfolio",
      response:
        "Portfolio Health checked: 88/100. Diversification is optimal. Risk exposure to crypto exceeds target by 2.4%; recommend hedging with gold derivative or trimming BTC holdings.",
    },
    {
      trigger: "trade",
      response:
        "Detected momentum breakout on INFY. Bullish crossover on 15m chart confirmed. Entry target: 1,420, stop loss: 1,405, take profit: 1,460. Confidence interval: 92%.",
    },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      const matched = scenarioResponses.find((r) =>
        text.toLowerCase().includes(r.trigger)
      );
      const defaultResp =
        "Analyzing queries across NSE/BSE networks. Identified bullish indicators in IT equities. Command executions ready.";
      const copilotMsg: Message = {
        sender: "copilot",
        text: matched ? matched.response : defaultResp,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, copilotMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="ai-copilot">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] font-bold tracking-tight mb-5 text-white">
            Your personal market{" "}
            <span className="text-accent">intelligence.</span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base mb-8 leading-relaxed max-w-[45ch]">
            Query financial filings, summarize earnings, analyze portfolio vulnerabilities, 
            or draft trade ideas in plain language.
          </p>

          <div className="space-y-3">
            {[
              { label: "Summarize tech earnings news", query: "Summarize today's tech news" },
              { label: "Analyze my portfolio exposure", query: "Analyze my portfolio risks" },
              { label: "Suggest trade ideas for INFY", query: "Suggest trade ideas based on momentum" },
            ].map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q.query)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/5 bg-surface/40 hover:bg-surface-elevated/60 hover:border-accent/15 text-xs font-medium text-white w-full text-left transition-all duration-200 group"
              >
                <span className="w-6 h-6 rounded-md bg-accent/8 text-accent flex items-center justify-center text-[10px] group-hover:bg-accent/15 transition-colors">
                  ✦
                </span>
                <span>{q.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Chat Demo */}
        <div>
          <div className="glass-card flex flex-col h-[480px] relative overflow-hidden">
            {/* Terminal bar */}
            <div className="h-10 border-b border-white/5 bg-white/2 flex items-center px-5 gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[10px] text-text-muted font-semibold font-mono ml-1">
                copilot.session.active
              </span>
            </div>

            {/* Messages */}
            <div className="flex-1 p-5 overflow-y-auto space-y-3 font-mono text-xs">
              <AnimatePresence initial={false}>
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2.5 max-w-[85%] ${
                      m.sender === "user" ? "ml-auto flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-lg flex-shrink-0 ${
                        m.sender === "user"
                          ? "bg-info/10 text-info border border-info/15"
                          : "bg-accent/10 text-accent border border-accent/15"
                      }`}
                    >
                      {m.sender === "user" ? <User size={12} /> : <Bot size={12} />}
                    </div>

                    <div
                      className={`p-3 rounded-xl border ${
                        m.sender === "user"
                          ? "bg-info/5 border-info/10 text-white"
                          : "bg-accent/5 border-accent/10 text-white"
                      }`}
                    >
                      <p className="leading-relaxed whitespace-pre-wrap font-sans text-xs">{m.text}</p>
                      <span className="text-[9px] text-text-muted mt-1.5 block text-right font-sans font-medium">
                        {m.timestamp}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-text-muted"
                  >
                    <Bot size={12} className="text-accent animate-pulse" />
                    <span className="animate-pulse font-sans font-semibold uppercase tracking-wider text-[9px]">
                      Parsing logs...
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/5 bg-black/20 flex gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(inputVal)}
                placeholder="Ask about markets, portfolio, trades..."
                className="flex-1 bg-black/30 border border-white/5 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-accent/25 transition-all font-sans placeholder:text-white/15"
              />
              <button
                onClick={() => handleSend(inputVal)}
                className="p-2.5 bg-accent hover:bg-emerald-400 text-black rounded-lg transition-colors flex-shrink-0 cursor-pointer active:scale-95"
              >
                <Send size={13} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
