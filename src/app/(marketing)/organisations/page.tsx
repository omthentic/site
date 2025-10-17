import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { FeatureList } from '@/components/marketing/FeatureList';
import { FAQ } from '@/components/marketing/FAQ';
import { ArrowRight, TrendingUp, Users, Target, Shield, Zap, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Organizations | Omthentic',
  description: 'Build a culture of clear, confident communication across your team. Enterprise communication training with advanced analytics and custom integrations.',
  openGraph: {
    title: 'For Organizations | Omthentic',
    description: 'Build a culture of clear, confident communication across your team.',
  },
};

export default function OrganisationsPage() {
  return (
    <div>
      {/* Hero */}
      <Section spacing="xl" background="subtle">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="brand" size="md" rounded="full" className="mb-6">
              For Organizations
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-[var(--text)]">
              Communication Training That Scales
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-10 leading-relaxed">
              Equip your team with communication skills that drive results. From leadership to client relations, build confidence across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">
                  Request Demo
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">
                  Enterprise Pricing
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
              Why Leading Organizations Choose Us
            </h2>
          </div>

          <FeatureList
            columns={3}
            features={[
              {
                icon: <Users size={24} />,
                title: 'Team Training',
                description: 'Scale communication training across departments. Consistent quality for all team members.',
              },
              {
                icon: <Target size={24} />,
                title: 'Custom Scenarios',
                description: 'Practice situations specific to your industry, clients, and challenges.',
              },
              {
                icon: <BarChart3 size={24} />,
                title: 'Advanced Analytics',
                description: 'Track team progress, identify skill gaps, and measure ROI with comprehensive dashboards.',
              },
              {
                icon: <Shield size={24} />,
                title: 'Enterprise Security',
                description: 'SSO, SOC 2 compliance, and dedicated security reviews. Your data stays protected.',
              },
              {
                icon: <Zap size={24} />,
                title: 'API Integration',
                description: 'Integrate with your existing LMS, HRIS, or communication tools seamlessly.',
              },
              {
                icon: <TrendingUp size={24} />,
                title: 'Measurable Impact',
                description: 'See improvements in client satisfaction, team confidence, and performance metrics.',
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
              Business Impact
            </h2>
          </div>

          <Grid cols={3} gap="lg">
            <Card variant="elevated" padding="lg">
              <div className="text-center">
                <div className="text-5xl font-bold text-brand mb-2">40%</div>
                <p className="text-[var(--text-secondary)]">Faster onboarding times</p>
              </div>
            </Card>
            <Card variant="elevated" padding="lg">
              <div className="text-center">
                <div className="text-5xl font-bold text-brand mb-2">3.2x</div>
                <p className="text-[var(--text-secondary)]">ROI in first year</p>
              </div>
            </Card>
            <Card variant="elevated" padding="lg">
              <div className="text-center">
                <div className="text-5xl font-bold text-brand mb-2">91%</div>
                <p className="text-[var(--text-secondary)]">Employee engagement increase</p>
              </div>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Case Study */}
      <Section spacing="xl">
        <Container>
          <Card variant="bordered" className="border-[var(--brand)] border-2">
            <CardHeader>
              <Badge variant="success" className="mb-4">Customer Story</Badge>
              <CardTitle className="text-3xl">
                TechCorp: Building a Culture of Clear Communication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 text-[var(--text-secondary)]">
                <p className="text-lg">
                  <strong className="text-[var(--text)]">Challenge:</strong> TechCorp&apos;s rapid growth led to communication breakdowns. New managers struggled with difficult conversations and client presentations.
                </p>
                <p className="text-lg">
                  <strong className="text-[var(--text)]">Solution:</strong> Implemented Omthentic across 200+ employees. Custom scenarios for client meetings, performance reviews, and team conflict resolution.
                </p>
                <p className="text-lg">
                  <strong className="text-[var(--text)]">Results:</strong> 85% improvement in manager confidence scores. Client satisfaction increased by 23%. Employee retention improved by 18%.
                </p>
                <div className="bg-[var(--bg-subtle)] rounded-lg p-6 mt-6">
                  <p className="italic text-[var(--text)]">
                    &ldquo;Omthentic became part of our culture. New managers now have the tools to lead with confidence, and it shows in our results.&rdquo;
                  </p>
                  <p className="mt-4 font-semibold text-sm">
                    — Alex Johnson, Chief People Officer, TechCorp
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* FAQ */}
      <Section spacing="lg" background="subtle">
        <Container size="md">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--text)]">
            Enterprise FAQs
          </h2>
          <FAQ
            items={[
              {
                question: 'How does enterprise pricing work?',
                answer: 'Enterprise plans are customized based on team size, features needed, and integration requirements. Contact us for a tailored quote.',
              },
              {
                question: 'Can we integrate with our existing systems?',
                answer: 'Yes. We offer API access and pre-built integrations with popular LMS, HRIS, and communication platforms. Custom integrations available.',
              },
              {
                question: 'What kind of support do enterprise customers receive?',
                answer: 'Dedicated account manager, priority support, regular business reviews, custom training sessions, and a direct line to our engineering team.',
              },
              {
                question: 'Is Omthentic compliant with security standards?',
                answer: 'Yes. We are SOC 2 Type II certified, GDPR compliant, and offer SSO, custom data residency, and regular security audits.',
              },
              {
                question: 'How long does implementation take?',
                answer: 'Most organizations are fully onboarded within 2-4 weeks. This includes setup, custom scenario creation, team training, and integration.',
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
                Let&apos;s Build Your Communication Strategy
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Schedule a demo to see how Omthentic can transform communication across your organization.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Request Enterprise Demo
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

