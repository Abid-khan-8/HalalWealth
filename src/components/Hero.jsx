"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  
  return (
    <section className="pt-32 pb-24 text-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-6"
      >
        Build Halal Wealth
        <br />
        The Modern Way
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl mb-8 text-emerald-100"
      >
        Stocks • SIP • Trading • Zakat • Gold
      </motion.p>

      <motion.button
        onClick={() => { router.push("/signin") }}
        whileHover={{ scale: 1.05 }}
        className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold"
      >
        Start Investing →
      </motion.button>
    </section>
  );
}
