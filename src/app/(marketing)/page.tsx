import { Metadata } from 'next';
import Link from 'next/link';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Testimonial } from '@/components/marketing/Testimonial';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medical School Interview Practice (MMI) | Omthentic',
  description: 'Practise for medical school interviews with 400+ MMI scenarios. Built on 15+ years coaching, 1,000+ successful students. Season Pass $97.',
  openGraph: {
    title: 'Medical School Interview Practice (MMI) | Omthentic',
    description: 'Practise for medical school interviews with 400+ MMI scenarios. Built on 15+ years coaching, 1,000+ successful students.',
  },
};

export default function HomePage() {
  const howItWorks = [
    {
      step: '1',
      title: 'Practise real stations',
      description: 'MMI circuits, ethical dilemmas, panel questions, motivation, teamwork, empathy. Timed like the real thing.',
    },
    {
      step: '2',
      title: 'Get assessor-aligned feedback',
      description: 'Structure, empathy, evidence, timing. Clear "keep/fix/try next" guidance on every answer.',
    },
    {
      step: '3',
      title: 'Build interview confidence',
      description: 'Track progress. Refine openings. Turn rambling into crisp, memorable responses that land.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section spacing="md" background="default" className="-mt-8">
        {/* Full-width Hero Image */}
        <div className="relative w-full animate-fade-in px-4 sm:px-0">
          <div className="w-full overflow-hidden rounded-lg sm:rounded-xl">
            {/* Light mode hero */}
            <Image
              src="/images/hero_v4.svg"
              alt="Omthentic - Express yourself clearly and confidently"
              width={1200}
              height={630}
              priority
              className="w-full h-auto dark:hidden"
            />
            {/* Dark mode hero */}
            <Image
              src="/images/Hero_dark_v3.svg"
              alt="Omthentic - Express yourself clearly and confidently"
              width={1200}
              height={630}
              priority
              className="w-full h-auto hidden dark:block"
            />
          </div>
        </div>

        {/* Subheadline */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in px-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-900 dark:text-gray-100 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
            Practise medical school interviews with 400+ MMI and panel scenarios. Instant feedback on structure, empathy, and evidence. Built on 15+ years coaching 1,000+ successful students.
          </p>
        </div>

        {/* CTA Section */}
        <Container>
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-scale-in">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#10B981] hover:bg-[#059669] active:bg-[#047857] text-white font-bold rounded-full px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg animate-electric-pulse border-0 min-h-[48px] touch-manipulation"
                asChild
              >
                <Link href="https://app.omthentic.ai">
                  Start free practice
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="min-h-[48px] touch-manipulation"
                asChild
              >
                <Link href="#pricing">
                  Get Season Pass — $97
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Social Proof */}
      <Section spacing="sm" background="subtle">
        <Container>
          <div className="text-center text-sm sm:text-base text-[var(--text-secondary)] max-w-4xl mx-auto">
            <p className="font-medium">
              90%+ interview success across coached cohorts · 1,000+ offers secured · Trained on 15+ years of medical interview coaching
            </p>
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section spacing="xl">
        <Container>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[var(--text)]">
              How it works
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Three steps to interview-ready answers
            </p>
          </div>

          <Grid cols={3} gap="xl">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center px-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand text-white flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6 shadow-e2">
                  {item.step}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[var(--text)]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Season Pass Pricing */}
      <div id="pricing">
      <Section spacing="xl" background="subtle">
        <Container>
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[var(--text)]">
              Season Pass
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Unlimited access for the interview season (Oct–Jan)
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card variant="elevated" className="border-2 border-brand">
              <CardHeader className="text-center pb-6">
                <div className="mb-4">
                  <div className="text-5xl sm:text-6xl font-bold text-brand mb-2">$97</div>
                  <div className="text-sm text-[var(--text-secondary)]">One-time payment · Full season access</div>
                </div>
                <CardDescription className="text-base">
                  Everything you need to feel prepared and sound authentic
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">200+ MMI/Panel scenarios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">200+ personal questions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Dynamic follow-ups & instant feedback (Structure, Empathy, Evidence, Timing)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">School Packs (AUS/NZ/UK)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Answer Builder & version history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Streaks, analytics, "next best station"</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-[var(--bg-subtle)] rounded-lg">
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                    <strong>Trained on:</strong> 15+ years coaching · 1,000+ successful students · Assessor-aligned frameworks
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-3">
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth 
                  className="bg-[#10B981] hover:bg-[#059669] text-white font-bold min-h-[48px] touch-manipulation"
                  asChild
                >
                  <Link href="https://app.omthentic.ai">
                    Get the Season Pass
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </Button>
                <p className="text-xs text-center text-[var(--text-secondary)]">
                  Optional: Human mock & expert review add-ons available
                </p>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </Section>
      </div>

      {/* Testimonials */}
      <Section spacing="xl">
        <Container>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[var(--text)]">
              From nervous to offered
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Real outcomes from students who practised with Omthentic
            </p>
          </div>

          <Grid cols={3} gap="lg">
            <Testimonial
              quote="I practised 60+ stations before my MMI. The feedback on timing and structure completely changed how I answered. Offer from Monash."
              author="Sarah T."
              role="Medical Student"
              company="Monash University"
              rating={5}
            />
            <Testimonial
              quote="The ethical dilemma scenarios are the closest thing to the real interview I've seen. I felt prepared, not scripted."
              author="James K."
              role="Medical Student"
              company="University of Auckland"
              rating={5}
            />
            <Testimonial
              quote="Honestly thought I rambled too much. The empathy feedback helped me sound more natural and still hit the key points. Got my first preference."
              author="Aisha M."
              role="Medical Student"
              company="University of Melbourne"
              rating={5}
            />
          </Grid>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section spacing="lg" background="subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--text)]">
              Start practising today
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              No trial period. No recurring charges. One Season Pass, unlimited practice until offers roll in.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#10B981] hover:bg-[#059669] text-white font-bold min-h-[48px] touch-manipulation"
                asChild
              >
                <Link href="https://app.omthentic.ai">
                  Start free practice
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="min-h-[48px] touch-manipulation"
                asChild
              >
                <Link href="#pricing">
                  Unlock Season Pass — $97
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

