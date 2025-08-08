'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  ArrowRight,
  Heart
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'API', href: '/api' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' },
      ]
    },
    {
      title: 'Resources',  
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Community', href: '/community' },
        { name: 'Guides', href: '/guides' },
        { name: 'Webinars', href: '/webinars' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Security', href: '/security' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/omthentic' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/omthentic' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/omthentic' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@omthentic.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Link href="/" aria-label="Omthentic home" className="flex items-center space-x-3">
                    <Image src="https://ik.imagekit.io/mwp/Omthentic/Omthentic%20Logo%20Transparent%20H.svg" alt="Omthentic" width={180} height={44} className="h-11 w-auto" />
                  </Link>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                  Transform your communication skills with AI-powered feedback, 
                  real-time coaching, and personalized practice sessions. 
                  Speak with confidence, be your authentic self.
                </p>
                
                {/* Newsletter Signup */}
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-semibold mb-3">Stay Updated</h4>
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      aria-label="Email address for newsletter subscription"
                    />
                    <motion.button
                      className="bg-gradient-primary px-4 py-2 rounded-lg font-medium text-sm hover:shadow-hover transition-all duration-300 flex items-center space-x-1 focus-ring"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Subscribe to newsletter"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                {footerSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-semibold mb-4 text-white">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <motion.li
                          key={link.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: sectionIndex * 0.1 + linkIndex * 0.05 
                          }}
                          viewport={{ once: true }}
                        >
                          <a
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                          >
                            {link.name}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="py-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>© 2024 Omthentic.</span>
              <span>All rights reserved.</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for better communication</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent rounded-full blur-2xl" />
      </div>
    </footer>
  );
};

export default Footer; 