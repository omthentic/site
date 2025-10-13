'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Share2, Twitter, Linkedin, Facebook, Link as LinkIcon, ChevronDown, ChevronUp, Heart, Users, MessageCircle, Target } from 'lucide-react';
import ModernHeader from '../../components/ModernHeader';
import ModernFooter from '../../components/ModernFooter';
import Link from 'next/link';

const ArticleHeader = () => (
  <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 badge-app mb-4">
          Emotional Intelligence
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 leading-tight">
          Emotional Intelligence: The Missing Skill in Australian Medical Interviews
        </h1>
        <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto mb-8">
          Why EQ trumps IQ in medical school admissions and how developing emotional intelligence can transform your interview performance and future medical career.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-muted)]"
      >
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>Dr. Michael Chen</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>January 12, 2024</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>10 min read</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const TableOfContents = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = [
    'The EQ Revolution in Medical Education',
    'Why EQ Matters More Than You Think',
    'The Five Domains of Emotional Intelligence',
    'Practical EQ Development Strategies',
    'Demonstrating EQ in Your Interview',
    'Measuring Your EQ Growth',
    'Conclusion: The EQ Advantage'
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="py-8 px-4 sm:px-6 lg:px-8 bg-[var(--bg-subtle)]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="card-app">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[var(--text)]">Table of Contents</h2>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-[var(--brand)] hover:text-[var(--blue-700)] transition-colors"
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              <span className="text-sm">{isExpanded ? 'Collapse' : 'Expand'}</span>
            </button>
          </div>

          {isExpanded && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-2"
            >
              {sections.map((section, index) => (
                <a
                  key={section}
                  href={`#section-${index + 1}`}
                  className="block py-2 px-3 text-sm text-[var(--text-muted)] hover:text-[var(--brand)] hover:bg-[var(--blue-50)] rounded-lg transition-colors"
                >
                  {section}
                </a>
              ))}
            </motion.nav>
          )}
        </div>
      </div>
    </motion.section>
  );
};

