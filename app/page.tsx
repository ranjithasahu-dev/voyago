import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingCards from "@/components/BookingCards";
import SignupModal from "@/components/SignupModal";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen font-inter bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 overflow-x-hidden">
      {/* Forced Signup Modal (3s delay) */}
      <SignupModal />

      <Navbar />

      <main className="flex flex-col">
        <Hero />
        
        {/* Destinations Anchor */}
        <div id="destinations" className="scroll-mt-20" />
        
        <BookingCards />
        
        <Subscription />
      </main>

      <Footer />
    </div>
  );
}
