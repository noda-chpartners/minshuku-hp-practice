"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Kodawari from "./components/Kodawari";
import Cuisine from "./components/Cuisine";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Access from "./components/Access";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import FloatingReservation from "./components/FloatingReservation";

export default function Home() {
  const [heroReplayKey, setHeroReplayKey] = useState(0);

  const replayHero = () => {
    setHeroReplayKey((k) => k + 1);
  };

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "oklch(var(--background-950))" }}
    >
      <Navbar />

      <Hero replayKey={heroReplayKey} />

      <Kodawari />
      <Cuisine />
      <Rooms />
      <Amenities />
      <Reviews />
      <FAQ />
      <Access />
      <Reservation />
      <Footer />

      <FloatingReservation onBackToHero={replayHero} />
    </main>
  );
}

