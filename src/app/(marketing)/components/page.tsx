'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Testimonial } from '@/components/marketing/Testimonial';
import { LogoRow } from '@/components/marketing/LogoRow';
import { FeatureList } from '@/components/marketing/FeatureList';
import { PricingTable } from '@/components/marketing/PricingTable';
import { FAQ } from '@/components/marketing/FAQ';
import { NewsletterForm } from '@/components/marketing/NewsletterForm';
import { CTA } from '@/components/marketing/CTA';
import { Zap, Shield, Globe, Heart, Star, Rocket } from 'lucide-react';

/**
 * Component Showcase Page
 * Interactive demos of all marketing components
 * Serves as Storybook alternative
 */
export default function ComponentsPage() {
  return (
    <div>
      {/* Hero */}
      <Section spacing="xl" background="subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="brand" rounded="full" className="mb-6">
              Component Library
            </Badge>
            <h1 className="text-5xl font-bold mb-6 text-[var(--text)]">
              Omthentic UI Components
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Accessible, responsive marketing components built with Next.js and Tailwind CSS.
            </p>
          </div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section spacing="lg">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-[var(--text)]">Buttons</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[var(--text-secondary)]">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[var(--text-secondary)]">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Badges */}
      <Section spacing="lg" background="subtle">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-[var(--text)]">Badges</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[var(--text-secondary)]">Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="default">Default</Badge>
                <Badge variant="brand">Brand</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[var(--text-secondary)]">Shapes</h3>
              <div className="flex flex-wrap gap-3">
                <Badge rounded="sm">Rounded SM</Badge>
                <Badge rounded="md">Rounded MD</Badge>
                <Badge rounded="full">Pill</Badge>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cards */}
      <Section spacing="lg">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-[var(--text)]">Cards</h2>
          <Grid cols={3} gap="lg">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Standard card with border and shadow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--text-secondary)]">
                  This is a default card variant with consistent styling.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Learn More</Button>
              </CardFooter>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>Higher shadow for emphasis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--text-secondary)]">
                  Use for important content that needs to stand out.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="accent">Get Started</Button>
              </CardFooter>
            </Card>

            <Card variant="interactive">
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>Hover to see the lift effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--text-secondary)]">
                  Perfect for clickable content with smooth animations.
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Features */}
      <Section spacing="lg" background="subtle">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-[var(--text)]">Feature List</h2>
          <FeatureList
            columns={3}
            features={[
              {
                icon: <Zap size={24} />,
                title: 'Lightning Fast',
                description: 'Optimized for performance with minimal bundle size.',
              },
              {
                icon: <Shield size={24} />,
                title: 'Secure by Default',
                description: 'Built with security best practices in mind.',
              },
              {
                icon: <Globe size={24} />,
                title: 'Global Scale',
                description: 'Deployed across edge networks worldwide.',
              },
              {
                icon: <Heart size={24} />,
                title: 'User-Friendly',
                description: 'Intuitive interfaces that users love.',
              },
              {
                icon: <Star size={24} />,
                title: 'Top Rated',
                description: 'Highly rated by thousands of users.',
              },
              {
                icon: <Rocket size={24} />,
                title: 'Always Improving',
                description: 'Regular updates with new features.',
              },
            ]}
          />
        </Container>
      </Section>

      {/* Testimonials */}
      <Section spacing="lg">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-[var(--text)]">Testimonials</h2>
          <Grid cols={2} gap="lg">
            <Testimonial
              quote="This platform has completely transformed how I prepare for interviews. The AI feedback is incredibly detailed and helpful."
              author="Dr. Sarah Chen"
              role="Medical Resident"
              company="Stanford Medicine"
              rating={5}
            />
            <Testimonial
              quote="I went from nervous and unprepared to confident and ready. The practice scenarios are realistic and challenging."
              author="Michael Rodriguez"
              role="Software Engineer"
              company="Google"
              rating={5}
            />
          </Grid>
        </Container>
      </Section>

      {/* Pricing */}
      <Section spacing="lg" background="subtle">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-center text-[var(--text)]">Pricing Table</h2>
          <PricingTable
            tiers={[
              {
                name: 'Starter',
                description: 'Perfect for individuals getting started',
                monthlyPrice: 19,
                yearlyPrice: 190,
                features: [
                  '10 practice sessions per month',
                  'Basic AI feedback',
                  'Email support',
                  'Mobile app access',
                ],
                cta: 'Start Free Trial',
                ctaHref: '/signup',
              },
              {
                name: 'Professional',
                description: 'For serious practitioners',
                monthlyPrice: 49,
                yearlyPrice: 490,
                features: [
                  'Unlimited practice sessions',
                  'Advanced AI feedback',
                  'Priority support',
                  'Custom scenarios',
                  'Analytics dashboard',
                ],
                cta: 'Get Started',
                ctaHref: '/signup',
                highlighted: true,
                badge: 'Most Popular',
              },
              {
                name: 'Team',
                description: 'For organizations and teams',
                monthlyPrice: 99,
                yearlyPrice: 990,
                features: [
                  'Everything in Professional',
                  'Team management',
                  'Dedicated support',
                  'Custom integrations',
                  'Advanced analytics',
                  'Onboarding assistance',
                ],
                cta: 'Contact Sales',
                ctaHref: '/contact',
              },
            ]}
          />
        </Container>
      </Section>

      {/* FAQ */}
      <Section spacing="lg">
        <Container size="md">
          <h2 className="text-3xl font-bold mb-8 text-center text-[var(--text)]">Frequently Asked Questions</h2>
          <FAQ
            items={[
              {
                question: 'How does the AI feedback work?',
                answer: 'Our AI analyzes your responses for content, delivery, and communication style. It provides detailed feedback on areas like clarity, confidence, and relevance.',
              },
              {
                question: 'Can I cancel my subscription anytime?',
                answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.',
              },
              {
                question: 'Is there a free trial?',
                answer: 'We offer a 7-day free trial on all plans. No credit card required to start.',
              },
              {
                question: 'Do you offer refunds?',
                answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with our service.',
              },
            ]}
          />
        </Container>
      </Section>

      {/* Newsletter */}
      <Section spacing="lg" background="subtle">
        <Container size="md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[var(--text)]">Stay in the Loop</h2>
          </div>
          <NewsletterForm
            description="Get updates on new features, tips, and exclusive content."
            onSubmit={async (email) => {
              console.log('Newsletter signup:', email);
              await new Promise(resolve => setTimeout(resolve, 1000));
            }}
          />
        </Container>
      </Section>

      {/* CTA Blocks */}
      <Section spacing="lg">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-[var(--text)]">Call-to-Action Blocks</h2>
          <div className="space-y-8">
            <CTA
              variant="gradient"
              title="Ready to master your communication?"
              description="Join thousands of professionals who are building confidence with Omthentic."
              primaryAction={{ label: 'Start Free Trial', href: '/signup' }}
              secondaryAction={{ label: 'View Pricing', href: '/pricing' }}
            />

            <CTA
              variant="bordered"
              title="Have questions? We&apos;re here to help"
              description="Our team is ready to answer your questions and help you get started."
              primaryAction={{ label: 'Contact Us', href: '/contact' }}
              centered={false}
            />
          </div>
        </Container>
      </Section>

      {/* Logo Row */}
      <Section spacing="md" background="subtle">
        <Container>
          <LogoRow
            title="Trusted by leading organizations"
            logos={[
              { name: 'Company 1', src: '/images/placeholder-logo.png' },
              { name: 'Company 2', src: '/images/placeholder-logo.png' },
              { name: 'Company 3', src: '/images/placeholder-logo.png' },
              { name: 'Company 4', src: '/images/placeholder-logo.png' },
            ]}
          />
        </Container>
      </Section>
    </div>
  );
}

