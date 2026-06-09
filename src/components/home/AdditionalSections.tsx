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
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-10" id="how-it-works">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-display mb-4">How TradeBuddy Works</h2>
        <p className="text-text-muted text-lg">Get started with TradeBuddy in three simple steps. From sign-up to smart trading, we make it easy for you.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          { icon: <UserPlus className="w-8 h-8 text-accent" />, step: "01", title: "Create Your Account", desc: "Sign up in minutes and set up your personalized trading profile. It's quick, secure, and free to start." },
          { icon: <LineChart className="w-8 h-8 text-accent" />, step: "02", title: "Analyze & Strategize", desc: "Utilize our AI-powered tools to analyze market trends and develop winning trading strategies." },
          { icon: <TrendingUp className="w-8 h-8 text-accent" />, step: "03", title: "Execute Trades", desc: "Seamlessly execute your trades with confidence and monitor your portfolio in real-time." }
        ].map((item, i) => (
          <motion.div key={i} variants={itemVariants} className="double-bezel p-6 md:p-10 flex flex-col relative group">
            <div className="absolute top-6 right-6 text-4xl font-display font-bold text-surface-border">{item.step}</div>
            <div className="mb-8">{item.icon}</div>
            <h3 className="text-xl font-display mb-4 text-foreground">{item.title}</h3>
            <p className="text-text-muted">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export function Vision() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10" id="our-vision">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="double-bezel p-6 md:p-12 text-center flex flex-col items-center justify-center border-accent/20"
      >
        <h2 className="text-3xl md:text-4xl font-display mb-6">Our Vision for Your Success</h2>
        <p className="text-text-muted text-lg max-w-3xl mb-10 leading-relaxed">
          We envision a world where every trader, regardless of experience, has access to powerful tools and insights to achieve their financial goals. TradeBuddy is built on this principle.
        </p>
        <motion.button 
          whileTap={{ scale: 0.97 }}
          className="bg-transparent border border-accent text-accent px-8 py-3 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-accent/10 transition-colors"
        >
          Learn More About Our Mission
        </motion.button>
      </motion.div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-10" id="why-choose-us">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-display mb-4">Why Choose TradeBuddy?</h2>
        <p className="text-text-muted text-lg">Beyond advanced features, we offer a commitment to your growth and security. Discover what sets us apart.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          { icon: <Activity className="w-8 h-8 text-purple-400" />, title: "Cutting-Edge AI", desc: "Leverage predictive analytics and machine learning for smarter trading decisions." },
          { icon: <ShieldCheck className="w-8 h-8 text-purple-400" />, title: "Unwavering Security", desc: "Your data and assets are protected with military-grade encryption and protocols." },
          { icon: <GraduationCap className="w-8 h-8 text-purple-400" />, title: "Educational Resources", desc: "Access a wealth of tutorials, webinars, and market insights to sharpen your skills." },
          { icon: <MessageSquare className="w-8 h-8 text-purple-400" />, title: "Vibrant Community", desc: "Connect with fellow traders, share strategies, and grow together in a supportive environment." }
        ].map((item, i) => (
          <motion.div key={i} variants={itemVariants} className="double-bezel p-6 md:p-8 text-center flex flex-col items-center group hover:-translate-y-2 transition-all duration-300">
            <div className="mb-6 p-4 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">{item.icon}</div>
            <h4 className="text-lg font-display mb-3 text-foreground">{item.title}</h4>
            <p className="text-sm text-text-muted">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-12">
        <motion.button 
          whileTap={{ scale: 0.97 }}
          className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-8 py-3 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-purple-500/20 transition-colors"
        >
          Explore All Benefits
        </motion.button>
      </div>
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
    <section className="py-32 px-6 max-w-3xl mx-auto relative z-10" id="faq">
      <div className="text-center mb-16">
        <h2 className="text-[clamp(2rem,5vw,3rem)] leading-tight font-display mb-4">Frequently Asked Questions</h2>
        <p className="text-text-muted">Find quick answers to the most common questions about TradeBuddy.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="double-bezel overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left p-4 md:p-6 flex justify-between items-center focus:outline-none focus:bg-white/5 transition-colors"
            >
              <span className="font-display text-lg text-foreground">{faq.q}</span>
              <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                <ChevronDown className="text-accent" strokeWidth={1.5} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-text-muted"
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
    <section className="py-32 px-6 max-w-5xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="double-bezel p-6 sm:p-10 md:p-16 text-center border-accent/30 bg-accent/5 overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-50"></div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground relative z-10">Ready to Elevate Your Trading?</h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto mb-10 relative z-10">
          Join thousands of successful traders who trust TradeBuddy for their market insights and secure transactions. Start your free trial today!
        </p>
        <motion.div whileTap={{ scale: 0.97 }} className="relative z-10 inline-block">
          <Link href="/login" className="bg-foreground text-background font-bold px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:brightness-110 shadow-[0_0_20px_var(--accent-glow)] transition-all">
            Start Your Free Trial Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
