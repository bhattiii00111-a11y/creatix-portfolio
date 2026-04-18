"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/creatix/header";
import { Footer } from "@/components/creatix/footer";
import { ArrowRight, Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ahmed Khan",
    role: "CEO, TechStart Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    review:
      "Working with Creatix has been an incredible experience. Muhammad Zain and his team delivered our e-commerce platform ahead of schedule and exceeded all our expectations. Their attention to detail and commitment to quality is unmatched.",
    project: "E-Commerce Platform",
  },
  {
    name: "Sarah Ali",
    role: "Marketing Director, GreenLife",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    review:
      "The SEO strategy developed by Creatix transformed our online presence. We saw a 200% increase in organic traffic within 3 months. Their data-driven approach and transparent communication made the entire process seamless.",
    project: "SEO Optimization",
  },
  {
    name: "Hassan Malik",
    role: "Founder, FitTrack",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    review:
      "Ali Zain built our fitness app with incredible expertise in machine learning. The AI-powered workout recommendations have received amazing feedback from our users. Highly recommend their development team!",
    project: "Mobile App Development",
  },
  {
    name: "Fatima Nawaz",
    role: "Operations Manager, UrbanStay",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    review:
      "The real estate portal Creatix built for us is simply outstanding. The virtual tour feature and advanced search functionality have helped us close more deals than ever. Professional team and exceptional results.",
    project: "Real Estate Portal",
  },
  {
    name: "Omar Farooq",
    role: "CTO, DataPulse",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    review:
      "Their machine learning expertise is top-notch. The predictive analytics dashboard they built has become essential to our business operations. The team is responsive, knowledgeable, and truly cares about delivering value.",
    project: "ML Analytics Dashboard",
  },
  {
    name: "Ayesha Rahman",
    role: "Brand Manager, StyleHub",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    review:
      "Creatix helped us develop a complete brand identity and marketing strategy. The results speak for themselves - our brand recognition has skyrocketed and customer engagement is at an all-time high.",
    project: "Brand Strategy",
  },
];

const stats = [
  { number: "50+", label: "Happy Clients" },
  { number: "4.9", label: "Average Rating" },
  { number: "100%", label: "Satisfaction Rate" },
  { number: "95%", label: "Repeat Clients" },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Client{" "}
              <span className="bg-lime-400 text-zinc-900 px-4 py-2 rounded-lg">Reviews</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say
              about working with Creatix.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-2xl p-6 text-center border border-zinc-800"
              >
                <div className="text-3xl md:text-4xl font-bold text-lime-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-lime-400/50 transition-all relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-lime-400/20" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-lime-400 text-lime-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 leading-relaxed mb-6">{review.review}</p>

                {/* Project Tag */}
                <span className="inline-block px-3 py-1 bg-zinc-800 text-lime-400 text-sm rounded-full mb-6">
                  {review.project}
                </span>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{review.name}</h4>
                    <p className="text-zinc-400 text-sm">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Overall Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-800 text-center mb-20"
          >
            <div className="flex justify-center gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-lime-400 text-lime-400" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              4.9 out of 5 Stars
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Based on reviews from 50+ satisfied clients across various industries and project
              types.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-lime-400 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
                Ready to Join Our Happy Clients?
              </h2>
              <p className="text-zinc-700 mb-6 max-w-xl mx-auto">
                Let&apos;s discuss your project and see how we can help you achieve your goals.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
