"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-lime-400 to-lime-300" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
                Get in Touch Today!
              </h2>
              <p className="text-zinc-700 mb-8 max-w-md">
                Let&apos;s transform your vision into exceptional digital experiences. 
                Whether you&apos;re looking for a complete rebrand, a stunning website, 
                or anything in between, we&apos;re here to help.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col gap-3 mb-8">
                <a
                  href="tel:03086187962"
                  className="flex items-center gap-3 text-zinc-800 hover:text-zinc-900 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">0308 6187962</span>
                </a>
                <a
                  href="mailto:alizain25505@gmail.com"
                  className="flex items-center gap-3 text-zinc-800 hover:text-zinc-900 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">alizain25505@gmail.com</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3 bg-white/80 text-zinc-900 rounded-full font-medium hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Right Content - Ali Zain Image */}
            <div className="relative h-[300px] lg:h-[400px] flex justify-center">
              <div className="relative w-[280px] lg:w-[320px] h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/ali-zain.jpeg"
                  alt="Ali Zain - Lead Developer"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-zinc-900/90 backdrop-blur-sm rounded-lg px-4 py-3">
                  <div className="text-lg font-bold text-white">Ali Zain</div>
                  <div className="text-xs text-lime-400">Lead Developer</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
