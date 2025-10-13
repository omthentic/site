'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
  ];

  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.omthentic.ai';
  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-primary z-50 origin-left"
        style={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/20'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-200/10'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link href="/" aria-label="Omthentic home" className="flex items-center space-x-2">
                <Image
                  src="https://ik.imagekit.io/mwp/Omthentic/Omthentic%20Logo%20Transparent%20H.svg"
                  alt="Omthentic"
                  width={180}
                  height={44}
                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 180px"
                  priority
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-[var(--brand)] font-medium transition-colors duration-200 relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand)] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://app.omthentic.ai/auth"
                aria-label="Sign in to your account"
                className="text-gray-600 hover:text-primary font-medium transition-colors duration-200 focus-ring"
              >
                Sign In
              </a>
              <a
                href="https://app.omthentic.ai/auth"
                aria-label="Start practicing for free"
                className="button-primary flex items-center space-x-2 group focus-ring"
              >
                <span>Start Practicing</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus-ring"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 bg-background border-t border-gray-200/20 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-primary font-medium py-2 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-gray-200/20 flex flex-col space-y-3">
                <a href="https://app.omthentic.ai/auth" aria-label="Sign in to your account" className="text-left text-gray-600 hover:text-primary font-medium py-2 transition-colors duration-200 text-left focus-ring">
                  Sign In
                </a>
                <a href="https://app.omthentic.ai/auth" aria-label="Start practicing for free" className="button-primary flex items-center justify-center space-x-2 group focus-ring">
                  <span>Start Practicing</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </nav>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header; 