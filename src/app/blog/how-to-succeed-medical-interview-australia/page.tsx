'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Share2, Twitter, Linkedin, Facebook, Link as LinkIcon, ChevronDown, ChevronUp } from 'lucide-react';
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
          Interview Success
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 leading-tight">
          How to Succeed in Your Medical Interview in Australia: The Power of Authentic Communication
        </h1>
        <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto mb-8">
          Discover why genuine communication trumps memorized responses in Australian medical interviews and how to harness your authentic voice for success.
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
          <span>Dr. Sarah Mitchell</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>January 15, 2024</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>12 min read</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const TableOfContents = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = [
    'The Australian Medical Interview Landscape',
    'Why Authentic Communication Matters',
    'Building Your Communication Foundation',
    'Practical Strategies for Interview Day',
    'Post-Interview Reflection and Growth',
    'Conclusion: Your Path to Success'
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
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">The Australian Medical Interview Landscape</h2>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Australian medical schools employ some of the most rigorous interview processes in the world. Unlike many international systems that rely heavily on academic metrics, Australian institutions prioritize holistic evaluation through Multiple Mini Interviews (MMIs), panel interviews, and scenario-based assessments.
        </p>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          The interview process typically lasts 45-60 minutes and covers everything from ethical dilemmas and communication scenarios to personal motivation and resilience. What makes Australian medical interviews particularly challenging is their focus on authenticity—interviewers can spot scripted responses from a mile away.
        </p>
        <div className="bg-[var(--blue-50)] border-l-4 border-[var(--brand)] p-6 rounded-r-lg my-6">
          <p className="text-[var(--text)] italic">
            &ldquo;In my 15 years of interviewing medical school candidates, I&apos;ve seen countless students with perfect GPAs fail because they couldn&apos;t communicate genuinely. The students who succeed are those who speak from their authentic experience and values.&rdquo;
          </p>
          <p className="text-[var(--text-muted)] text-sm mt-2">— Dr. Jennifer Walsh, Former GAMSAT Interview Panel Chair</p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Why Authentic Communication Matters</h2>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Research from the Australian Medical Council shows that communication skills are the single best predictor of long-term clinical performance. Yet most candidates focus their preparation on content memorization rather than genuine expression.
        </p>
        <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">The Science Behind Authentic Communication</h3>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          When you communicate authentically, several things happen neurologically:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-[var(--text-muted)]">
          <li><strong>Mirror neurons fire more actively</strong> in interviewers, creating subconscious rapport</li>
          <li><strong>Stress hormones decrease</strong> in both interviewer and interviewee</li>
          <li><strong>Cognitive load reduces</strong>, allowing for more natural, thoughtful responses</li>
          <li><strong>Trust builds faster</strong> through genuine emotional expression</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section id="section-3" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Building Your Communication Foundation</h2>
        <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">1. Self-Reflection: Know Your Story</h3>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Before you can communicate authentically, you need to understand your own narrative. Ask yourself:
        </p>
        <div className="bg-[var(--surface)] rounded-lg p-6 mb-6">
          <ul className="space-y-3 text-[var(--text-muted)]">
            <li>• What experiences shaped my desire to study medicine?</li>
            <li>• What values drive my decisions in difficult situations?</li>
            <li>• How do I handle stress and uncertainty?</li>
            <li>• What does &ldquo;patient-centered care&rdquo; mean to me personally?</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">2. Practice Active Listening</h3>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Authentic communication is bidirectional. Practice truly hearing what others say rather than planning your response.
        </p>
      </section>

      {/* Section 4 */}
      <section id="section-4" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Practical Strategies for Interview Day</h2>
        <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">The Power of the Pause</h3>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Don&apos;t fear silence. A thoughtful pause shows you&apos;re considering the question deeply rather than rushing to fill the space with words.
        </p>

        <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">Body Language Speaks Volumes</h3>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Your non-verbal communication often speaks louder than your words. Maintain open posture, steady eye contact, and genuine facial expressions.
        </p>
      </section>

      {/* Section 5 */}
      <section id="section-5" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Post-Interview Reflection and Growth</h2>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          The interview doesn&apos;t end when you walk out the door. Use the experience as a learning opportunity for your future in medicine.
        </p>
        <div className="card-app p-6">
          <h3 className="text-xl font-semibold text-[var(--text)] mb-4">Reflection Framework</h3>
          <ol className="list-decimal pl-6 space-y-2 text-[var(--text-muted)]">
            <li>What felt authentic in my responses?</li>
            <li>Where did I feel myself performing rather than being genuine?</li>
            <li>What values emerged naturally in my answers?</li>
            <li>How can I bring more of my authentic self to future interactions?</li>
          </ol>
        </div>
      </section>

      {/* Conclusion */}
      <section id="section-6" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Conclusion: Your Path to Success</h2>
        <p className="text-[var(--text-muted)] mb-6 leading-relaxed">
          Success in Australian medical interviews isn&apos;t about having the &ldquo;right&rdquo; answers&mdash;it&apos;s about bringing your authentic self to the conversation. When you communicate genuinely, you demonstrate the empathy, resilience, and self-awareness that define great physicians.
        </p>
        <div className="bg-gradient-to-r from-[var(--brand)] to-[var(--indigo-500)] text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Interview Performance?</h3>
          <p className="mb-6 opacity-90">
            Join thousands of successful medical students who discovered the power of authentic communication.
          </p>
          <Link href="/app/onboarding" className="inline-flex items-center gap-2 bg-white text-[var(--brand)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Start Your Journey
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
      title: 'Emotional Intelligence: The Missing Skill in Australian Medical Interviews',
      slug: 'emotional-intelligence-australian-medical-interviews',
      category: 'AI & Technology'
    },
    {
      title: 'Meaningful Preparation: The Mindset Shift That Transforms Your Medical Interview',
      slug: 'meaningful-preparation-medical-interview',
      category: 'Interview Preparation'
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
          <div className="w-16 h-16 bg-[var(--brand)] rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--text)] mb-2">Dr. Sarah Mitchell</h3>
            <p className="text-[var(--text-muted)] mb-3">
              Former medical school admissions director with over 15 years of experience in interview assessment.
              Currently serves as a consultant for medical education programs across Australia.
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
          Get More Interview Insights
        </h3>
        <p className="text-[var(--text-muted)] mb-6">
          Join 2,500+ medical students receiving weekly tips on authentic communication and interview success.
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
          Comments are currently disabled for this article. We&apos;d love to hear your thoughts&mdash;feel free to reach out via our contact page.
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
