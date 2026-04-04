"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle, Timer } from "lucide-react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section className="relative flex min-h-[640px] items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:min-h-[92vh] lg:px-8">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/goa-hero.png"
          alt="Goa Beach Resort"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,22,0.20)_0%,rgba(10,16,22,0.34)_40%,rgba(10,16,22,0.48)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.12),transparent_35%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-5 text-4xl font-bold tracking-tight drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
            Explore <span className="text-teal-300">Your</span> <br />
            Next Paradise
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-zinc-100 drop-shadow-md sm:text-lg md:mb-10 md:text-xl">
            Experience vibrant cultures, sun-kissed beaches, and luxurious
            resorts at our hand-picked destinations. Your perfect getaway is
            just a click away.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button className="group rounded-full bg-teal-400 px-7 py-4 text-base font-bold text-zinc-950 shadow-xl shadow-teal-500/25 transition-all hover:scale-105 hover:bg-teal-300 active:scale-95 sm:px-10 sm:py-5 sm:text-xl">
              Book Your Paradise Now
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                -
                &gt;
              </span>
            </button>

            <div className="mt-6 flex max-w-md flex-col gap-3">
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [1, 0.9, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex items-center justify-center gap-2 rounded-2xl border border-red-300/50 bg-red-500/78 px-4 py-2 text-center text-sm font-bold text-white shadow-lg backdrop-blur-sm"
              >
                <AlertTriangle className="h-4 w-4 fill-white text-red-600" />
                URGENT: Only 2 rooms left at this price!
              </motion.div>

              <div className="flex flex-wrap items-center justify-center gap-2 px-3 text-center font-medium text-red-100">
                <Timer className="h-4 w-4 animate-pulse" />
                <span className="text-sm">Offer expires in </span>
                <span className="rounded-lg border border-red-300/30 bg-red-950/38 px-3 py-1 font-mono text-lg text-white">
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-8 px-4 opacity-70 transition-all duration-700 sm:bottom-10">
        <div className="text-center text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-200 sm:text-xs">
          Trusted by over 10M+ Travelers
        </div>
      </div>
    </section>
  );
}
