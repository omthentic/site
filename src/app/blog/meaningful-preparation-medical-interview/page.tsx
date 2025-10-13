'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Share2, Twitter, Linkedin, Facebook, Link as LinkIcon, ChevronDown, ChevronUp, Target, BookOpen, Lightbulb, CheckCircle } from 'lucide-react';
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
          Mindset & Preparation
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 leading-tight">
          Meaningful Preparation: The Mindset Shift That Transforms Your Medical Interview
        </h1>
        <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto mb-8">
          Discover how shifting from mechanical practice to meaningful preparation can dramatically improve your medical school interview performance and long-term success.
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
          <span>Dr. Amanda Foster</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>January 10, 2024</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>11 min read</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const TableOfContents = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = [
    'The Preparation Paradox',
    'Understanding Meaningful vs Mechanical Practice',
    'The Psychology of Meaningful Preparation',
    'Building Your Preparation Framework',
    'Week-by-Week Preparation Guide',
    'The Day Before: Mental Preparation',
    'Interview Day: Execution and Adaptation',
    'Conclusion: Long-term Success Mindset'
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
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">The Preparation Paradox</h2>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Most medical school applicants approach interview preparation the same way: memorize answers, practice responses, and hope for the best. Yet research shows this mechanical approach often backfires, leading to robotic, inauthentic performances that fail to impress interviewers.
        </p>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          The paradox? The more you try to control your responses, the less genuine you appear. Meaningful preparation isn&apos;t about scripting answers&mdash;it&apos;s about developing the mental frameworks and self-awareness that allow you to respond authentically under pressure.
        </p>
        <div className="bg-[var(--warning)]/10 border-l-4 border-[var(--warning)] p-6 rounded-r-lg my-6">
          <p className="text-[var(--text)]">
            &ldquo;I&apos;ve interviewed hundreds of candidates who knew all the &apos;right&apos; answers but couldn&apos;t engage in genuine conversation. The students who succeed are those who prepare their minds, not just their responses.&rdquo;
          </p>
          <p className="text-[var(--text-muted)] text-sm mt-2">— Dr. Robert Martinez, Medical School Admissions Director</p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Understanding Meaningful vs Mechanical Practice</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="card-app p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-[var(--error)]" />
              <h3 className="text-lg font-semibold text-[var(--text)]">Mechanical Practice</h3>
            </div>
            <ul className="space-y-2 text-[var(--text-muted)] text-sm">
              <li>• Memorizing scripted responses</li>
              <li>• Focusing on &ldquo;correct&rdquo; answers</li>
              <li>• Anxiety about forgetting material</li>
              <li>• Robotic, inauthentic delivery</li>
              <li>• Poor adaptation to unexpected questions</li>
            </ul>
          </div>

          <div className="card-app p-6">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-[var(--success)]" />
              <h3 className="text-lg font-semibold text-[var(--text)]">Meaningful Preparation</h3>
            </div>
            <ul className="space-y-2 text-[var(--text-muted)] text-sm">
              <li>• Building mental frameworks</li>
              <li>• Understanding core values</li>
              <li>• Confidence in authentic expression</li>
              <li>• Natural, conversational responses</li>
              <li>• Flexibility with any question type</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section-3" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">The Psychology of Meaningful Preparation</h2>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Meaningful preparation works because it addresses the psychological factors that actually influence interview performance:
        </p>
        <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">Cognitive Load Theory</h3>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Our brains have limited working memory. Mechanical memorization overloads this capacity, leaving no room for genuine engagement. Meaningful preparation builds mental schemas that reduce cognitive load and allow for authentic expression.
        </p>

        <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">Self-Determination Theory</h3>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          When preparation feels autonomous and meaningful (rather than controlled), candidates experience higher motivation, better performance, and more authentic self-expression.
        </p>
      </section>

      {/* Section 4 */}
      <section id="section-4" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Building Your Preparation Framework</h2>
        <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">1. Values Clarification</h3>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Start by identifying your core values and motivations for medicine. This becomes your compass for authentic responses.
        </p>
        <div className="bg-[var(--surface)] rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-[var(--text)] mb-3">Values Exercise</h4>
          <p className="text-[var(--text-muted)] mb-3">Complete these sentences authentically:</p>
          <ul className="space-y-2 text-[var(--text-muted)]">
            <li>• &ldquo;I want to become a doctor because...&rdquo;</li>
            <li>• &ldquo;The most important aspect of patient care is...&rdquo;</li>
            <li>• &ldquo;When I&apos;m stressed, I...&rdquo;</li>
            <li>• &ldquo;I handle ethical dilemmas by...&rdquo;</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">2. Experience Mapping</h3>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Map your life experiences to common interview themes. Focus on the emotions and insights gained rather than just the facts.
        </p>
      </section>

      {/* Section 5 */}
      <section id="section-5" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Week-by-Week Preparation Guide</h2>
        <div className="space-y-8">
          <div className="card-app p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[var(--brand)] rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <h3 className="text-xl font-semibold text-[var(--text)]">Weeks 1-2: Foundation Building</h3>
            </div>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li>• Daily values clarification journaling</li>
              <li>• Read 2-3 articles about healthcare ethics</li>
              <li>• Practice explaining complex topics to non-medical friends</li>
              <li>• Record yourself discussing your motivations</li>
            </ul>
          </div>

          <div className="card-app p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[var(--indigo-500)] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <h3 className="text-xl font-semibold text-[var(--text)]">Weeks 3-4: Skill Development</h3>
            </div>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li>• Practice active listening with family/friends</li>
              <li>• Role-play ethical scenarios with peers</li>
              <li>• Develop personal stories for common themes</li>
              <li>• Focus on body language and tone practice</li>
            </ul>
          </div>

          <div className="card-app p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[var(--success)] rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <h3 className="text-xl font-semibold text-[var(--text)]">Weeks 5-6: Integration</h3>
            </div>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li>• Mock interviews with varied question styles</li>
              <li>• Practice improvisation and adaptation</li>
              <li>• Focus on natural conversation flow</li>
              <li>• Build confidence in authentic expression</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="section-6" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">The Day Before: Mental Preparation</h2>
        <div className="bg-[var(--blue-50)] border-l-4 border-[var(--brand)] p-6 rounded-r-lg mb-6">
          <h3 className="text-lg font-semibold text-[var(--text)] mb-3">Mental Preparation Ritual</h3>
          <ol className="list-decimal pl-6 space-y-2 text-[var(--text-muted)]">
            <li><strong>Review values, not answers</strong> - Revisit your core motivations</li>
            <li><strong>Practice presence</strong> - Do 10 minutes of mindfulness meditation</li>
            <li><strong>Visualize success</strong> - Imagine yourself communicating authentically</li>
            <li><strong>Rest completely</strong> - Avoid last-minute cramming</li>
          </ol>
        </div>
      </section>

      {/* Section 7 */}
      <section id="section-7" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Interview Day: Execution and Adaptation</h2>
        <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">The Power of Adaptation</h3>
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          Meaningful preparation gives you the confidence to adapt to any question or scenario. When you understand your values deeply, you can respond authentically to anything interviewers throw at you.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--brand)] rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-[var(--text)] mb-2">Knowledge</h4>
            <p className="text-[var(--text-muted)] text-sm">Deep understanding of healthcare issues</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--indigo-500)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-[var(--text)] mb-2">Insight</h4>
            <p className="text-[var(--text-muted)] text-sm">Personal understanding of complex issues</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--success)] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-[var(--text)] mb-2">Authenticity</h4>
            <p className="text-[var(--text-muted)] text-sm">Genuine expression of your values</p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="section-8" className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Conclusion: Long-term Success Mindset</h2>
        <p className="text-[var(--text-muted)] mb-6 leading-relaxed">
          Meaningful preparation isn&apos;t just about acing your medical school interview&mdash;it&apos;s about developing the mindset and skills that will serve you throughout your medical career. The authenticity, self-awareness, and communication skills you build will benefit every patient interaction and professional relationship.
        </p>
        <div className="bg-gradient-to-r from-[var(--brand)] to-[var(--indigo-500)] text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Preparation?</h3>
          <p className="mb-6 opacity-90">
            Join successful medical students who discovered the power of meaningful preparation and authentic communication.
          </p>
          <Link href="/app/onboarding" className="inline-flex items-center gap-2 bg-white text-[var(--brand)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Start Meaningful Preparation
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
      category: 'Interview Preparation'
    },
    {
      title: 'Emotional Intelligence: The Missing Skill in Australian Medical Interviews',
      slug: 'emotional-intelligence-australian-medical-interviews',
      category: 'AI & Technology'
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
          <div className="w-16 h-16 bg-[var(--success)] rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--text)] mb-2">Dr. Amanda Foster</h3>
            <p className="text-[var(--text-muted)] mb-3">
              Medical education researcher and former admissions committee member. Specializes in helping students develop authentic communication skills for medical school interviews.
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
          Master Meaningful Preparation
        </h3>
        <p className="text-[var(--text-muted)] mb-6">
          Get our complete guide to meaningful preparation and join 2,500+ students transforming their interview performance.
        </p>
        <div className="max-w-md mx-auto flex gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
          />
          <button className="button-primary px-6">
            Get Guide
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
