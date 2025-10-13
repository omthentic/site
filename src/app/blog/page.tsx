'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, Filter, User, Tag } from 'lucide-react';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Succeed in Your Medical Interview in Australia: The Power of Authentic Communication',
    excerpt: 'Discover why genuine communication trumps memorized responses in Australian medical interviews and how to harness your authentic voice for success.',
    author: 'Dr. Sarah Mitchell',
    date: '2024-01-15',
    readTime: '12 min read',
    category: 'Interview Preparation',
    featured: true,
    image: '/images/blog/ai-medical-interviews.jpg',
    slug: 'how-to-succeed-medical-interview-australia'
  },
  {
    id: '2',
    title: 'Emotional Intelligence: The Missing Skill in Australian Medical Interviews',
    excerpt: 'Why EQ trumps IQ in medical school admissions and how developing emotional intelligence can transform your interview performance and future medical career.',
    author: 'Dr. Michael Chen',
    date: '2024-01-12',
    readTime: '10 min read',
    category: 'AI & Technology',
    featured: true,
    image: '/images/blog/healthcare-communication.jpg',
    slug: 'emotional-intelligence-australian-medical-interviews'
  },
  {
    id: '3',
    title: 'Meaningful Preparation: The Mindset Shift That Transforms Your Medical Interview',
    excerpt: 'Discover how shifting from mechanical practice to meaningful preparation can dramatically improve your medical school interview performance and long-term success.',
    author: 'Dr. Amanda Foster',
    date: '2024-01-10',
    readTime: '11 min read',
    category: 'Interview Preparation',
    featured: false,
    image: '/images/blog/mmi-success.jpg',
    slug: 'meaningful-preparation-medical-interview'
  },
];

const categories = ['All', 'AI & Technology', 'Interview Preparation'];

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <ModernHeader />

      {/* Hero Section with Search */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-[var(--text)] mb-6">
              Insights & Stories
            </h1>
            <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto mb-8">
              Discover industry-leading insights on medical communication, AI-powered interview preparation, and authentic healthcare connections.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[var(--surface)] border border-[var(--border)] rounded-2xl text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-[var(--text)] mb-8 text-center"
            >
              Featured Articles
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-app overflow-hidden group cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-[var(--blue-100)] to-[var(--indigo-100)] rounded-t-2xl mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[var(--brand)] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">O</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="badge-app">{post.category}</span>
                      <span className="text-xs text-[var(--text-muted)]">Featured</span>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--text)] mb-3 group-hover:text-[var(--brand)] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-[var(--text-muted)] mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 mt-4 text-[var(--brand)] font-medium group-hover:gap-3 transition-all"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter & Articles Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[var(--brand)] text-white'
                    : 'bg-[var(--surface-muted)] text-[var(--text-muted)] hover:bg-[var(--blue-50)] hover:text-[var(--brand)]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} className="block">
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="card-app group cursor-pointer hover:shadow-lg transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-[var(--blue-50)] to-[var(--indigo-50)] rounded-t-2xl mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[var(--brand)] rounded-full flex items-center justify-center">
                      <Tag className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="badge-app">{post.category}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text)] mb-3 group-hover:text-[var(--brand)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-[var(--text-muted)] mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-4">
                      <div className="flex items-center gap-3">
                        <span>{post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <div className="inline-flex items-center gap-2 text-[var(--brand)] font-medium text-sm group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-[var(--surface-muted)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[var(--text-muted)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-2">No articles found</h3>
              <p className="text-[var(--text-muted)]">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[var(--bg-subtle)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-[var(--text)] mb-4">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-lg text-[var(--text-muted)] mb-8">
              Get weekly insights on medical communication, interview preparation, and industry trends delivered to your inbox.
            </p>

            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              />
              <button className="button-primary px-6">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-[var(--text-muted)] mt-4">
              Join 2,500+ healthcare professionals. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}


