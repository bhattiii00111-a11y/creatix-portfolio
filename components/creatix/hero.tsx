"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-zinc-950 pt-24 pb-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-lime-400">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
          <path d="M30 0 L32 28 L60 30 L32 32 L30 60 L28 32 L0 30 L28 28 Z" />
        </svg>
      </div>
      <div className="absolute top-40 right-20 text-lime-400 opacity-50">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
          <circle cx="15" cy="15" r="3" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Empowering Brands
              <br />
              Through Creative
              <br />
              <span className="relative inline-block">
                Solutions
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8 Q 50 2, 100 6 T 198 4"
                    stroke="#84cc16"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed">
              From web development to branding, we deliver innovative strategies that elevate
              your brand and drive growth. Let&apos;s create something exceptional together.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3 border border-zinc-700 rounded-full text-white text-sm hover:bg-zinc-800 transition-colors"
              >
                Meet Our Team
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="/services"
                className="px-6 py-3 bg-lime-400 text-zinc-900 rounded-full text-sm font-medium hover:bg-lime-300 transition-colors"
              >
                View Our Services
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3 bg-zinc-800 text-white rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors"
              >
                See Our Work
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden bg-zinc-800">
                <Image
                  src="/images/muhammad-zain.jpeg"
                  alt="Muhammad Zain - CEO & Founder of Creatix"
                  width={500}
                  height={600}
                  className="object-cover object-top w-full h-[400px] md:h-[500px]"
                />
              </div>

              {/* Rating badge */}
              <div className="absolute top-4 right-4 bg-zinc-900/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute bottom-4 right-4 bg-zinc-900/90 backdrop-blur-sm rounded-lg px-4 py-3 text-center">
                <div className="text-2xl font-bold text-white">4+ Years</div>
                <div className="text-xs text-zinc-400">Experience</div>
              </div>

              {/* Name badge */}
              <div className="absolute bottom-4 left-4 bg-zinc-900/90 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-lg font-bold text-white">Muhammad Zain</div>
                <div className="text-xs text-lime-400">CEO & Founder</div>
              </div>

              {/* Decorative leaf */}
              <div className="absolute -right-4 top-1/3 text-lime-400">
                <svg width="40" height="60" viewBox="0 0 40 60" fill="currentColor">
                  <path d="M20 0 C 35 20, 35 40, 20 60 C 5 40, 5 20, 20 0" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
