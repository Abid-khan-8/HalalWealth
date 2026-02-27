"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

export default function SignInPage() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 to-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white text-black p-10 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-emerald-800">
          Sign In
        </h2>

        <p className="text-sm text-gray-600 text-center mb-6">
          🔔 Demo Login Only <br />
          Use:
          <br />
          <strong>Email:</strong> halal@wealth.com <br />
          <strong>Password:</strong> 123456
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-emerald-700 text-white py-3 rounded-lg font-semibold hover:bg-emerald-800 transition">
            Login
          </button>
        </form>
      </motion.div>
    </div>
    </>
  );
}
