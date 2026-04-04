"use client";

import { motion } from "framer-motion";
import { Compass, Martini, Sparkles, Waves } from "lucide-react";

const highlights = [
  {
    icon: Waves,
    title: "Sunrise beach drops",
    copy: "Wake up steps from the shore with rooms curated for sea-light mornings.",
  },
  {
    icon: Martini,
    title: "Private lounge nights",
    copy: "Cocktail hours, rooftop music, and slow evenings that feel worth dressing up for.",
  },
  {
    icon: Compass,
    title: "Local-first itineraries",
    copy: "Hidden cafes, calm coves, and flexible plans built around how you actually travel.",
  },
  {
    icon: Sparkles,
    title: "Concierge-level touches",
    copy: "Airport pickup, room personalization, and fast support that keeps the trip smooth.",
  },
];

export default function ExperienceStrip() {
  return (
    <section className="bg-[linear-gradient(135deg,#fff6ef_0%,#ffffff_45%,#eefcf7_100%)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 text-center sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-600">
            Why Voyago Feels Different
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            A resort booking page with a little more pulse
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
            We kept the premium mood, then added more personality with sections
            that show what the stay actually feels like.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_80px_-48px_rgba(20,184,166,0.55)] backdrop-blur"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/12 text-teal-700 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-zinc-950">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-zinc-600">{item.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
