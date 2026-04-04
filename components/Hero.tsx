"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

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
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/goa-hero.png"
          alt="Goa Beach Resort"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-2xl">
            Explore <span className="text-teal-400">Your</span> <br />
            Next Paradise
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Experience vibrant cultures, sun-kissed beaches, and luxurious resorts at our hand-picked destinations. Your perfect getaway is just a click away.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button className="px-10 py-5 bg-teal-500 hover:bg-teal-400 text-zinc-950 font-bold text-xl rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-teal-500/20 group">
              Book Your Paradise Now
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>

            {/* Fake Urgency Dark Patterns */}
            <div className="mt-8 flex flex-col gap-3">
              <motion.div 
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [1, 0.9, 1]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex items-center gap-2 bg-red-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg border border-red-400"
              >
                <AlertTriangle className="w-4 h-4 fill-white text-red-600" />
                URGENT: Only 2 rooms left at this price!
              </motion.div>

              <div className="flex items-center gap-2 justify-center text-red-200 font-medium">
                <Timer className="w-4 h-4 animate-pulse" />
                <span className="text-sm">Offer expires in </span>
                <span className="bg-red-950/50 px-2 py-1 rounded font-mono text-lg text-white border border-red-500/30">
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trust badges (Distraction) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">Trusted by over 10M+ Travelers</div>
      </div>
    </section>
  );
}
