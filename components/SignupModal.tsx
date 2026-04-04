"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Sparkles, TrendingUp, X } from "lucide-react";

export default function SignupModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/70 p-4 backdrop-blur-sm transition-all duration-700 sm:p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-2xl shadow-teal-500/15 sm:rounded-[2.5rem]"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="group absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-teal-100 bg-teal-50 text-teal-700 transition-all hover:scale-105 hover:bg-teal-500 hover:text-white sm:right-5 sm:top-5"
              aria-label="Close"
            >
              <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
            </button>

            <div className="p-6 text-center sm:p-8 lg:p-10">
              <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-teal-500/10">
                <Sparkles className="h-10 w-10 animate-pulse text-teal-500" />
                <div className="absolute -right-2 -top-2 animate-bounce rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-black text-white">
                  HOT!
                </div>
              </div>

              <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-zinc-900 sm:text-4xl">
                Wait! Unlock Secret <br />
                VIP Member Rates
              </h2>

              <p className="mb-8 text-sm font-medium italic leading-7 text-zinc-600 sm:text-base">
                Wait, don&apos;t leave just yet! Enter your email to instantly
                unlock{" "}
                <span className="font-bold text-teal-600 underline">
                  up to 40% OFF
                </span>{" "}
                on your Goa booking.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="group relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-teal-500" />
                  <input
                    type="email"
                    placeholder="Enter your email to unlock VIP deals"
                    className="w-full rounded-2xl border-2 border-transparent bg-zinc-50 py-4 pl-12 pr-4 font-semibold text-zinc-900 outline-none transition-all placeholder:font-normal placeholder:italic focus:border-teal-500/50"
                    required
                  />
                </div>

                <div className="flex items-start gap-2 px-2 text-left text-[11px] font-medium leading-tight text-zinc-500">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                  <span>
                    By signing up, you agree to receive multiple marketing
                    emails every day (we promise we won&apos;t stop).
                  </span>
                </div>

                <button className="group relative w-full overflow-hidden rounded-2xl bg-zinc-900 py-4 text-lg font-black text-white shadow-xl transition-all hover:scale-[1.02] active:scale-95 sm:py-5 sm:text-xl">
                  <span className="relative z-10">GET MY 40% DISCOUNT NOW</span>
                  <span className="absolute inset-0 -translate-x-full bg-teal-400 transition-transform duration-500 ease-out group-hover:translate-x-0" />
                </button>
              </form>

              <p className="mt-8 cursor-pointer text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-400 opacity-40 transition-opacity hover:opacity-100">
                I prefer paying regular prices (not recommended)
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
