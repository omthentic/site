import { Metadata } from 'next';
import Link from 'next/link';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Testimonial } from '@/components/marketing/Testimonial';
import { LogoRow } from '@/components/marketing/LogoRow';
import { CTA } from '@/components/marketing/CTA';
import { ArrowRight, Users, School, Building2, CheckCircle, Sparkles, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Omthentic | Express Yourself Clearly and Confidently',
  description: 'Bite-size learning and feedback that turn strengths into opportunities. Master high-stakes conversations with AI-powered practice.',
  openGraph: {
    title: 'Omthentic | Express Yourself Clearly and Confidently',
    description: 'Bite-size learning and feedback that turn strengths into opportunities.',
  },
};

export default function HomePage() {
  const paths = [
    {
      icon: <Users size={32} />,
      title: 'Students',
      description: 'Prepare for interviews, presentations, and critical conversations with confidence.',
      features: ['Medical interviews', 'Job interviews', 'Scholarship applications'],
      href: '/individuals',
    },
    {
      icon: <School size={32} />,
      title: 'Schools',
      description: 'Equip your students with communication skills that last a lifetime.',
      features: ['Curriculum integration', 'Progress tracking', 'Student analytics'],
      href: '/schools',
    },
    {
      icon: <Building2 size={32} />,
      title: 'Organizations',
      description: 'Build a culture of clear, confident communication across your team.',
      features: ['Team training', 'Custom scenarios', 'Performance insights'],
      href: '/organisations',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Choose Your Path',
      description: 'Select from medical interviews, job prep, leadership, or custom scenarios tailored to your goals.',
    },
    {
      step: '2',
      title: 'Practice with AI',
      description: 'Engage in realistic conversations with our AI coach. Get instant, detailed feedback on what works.',
    },
    {
      step: '3',
      title: 'Apply with Confidence',
      description: 'Track your progress, refine your approach, and show up prepared when it matters most.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section spacing="xl" background="default">
        {/* Full-width Hero Image */}
        <div className="relative w-full animate-fade-in px-4 sm:px-0">
          <div className="w-full overflow-hidden rounded-lg sm:rounded-xl">
            <Image
              src="/images/hero_v3.svg"
              alt="Omthentic - Express yourself clearly and confidently"
              width={1200}
              height={630}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Subheadline */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in px-4">
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-6 sm:mb-8">
            Bite-size learning and feedback that turn strengths into opportunities. Master high-stakes conversations with AI-powered practice.
          </p>
        </div>

        {/* CTA Section */}
        <Container>
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <div className="flex justify-center items-center animate-scale-in">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#10B981] hover:bg-[#059669] active:bg-[#047857] text-white font-bold rounded-full px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg animate-electric-pulse border-0 min-h-[48px] touch-manipulation"
                asChild
              >
                <Link href="/app/sign-up">
                  Get Started
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Logo Row */}
      <Section spacing="md">
        <Container>
          <LogoRow
            title="Trusted by students and professionals worldwide"
            logos={[
              { name: 'Partner 1', src: '/images/placeholder-logo.png' },
              { name: 'Partner 2', src: '/images/placeholder-logo.png' },
              { name: 'Partner 3', src: '/images/placeholder-logo.png' },
              { name: 'Partner 4', src: '/images/placeholder-logo.png' },
              { name: 'Partner 5', src: '/images/placeholder-logo.png' },
            ]}
          />
        </Container>
      </Section>

      {/* How It Works */}
      <Section spacing="xl">
        <Container>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[var(--text)]">
              How It Works
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Three simple steps to transform how you communicate
            </p>
          </div>

          <Grid cols={3} gap="xl">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center px-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand text-brand-foreground flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6 shadow-e2">
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

          <div className="text-center mt-8 sm:mt-12 px-4">
            <Button variant="outline" size="lg" className="min-h-[48px] touch-manipulation" asChild>
              <Link href="/how-it-works">
                Explore the Full Process
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Path Cards */}
      <Section spacing="xl" background="subtle">
        <Container>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[var(--text)]">
              Choose Your Path
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Tailored experiences for every stage of your journey
            </p>
          </div>

          <Grid cols={3} gap="lg">
            {paths.map((path) => (
              <Card key={path.title} variant="interactive">
                <CardHeader>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-brand/10 flex items-center justify-center text-brand mb-3 sm:mb-4">
                    {path.icon}
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">{path.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 sm:space-y-3">
                    {path.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                        <CheckCircle size={16} className="text-success flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" fullWidth className="min-h-[44px] touch-manipulation" asChild>
                    <Link href={path.href}>
                      Learn More
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section spacing="xl">
        <Container>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[var(--text)]">
              What Our Users Say
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Real stories from people who transformed their communication
            </p>
          </div>

          <Grid cols={3} gap="lg">
            <Testimonial
              quote="The AI feedback is incredibly detailed. I went from nervous to confident in my medical school interviews within weeks."
              author="Dr. Sarah Chen"
              role="Medical Resident"
              company="Stanford Medicine"
              rating={5}
            />
            <Testimonial
              quote="This platform helped me land my dream job. The practice scenarios felt so real, I was completely prepared."
              author="Michael Rodriguez"
              role="Software Engineer"
              company="Google"
              rating={5}
            />
            <Testimonial
              quote="I use this with my students. The progress tracking and insights help me support them better than ever before."
              author="Emma Thompson"
              role="Career Counselor"
              company="University of Melbourne"
              rating={5}
            />
          </Grid>
        </Container>
      </Section>

      {/* Resource Teaser */}
      <Section spacing="lg" background="subtle">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 px-4">
              <Badge variant="accent" size="md" rounded="full" className="mb-3 sm:mb-4">
                <Target size={14} className="inline mr-2" />
                Free Resources
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-[var(--text)]">
                Learn from Our Experts
              </h2>
              <p className="text-base sm:text-lg text-[var(--text-secondary)]">
                Guides, tips, and insights to help you communicate with confidence
              </p>
            </div>

            <Grid cols={3} gap="md">
              <Card variant="elevated">
                <CardHeader>
                  <Badge variant="info" size="sm" className="mb-2">Guide</Badge>
                  <CardTitle className="text-lg sm:text-xl">Mastering Medical Interviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                    Essential strategies for medical school and residency interviews.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <Badge variant="success" size="sm" className="mb-2">Tips</Badge>
                  <CardTitle className="text-lg sm:text-xl">Body Language Basics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                    Non-verbal communication tips that make a lasting impression.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <Badge variant="warning" size="sm" className="mb-2">Case Study</Badge>
                  <CardTitle className="text-lg sm:text-xl">From Nervous to Confident</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                    How one student transformed their interview performance.
                  </p>
                </CardContent>
              </Card>
            </Grid>

            <div className="text-center mt-6 sm:mt-8 px-4">
              <Button variant="outline" className="min-h-[44px] touch-manipulation" asChild>
                <Link href="/resources">
                  Browse All Resources
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Primary CTA */}
      <Section spacing="lg">
        <Container>
          <CTA
            variant="gradient"
            title="Ready to express yourself with confidence?"
            description="Join thousands of students and professionals who are mastering high-stakes conversations."
            primaryAction={{ label: 'Start Your Free Trial', href: '/app/sign-up' }}
            secondaryAction={{ label: 'View Pricing', href: '/pricing' }}
          />
        </Container>
      </Section>
    </div>
  );
}

