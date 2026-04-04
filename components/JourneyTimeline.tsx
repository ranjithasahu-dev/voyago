"use client";

import { motion } from "framer-motion";
import { CalendarCheck2, CarFront, MapPinned, Waves } from "lucide-react";

const stops = [
  {
    icon: CalendarCheck2,
    eyebrow: "Before Arrival",
    title: "Book the room that matches your energy",
    copy: "Pick sea-facing calm, a social deluxe stay, or a simple room that keeps the trip budget-friendly.",
  },
  {
    icon: CarFront,
    eyebrow: "Touchdown",
    title: "Slide from airport to check-in without friction",
    copy: "Transfers, fast room handoff, and support details are surfaced early so arrival feels easy.",
  },
  {
    icon: MapPinned,
    eyebrow: "During The Stay",
    title: "Swap generic plans for flexible local picks",
    copy: "Beach clubs, spice-route lunches, markets, and late-night spots all fit around your pace.",
  },
  {
    icon: Waves,
    eyebrow: "Take Home",
    title: "Leave with a trip that felt full, not rushed",
    copy: "The flow is designed to keep the holiday cinematic without turning the schedule into work.",
  },
];

export default function JourneyTimeline() {
  return (
    <section
      id="journey"
      className="overflow-hidden bg-zinc-950 px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="relative">
          <div className="absolute -left-12 top-0 h-48 w-48 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="relative max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-300">
              Trip Flow
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              From first click to final checkout, the experience should keep moving
            </h2>
            <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base">
              This section adds a more editorial rhythm to the page and breaks up
              the usual stack of cards. It gives Voyago a stronger travel-story feel.
            </p>
          </div>
        </div>

        <div className="relative space-y-5">
          <div className="absolute bottom-6 left-5 top-6 hidden w-px bg-gradient-to-b from-teal-400/10 via-teal-400/80 to-transparent sm:block" />
          {stops.map((stop, index) => {
            const Icon = stop.icon;

            return (
              <motion.article
                key={stop.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:pl-20"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400/12 text-teal-300 sm:absolute sm:left-6 sm:top-7">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                  {stop.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {stop.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  {stop.copy}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
