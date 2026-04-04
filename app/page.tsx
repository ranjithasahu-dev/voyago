import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingCards from "@/components/BookingCards";
import ExperienceStrip from "@/components/ExperienceStrip";
import SignupModal from "@/components/SignupModal";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";
import JourneyTimeline from "@/components/JourneyTimeline";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white font-inter text-zinc-900">
      <SignupModal />

      <Navbar />

      <main className="flex flex-col">
        <Hero />

        <div id="destinations" className="scroll-mt-20" />

        <ExperienceStrip />
        <BookingCards />
        <JourneyTimeline />
        <Subscription />
      </main>

      <Footer />
    </div>
  );
}
