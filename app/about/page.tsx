"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/creatix/header";
import { Footer } from "@/components/creatix/footer";
import { Phone, Mail, ArrowRight, Code, TrendingUp, Smartphone, Brain } from "lucide-react";

const team = [
  {
    name: "Muhammad Zain",
    role: "CEO & Founder",
    image: "/images/muhammad-zain.jpeg",
    description:
      "Muhammad Zain is a visionary leader with expertise in Web App Development, SEO, and Marketing Strategy Building. With years of experience in the digital industry, he has helped numerous businesses achieve their online goals through innovative strategies and cutting-edge solutions.",
    phone: "03168200271",
    email: "mzainbhatti538@gmail.com",
    skills: ["Web App Development", "SEO Optimization", "Marketing Strategy", "Business Growth"],
  },
  {
    name: "Ali Zain",
    role: "Lead Developer",
    image: "/images/ali-zain.jpeg",
    description:
      "Ali Zain is a talented developer specializing in Machine Learning, Web Development, and App Development. His passion for technology and innovation drives him to create intelligent, user-centric solutions that transform businesses and deliver exceptional results.",
    phone: "03086187962",
    email: "alizain25505@gmail.com",
    skills: ["Machine Learning", "Web Development", "App Development", "AI Solutions"],
  },
];

const values = [
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Code,
    title: "Excellence",
    description: "We are committed to delivering the highest quality work in everything we do.",
  },
  {
    icon: Smartphone,
    title: "User-Centric",
    description: "Every solution we create is designed with the end-user experience in mind.",
  },
  {
    icon: Brain,
    title: "Intelligence",
    description: "We leverage AI and data-driven insights to create smarter solutions.",
  },
];

export default function AboutPage() {
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
              About{" "}
              <span className="bg-lime-400 text-zinc-900 px-4 py-2 rounded-lg">Creatix</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We are a passionate team of developers and strategists dedicated to empowering
              brands through creative and innovative digital solutions.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "4+", label: "Years Experience" },
              { number: "30+", label: "Happy Clients" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
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

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our <span className="text-lime-400">Story</span>
            </h2>
            <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-800">
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                Creatix was founded with a simple mission: to help businesses thrive in the
                digital age. We believe that every brand has a unique story to tell, and our
                job is to help them tell it in the most compelling way possible.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed">
                From web development and SEO to machine learning and app development, we offer
                a comprehensive suite of services designed to meet the evolving needs of modern
                businesses. Our team combines technical expertise with creative thinking to
                deliver solutions that not only look great but also drive real results.
              </p>
            </div>
          </motion.div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our <span className="text-lime-400">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-lime-400/50 transition-colors"
                >
                  <value.icon className="w-10 h-10 text-lime-400 mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Meet Our <span className="bg-lime-400 text-zinc-900 px-3 py-1 rounded">Team</span>
            </h2>

            <div className="space-y-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-zinc-900 rounded-3xl p-6 md:p-8 border border-zinc-800 hover:border-lime-400/50 transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="relative w-full lg:w-72 h-80 rounded-2xl overflow-hidden flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl text-white font-bold mb-2">
                        {member.name}
                      </h3>
                      <p className="text-lime-400 font-medium mb-4">{member.role}</p>
                      <p className="text-zinc-300 leading-relaxed mb-6">{member.description}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Contact Info */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-full text-zinc-300 hover:text-lime-400 hover:bg-zinc-700 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {member.phone}
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-full text-zinc-300 hover:text-lime-400 hover:bg-zinc-700 transition-colors"
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
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="bg-lime-400 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-zinc-700 mb-6 max-w-xl mx-auto">
                Let&apos;s collaborate and turn your ideas into reality. Contact us today to get
                started.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors"
              >
                View Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
