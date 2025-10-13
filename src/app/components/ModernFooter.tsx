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
    { name: 'Blog', href: '/blog' },
    { name: 'How to Use', href: '/resources/how-to-use' },
    { name: 'Success Stories', href: '/resources/success-stories' },
    { name: 'Communication Tips', href: '/resources/interview-tips' },
    { name: 'Community', href: '/community' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Security', href: '/trust/security' },
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
    <footer className="bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-3 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--brand)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="font-semibold text-lg text-[var(--text)]">Omthentic</span>
            </Link>
            <p className="text-[var(--text-muted)] mb-4 max-w-xs">
              Your AI coach for medical interviews. Practice authentic scenarios, get actionable feedback, and track progress.
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
              <h3 className="font-semibold text-[var(--text)] mb-1">
                Stay updated with interview tips
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Get interview tips and new scenarios. 1–2 emails per month.
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-[var(--surface-muted)] border border-[var(--border)] rounded-lg text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] flex-1 min-w-0 md:w-64"
              />
              <button
                type="submit"
                className="button-primary whitespace-nowrap"
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
            
          </div>
        </div>
      </div>
    </footer>
  );
}
