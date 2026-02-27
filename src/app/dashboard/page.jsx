"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import OverviewCards from "@/components/OverviewCards";
import StockChart from "@/components/StockChart";
import StocksSection from "@/components/StocksSection";
import Watchlist from "@/components/Watchlist";
import Trading from "@/components/Trading";
import ZakatCalculator from "@/components/ZakatCalculator";
import DashboardLayout from "@/components/DashboardLayout";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [user]);

  if (!user) return null;

  return (
    <DashboardLayout>
      <OverviewCards />
      <StockChart />
      <Trading />
      <ZakatCalculator />
    </DashboardLayout>
  );
}
