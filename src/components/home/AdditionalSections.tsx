"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  UserPlus, 
  LineChart, 
  TrendingUp, 
  Activity, 
  ShieldCheck, 
  GraduationCap, 
  MessageSquare, 
  ChevronDown 
} from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="how-it-works">
      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
        <h2 className="text-[clamp(2rem,6vw,4rem)] leading-[0.9] font-black font-display tracking-tighter text-balance mb-6 uppercase">
          HOW <span className="text-accent">TRADEBUDDY</span> WORKS.
        </h2>
        <p className="text-text-muted text-base md:text-lg font-medium leading-tight">Get started with TradeBuddy in three simple steps. From sign-up to smart trading, we make it easy for you.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {[
          { icon: <UserPlus className="w-8 h-8 text-accent" />, step: "01", title: "Create Your Account", desc: "Sign up in minutes and set up your personalized trading profile. It&apos;s quick, secure, and free to start." },
          { icon: <LineChart className="w-8 h-8 text-action" />, step: "02", title: "Analyze & Strategize", desc: "Utilize our AI-powered tools to analyze market trends and develop winning trading strategies." },
          { icon: <TrendingUp className="w-8 h-8 text-accent" />, step: "03", title: "Execute Trades", desc: "Seamlessly execute your trades with confidence and monitor your portfolio in real-time." }
        ].map((item, i) => (
          <motion.div key={i} variants={itemVariants} className="double-bezel p-6 md:p-10 flex flex-col relative group border-white/5">
            <div className="absolute top-6 right-6 text-3xl md:text-4xl font-display font-black text-white/5">{item.step}</div>
            <div className="mb-6 md:mb-8">{item.icon}</div>
            <h3 className="text-lg md:text-xl font-black font-display mb-3 md:mb-4 text-foreground uppercase tracking-tighter">{item.title}</h3>
            <p className="text-text-muted text-sm font-medium leading-tight">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export function Vision() {
  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto relative z-10" id="our-vision">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="double-bezel p-8 md:p-16 text-center flex flex-col items-center justify-center border-accent/20 bg-accent/5"
      >
        <h2 className="text-3xl md:text-5xl font-black font-display mb-6 md:mb-8 uppercase tracking-tighter">OUR VISION FOR YOUR SUCCESS.</h2>
        <p className="text-text-muted text-lg md:text-xl max-w-3xl mb-10 md:mb-12 font-medium leading-tight">
          We envision a world where every trader, regardless of experience, has access to powerful tools and insights to achieve their financial goals. TradeBuddy is built on this principle.
        </p>
        <motion.button 
          whileTap={{ scale: 0.97 }}
          className="bg-accent text-black font-black px-10 md:px-12 py-4 rounded-full uppercase tracking-tighter text-sm hover:brightness-110 transition-all shadow-[0_0_30px_rgba(0,229,255,0.1)]"
        >
          Learn More About Our Mission
        </motion.button>
      </motion.div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10" id="why-choose-us">
      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
        <h2 className="text-[clamp(2rem,6vw,4rem)] leading-[0.9] font-black font-display tracking-tighter text-balance mb-6 uppercase">
          WHY CHOOSE <span className="text-accent">TRADEBUDDY?</span>
        </h2>
        <p className="text-text-muted text-base md:text-lg font-medium leading-tight">Beyond advanced features, we offer a commitment to your growth and security. Discover what sets us apart.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {[
          { icon: <Activity className="w-8 h-8 text-accent" />, title: "Cutting-Edge AI", desc: "Leverage predictive analytics and machine learning for smarter trading decisions." },
          { icon: <ShieldCheck className="w-8 h-8 text-action" />, title: "Unwavering Security", desc: "Your data and assets are protected with military-grade encryption and protocols." },
          { icon: <GraduationCap className="w-8 h-8 text-accent" />, title: "Educational Resources", desc: "Access a wealth of tutorials, webinars, and market insights to sharpen your skills." },
          { icon: <MessageSquare className="w-8 h-8 text-action" />, title: "Vibrant Community", desc: "Connect with fellow traders, share strategies, and grow together in a supportive environment." }
        ].map((item, i) => (
          <motion.div key={i} variants={itemVariants} className="double-bezel p-6 md:p-8 text-center flex flex-col items-center group hover:-translate-y-2 transition-all duration-300 border-white/5">
            <div className="mb-6 p-4 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors">{item.icon}</div>
            <h4 className="text-lg font-black font-display mb-3 text-foreground uppercase tracking-tighter">{item.title}</h4>
            <p className="text-[10px] text-text-muted font-bold leading-tight uppercase tracking-widest">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "What is TradeBuddy?", a: "TradeBuddy is an AI-powered platform designed to empower your trading decisions with advanced analytics, secure trading, and 24/7 support." },
    { q: "How does the AI assist my trading?", a: "Our AI leverages predictive analytics and machine learning to analyze market trends, provide insights, and help you develop smarter trading strategies." },
    { q: "Is my data secure with TradeBuddy?", a: "Absolutely. We prioritize your security with industry-leading encryption, multi-factor authentication, and robust protocols to protect your data and assets." },
    { q: "What kind of support can I expect?", a: "We offer 24/7 support from our expert team, ready to assist you with any questions or issues to ensure a smooth trading experience." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 max-w-3xl mx-auto relative z-10" id="faq">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-[clamp(2rem,6vw,3rem)] leading-[0.9] font-black font-display mb-6 uppercase tracking-tighter text-balance">FREQUENTLY ASKED <span className="text-accent">QUESTIONS</span>.</h2>
        <p className="text-text-muted font-medium text-base md:text-lg leading-tight">Find quick answers to the most common questions about TradeBuddy.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="double-bezel overflow-hidden border-white/5">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left p-4 md:p-6 flex justify-between items-center focus:outline-none hover:bg-white/5 transition-colors"
            >
              <span className="font-black font-display text-base md:text-lg text-foreground uppercase tracking-tighter pr-4">{faq.q}</span>
              <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} className="flex-shrink-0">
                <ChevronDown className="text-accent" strokeWidth={3} size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-4 md:px-6 pb-6 text-text-muted font-medium text-sm leading-tight"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-5xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="double-bezel p-8 sm:p-12 md:p-20 text-center border-action/20 bg-action/5 overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-action/20 via-transparent to-transparent opacity-30"></div>
        <h2 className="text-3xl md:text-6xl font-black font-display mb-6 md:mb-8 text-foreground relative z-10 uppercase tracking-tighter">READY TO <span className="text-action">ELEVATE</span> YOUR TRADING?</h2>
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 relative z-10 font-medium leading-tight">
          Join thousands of successful traders who trust TradeBuddy for their market insights and secure transactions. Start your free trial today!
        </p>
        <motion.div whileTap={{ scale: 0.97 }} className="relative z-10 inline-block">
          <Link href="/login" className="bg-action text-black font-black px-10 md:px-12 py-4 md:py-5 rounded-full uppercase tracking-tighter text-sm hover:brightness-110 shadow-[0_0_40px_rgba(174,234,0,0.2)] transition-all">
            Start Your Free Trial Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
