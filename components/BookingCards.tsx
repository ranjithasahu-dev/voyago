"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Star, TrendingDown } from "lucide-react";

interface RoomCardProps {
  name: string;
  price: number;
  image: string;
  availability: string;
  rating: number;
  discount?: number;
}

const rooms: RoomCardProps[] = [
  {
    name: "Standard Room",
    price: 199,
    image: "/images/room-standard.png",
    availability: "Limited rooms left",
    rating: 4.2,
    discount: 10,
  },
  {
    name: "Deluxe Room",
    price: 349,
    image: "/images/room_deluxe.png",
    availability: "Only 5 left",
    rating: 4.8,
    discount: 15,
  },
  {
    name: "Premium Sea View",
    price: 599,
    image: "/images/room_premium_sea_view.png",
    availability: "High Demand!",
    rating: 5,
    discount: 20,
  },
];

export default function BookingCards() {
  return (
    <section id="deals" className="bg-zinc-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 sm:text-4xl">
            Our Exclusive Rooms
          </h2>
          <p className="mx-auto max-w-2xl text-base italic text-zinc-600 sm:text-lg">
            Unlock the best deals before they vanish into thin air.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden sm:h-72">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-teal-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-teal-500/30">
                  <TrendingDown className="h-3 w-3" />
                  {room.discount}% OFF
                </div>
                <div className="absolute left-4 top-4 flex items-center gap-1 rounded-md bg-zinc-950/70 px-2 py-1 text-xs font-bold text-white backdrop-blur-md">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  {room.rating}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-2xl font-bold text-zinc-900">
                  {room.name}
                </h3>

                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-zinc-900">
                    ${room.price}
                  </span>
                  <span className="text-sm font-medium italic text-zinc-500">
                    per night
                  </span>
                </div>

                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-zinc-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Free WiFi & Breakfast</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Ocean View Balcony</span>
                  </div>
                  <motion.div
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-xs font-bold uppercase tracking-tight text-red-600"
                  >
                    Warning: {room.availability}
                  </motion.div>
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <button className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 py-4 text-lg font-black text-black shadow-xl shadow-teal-500/20 transition-all hover:from-teal-400 hover:to-teal-500 active:scale-95">
                    <span className="relative z-10">BOOK NOW & PROTECT PRICE</span>
                    <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
                  </button>

                  <button className="group flex w-full items-center justify-center gap-1 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-zinc-600">
                    <span>Maybe later, I&apos;ll pay full price</span>
                    <span className="opacity-0 transition-opacity group-hover:opacity-100">
                      x
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
