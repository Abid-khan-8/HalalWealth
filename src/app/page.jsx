// src/app/page.jsx
"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StocksSection from "@/components/StocksSection";
import Watchlist from "@/components/Watchlist";
import SIP from "@/components/SIP";
import Trading from "@/components/Trading";
import ZakatCalculator from "@/components/ZakatCalculator";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [watchlist, setWatchlist] = useState([]);

  // Load once
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);
  }, []);

  // Persist
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <>
      <Navbar />
      <Hero />

      <StocksSection
        watchlist={watchlist}
        setWatchlist={setWatchlist}
      />

      <Watchlist
        watchlist={watchlist}
        setWatchlist={setWatchlist}
      />

      <Trading/>
      <ZakatCalculator />
      <Footer />
    </>
  );
}