const ArticleContent = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="prose prose-lg max-w-none"
    >
      {/* Introduction */}
      <section id="section-1" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">The EQ Revolution in Medical Education</h2>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          While medical schools have traditionally focused on academic excellence and clinical knowledge, a quiet revolution is taking place. Emotional intelligence (EQ) has emerged as the critical differentiator between good doctors and great ones, and Australian medical schools are leading this change.
        </p>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Recent studies from the University of Sydney Medical School reveal that students with high emotional intelligence are 2.6 times more likely to succeed in their clinical placements and demonstrate better patient outcomes throughout their careers.
        </p>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-[var(--blue-50)] border-l-4 border-[var(--brand)] p-6 rounded-r-lg">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-[var(--brand)]" />
              <span className="font-semibold text-[var(--text)]">High EQ Doctors</span>
            </div>
            <p className="text-[var(--text-muted)] text-sm">
              Better patient satisfaction, fewer malpractice claims, stronger team collaboration
            </p>
          </div>
          <div className="bg-[var(--surface-muted)] border-l-4 border-[var(--text-muted)] p-6 rounded-r-lg">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-[var(--text-muted)]" />
              <span className="font-semibold text-[var(--text)]">Traditional Focus</span>
            </div>
            <p className="text-[var(--text-muted)] text-sm">
              Academic excellence, clinical knowledge, technical skills
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Why EQ Matters More Than You Think</h2>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Dr. Daniel Goleman's groundbreaking work on emotional intelligence revealed that EQ accounts for 58% of professional success, while IQ contributes only 20%. In medicine, this gap is even more pronounced.
        </p>
        <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">The EQ Advantage in Medical Practice</h3>
        <div className="bg-[var(--surface)] rounded-lg p-6 mb-6">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Users className="w-5 h-5 text-[var(--brand)] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[var(--text)] mb-1">Better Patient Relationships</h4>
                <p className="text-[var(--text-muted)] text-sm">High EQ physicians build trust faster and achieve better treatment compliance</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-[var(--brand)] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[var(--text)] mb-1">Effective Communication</h4>
                <p className="text-[var(--text-muted)] text-sm">Clear, empathetic communication reduces misunderstandings and medical errors</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-[var(--brand)] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[var(--text)] mb-1">Stress Management</h4>
                <p className="text-[var(--text-muted)] text-sm">Better emotional regulation leads to improved decision-making under pressure</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section-3" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">The Five Domains of Emotional Intelligence</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="card-app p-6">
            <div className="w-12 h-12 bg-[var(--brand)] rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Self-Awareness</h3>
            <p className="text-[var(--text-muted)] text-sm">Understanding your own emotions and their impact on others</p>
          </div>

          <div className="card-app p-6">
            <div className="w-12 h-12 bg-[var(--indigo-500)] rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Self-Regulation</h3>
            <p className="text-[var(--text-muted)] text-sm">Managing your emotions effectively, especially under stress</p>
          </div>

          <div className="card-app p-6">
            <div className="w-12 h-12 bg-[var(--success)] rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Motivation</h3>
            <p className="text-[var(--text-muted)] text-sm">Using emotional drivers to achieve long-term goals</p>
          </div>

          <div className="card-app p-6">
            <div className="w-12 h-12 bg-[var(--warning)] rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold">4</span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Empathy</h3>
            <p className="text-[var(--text-muted)] text-sm">Understanding and sharing the feelings of others</p>
          </div>

          <div className="card-app p-6">
            <div className="w-12 h-12 bg-[var(--error)] rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold">5</span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Social Skills</h3>
            <p className="text-[var(--text-muted)] text-sm">Building and maintaining healthy relationships</p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section-4" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Practical EQ Development Strategies</h2>
        <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">Daily Mindfulness Practice</h3>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Start with just 5 minutes of daily meditation or journaling. Focus on observing your emotions without judgment.
        </p>

        <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">Active Listening Exercises</h3>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Practice truly hearing others by paraphrasing what they've said and asking clarifying questions that show genuine interest.
        </p>

        <div className="bg-[var(--surface)] rounded-lg p-6 my-6">
          <h4 className="font-semibold text-[var(--text)] mb-3">EQ Building Exercise</h4>
          <p className="text-[var(--text-muted)] mb-3">For the next week, practice this simple technique:</p>
          <ol className="list-decimal pl-6 space-y-2 text-[var(--text-muted)]">
            <li>Before responding in any conversation, pause and identify your emotional state</li>
            <li>Ask yourself: "What is this person really feeling?"</li>
            <li>Respond with genuine empathy rather than just facts</li>
            <li>Reflect afterward: "How did that make them feel heard?"</li>
          </ol>
        </div>
      </section>

      {/* Section 5 */}
      <section id="section-5" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Demonstrating EQ in Your Interview</h2>
        <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">The Ethical Dilemma Scenario</h3>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          When faced with ethical questions, demonstrate EQ by acknowledging the emotional weight of the decision and showing empathy for all parties involved.
        </p>

        <div className="bg-[var(--blue-50)] border-l-4 border-[var(--brand)] p-6 rounded-r-lg my-6">
          <p className="text-[var(--text)] mb-2"><strong>Instead of:</strong> "The correct answer is..."</p>
          <p className="text-[var(--text)]"><strong>Say:</strong> "This situation involves real people with complex emotions. I would first acknowledge everyone's feelings before making a decision..."</p>
        </div>
      </section>

      {/* Section 6 */}
      <section id="section-6" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Measuring Your EQ Growth</h2>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Track your emotional intelligence development with these concrete metrics:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-app p-6">
            <h3 className="text-lg font-semibold text-[var(--text)] mb-3">Daily Reflection</h3>
            <ul className="space-y-2 text-[var(--text-muted)] text-sm">
              <li>• How did I handle stress today?</li>
              <li>• Did I listen more than I spoke?</li>
              <li>• How did my emotions affect my decisions?</li>
            </ul>
          </div>
          <div className="card-app p-6">
            <h3 className="text-lg font-semibold text-[var(--text)] mb-3">Feedback Collection</h3>
            <ul className="space-y-2 text-[var(--text-muted)] text-sm">
              <li>• Ask friends/family for honest input</li>
              <li>• Request feedback after group discussions</li>
              <li>• Track how others respond to your communication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="section-7" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Conclusion: The EQ Advantage</h2>
        <p className="text-[var(--text-muted)] mb-6 leading-relaxed">
          Emotional intelligence isn't just a "nice to have" skill—it's the foundation of excellent medical practice. In Australian medical interviews, demonstrating high EQ can be the deciding factor between acceptance and rejection.
        </p>
        <div className="bg-gradient-to-r from-[var(--brand)] to-[var(--indigo-500)] text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Develop Your EQ?</h3>
          <p className="mb-6 opacity-90">
            Join medical students worldwide who are building the emotional intelligence skills that will define their careers.
          </p>
          <Link href="/onboarding" className="inline-flex items-center gap-2 bg-white text-[var(--brand)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Start Building EQ
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </motion.div>
  </article>
);

