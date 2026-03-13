"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence shadow-none>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-md">
          {/* Backdrop Click */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300, duration: 0.6 }}
            className="relative w-full max-w-lg bg-secondary overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] rounded-sm"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 text-primary/40 hover:text-primary transition-colors hover:rotate-90 duration-300"
            >
              <X size={20} strokeWidth={1} />
            </button>

            {/* Layout */}
            <div className="flex flex-col">
              
              {/* Top Banner (Optional Aesthetic Header) */}
              <div className="h-1 bg-accent/20 w-full" />

              <div className="px-8 pt-16 pb-12 md:px-12">
                
                {/* Mode Selector */}
                <div className="flex gap-10 border-b border-primary/5 mb-12">
                  <button 
                    onClick={() => setMode("login")}
                    className={`pb-4 text-[10px] uppercase tracking-[0.4em] font-bold transition-all relative ${mode === "login" ? "text-primary" : "text-primary/20 hover:text-primary/40"}`}
                  >
                    Login
                    {mode === "login" && <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
                  </button>
                  <button 
                    onClick={() => setMode("signup")}
                    className={`pb-4 text-[10px] uppercase tracking-[0.4em] font-bold transition-all relative ${mode === "signup" ? "text-primary" : "text-primary/20 hover:text-primary/40"}`}
                  >
                    Create Account
                    {mode === "signup" && <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
                  </button>
                </div>

                {/* Form Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode}
                    initial={{ opacity: 0, x: mode === "login" ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: mode === "login" ? 10 : -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-10">
                      <h2 className="text-4xl font-serif text-primary tracking-tight mb-2">
                        {mode === "login" ? "Welcome Back" : "Begin Your Journey"}
                      </h2>
                      <p className="text-primary/40 text-xs italic font-serif">
                        {mode === "login" ? "Enter your credentials to access your sartorial world." : "Join the Kayoze circle for an elevated menswear experience."}
                      </p>
                    </div>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                      {mode === "signup" && (
                        <div className="relative group">
                          <label className="text-[8px] uppercase tracking-[0.2em] font-black text-primary/30 block mb-1 group-focus-within:text-accent transition-colors">Full Name</label>
                          <div className="relative">
                            <input 
                              type="text" 
                              placeholder="Signature name"
                              className="w-full bg-transparent border-b border-primary/10 py-3 text-lg font-serif focus:outline-none focus:border-accent transition-all placeholder:text-primary/10 italic"
                            />
                            <User size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-primary/10" />
                          </div>
                        </div>
                      )}

                      <div className="relative group">
                        <label className="text-[8px] uppercase tracking-[0.2em] font-black text-primary/30 block mb-1 group-focus-within:text-accent transition-colors">Electronic Mail</label>
                        <div className="relative">
                          <input 
                            type="email" 
                            placeholder="address@correspondence.com"
                            className="w-full bg-transparent border-b border-primary/10 py-3 text-lg font-serif focus:outline-none focus:border-accent transition-all placeholder:text-primary/10 italic"
                          />
                          <Mail size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-primary/10" />
                        </div>
                      </div>

                      <div className="relative group">
                        <label className="text-[8px] uppercase tracking-[0.2em] font-black text-primary/30 block mb-1 group-focus-within:text-accent transition-colors">Passcode</label>
                        <div className="relative">
                          <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="••••••••"
                            className="w-full bg-transparent border-b border-primary/10 py-3 text-lg font-serif focus:outline-none focus:border-accent transition-all placeholder:text-primary/10 italic"
                          />
                          <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-primary/10 hover:text-accent transition-colors"
                          >
                            {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                          </button>
                        </div>
                      </div>

                      {mode === "login" && (
                        <div className="flex justify-end">
                          <button className="text-[9px] uppercase tracking-widest text-primary/40 hover:text-accent transition-colors">Lost your passcode?</button>
                        </div>
                      )}

                      <button className="group relative w-full py-6 mt-12 bg-primary overflow-hidden shadow-xl active:scale-[0.98] transition-transform">
                        <div className="absolute inset-0 bg-accent translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                        <span className="relative z-10 flex items-center justify-center gap-4 text-secondary text-[10px] font-sans font-black tracking-[0.6em] uppercase">
                          {mode === "login" ? "Authenticate" : "Register Now"}
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
                        </span>
                      </button>
                    </form>
                  </motion.div>
                </AnimatePresence>

                {/* Footer Subtle Brand Tag */}
                <div className="mt-16 flex items-center justify-center gap-4 opacity-5">
                  <div className="h-[1px] w-12 bg-primary" />
                  <span className="text-[9px] uppercase tracking-[0.8em] font-black">KAYOZE</span>
                  <div className="h-[1px] w-12 bg-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
