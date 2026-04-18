"use client";

import Link from "next/link";

const footerLinks = {
  support: [
    { label: "Contact Us", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Projects", href: "/projects" },
  ],
  services: [
    { label: "Web Development", href: "/services" },
    { label: "App Development", href: "/services" },
    { label: "SEO & Marketing", href: "/services" },
    { label: "Machine Learning", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Services", href: "/services" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-lime-400 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center">
                <span className="text-sm font-bold text-lime-400">C</span>
              </div>
              <span className="text-zinc-900 font-semibold text-xl">Creatix</span>
            </Link>
            <p className="text-zinc-700 text-sm max-w-xs mb-6">
              Empowering brands through creative solutions. Let&apos;s build something amazing together.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-zinc-700">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:mzainbhatti538@gmail.com" className="hover:text-zinc-900">
                  mzainbhatti538@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:03168200271" className="hover:text-zinc-900">
                  03168200271
                </a>
              </p>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-zinc-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-zinc-700 text-sm hover:text-zinc-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-zinc-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-zinc-700 text-sm hover:text-zinc-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-zinc-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-zinc-700 text-sm hover:text-zinc-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-900/20 pt-8">
          <p className="text-zinc-700 text-sm text-center">
            © 2026 Creatix. All rights reserved. | Muhammad Zain & Ali Zain
          </p>
        </div>
      </div>
    </footer>
  );
}
