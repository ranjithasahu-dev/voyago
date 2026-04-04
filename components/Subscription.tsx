"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ShieldCheck, Zap } from "lucide-react";

export default function Subscription() {
  return (
    <section id="support" className="border-t border-zinc-100 bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="group relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 overflow-hidden rounded-[2.5rem] bg-zinc-950 p-6 shadow-2xl sm:p-10 lg:flex-row lg:p-16">
        <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-teal-500/20 blur-[100px] transition-transform duration-700 group-hover:scale-150" />
        <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-red-500/10 blur-[100px]" />

        <div className="relative z-10 flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-400 lg:justify-start"
          >
            <Zap className="h-4 w-4 fill-teal-400" />
            Limited Beta Access
          </motion.div>
          <h2 className="mb-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Stop Overpaying <br />
            For Your Trips
          </h2>
          <p className="mx-auto max-w-md text-base italic leading-8 text-zinc-400 sm:text-lg lg:mx-0">
            Join 500,000+ elite travelers who get notified about pricing errors{" "}
            <span className="font-bold text-white underline decoration-teal-500 underline-offset-4">
              before they&apos;re fixed.
            </span>
          </p>
        </div>

        <div className="relative z-10 w-full max-w-md">
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
              <input
                type="email"
                placeholder="Where should we send your deals?"
                className="w-full rounded-2xl border-2 border-zinc-800 bg-zinc-900 py-5 pl-14 pr-5 font-medium text-white outline-none transition-all placeholder:text-zinc-600 focus:border-teal-500/50 sm:py-6 sm:pl-16 sm:pr-6"
                required
              />
            </div>

            <button className="w-full rounded-2xl bg-white py-5 text-lg font-black text-zinc-950 shadow-xl shadow-white/5 transition-all hover:bg-teal-500 hover:text-black active:scale-95 sm:py-6 sm:text-xl">
              YES, SAVE MY MONEY NOW!
            </button>

            <button className="mt-4 cursor-pointer text-center text-[11px] font-bold uppercase tracking-widest text-zinc-600 underline decoration-dotted underline-offset-4 transition-colors hover:text-red-400">
              No thanks, I like paying more
            </button>
            <div className="mt-2 flex items-center justify-center gap-2 px-4 text-center text-[10px] italic leading-tight text-zinc-500 sm:px-8">
              <ShieldCheck className="h-3 w-3 shrink-0 text-zinc-700" />
              Warning: Opting out may increase your next booking cost by $200+
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
