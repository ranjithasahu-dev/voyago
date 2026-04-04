"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Sparkles, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SignupModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-950/80 backdrop-blur-sm transition-all duration-700">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-500/20 border border-zinc-100 dark:border-zinc-800"
          >
            {/* Disruptive Close Icon (Dark Pattern: Purposefully Small) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors bg-zinc-100 dark:bg-zinc-800 rounded-full group opacity-30 hover:opacity-100"
              aria-label="Close"
            >
              <X className="w-3 h-3 group-hover:scale-110" />
            </button>

            <div className="p-10 text-center">
              <div className="w-20 h-20 bg-teal-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 relative">
                <Sparkles className="w-10 h-10 text-teal-500 animate-pulse" />
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-bounce">
                  HOT!
                </div>
              </div>

              <h2 className="text-3xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight leading-tight">
                Wait! Unlock Secret <br />
                VIP Member Rates
              </h2>
              
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed font-medium italic">
                Wait, don't leave just yet! Enter your email to instantly unlock <span className="text-teal-500 font-bold underline">up to 40% OFF</span> on your Goa booking. 
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-teal-500 transition-colors" />
                  <input
                    type="email"
                    placeholder="Enter your email to unlock VIP deals"
                    className="w-full pl-12 pr-4 py-4 bg-zinc-50 dark:bg-zinc-800 border-2 border-transparent focus:border-teal-500/50 rounded-2xl outline-none transition-all text-zinc-900 dark:text-white font-bold placeholder:font-normal placeholder:italic"
                    required
                  />
                </div>

                <div className="flex items-center gap-2 px-2 text-zinc-500 text-[11px] font-medium leading-tight text-left">
                  <TrendingUp className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>By signing up, you agree to receive multiple marketing emails every day (we promise we won't stop).</span>
                </div>

                {/* Dark Pattern: Dominant Action */}
                <button className="w-full py-5 bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-950 text-white font-black text-xl rounded-2xl transition-all shadow-xl hover:scale-[1.02] active:scale-95 group relative overflow-hidden">
                  <span className="relative z-10">GET MY 40% DISCOUNT NOW</span>
                  <span className="absolute inset-0 bg-teal-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </button>
              </form>

              <p className="mt-8 text-zinc-400 text-[10px] font-medium italic uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity cursor-pointer underline decoration-dotted underline-offset-4">
                I prefer paying regular prices (not recommended)
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
