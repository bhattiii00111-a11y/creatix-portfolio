"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/creatix/header";
import { Footer } from "@/components/creatix/footer";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const team = [
  {
    name: "Muhammad Zain",
    role: "CEO & Founder",
    expertise: "Web App, SEO & Marketing Strategy",
    image: "/images/muhammad-zain.jpeg",
    phone: "03168200271",
    email: "mzainbhatti538@gmail.com",
  },
  {
    name: "Ali Zain",
    role: "Lead Developer",
    expertise: "Machine Learning, Web & App Development",
    image: "/images/ali-zain.jpeg",
    phone: "03086187962",
    email: "alizain25505@gmail.com",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in{" "}
              <span className="bg-lime-400 text-zinc-900 px-4 py-2 rounded-lg">Touch</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-lime-400/20 border border-lime-400/50 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-lime-400" />
                    <span className="text-lime-400">Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-zinc-400 text-sm mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 text-sm mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-zinc-400 text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 transition-colors"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 text-sm mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="web-development">Web Development</option>
                        <option value="app-development">App Development</option>
                        <option value="machine-learning">Machine Learning & AI</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="marketing">Marketing Strategy</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-sm mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-lime-400 text-zinc-900 rounded-lg font-semibold hover:bg-lime-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Team */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
                <h2 className="text-2xl font-bold text-white mb-6">Quick Contact</h2>
                <div className="space-y-4">
                  <a
                    href="tel:03168200271"
                    className="flex items-center gap-4 p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-zinc-900" />
                    </div>
                    <div>
                      <p className="text-zinc-400 text-sm">Call Us</p>
                      <p className="text-white font-medium group-hover:text-lime-400 transition-colors">
                        03168200271
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:mzainbhatti538@gmail.com"
                    className="flex items-center gap-4 p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-zinc-900" />
                    </div>
                    <div>
                      <p className="text-zinc-400 text-sm">Email Us</p>
                      <p className="text-white font-medium group-hover:text-lime-400 transition-colors">
                        mzainbhatti538@gmail.com
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 bg-zinc-800 rounded-xl">
                    <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-zinc-900" />
                    </div>
                    <div>
                      <p className="text-zinc-400 text-sm">Location</p>
                      <p className="text-white font-medium">Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Our Team</h2>
                <div className="space-y-6">
                  {team.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-zinc-800 rounded-xl"
                    >
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold">{member.name}</h3>
                        <p className="text-lime-400 text-sm">{member.role}</p>
                        <p className="text-zinc-500 text-xs mb-2">{member.expertise}</p>
                        <div className="flex flex-wrap gap-2">
                          <a
                            href={`tel:${member.phone}`}
                            className="text-xs text-zinc-400 hover:text-lime-400 transition-colors flex items-center gap-1"
                          >
                            <Phone className="w-3 h-3" />
                            {member.phone}
                          </a>
                          <a
                            href={`mailto:${member.email}`}
                            className="text-xs text-zinc-400 hover:text-lime-400 transition-colors flex items-center gap-1"
                          >
                            <Mail className="w-3 h-3" />
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-lime-400 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-zinc-700 mb-6 max-w-2xl mx-auto">
              With 4+ years of experience and 100M+ in tracked revenue, we have the expertise
              to help your business grow. Let&apos;s create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:03168200271"
                className="px-6 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="mailto:mzainbhatti538@gmail.com"
                className="px-6 py-3 bg-white text-zinc-900 rounded-full font-medium hover:bg-zinc-100 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
