"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-100 bg-white/85 px-4 py-4 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="group text-xl font-extrabold tracking-tighter text-zinc-900 sm:text-2xl">
          VOYA
          <span className="text-teal-600 transition-colors group-hover:text-zinc-950">
            GO
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex lg:gap-8">
          <Link href="#destinations" className="transition-colors hover:text-zinc-900">Destinations</Link>
          <Link href="#deals" className="transition-colors hover:text-zinc-900">Deals</Link>
          <Link href="#journey" className="transition-colors hover:text-zinc-900">Journey</Link>
          <Link href="#support" className="transition-colors hover:text-zinc-900">Support</Link>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-zinc-200 transition-all hover:scale-105 hover:bg-zinc-800 active:scale-95 sm:px-6 sm:text-base">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
