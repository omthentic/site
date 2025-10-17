'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { ArrowRight, CheckCircle2, Target, Brain, Repeat, MessageSquare, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const pipeline = [
  {
    id: 'assess',
    icon: <Target size={32} />,
    title: 'Assess',
    description: 'Identify your communication style and areas for growth',
    details: 'Start with a quick assessment that analyzes your current communication patterns. Our AI identifies your strengths and opportunities for improvement.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'learn',
    icon: <Brain size={32} />,
    title: 'Learn',
    description: 'Master bite-size techniques backed by research',
    details: 'Access curated micro-lessons on body language, tone, clarity, and confidence. Each lesson is under 5 minutes and immediately applicable.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'practice',
    icon: <Repeat size={32} />,
    title: 'Practice',
    description: 'Engage in realistic AI-powered conversations',
    details: 'Practice with our AI coach in scenarios tailored to your goals. Get instant feedback on content, delivery, and emotional intelligence.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'coach',
    icon: <MessageSquare size={32} />,
    title: 'Coach',
    description: 'Receive detailed, actionable feedback',
    details: 'Our AI analyzes your responses for clarity, confidence, and relevance. Get specific suggestions on what to improve and how.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'apply',
    icon: <TrendingUp size={32} />,
    title: 'Apply',
    description: 'Show up prepared and track your progress',
    details: 'Watch your confidence grow with progress tracking and analytics. Apply your skills in real situations with newfound confidence.',
    color: 'from-teal-500 to-cyan-500',
  },
];

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <div>
      {/* Hero */}
      <Section spacing="xl" background="subtle">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="brand" size="md" rounded="full" className="mb-6">
              The Omthentic Method
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-[var(--text)]">
              How It Works
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-10 leading-relaxed">
              Our proven 5-step process turns communication challenges into confident conversations
            </p>
          </div>
        </Container>
      </Section>

      {/* Pipeline */}
      <Section spacing="xl">
        <Container>
          <div className="space-y-8">
            {pipeline.map((step, index) => (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                className="transition-all duration-base"
              >
                <Card 
                  variant={activeStep === step.id ? 'bordered' : 'default'}
                  className={cn(
                    'cursor-pointer transition-all duration-base',
                    activeStep === step.id && 'border-[var(--brand)] shadow-e3 scale-[1.02]'
                  )}
                >
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      {/* Step Number */}
                      <div className={cn(
                        'flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white',
                        'bg-gradient-to-br',
                        step.color
                      )}>
                        {index + 1}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-[var(--brand)]">
                            {step.icon}
                          </div>
                          <CardTitle className="text-2xl">{step.title}</CardTitle>
                        </div>
                        
                        <p className="text-lg text-[var(--text-secondary)] mb-4">
                          {step.description}
                        </p>

                        {/* Expandable Details */}
                        <div className={cn(
                          'overflow-hidden transition-all duration-slow',
                          activeStep === step.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        )}>
                          <div className="pt-4 border-t border-[var(--border)]">
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                              {step.details}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className={cn(
                        'flex-shrink-0 transition-transform duration-base',
                        activeStep === step.id && 'translate-x-2'
                      )}>
                        <ArrowRight size={24} className="text-[var(--text-muted)]" />
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Connector */}
                {index < pipeline.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-[var(--border)]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-[var(--text-muted)] mb-6">
              Hover over each step to learn more
            </p>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section spacing="lg" background="subtle">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--text)]">
              Why Our Method Works
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: 'Science-Backed Approach',
                  description: 'Built on research in communication psychology, adult learning theory, and behavioral science.',
                },
                {
                  title: 'Personalized Learning',
                  description: 'Adapts to your goals, pace, and progress. No two journeys are the same.',
                },
                {
                  title: 'Immediate Application',
                  description: 'Practice what you learn right away. Build muscle memory for real situations.',
                },
                {
                  title: 'Continuous Improvement',
                  description: 'Track your growth over time. See measurable progress in confidence and clarity.',
                },
              ].map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[var(--text)]">
                      {benefit.title}
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="lg">
        <Container>
          <Card variant="bordered" className="border-[var(--brand)] border-2">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-[var(--text)]">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                Experience the Omthentic method with a free 7-day trial. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/app/sign-up">
                    Start Free Trial
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/pricing">
                    View Pricing
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  );
}