const ArticleFooter = () => {
  const relatedArticles = [
    {
      title: 'How to Succeed in Your Medical Interview in Australia: The Power of Authentic Communication',
      slug: 'how-to-succeed-medical-interview-australia',
      category: 'Interview Success'
    },
    {
      title: 'Meaningful Preparation: The Mindset Shift That Transforms Your Medical Interview',
      slug: 'meaningful-preparation-medical-interview',
      category: 'Interview Preparation'
    },
    {
      title: 'The Psychology of First Impressions in Medical Interviews',
      slug: 'psychology-first-impressions',
      category: 'Psychology'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* Social Share */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="card-app p-6 mb-8"
      >
        <h3 className="text-xl font-bold text-[var(--text)] mb-4 flex items-center gap-2">
          <Share2 className="w-5 h-5" />
          Share this article
        </h3>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a91da] transition-colors">
            <Twitter className="w-4 h-4" />
            Twitter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006ba1] transition-colors">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#166fe5] transition-colors">
            <Facebook className="w-4 h-4" />
            Facebook
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[var(--surface-muted)] text-[var(--text-muted)] rounded-lg hover:bg-[var(--blue-50)] hover:text-[var(--brand)] transition-colors">
            <LinkIcon className="w-4 h-4" />
            Copy Link
          </button>
        </div>
      </motion.div>

      {/* Author Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="card-app p-6 mb-8"
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-[var(--indigo-500)] rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--text)] mb-2">Dr. Michael Chen</h3>
            <p className="text-[var(--text-muted)] mb-3">
              Clinical psychologist specializing in emotional intelligence development for healthcare professionals.
              Research focuses on the intersection of psychology and medical education.
            </p>
            <div className="flex gap-3">
              <Link href="/about" className="text-[var(--brand)] hover:text-[var(--blue-700)] font-medium text-sm">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Related Articles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-bold text-[var(--text)] mb-6">Related Articles</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedArticles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="card-app p-6 hover:shadow-lg transition-all group">
              <div className="badge-app inline-block mb-3">{article.category}</div>
              <h4 className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--brand)] transition-colors line-clamp-2">
                {article.title}
              </h4>
              <div className="flex items-center gap-2 text-[var(--brand)] font-medium text-sm group-hover:gap-3 transition-all">
                Read Article
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="card-app p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
          Develop Your Emotional Intelligence
        </h3>
        <p className="text-[var(--text-muted)] mb-6">
          Get weekly insights on building EQ skills that will transform your medical career and interview performance.
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
      </motion.div>

      {/* Comments Section (Placeholder) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="card-app p-6 mt-8"
      >
        <h3 className="text-xl font-bold text-[var(--text)] mb-4">Comments</h3>
        <p className="text-[var(--text-muted)]">
          Comments are currently disabled for this article. We'd love to hear your thoughts—feel free to reach out via our contact page.
        </p>
      </motion.div>
    </div>
  );
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <ModernHeader />
      <ArticleHeader />
      <TableOfContents />
      <ArticleContent />
      <ArticleFooter />
      <ModernFooter />
    </div>
  );
}
