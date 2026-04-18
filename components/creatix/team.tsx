"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const team = [
  {
    name: "Muhammad Zain",
    role: "CEO & Founder",
    image: "/images/muhammad-zain.jpeg",
    description: "Best in Web App Development, SEO, and Marketing Strategy Building. Delivering innovative digital solutions that drive growth.",
    phone: "03168200271",
    email: "mzainbhatti538@gmail.com",
  },
  {
    name: "Ali Zain",
    role: "Lead Developer",
    image: "/images/ali-zain.jpeg",
    description: "Expert in Machine Learning, Web Development, and App Development. Building intelligent solutions for modern businesses.",
    phone: "03086187962",
    email: "alizain25505@gmail.com",
  },
];

export function Team() {
  return (
    <section id="team" className="bg-zinc-950 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Meet{" "}
              <span className="relative inline-block">
                <span className="text-lime-400">Our</span>
              </span>{" "}
              <span className="relative inline-block">
                <span className="bg-lime-400 text-zinc-900 px-3 py-1 rounded">Team</span>
              </span>
            </h2>
          </div>
          <Link
            href="/about"
            className="mt-4 md:mt-0 text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
          >
            View full team page
          </Link>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-lime-400/50 transition-all group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-white font-semibold">{member.name}</h3>
                  <p className="text-lime-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-lime-400 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-lime-400 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
