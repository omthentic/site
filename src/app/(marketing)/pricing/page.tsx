import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { PricingTable } from '@/components/marketing/PricingTable';
import { FAQ } from '@/components/marketing/FAQ';
import { CTA } from '@/components/marketing/CTA';
import { GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing | Omthentic',
  description: 'Simple, transparent pricing. Start free, upgrade when ready. 25% education discount available.',
  openGraph: {
    title: 'Pricing | Omthentic',
    description: 'Simple, transparent pricing. Start free, upgrade when ready.',
  },
};

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <Section spacing="xl" background="subtle">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="brand" size="md" rounded="full" className="mb-6">
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-[var(--text)]">
              Choose Your Plan
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-4 leading-relaxed">
              Start free. Upgrade when you&apos;re ready. Cancel anytime.
            </p>
            <Badge variant="success" size="md" rounded="full">
              <GraduationCap size={16} className="inline mr-2" />
              25% education discount available
            </Badge>
          </div>
        </Container>
      </Section>

      {/* Pricing Table */}
      <Section spacing="xl">
        <Container>
          <PricingTable
            tiers={[
              {
                name: 'Starter',
                description: 'Perfect for trying out Omthentic',
                monthlyPrice: 0,
                yearlyPrice: 0,
                currency: '$',
                features: [
                  '5 practice sessions per month',
                  'Basic AI feedback',
                  'Core scenarios library',
                  'Email support',
                  'Mobile app access',
                ],
                cta: 'Start Free',
                ctaHref: 'https://app.omthentic.ai',
              },
              {
                name: 'Pro',
                description: 'For serious practitioners',
                monthlyPrice: 29,
                yearlyPrice: 290,
                currency: '$',
                features: [
                  'Unlimited practice sessions',
                  'Advanced AI feedback',
                  'Full scenarios library',
                  'Custom scenario builder',
                  'Progress analytics',
                  'Priority email support',
                  'Video playback & analysis',
                ],
                cta: 'Start Free Trial',
                ctaHref: 'https://app.omthentic.ai',
                highlighted: true,
                badge: 'Most Popular',
              },
              {
                name: 'Teams',
                description: 'For schools and organizations',
                monthlyPrice: 99,
                yearlyPrice: 990,
                currency: '$',
                features: [
                  'Everything in Pro',
                  'Team management dashboard',
                  'Admin analytics & reporting',
                  'Custom branding',
                  'API access',
                  'Dedicated account manager',
                  'Phone & priority support',
                  'Custom integrations',
                ],
                cta: 'Contact Sales',
                ctaHref: '/contact',
              },
            ]}
          />

          <div className="text-center mt-12">
            <p className="text-[var(--text-muted)] mb-4">
              All plans include a 7-day free trial. No credit card required.
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              <strong>Students & Educators:</strong> Get 25% off Pro plan.{' '}
              <Link href="/contact" className="text-brand hover:underline">
                Verify eligibility →
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section spacing="lg" background="subtle">
        <Container size="md">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--text)]">
            Pricing FAQs
          </h2>
          <FAQ
            items={[
              {
                question: 'Can I switch plans later?',
                answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. Enterprise customers can pay via invoice.',
              },
              {
                question: 'Is there a refund policy?',
                answer: 'Yes. If you\'re not satisfied within the first 30 days, we\'ll give you a full refund—no questions asked.',
              },
              {
                question: 'How does the education discount work?',
                answer: 'Students and educators get 25% off the Pro plan. Verify your status with a .edu email or student ID to unlock the discount.',
              },
              {
                question: 'What happens after my free trial?',
                answer: 'You\'ll be automatically enrolled in the Starter (free) plan. Upgrade to Pro anytime to unlock unlimited practice sessions.',
              },
              {
                question: 'Do you offer custom enterprise plans?',
                answer: 'Yes! For organizations with 50+ users, we offer custom pricing with volume discounts, dedicated support, and tailored features.',
              },
            ]}
          />
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="lg">
        <Container>
          <CTA
            variant="gradient"
            title="Ready to start practicing?"
            description="Join thousands who are building confidence with Omthentic. Start your free 7-day trial today."
            primaryAction={{ label: 'Start Free Trial', href: 'https://app.omthentic.ai' }}
            secondaryAction={{ label: 'Contact Sales', href: '/contact' }}
          />
        </Container>
      </Section>
    </div>
  );
}

