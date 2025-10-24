import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { ArrowRight, CheckCircle, Heart, Trophy, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Parents | Medical School Interview Preparation | Omthentic',
  description: 'Support your child with evidence-based medical school interview practice. Season Pass $97 for Oct–Jan. 15+ years coaching 1,000+ students.',
  openGraph: {
    title: 'Parents | Medical School Interview Preparation | Omthentic',
    description: 'Support your child with evidence-based medical school interview practice. Season Pass $97 for Oct–Jan.',
  },
};

export default function ParentsPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section spacing="lg" background="default">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[var(--text)]">
              Your child worked hard.
              <br />
              Now help them sound like it.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-3xl mx-auto">
              Medical interviews decide outcomes. Omthentic gives your child the practice, feedback, and confidence to turn preparation into offers.
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

      {/* Why Parents Choose Omthentic */}
      <Section spacing="xl">
        <Container>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text)]">
              What parents want to know
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Transparent answers about how Omthentic prepares students for medical school interviews
            </p>
          </div>

          <Grid cols={3} gap="lg">
            <Card variant="elevated">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand mb-4">
                  <Heart size={24} />
                </div>
                <CardTitle className="text-xl sm:text-2xl mb-3">Is this evidence-based?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  Yes. Built on 15+ years coaching 1,000+ students. Feedback mirrors assessor frameworks (structure, empathy, evidence, timing). Not generic AI. Purpose-trained for medical interviews.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand mb-4">
                  <Shield size={24} />
                </div>
                <CardTitle className="text-xl sm:text-2xl mb-3">Will this replace mocks?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  No. Human mocks still matter. This gives your child unlimited reps before the mock, so they show up ready—not wasting time on basics. We offer optional human review add-ons.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand mb-4">
                  <Trophy size={24} />
                </div>
                <CardTitle className="text-xl sm:text-2xl mb-3">What if they get an offer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  Perfect. No recurring charge, so you're not paying for something they don't need. The Season Pass covers Oct–Jan. When offers roll in, they're done.
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* What's Included */}
      <Section spacing="xl" background="subtle">
        <Container>
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text)]">
              What your child gets
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Comprehensive preparation for MMI and panel interviews
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card variant="elevated">
              <CardContent className="pt-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">400+ scenarios</strong>
                      <span className="text-sm text-[var(--text-secondary)]">MMI circuits, ethical dilemmas, panel questions, motivation, teamwork, empathy. School-specific packs for AUS/NZ/UK.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Instant feedback</strong>
                      <span className="text-sm text-[var(--text-secondary)]">Structure, empathy, evidence, timing. Clear "keep/fix/try next" guidance on every answer. No vague praise.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Answer Builder</strong>
                      <span className="text-sm text-[var(--text-secondary)]">Draft, refine, and save responses. Version history so they see improvement. Prep personal questions before the day.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Progress tracking</strong>
                      <span className="text-sm text-[var(--text-secondary)]">Streaks, analytics, "next best station" suggestions. They see gaps closing. You see consistent practice.</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
              One payment. Full access Oct–Jan.
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
                  Everything they need to feel prepared and sound authentic
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

      {/* Parent Testimonials */}
      <Section spacing="xl" background="subtle">
        <Container>
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--text)]">
              What parents say
            </h2>
          </div>

          <Grid cols={2} gap="lg" className="max-w-5xl mx-auto">
            <Card variant="elevated">
              <CardContent className="pt-6">
                <p className="text-sm sm:text-base text-[var(--text-secondary)] italic mb-4">
                  "My daughter used this every day for three weeks. She went from rambling to crisp, confident answers. Offer from Sydney."
                </p>
                <p className="text-xs font-medium text-[var(--text)]">— Parent, Sydney NSW</p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="pt-6">
                <p className="text-sm sm:text-base text-[var(--text-secondary)] italic mb-4">
                  "Worth every cent. Better than the $500 mock we paid for last year. He actually practised this one."
                </p>
                <p className="text-xs font-medium text-[var(--text)]">— Parent, Auckland NZ</p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="pt-6">
                <p className="text-sm sm:text-base text-[var(--text-secondary)] italic mb-4">
                  "Transparent pricing, evidence-based feedback. No subscriptions. Just what we needed during interview season."
                </p>
                <p className="text-xs font-medium text-[var(--text)]">— Parent, Melbourne VIC</p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="pt-6">
                <p className="text-sm sm:text-base text-[var(--text-secondary)] italic mb-4">
                  "She was so anxious. This gave her structure and reps. She showed up calmer and clearer. First preference offer."
                </p>
                <p className="text-xs font-medium text-[var(--text)]">— Parent, Brisbane QLD</p>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--text)]">
              Give them every advantage
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              No subscriptions. No upsells during checkout. One Season Pass, unlimited practice until offers arrive.
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

