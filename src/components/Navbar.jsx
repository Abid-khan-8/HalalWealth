"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LogOut, LayoutDashboard, TrendingUp, Wallet } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        
        {/* LOGO */}
        <Link href="/">
          <div className="text-2xl font-bold text-emerald-700 cursor-pointer">
            HalalWealth
          </div>
        </Link>

        {/* ===== IF USER LOGGED IN ===== */}
        {user ? (
          <div className="flex items-center gap-6">

            <Link href="/dashboard">
              <div className="flex items-center gap-2 text-gray-700 hover:text-emerald-700 transition">
                <LayoutDashboard size={18} />
                Dashboard
              </div>
            </Link>

            <Link href="/dashboard#trading">
              <div className="flex items-center gap-2 text-gray-700 hover:text-emerald-700 transition">
                <TrendingUp size={18} />
                Trading
              </div>
            </Link>

            <Link href="/dashboard#zakat">
              <div className="flex items-center gap-2 text-gray-700 hover:text-emerald-700 transition">
                <Wallet size={18} />
                Zakat
              </div>
            </Link>

            {/* USER BADGE */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold"
            >
              {user.email}
            </motion.div>

            {/* LOGOUT */}
            <button
              onClick={logout}
              className="flex items-center gap-2 text-red-600 hover:text-red-700 transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        ) : (
          /* ===== IF NOT LOGGED IN ===== */
          <div className="flex items-center gap-6">
            <Link href="/#home">
              <button className="text-gray-800 hover:text-emerald-700 font-medium transition-colors">
                Home
              </button>
            </Link>

            <Link href="/#stocks">
              <button className="text-gray-800 hover:text-emerald-700 font-medium transition-colors">
                Stocks
              </button>
            </Link>

            <Link href="/#gold">
              <button className="text-gray-800 hover:text-emerald-700 font-medium transition-colors">
                Gold
              </button>
            </Link>

            <Link href="/#silver">
              <button className="text-gray-800 hover:text-emerald-700 font-medium transition-colors">
                Silver
              </button>
            </Link>

            <Link href="/#moon">
              <button className="text-gray-800 hover:text-emerald-700 font-medium transition-colors">
                Moon
              </button>
            </Link>

            <Link href="/#screening">
              <button className="text-gray-800 hover:text-emerald-700 font-medium transition-colors">
                Screening
              </button>
            </Link>

            <Link href="/#contact">
              <button className="text-gray-800 hover:text-emerald-700 font-medium transition-colors">
                Contact
              </button>
            </Link>

            <Link href="/#blog">
              <button className="text-gray-800 hover:text-emerald-700 font-medium transition-colors">
                Blog
              </button>
            </Link>

            {/* {["Home", "Stocks", "Gold", "Silver", "Moon", "Screening", "Contact", "Blog"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-800 hover:text-emerald-700 font-medium transition-colors"
            >
              {link}
            </a>
          ))} */}

            <Link href="/signin">
              <button className="bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-800 transition">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
