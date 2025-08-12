'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Users, Code, Briefcase, Target, Brain, Zap } from 'lucide-react';

const navigation = {
  'Why Omthentic?': {
    href: '/why-omthentic',
    dropdown: null
  },
  'Omthentic For': {
    href: '#',
    dropdown: [
      { title: 'Medical Students', icon: Brain, desc: 'Master your medical school interviews', href: '/for/medical-students' },
      { title: 'Residents', icon: Target, desc: 'Excel in residency interviews', href: '/for/residents' },
      { title: 'Healthcare Professionals', icon: Briefcase, desc: 'Advance your medical career', href: '/for/healthcare' },
      { title: 'Pre-Med Students', icon: Sparkles, desc: 'Start your medical journey strong', href: '/for/pre-med' },
      { title: 'Teams', icon: Users, desc: 'Train your entire cohort together', href: '/for/teams' },
    ]
  },
  'Resources': {
    href: '#',
    dropdown: [
      { title: 'How to Use', desc: 'Get started guide', href: '/resources/how-to-use' },
      { title: 'Blog', desc: 'Tips and insights', href: '/resources/blog' },
      { title: 'Changelog', desc: 'Latest updates', href: '/resources/changelog' },
      { title: 'Success Stories', desc: 'Real results', href: '/resources/success-stories' },
    ]
  },
  'Ambassador': {
    href: '/ambassador',
    dropdown: null
  }
};

export default function ModernHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="font-semibold text-lg text-gray-900 dark:text-white">Omthentic</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {Object.entries(navigation).map(([key, value]) => (
              <div key={key} className="relative">
                {value.dropdown ? (
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onMouseEnter={() => setActiveDropdown(key)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {key}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    href={value.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {key}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {value.dropdown && activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-72 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
                      onMouseEnter={() => setActiveDropdown(key)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-2">
                        {value.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            {item.icon && (
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg flex items-center justify-center mt-0.5">
                                <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              </div>
                            )}
                            <div>
                              <div className="font-medium text-gray-900 dark:text-white">{item.title}</div>
                              {item.desc && (
                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{item.desc}</div>
                              )}
                            </div>
                          </Link>
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
            <Link
              href="/sign-in"
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Log in
            </Link>
            <Link
              href="/sign-up"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-600/25"
            >
              Try for free
            </Link>
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
            <div className="px-4 py-4 space-y-2">
              {Object.entries(navigation).map(([key, value]) => (
                <div key={key}>
                  {value.dropdown ? (
                    <>
                      <div className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        {key}
                      </div>
                      <div className="ml-3 space-y-1">
                        {value.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={value.href}
                      className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                    >
                      {key}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2 border-t border-gray-200 dark:border-gray-800">
                <Link
                  href="/sign-in"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                >
                  Log in
                </Link>
                <Link
                  href="/sign-up"
                  className="block px-3 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg text-center"
                >
                  Try for free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
