"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-extrabold tracking-tighter text-zinc-900 group">
        VOYA<span className="text-teal-600 transition-colors group-hover:text-zinc-950">GO</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 font-medium text-zinc-600">
        <Link href="#destinations" className="hover:text-zinc-900 transition-colors">Destinations</Link>
        <Link href="#deals" className="hover:text-zinc-900 transition-colors">Deals</Link>
        <Link href="#support" className="hover:text-zinc-900 transition-colors">Support</Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-6 py-2 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-200">
          Login
        </button>
      </div>
    </nav>
  );
}
