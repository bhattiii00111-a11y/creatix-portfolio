"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-zinc-950 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Turning Ideas Into
              <br />
              Masterpieces
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg">
              We may be a compact team, but our creativity knows no bounds. By staying agile 
              and working hand-in-hand with our clients, we transform ideas into cutting-edge 
              designs that make a lasting impression.
            </p>

            {/* Decorative star */}
            <div className="text-lime-400 pt-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0 L13 11 L24 12 L13 13 L12 24 L11 13 L0 12 L11 11 Z" />
              </svg>
            </div>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main image */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop"
                  alt="Team collaboration"
                  width={800}
                  height={400}
                  className="object-cover w-full h-[250px]"
                />
                {/* Badge overlay */}
                <div className="absolute bottom-4 left-4 bg-lime-400 text-zinc-900 px-4 py-2 rounded-lg">
                  <div className="text-xs font-semibold uppercase">A Creative Design</div>
                  <div className="text-sm font-bold">Agency</div>
                </div>
              </div>

              {/* Secondary image */}
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                  alt="Creative team at work"
                  width={400}
                  height={300}
                  className="object-cover w-full h-[180px]"
                />
              </div>

              {/* Third image */}
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
                  alt="Design process"
                  width={400}
                  height={300}
                  className="object-cover w-full h-[180px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
