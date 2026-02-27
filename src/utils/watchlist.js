"use client";

import { useEffect, useState } from "react";

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);
  }, []);

  function toggleWatchlist(symbol) {
    let updated;
    if (watchlist.includes(symbol)) {
      updated = watchlist.filter(s => s !== symbol);
    } else {
      updated = [...watchlist, symbol];
    }
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  }

  return { watchlist, toggleWatchlist };
}