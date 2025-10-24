import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Testimonial } from '@/components/marketing/Testimonial';
import { ArrowRight, CheckCircle, MessageSquare, BarChart, Clock, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Students | Medical School Interview Practice (MMI) | Omthentic',
  description: 'Practise MMI scenarios alone or with mates. Season Pass $97 for Oct–Jan. 15+ years coaching 1,000+ successful students.',
  openGraph: {
    title: 'Students | Medical School Interview Practice (MMI) | Omthentic',
    description: 'Practise MMI scenarios alone or with mates. Season Pass $97 for Oct–Jan.',
  },
};

export default function StudentsPage() {
  return (
    <div>
      {/* Hero */}
      <Section spacing="lg" background="default">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[var(--text)]">
              Practise until you sound like yourself—just clearer
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-3xl mx-auto">
              Medical interviews are high stakes. Omthentic gives you unlimited reps, instant feedback, and the confidence to turn nerves into offers.
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
              90%+ interview success across coached cohorts · 1,000+ offers secured · Built on 15+ years medical interview coaching
            </p>
          </div>
        </Container>
      </Section>

      {/* Why Students Choose Omthentic */}
      <Section spacing="xl">
        <Container>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text)]">
              Honest prep, not hype
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              What students actually want to know
            </p>
          </div>

          <Grid cols={3} gap="lg">
            <Card variant="elevated">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand mb-4">
                  <MessageSquare size={24} />
                </div>
                <CardTitle className="text-xl sm:text-2xl mb-3">Will this feel scripted?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  No. Feedback helps you sharpen *your* voice, not memorise lines. You'll sound prepared, not robotic. Assessors notice the difference.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand mb-4">
                  <Clock size={24} />
                </div>
                <CardTitle className="text-xl sm:text-2xl mb-3">How long does this take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  Each station is 2–8 minutes. Practise 15 minutes a day or binge 60+ stations in a weekend. Fits your schedule. Unlimited access Oct–Jan.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand mb-4">
                  <BookOpen size={24} />
                </div>
                <CardTitle className="text-xl sm:text-2xl mb-3">Do I still need human mocks?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  Yes. Human mocks still matter. Use Omthentic for unlimited reps beforehand so you don't waste the mock on basics. Optional human review add-ons available.
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* What You Get */}
      <Section spacing="xl" background="subtle">
        <Container>
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text)]">
              What you get
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to feel ready on interview day
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">200+ MMI/Panel scenarios</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Ethical dilemmas, teamwork stations, empathy prompts, motivation questions. Timed like the real thing. School Packs for AUS/NZ/UK.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">200+ personal questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--text-secondary)]">
                    "Why medicine?" "Tell me about a challenge." "Describe a leadership moment." Practise until you stop rambling.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">Instant feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Structure, empathy, evidence, timing. Clear "keep/fix/try next" guidance. No vague praise. Assessor-aligned criteria.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">Answer Builder</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Draft, save, refine responses. Version history shows improvement. Prep personal answers before interview day.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">Progress tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Streaks, analytics, "next best station" suggestions. See gaps closing. Watch confidence build with each session.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">Dynamic follow-ups</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Not just one question. AI adapts like real assessors. Practise thinking on your feet. Build depth, not just breadth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Season Pass Pricing */}
      <div id="pricing">
      <Section spacing="xl">
        <Container>
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[var(--text)]">
              Season Pass
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              One payment. Full access Oct–Jan. No surprises.
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

      {/* Student Testimonials */}
      <Section spacing="xl">
        <Container>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[var(--text)]">
              From stressed to sorted
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

