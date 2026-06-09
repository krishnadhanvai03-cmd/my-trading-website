"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { signIn } from "next-auth/react";
import { CanvasBackground } from "@/components/shared/CanvasBackground";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login logic goes here (migrated from mock vanilla script).");
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <>
      <CanvasBackground />
      <div className="min-h-screen flex items-center justify-center p-4">
        <Link href="/" className="fixed top-6 left-6 text-text-muted hover:text-foreground transition-colors flex items-center gap-2">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="double-bezel w-full max-w-[360px] p-8 flex flex-col justify-center relative overflow-hidden"
        >
          <h2 className="text-2xl font-display text-center mb-8 font-bold">Terminal Access</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="relative group">
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b-2 border-surface-border py-2 text-foreground focus:outline-none focus:border-accent transition-colors peer placeholder-transparent"
                placeholder="Email"
                required
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-2 text-text-muted pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-4 peer-valid:text-xs peer-valid:text-accent"
              >
                Email
              </label>
            </div>

            <div className="relative group">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b-2 border-surface-border py-2 pr-10 text-foreground focus:outline-none focus:border-accent transition-colors peer placeholder-transparent"
                placeholder="Password"
                required
              />
              <label 
                htmlFor="password" 
                className="absolute left-0 top-2 text-text-muted pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-4 peer-valid:text-xs peer-valid:text-accent"
              >
                Password
              </label>
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-2 text-text-muted hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <motion.button 
              whileTap={{ scale: 0.97 }}
              type="submit" 
              className="mt-4 w-full bg-accent text-background font-bold py-3 rounded-full hover:brightness-110 transition-all uppercase tracking-widest text-sm"
            >
              Authenticate
            </motion.button>
            
            <motion.button 
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full bg-white text-black font-bold py-3 rounded-full hover:brightness-90 transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </svg>
              Sign In with Google
            </motion.button>
          </form>

          <div className="mt-6 flex justify-between text-xs text-text-muted">
            <button className="hover:text-foreground transition-colors">Forgot Password?</button>
            <button className="hover:text-accent transition-colors">Request Access</button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
