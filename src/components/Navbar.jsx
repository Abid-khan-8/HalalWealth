"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-3xl font-bold text-emerald-700">HalalWealth</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {["Home","Stocks","Gold","Silver","Moon","Screening","Contact","Blog"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-800 hover:text-emerald-700 font-medium transition-colors"
            >
              {link}
            </a>
          ))}

          {/* Buttons */}
          <button className="ml-4 bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-800 transition">
            Download App
          </button>
          <button className="ml-2 border border-emerald-700 text-emerald-700 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-2 flex flex-col">
            {["Home","Stocks","Gold","Silver","Moon","Screening","Contact","Blog"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-800 hover:text-emerald-700 font-medium transition-colors"
              >
                {link}
              </a>
            ))}

            <button className="w-full bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-800 transition">
              Download App
            </button>
            <button className="w-full border border-emerald-700 text-emerald-700 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
