'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

type MenuItem = { label: string; path: string; badge?: string; optional?: boolean };
type MenuColumn = { groupLabel: string; items: MenuItem[] };
type Dropdown = { columns: MenuColumn[] };
type PrimaryNavItem = { label: string; path: string; dropdown?: Dropdown; optional?: boolean };

const primaryNav: PrimaryNavItem[] = [
  {
    label: 'Product',
    path: '/product',
    dropdown: {
      columns: [
        {
          groupLabel: 'Explore',
          items: [
            { label: 'Overview', path: '/product' },
            { label: 'How it works', path: '/product/how-it-works' },
            { label: 'Tailored AI Coach', path: '/product/coach' },
            { label: 'Charametrics by ShareTree', path: '/product/charametrics' },
            { label: 'Security & Privacy', path: '/trust/security' },
          ],
        },
        {
          groupLabel: 'Roadmap',
          items: [
            { label: 'What’s next', path: '/product/roadmap', badge: 'New', optional: true },
          ],
        },
      ],
    },
  },
  {
    label: 'Solutions',
    path: '/solutions',
    dropdown: {
      columns: [
        {
          groupLabel: 'Moments that matter',
          items: [
            { label: 'Medical Entrance Interviews (Pilot)', path: '/solutions/medical-interviews', badge: 'Pilot' },
            { label: 'Job & Career Interviews', path: '/solutions/job-interviews' },
            { label: 'Leadership & Team Conversations', path: '/solutions/leadership' },
            { label: 'Performance & Feedback', path: '/solutions/feedback' },
            { label: 'Personal & Relationship Communication', path: '/solutions/relationships', optional: true },
          ],
        },
      ],
    },
  },
  { label: 'Pricing', path: '/pricing' },
  {
    label: 'Resources',
    path: '/resources',
    dropdown: {
      columns: [
        {
          groupLabel: 'Learn',
          items: [
            { label: 'Blog', path: '/blog' },
            { label: 'Guides & Playbooks', path: '/resources/guides' },
            { label: 'Case Studies', path: '/resources/case-studies' },
          ],
        },
        {
          groupLabel: 'Engage',
          items: [
            { label: 'Events & Webinars', path: '/resources/events' },
            { label: 'Help Center', path: '/help' },
          ],
        },
      ],
    },
  },
  {
    label: 'Company',
    path: '/company',
    dropdown: {
      columns: [
        {
          groupLabel: 'About',
          items: [
            { label: 'Our Mission', path: '/company/mission' },
            { label: 'Impact & Values', path: '/company/impact' },
            { label: 'Careers', path: '/company/careers' },
            { label: 'Press & Media', path: '/company/press' },
            { label: 'Contact', path: '/company/contact' },
          ],
        },
      ],
    },
    optional: true,
  },
];

const utilityNav: { label: string; path: string; style?: 'primary' }[] = [
  { label: 'Sign in', path: '/login' },
  { label: 'Get started', path: '/get-started', style: 'primary' },
];

export default function ModernHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileSections, setOpenMobileSections] = useState<Record<string, boolean>>({});

  const toggleMobileSection = (label: string) => {
    setOpenMobileSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="https://ik.imagekit.io/mwp/Omthentic/Omthentic%20Logo%20Transparent%20H.svg?updatedAt=1754619654095"
                alt="Omthentic"
                className="h-8 w-auto hidden sm:block"
              />
              <img
                src="https://ik.imagekit.io/mwp/Omthentic/Omthentic%20Icon.svg?updatedAt=1754618772489"
                alt="Omthentic"
                className="h-8 w-8 sm:hidden"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {primaryNav.map((nav) => (
              <div key={nav.label} className="relative">
                {nav.dropdown ? (
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onMouseEnter={() => setActiveDropdown(nav.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {nav.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    href={nav.path}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {nav.label}
                  </Link>
                )}

                {/* Dropdown Mega Menu */}
                <AnimatePresence>
                  {nav.dropdown && activeDropdown === nav.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-[720px] bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
                      onMouseEnter={() => setActiveDropdown(nav.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="grid grid-cols-2 gap-0 p-4">
                        {nav.dropdown.columns.map((col) => (
                          <div key={col.groupLabel} className="px-2">
                            <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{col.groupLabel}</div>
                            <ul className="mt-1">
                              {col.items.map((item) => (
                                <li key={item.label}>
                                  <Link href={item.path} className="flex items-center justify-between gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">{item.label}</span>
                                    {item.badge ? (
                                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white">
                                        {item.badge}
                                      </span>
                                    ) : null}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {utilityNav.map((u) => (
              u.style === 'primary' ? (
                <Link key={u.label} href={u.path} className="px-5 py-2.5 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white text-sm font-medium rounded-lg hover:brightness-105 transition-all shadow-lg">
                  {u.label}
                </Link>
              ) : (
                <Link key={u.label} href={u.path} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  {u.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-4 space-y-2 pb-24">
              {primaryNav.map((nav) => (
                <div key={nav.label} className="border-b border-gray-200 dark:border-gray-800">
                  {nav.dropdown ? (
                    <button onClick={() => toggleMobileSection(nav.label)} className="w-full flex items-center justify-between px-3 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                      <span>{nav.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSections[nav.label] ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link href={nav.path} className="block px-3 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {nav.label}
                    </Link>
                  )}
                  {nav.dropdown && openMobileSections[nav.label] && (
                    <div className="ml-2 pb-3 space-y-3">
                      {nav.dropdown.columns.map((col) => (
                        <div key={col.groupLabel}>
                          <div className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{col.groupLabel}</div>
                          <div className="mt-1 space-y-1">
                            {col.items.map((item) => (
                              <Link key={item.label} href={item.path} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                                {item.label}
                                {item.badge ? (
                                  <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white align-middle">{item.badge}</span>
                                ) : null}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="fixed bottom-4 left-0 right-0 px-4">
                <div className="flex gap-2">
                  {utilityNav.map((u) => (
                    u.style === 'primary' ? (
                      <Link key={u.label} href={u.path} className="flex-1 px-4 py-3 bg-gradient-to-r from-[#2D6FFF] via-[#19B9D0] to-[#12D6C0] text-white text-sm font-medium rounded-lg text-center shadow-lg">
                        {u.label}
                      </Link>
                    ) : (
                      <Link key={u.label} href={u.path} className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-medium rounded-lg text-center">
                        {u.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
