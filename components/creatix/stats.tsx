"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2000+", label: "Company" },
  { value: "4+", label: "Years Exp." },
  { value: "800+", label: "Hours of Digital" },
  { value: "100M+", label: "In Tracked Revenue" },
];

export function Stats() {
  return (
    <section className="bg-zinc-950 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900 rounded-2xl border border-zinc-800 py-8 px-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-lime-400">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
