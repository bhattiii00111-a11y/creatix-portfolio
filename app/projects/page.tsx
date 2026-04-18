"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/creatix/header";
import { Footer } from "@/components/creatix/footer";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A fully responsive e-commerce platform with advanced filtering, payment integration, and inventory management.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
  },
  {
    title: "AI Customer Support Bot",
    category: "Machine Learning",
    description:
      "An intelligent chatbot powered by natural language processing to handle customer inquiries 24/7.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Python", "TensorFlow", "NLP"],
  },
  {
    title: "Fitness Tracking App",
    category: "App Development",
    description:
      "A mobile application for tracking workouts, nutrition, and health goals with social features.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Health API"],
  },
  {
    title: "SEO Dashboard",
    category: "SEO Optimization",
    description:
      "A comprehensive dashboard for monitoring keyword rankings, backlinks, and organic traffic.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Node.js", "Chart.js"],
  },
  {
    title: "Brand Identity System",
    category: "Marketing Strategy",
    description:
      "Complete brand identity including logo design, color palette, typography, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    tags: ["Branding", "Design System", "Guidelines"],
  },
  {
    title: "Real Estate Portal",
    category: "Web Development",
    description:
      "A property listing platform with advanced search, virtual tours, and mortgage calculator.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["React", "PostgreSQL", "Maps API"],
  },
];

export default function ProjectsPage() {
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
              Our{" "}
              <span className="bg-lime-400 text-zinc-900 px-4 py-2 rounded-lg">Projects</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects. Each project showcases our
              commitment to quality, innovation, and client satisfaction.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-lime-400/50 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-lime-400 text-zinc-900 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-lime-400 text-sm font-medium hover:gap-3 transition-all">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects Coming */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-800">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                More Projects Coming Soon
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto mb-6">
                We&apos;re constantly working on new and exciting projects. Stay tuned for
                updates to our portfolio.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["E-Learning Platform", "Healthcare App", "Fintech Dashboard"].map(
                  (item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-zinc-800 text-zinc-400 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
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
                Have a Project in Mind?
              </h2>
              <p className="text-zinc-700 mb-6 max-w-xl mx-auto">
                Let&apos;s work together to bring your vision to life. We&apos;d love to hear
                about your project.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
