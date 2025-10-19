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
    label: 'Solutions',
    path: '/solutions',
    dropdown: {
      columns: [
        {
          groupLabel: 'Moments that matter',
          items: [
            { label: 'Medical Entrance Interviews (Current Pilot)', path: '/solutions/medical-interviews' },
            { label: 'Leadership & Team Communication', path: '/solutions/leadership' },
            { label: 'Performance Reviews & Feedback Conversations', path: '/solutions/feedback' },
            { label: 'Personal & Relationship Communication', path: '/solutions/relationships' },
            { label: 'Parenting Communication Training', path: '/solutions/parenting' },
          ],
        },
      ],
    },
  },
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
            { label: 'About Us', path: '/about' },
            { label: 'Careers', path: '/company/careers' },
            { label: 'Our Partners', path: '/company/partners' },
            { label: 'Press & Media', path: '/company/press' },
            { label: 'Contact', path: '/company/contact' },
          ],
        },
      ],
    },
  },
];

const utilityNav: { label: string; path: string; style?: 'primary' }[] = [
  { label: 'Sign in', path: 'https://app.omthentic.ai/auth' },
  { label: 'Start Practicing', path: 'https://app.omthentic.ai/auth', style: 'primary' },
];

export default function ModernHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileSections, setOpenMobileSections] = useState<Record<string, boolean>>({});

  const toggleMobileSection = (label: string) => {
    setOpenMobileSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20 backdrop-blur-md bg-black/50 border-b border-white/10 rounded-b-2xl mx-4 px-6 lg:px-8">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {primaryNav.map((nav) => (
              <div key={nav.label} className="relative">
                {nav.dropdown ? (
                  <button
                    className="px-3 py-2 text-sm font-medium text-white hover:text-gray-200 flex items-center gap-1 transition-colors"
                    onMouseEnter={() => setActiveDropdown(nav.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {nav.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    href={nav.path}
                    className="px-3 py-2 text-sm font-medium text-white hover:text-gray-200 transition-colors"
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
                      className="absolute top-full left-0 mt-2 w-[720px] bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 overflow-hidden"
                      onMouseEnter={() => setActiveDropdown(nav.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="grid grid-cols-2 gap-0 p-6">
                        {nav.dropdown.columns.map((col) => (
                          <div key={col.groupLabel} className="px-2">
                            <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">{col.groupLabel}</div>
                            <ul className="space-y-1">
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

          {/* Center Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/images/Omthentic Horizontal.svg"
                alt="Omthentic"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              {utilityNav.map((u) => (
                u.style === 'primary' ? (
                  <Link key={u.label} href={u.path} className="button-primary">
                    {u.label}
                  </Link>
                ) : (
                  <Link key={u.label} href={u.path} className="px-4 py-2 text-sm font-medium text-white hover:text-gray-200 transition-colors">
                    {u.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 rounded-lg hover:bg-white/20 text-white transition-colors backdrop-blur-sm mr-2"
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
            className="lg:hidden bg-black/80 backdrop-blur-md border-t border-white/10 rounded-b-2xl mx-4 mt-2"
          >
            <div className="px-4 py-4 space-y-2 pb-24">
              {primaryNav.map((nav) => (
                <div key={nav.label} className="border-b border-white/10">
                  {nav.dropdown ? (
                    <button onClick={() => toggleMobileSection(nav.label)} className="w-full flex items-center justify-between px-3 py-3 text-left text-sm font-medium text-white hover:text-gray-200">
                      <span>{nav.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform text-white ${openMobileSections[nav.label] ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link href={nav.path} className="block px-3 py-3 text-sm font-medium text-white hover:text-gray-200">
                      {nav.label}
                    </Link>
                  )}
                  {nav.dropdown && openMobileSections[nav.label] && (
                    <div className="ml-2 pb-3 space-y-3">
                      {nav.dropdown.columns.map((col) => (
                        <div key={col.groupLabel}>
                          <div className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-gray-300">{col.groupLabel}</div>
                          <div className="mt-1 space-y-1">
                            {col.items.map((item) => (
                              <Link key={item.label} href={item.path} className="block px-4 py-2 text-sm text-gray-200 hover:bg-white/10 hover:text-white rounded-lg transition-colors">
                                {item.label}
                                {item.badge ? (
                                  <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white align-middle">{item.badge}</span>
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
                      <Link key={u.label} href={u.path} className="flex-1 button-primary text-center">
                        {u.label}
                      </Link>
                    ) : (
                      <Link key={u.label} href={u.path} className="flex-1 px-4 py-3 bg-white/10 text-white text-sm font-medium rounded-lg text-center hover:bg-white/20 transition-colors">
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
