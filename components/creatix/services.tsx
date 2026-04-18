"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const services = [
  { number: "01", title: "UI/UX Design" },
  { number: "02", title: "Web Development" },
  { number: "03", title: "3D Designs" },
  { number: "04", title: "Motion Graphics" },
];

export function Services() {
  return (
    <section id="services" className="bg-zinc-950 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-zinc-500 text-sm uppercase tracking-wider mb-2">What we do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our <span className="relative inline-block">
              <span className="bg-lime-400 text-zinc-900 px-3 py-1 rounded">Services</span>
            </span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-md text-sm">
            We offer a range of creative and digital services designed to help your brand stand out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Services List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-full border border-zinc-800 hover:border-zinc-700 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-zinc-600 text-sm font-mono">{service.number}</span>
                  <span className="text-white font-medium">{service.title}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-lime-400 transition-colors" />
              </div>
            ))}
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Image with overlay */}
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=500&fit=crop"
                alt="Designer working on digital product"
                fill
                className="object-cover"
              />
              
              {/* Digital Creative label */}
              <div className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="text-xs text-zinc-400">Digital</div>
                <div className="text-sm text-white font-medium">Creative</div>
              </div>

              {/* CTA Cards */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-3">
                <div className="bg-zinc-900/90 backdrop-blur-sm rounded-xl p-4 flex-1">
                  <p className="text-xs text-zinc-400 mb-1">Ever wondered how design magic happens?</p>
                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                    See how we work
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
                <div className="bg-lime-400 rounded-xl p-4">
                  <p className="text-xs text-zinc-700 mb-1">Looking for design experts who can bring your vision to life?</p>
                  <div className="flex items-center gap-2 text-zinc-900 text-sm font-medium">
                    Meet our expert
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
