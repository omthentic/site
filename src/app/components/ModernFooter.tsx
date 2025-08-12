'use client';

import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Youtube, Github } from 'lucide-react';

const footerLinks = {
  Product: [
    { name: 'Features', href: '/features' },
    { name: 'AI Coach', href: '/ai-coach' },
    { name: 'Practice Plans', href: '/practice-plans' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Changelog', href: '/resources/changelog' },
    { name: 'Roadmap', href: '/roadmap' },
  ],
  'Omthentic For': [
    { name: 'Medical Students', href: '/for/medical-students' },
    { name: 'Residents', href: '/for/residents' },
    { name: 'Healthcare Professionals', href: '/for/healthcare' },
    { name: 'Pre-Med Students', href: '/for/pre-med' },
    { name: 'Teams', href: '/for/teams' },
  ],
  Resources: [
    { name: 'Blog', href: '/resources/blog' },
    { name: 'How to Use', href: '/resources/how-to-use' },
    { name: 'Success Stories', href: '/resources/success-stories' },
    { name: 'Interview Tips', href: '/resources/interview-tips' },
    { name: 'Community', href: '/community' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Security', href: '/security' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/omthentic' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/omthentic' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@omthentic' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/omthentic' },
];

export default function ModernFooter() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="font-semibold text-lg text-gray-900 dark:text-white">Omthentic</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-xs">
              Master your medical interviews with AI-powered coaching and proven practice methods.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Stay updated with interview tips
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get weekly insights and strategies delivered to your inbox
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 flex-1 md:w-64"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div>
              © 2025 Omthentic. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span>Backed by</span>
              <div className="font-semibold text-gray-900 dark:text-white">Y Combinator</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
