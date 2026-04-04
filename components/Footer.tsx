"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center gap-5 text-center font-medium tracking-tight text-zinc-600 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8">
          <Link href="#destinations" className="text-xs uppercase tracking-widest transition-colors hover:text-zinc-900">Destinations</Link>
          <Link href="#deals" className="text-xs uppercase tracking-widest transition-colors hover:text-zinc-900">Exclusive Deals</Link>
          <Link href="#journey" className="text-xs uppercase tracking-widest transition-colors hover:text-zinc-900">Journey</Link>
          <Link href="#support" className="text-xs uppercase tracking-widest transition-colors hover:text-zinc-900">Vip Support</Link>
          <Link href="#" className="text-xs uppercase tracking-widest transition-colors hover:text-zinc-900">Privacy & Data Theft</Link>
        </div>

        <div className="group flex items-center gap-2">
          <div className="h-px w-8 bg-zinc-200 transition-all group-hover:w-16" />
          <span className="text-xl font-extrabold tracking-tighter text-zinc-900">
            VOYAGO
          </span>
          <div className="h-px w-8 bg-zinc-200 transition-all group-hover:w-16" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 text-[10px] font-medium uppercase tracking-widest text-zinc-400 opacity-40 transition-all hover:opacity-100">
          <span>(c) 2026 Voyago Global Unlimited.</span>
          <span>All rights reserved.</span>
          <span>Terms of Servitude apply.</span>
        </div>

        <div className="mt-4 flex w-full justify-center">
          <button className="select-none text-[8px] font-thin tracking-tighter text-zinc-300 opacity-[0.05] transition-all duration-1000 hover:opacity-100">
            Unsubscribe from all future communications and lose access to VIP
            rates forever
          </button>
        </div>
      </div>
    </footer>
  );
}
