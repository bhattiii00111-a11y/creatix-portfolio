"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from "@/components/creatix/header";
import { Footer } from "@/components/creatix/footer";
import {
  ArrowRight,
  Code,
  Search,
  TrendingUp,
  Smartphone,
  Brain,
  Palette,
  Globe,
  BarChart,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "We build modern, responsive, and high-performance websites that deliver exceptional user experiences. From landing pages to complex web applications, we have you covered.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "API Development & Integration",
      "Performance Optimization",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Transform your ideas into powerful mobile applications. We develop native and cross-platform apps that engage users and drive business growth.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "UI/UX Design for Mobile",
      "App Maintenance & Support",
      "App Store Optimization",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    description:
      "Leverage the power of artificial intelligence to automate processes, gain insights, and make smarter business decisions with our ML solutions.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "AI-Powered Chatbots",
      "Custom ML Models",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Boost your online visibility and drive organic traffic with our proven SEO strategies. We help you rank higher and reach your target audience.",
    features: [
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Technical SEO Audits",
      "Link Building Campaigns",
      "Local SEO Services",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategy",
    description:
      "Develop comprehensive marketing strategies that align with your business goals. We create data-driven campaigns that deliver measurable results.",
    features: [
      "Digital Marketing Campaigns",
      "Social Media Marketing",
      "Content Marketing Strategy",
      "Email Marketing Automation",
      "Analytics & Reporting",
    ],
    color: "from-lime-500 to-green-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Create beautiful, intuitive interfaces that users love. Our design team focuses on user-centered design principles to maximize engagement.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Usability Testing",
      "Design Systems",
    ],
    color: "from-pink-500 to-rose-500",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We develop a comprehensive plan tailored to your specific needs.",
  },
  {
    step: "03",
    title: "Execution",
    description: "Our team brings the strategy to life with precision and creativity.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "We continuously monitor and improve for maximum results.",
  },
];

export default function ServicesPage() {
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
              <span className="bg-lime-400 text-zinc-900 px-4 py-2 rounded-lg">Services</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We offer a comprehensive range of digital services designed to help your business
              grow and succeed in the modern marketplace.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-lime-400/50 transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-zinc-300"
                    >
                      <CheckCircle className="w-4 h-4 text-lime-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Our Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our <span className="text-lime-400">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 h-full">
                    <div className="text-4xl font-bold text-lime-400 mb-4">{step.step}</div>
                    <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-zinc-700" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Why Choose <span className="text-lime-400">Us</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Code,
                  title: "Expert Team",
                  description:
                    "Our team consists of skilled professionals with years of industry experience.",
                },
                {
                  icon: BarChart,
                  title: "Result-Driven",
                  description:
                    "We focus on delivering measurable results that impact your bottom line.",
                },
                {
                  icon: Globe,
                  title: "End-to-End Solutions",
                  description:
                    "From strategy to execution, we provide comprehensive digital solutions.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-lime-400/10 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-lime-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
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
            className="text-center"
          >
            <div className="bg-lime-400 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-zinc-700 mb-6 max-w-xl mx-auto">
                Contact us today to discuss your project and learn how we can help you achieve
                your goals.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors"
              >
                Contact Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
