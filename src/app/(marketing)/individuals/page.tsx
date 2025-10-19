import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { FeatureList } from '@/components/marketing/FeatureList';
import { Testimonial } from '@/components/marketing/Testimonial';
import { FAQ } from '@/components/marketing/FAQ';
import { ArrowRight, GraduationCap, Briefcase, Heart, Award, Zap, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Individuals | Omthentic',
  description: 'Master high-stakes conversations with personalized AI coaching. Prepare for interviews, presentations, and critical moments with confidence.',
  openGraph: {
    title: 'For Individuals | Omthentic',
    description: 'Master high-stakes conversations with personalized AI coaching.',
  },
};

export default function IndividualsPage() {
  const outcomes = [
    {
      metric: '89%',
      label: 'Report increased confidence',
    },
    {
      metric: '3.5x',
      label: 'More interview invitations',
    },
    {
      metric: '92%',
      label: 'Would recommend to others',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <Section spacing="xl" background="subtle">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="brand" size="md" rounded="full" className="mb-6">
              For Individuals
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-[var(--text)]">
              Your Personal AI Communication Coach
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-10 leading-relaxed">
              Whether you&apos;re preparing for med school interviews, job applications, or critical conversations, we&apos;ll help you show up as your best self.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild>
                <Link href="https://app.omthentic.ai">
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
          </div>
        </Container>
      </Section>

      {/* Value Props */}
      <Section spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[var(--text)]">
              Built for Your Success
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Practice scenarios tailored to your goals and get feedback that matters
            </p>
          </div>

          <FeatureList
            columns={3}
            features={[
              {
                icon: <GraduationCap size={24} />,
                title: 'Medical Interviews',
                description: 'MMI scenarios, ethical dilemmas, and behavioral questions. Practice with confidence.',
              },
              {
                icon: <Briefcase size={24} />,
                title: 'Job Interviews',
                description: 'Technical interviews, behavioral questions, and salary negotiations. Land your dream role.',
              },
              {
                icon: <Heart size={24} />,
                title: 'Difficult Conversations',
                description: 'Navigate sensitive topics with empathy and clarity. Build stronger relationships.',
              },
              {
                icon: <Award size={24} />,
                title: 'Presentations',
                description: 'Deliver compelling talks with confidence. Command the room every time.',
              },
              {
                icon: <Zap size={24} />,
                title: 'Instant Feedback',
                description: 'Get detailed analysis on content, delivery, and emotional intelligence immediately.',
              },
              {
                icon: <Target size={24} />,
                title: 'Track Progress',
                description: 'Watch your skills improve over time with comprehensive analytics and insights.',
              },
            ]}
          />
        </Container>
      </Section>

      {/* Outcomes */}
      <Section spacing="lg" background="subtle">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[var(--text)]">
              Real Results
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Join thousands who&apos;ve transformed their communication
            </p>
          </div>

          <Grid cols={3} gap="lg">
            {outcomes.map((outcome) => (
              <Card key={outcome.label} variant="elevated" padding="lg">
                <div className="text-center">
                  <div className="text-5xl font-bold text-brand mb-2">
                    {outcome.metric}
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    {outcome.label}
                  </p>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Mini Case Study */}
      <Section spacing="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card variant="bordered" className="border-[var(--brand)] border-2">
              <CardHeader>
                <Badge variant="success" className="mb-4">Success Story</Badge>
                <CardTitle className="text-3xl">
                  From Nervous to Accepted: Sarah&apos;s Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-[var(--text-secondary)]">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-[var(--text)]">The Challenge:</strong> Sarah had strong grades but struggled with interview anxiety. She&apos;d been rejected from three medical schools despite her qualifications.
                  </p>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-[var(--text)]">The Solution:</strong> Using Omthentic, Sarah practiced 50+ MMI scenarios over 6 weeks. She received detailed feedback on her responses, body language, and tone.
                  </p>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-[var(--text)]">The Result:</strong> Sarah was accepted to her top-choice medical school. She now helps other students prepare with confidence.
                  </p>

                  <div className="pt-6 border-t border-[var(--border)]">
                    <Testimonial
                      quote="The AI feedback was like having a personal interview coach available 24/7. I practiced until I felt completely confident. Worth every penny."
                      author="Dr. Sarah Chen"
                      role="Medical Student"
                      rating={5}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section spacing="lg" background="subtle">
        <Container size="md">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--text)]">
            Frequently Asked Questions
          </h2>
          <FAQ
            items={[
              {
                question: 'How is this different from watching YouTube videos?',
                answer: 'YouTube is passive learning. Omthentic is active practice. You actually have conversations, get instant feedback, and track your improvement over time. It\'s the difference between watching someone play piano and learning to play yourself.',
              },
              {
                question: 'Can I practice specific interview types?',
                answer: 'Yes! We have specialized scenarios for medical interviews (MMI, traditional), job interviews (behavioral, technical), scholarship applications, and more. You can also create custom scenarios.',
              },
              {
                question: 'How long does it take to see results?',
                answer: 'Most users report feeling more confident after 3-5 practice sessions. Significant improvement in interview performance typically comes after 2-3 weeks of regular practice.',
              },
              {
                question: 'Is the AI feedback accurate?',
                answer: 'Our AI is trained on thousands of successful interviews and is regularly updated. It analyzes content, delivery, body language, and emotional intelligence with high accuracy.',
              },
              {
                question: 'Can I use this on mobile?',
                answer: 'Yes! Omthentic works on all devices. Practice anywhere, anytime—on your phone, tablet, or computer.',
              },
            ]}
          />
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="lg">
        <Container>
          <Card variant="elevated" className="bg-gradient-to-br from-brand to-accent">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Start Your Transformation Today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of individuals who are communicating with confidence. Free 7-day trial, no credit card required.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link href="https://app.omthentic.ai">
                  Start Free Trial
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  );
}

