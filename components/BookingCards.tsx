"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, CheckCircle2, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
    discount: 10
  },
  {
    name: "Deluxe Room",
    price: 349,
    image: "/images/room_deluxe.png",
    availability: "Only 5 left",
    rating: 4.8,
    discount: 15
  },
  {
    name: "Premium Sea View",
    price: 599,
    image: "/images/room_premium_sea_view.png",
    availability: "High Demand!",
    rating: 5.0,
    discount: 20
  }
];

export default function BookingCards() {
  return (
    <section id="deals" className="py-24 bg-zinc-50 dark:bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Our Exclusive Rooms</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg italic">
            Unlock the best deals before they vanish into thin air.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all h-full"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg shadow-teal-500/30">
                  <TrendingDown className="w-3 h-3" />
                  {room.discount}% OFF
                </div>
                <div className="absolute top-4 left-4 bg-zinc-950/70 backdrop-blur-md text-white px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  {room.rating}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{room.name}</h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-black text-zinc-900 dark:text-white">${room.price}</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-sm italic font-medium">per night</span>
                </div>

                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Free WiFi & Breakfast</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Ocean View Balcony</span>
                  </div>
                  <motion.div
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-tighter"
                  >
                    ⚠ {room.availability}
                  </motion.div>
                </div>

                {/* Dark Pattern: Misleading Call-To-Action Hierarchy */}
                <div className="mt-auto flex flex-col gap-3">
                  <button className="w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-black font-black text-lg rounded-2xl transition-all shadow-xl shadow-teal-500/20 active:scale-95 group relative overflow-hidden">
                    <span className="relative z-10">BOOK NOW & PROTECT PRICE</span>
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>

                  <button className="w-full py-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 text-[10px] font-medium transition-colors uppercase tracking-[0.2em] flex items-center justify-center gap-1 group">
                    <span>Maybe later, I'll pay full price</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">×</span>
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
