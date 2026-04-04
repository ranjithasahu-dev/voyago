"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Subscription() {
  return (
    <section id="support" className="py-24 bg-white dark:bg-zinc-950 px-6 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-zinc-950 p-12 md:p-20 rounded-[3rem] shadow-2xl overflow-hidden relative group">
        {/* Visual Noise */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full" />

        <div className="flex-1 text-center md:text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-teal-400 font-bold tracking-widest text-xs uppercase mb-4"
          >
            <Zap className="w-4 h-4 fill-teal-400" />
            Limited Beta Access
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Stop Overpaying <br />
            For Your Trips
          </h2>
          <p className="text-zinc-400 max-w-md text-lg italic leading-relaxed">
            Join 500,000+ elite travelers who get notified about pricing errors <span className="text-white font-bold underline decoration-teal-500 underline-offset-4">before they're fixed.</span>
          </p>
        </div>

        <div className="w-full max-w-md relative z-10">
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="email"
                placeholder="Where should we send your deals?"
                className="w-full pl-16 pr-6 py-6 bg-zinc-900 border-2 border-zinc-800 focus:border-teal-500/50 rounded-2xl text-white outline-none transition-all placeholder:text-zinc-600 font-medium"
                required
              />
            </div>

            <button className="w-full py-6 bg-white hover:bg-teal-500 hover:text-black text-zinc-950 font-black text-xl rounded-2xl transition-all shadow-xl shadow-white/5 active:scale-95 group">
              YES, SAVE MY MONEY NOW!
            </button>

            {/* Dark Pattern: Confirm Shaming */}
            <button className="mt-4 text-zinc-600 hover:text-red-400 transition-colors text-[11px] font-bold uppercase tracking-widest text-center group cursor-pointer decoration-dotted underline underline-offset-4">
              {/* EXACT TEXT REQUIRED */}
              No thanks, I like paying more
            </button>
            <div className="flex items-center justify-center gap-2 text-zinc-500 text-[10px] mt-2 italic px-8 text-center leading-tight">
               <ShieldCheck className="w-3 h-3 text-zinc-700 shrink-0" />
               Warning: Opting out may increase your next booking cost by $200+
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
