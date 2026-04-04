"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="py-20 bg-white dark:bg-zinc-950 px-6 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col md:flex-row items-center gap-8 text-zinc-600 dark:text-zinc-400 font-medium tracking-tight">
          <Link href="#destinations" className="hover:text-zinc-900 dark:hover:text-white transition-colors uppercase tracking-widest text-xs">Destinations</Link>
          <Link href="#deals" className="hover:text-zinc-900 dark:hover:text-white transition-colors uppercase tracking-widest text-xs">Exclusive Deals</Link>
          <Link href="#support" className="hover:text-zinc-900 dark:hover:text-white transition-colors uppercase tracking-widest text-xs">Vip Support</Link>
          <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors uppercase tracking-widest text-xs">Privacy & Data Theft</Link>
        </div>

        <div className="flex items-center gap-2 group">
           <div className="h-px w-8 bg-zinc-200 dark:bg-zinc-800 transition-all group-hover:w-16" />
           <span className="text-zinc-900 dark:text-white font-extrabold text-xl tracking-tighter">VOYAGO</span>
           <div className="h-px w-8 bg-zinc-200 dark:bg-zinc-800 transition-all group-hover:w-16" />
        </div>

        <div className="text-zinc-400 dark:text-zinc-600 text-[10px] font-medium tracking-widest uppercase opacity-40 hover:opacity-100 transition-all gap-2 flex flex-wrap justify-center">
          <span>© 2026 Voyago Global Unlimited.</span>
          <span>All rights reserved.</span>
          <span>Terms of Servitude apply.</span>
        </div>

        {/* Dark Pattern: Hidden Unsubscribe */}
        <div className="mt-4 flex justify-center w-full">
          <button className="text-[8px] opacity-[0.05] hover:opacity-100 text-zinc-300 dark:text-zinc-800 cursor-pointer transition-all duration-1000 select-none font-thin tracking-tighter decoration-none">
             Unsubscribe from all future communications and lose access to VIP rates forever
          </button>
        </div>
      </div>
    </footer>
  );
}
