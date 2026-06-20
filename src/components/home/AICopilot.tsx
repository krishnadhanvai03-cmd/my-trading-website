"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Check, Sparkles } from "lucide-react";

interface Message {
  sender: "user" | "copilot";
  text: string;
  timestamp: string;
}

export function AICopilot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "copilot",
      text: "System initialized. Standing by for market analytics, news summarization, or trade execution queries.",
      timestamp: "10:00:00"
    }
  ]);

  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const scenarioResponses = [
    {
      trigger: "news",
      response: "Ingested 184 financial filings. Highlight: Large-cap IT sector shows heavy institutional accumulation (+4.2% block trades). Risk alert: Inflation indices release at 17:30, expected volatility spike."
    },
    {
      trigger: "portfolio",
      response: "Portfolio Health checked: 88/100. Diversification is optimal. Risk exposure to crypto exceeds target by 2.4%; recommend hedging with gold derivative or trimming BTC holdings."
    },
    {
      trigger: "trade",
      response: "Detected momentum breakout on INFY. Bullish crossover on 15m chart confirmed. Entry target: 1,420, stop loss: 1,405, take profit: 1,460. Confidence interval: 92%."
    }
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    const userMsg: Message = {
      sender: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      let matched = scenarioResponses.find((r) =>
        text.toLowerCase().includes(r.trigger)
      );
      
      const defaultResp = "Analyzing queries across NSE/BSE networks. Identified bullish indicators in IT equities. Command executions ready.";
      const copilotMsg: Message = {
        sender: "copilot",
        text: matched ? matched.response : defaultResp,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages((prev) => [...prev, copilotMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="ai-copilot">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Editorial Content */}
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-black text-emerald-500 mb-6 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block">
            Advanced NLP Engine
          </div>
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[0.95] font-bold font-display tracking-tighter uppercase mb-6 text-white">
            Your Personal Market <span className="text-emerald-500">Intelligence.</span>
          </h2>
          <p className="text-text-muted text-base md:text-lg mb-8 font-medium leading-relaxed max-w-[45ch]">
            Query financial filings, summarize earnings, analyze portfolio vulnerabilities, or draft trade ideas in plain language.
          </p>

          <div className="space-y-4">
            {[
              { label: "Summarize tech earnings news", query: "Summarize today's tech news" },
              { label: "Analyze my portfolio exposure", query: "Analyze my portfolio risks" },
              { label: "Suggest trade ideas for INFY", query: "Suggest trade ideas based on momentum" }
            ].map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q.query)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/5 bg-[#080E1A]/40 hover:bg-[#080E1A]/80 hover:border-emerald-500/20 text-xs font-bold text-white uppercase tracking-tighter w-full text-left transition-all duration-200"
              >
                <Sparkles size={12} className="text-emerald-500" />
                <span>{q.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Chat terminal mockup */}
        <div>
          <div className="double-bezel border-white/5 bg-[#080E1A]/40 backdrop-blur-xl flex flex-col h-[480px] shadow-[0_30px_70px_rgba(0,0,0,0.9)] relative overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-6 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-[8px] font-black text-white/40 tracking-widest uppercase font-mono">copilot.session.active</span>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 font-mono text-xs text-white">
              <AnimatePresence initial={false}>
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-3 max-w-[85%] ${
                      m.sender === "user" ? "ml-auto flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`p-2 rounded-lg flex-shrink-0 ${
                      m.sender === "user" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    }`}>
                      {m.sender === "user" ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    
                    <div className={`p-3 rounded-xl border ${
                      m.sender === "user" 
                        ? "bg-blue-950/20 border-blue-500/15 text-white" 
                        : "bg-emerald-950/20 border-emerald-500/15 text-white"
                    }`}>
                      <p className="leading-relaxed whitespace-pre-wrap">{m.text}</p>
                      <span className="text-[8px] text-text-muted mt-1.5 block text-right font-sans font-bold">
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
                    <Bot size={14} className="text-emerald-500 animate-pulse" />
                    <span className="animate-pulse font-sans font-bold uppercase tracking-widest text-[9px]">AI is parsing logs...</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t border-white/5 bg-black/40 flex gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(inputVal)}
                placeholder="Ask Co-pilot: e.g. Analyze my portfolio news risks..."
                className="flex-1 bg-black/50 border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500/30 transition-all font-mono placeholder:text-white/20"
              />
              <button
                onClick={() => handleSend(inputVal)}
                className="p-2.5 bg-emerald-500 hover:bg-emerald-400 text-black rounded-lg transition-colors flex-shrink-0 cursor-pointer active:scale-95"
              >
                <Send size={14} strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
