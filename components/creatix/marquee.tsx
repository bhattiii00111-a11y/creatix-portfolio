"use client";

import { motion } from "framer-motion";

const words = ["Innovate", "Inspire", "Create"];

export function Marquee() {
  return (
    <section className="bg-zinc-950 py-12 overflow-hidden border-y border-zinc-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-4 md:gap-8"
      >
        {words.map((word, index) => (
          <div key={index} className="flex items-center gap-4 md:gap-8">
            <span
              className={`text-3xl md:text-5xl lg:text-6xl font-bold italic ${
                index === 1 ? "text-lime-400" : "text-white"
              }`}
              style={{ fontFamily: "serif" }}
            >
              {word}
            </span>
            {index < words.length - 1 && (
              <span className="text-lime-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0 L13 11 L24 12 L13 13 L12 24 L11 13 L0 12 L11 11 Z" />
                </svg>
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
