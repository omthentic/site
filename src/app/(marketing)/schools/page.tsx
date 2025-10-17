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
import { ArrowRight, Users, BarChart, BookOpen, Award, Shield, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Schools | Omthentic',
  description: 'Equip your students with communication skills that last a lifetime. Curriculum-integrated communication training with comprehensive analytics.',
  openGraph: {
    title: 'For Schools | Omthentic',
    description: 'Equip your students with communication skills that last a lifetime.',
  },
};

export default function SchoolsPage() {
  return (
    <div>
      {/* Hero */}
      <Section spacing="xl" background="subtle">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="brand" size="md" rounded="full" className="mb-6">
              For Schools
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-[var(--text)]">
              Prepare Students for Success Beyond the Classroom
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-10 leading-relaxed">
              Integrate communication training into your curriculum. Give students the skills employers value most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">
                  Schedule Demo
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">
                  View Plans
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
              Why Schools Choose Omthentic
            </h2>
          </div>

          <FeatureList
            columns={3}
            features={[
              {
                icon: <BookOpen size={24} />,
                title: 'Curriculum Integration',
                description: 'Seamlessly fits into existing programs. Pre-built lessons aligned with learning outcomes.',
              },
              {
                icon: <BarChart size={24} />,
                title: 'Progress Tracking',
                description: 'Monitor student development with comprehensive analytics and reporting dashboards.',
              },
              {
                icon: <Users size={24} />,
                title: 'Class Management',
                description: 'Manage multiple classes, assign scenarios, and track completion rates effortlessly.',
              },
              {
                icon: <Shield size={24} />,
                title: 'Privacy & Security',
                description: 'FERPA compliant. Student data is protected with enterprise-grade security.',
              },
              {
                icon: <Award size={24} />,
                title: 'Proven Outcomes',
                description: 'Students show measurable improvement in confidence, clarity, and interview success.',
              },
              {
                icon: <Sparkles size={24} />,
                title: 'Educator Support',
                description: 'Dedicated training and ongoing support to help your team succeed.',
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
              Student Outcomes That Matter
            </h2>
          </div>

          <Grid cols={3} gap="lg">
            <Card variant="elevated" padding="lg">
              <div className="text-center">
                <div className="text-5xl font-bold text-brand mb-2">94%</div>
                <p className="text-[var(--text-secondary)]">Student satisfaction rate</p>
              </div>
            </Card>
            <Card variant="elevated" padding="lg">
              <div className="text-center">
                <div className="text-5xl font-bold text-brand mb-2">2.5x</div>
                <p className="text-[var(--text-secondary)]">Improvement in interview skills</p>
              </div>
            </Card>
            <Card variant="elevated" padding="lg">
              <div className="text-center">
                <div className="text-5xl font-bold text-brand mb-2">87%</div>
                <p className="text-[var(--text-secondary)]">Feel more career-ready</p>
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
              <Badge variant="success" className="mb-4">Case Study</Badge>
              <CardTitle className="text-3xl">
                Melbourne Grammar School: 95% Interview Success Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 text-[var(--text-secondary)]">
                <p className="text-lg">
                  <strong className="text-[var(--text)]">Challenge:</strong> Melbourne Grammar wanted to better prepare Year 12 students for university interviews and scholarship applications.
                </p>
                <p className="text-lg">
                  <strong className="text-[var(--text)]">Solution:</strong> Integrated Omthentic into their careers program. Students practiced MMI scenarios and received personalized feedback.
                </p>
                <p className="text-lg">
                  <strong className="text-[var(--text)]">Results:</strong> 95% of students who used Omthentic received interview invitations. 78% were accepted to their first-choice university.
                </p>
                <div className="bg-[var(--bg-subtle)] rounded-lg p-6 mt-6">
                  <p className="italic text-[var(--text)]">
                    &ldquo;Omthentic transformed how we prepare students. The analytics help us identify who needs extra support, and students love the instant feedback.&rdquo;
                  </p>
                  <p className="mt-4 font-semibold text-sm">
                    — Jane Foster, Careers Counselor
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
            Common Questions
          </h2>
          <FAQ
            items={[
              {
                question: 'How does pricing work for schools?',
                answer: 'We offer flexible site licenses based on student count. Volume discounts available. Contact us for a custom quote tailored to your needs.',
              },
              {
                question: 'What training do educators receive?',
                answer: 'Comprehensive onboarding including video tutorials, live training sessions, and ongoing support. Most educators are up and running within 30 minutes.',
              },
              {
                question: 'Can we customize scenarios for our students?',
                answer: 'Yes! Create custom scenarios tailored to your curriculum and student needs. We can also help develop scenarios specific to your school.',
              },
              {
                question: 'Is student data secure?',
                answer: 'Absolutely. We are FERPA compliant and use enterprise-grade security. Student data is encrypted and never shared with third parties.',
              },
              {
                question: 'What kind of support do you provide?',
                answer: 'Dedicated account manager, email and phone support, regular check-ins, and a resource library. We\'re here to ensure your success.',
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
                Ready to Transform Student Outcomes?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Schedule a demo to see Omthentic in action. We&apos;ll show you how to integrate communication training into your curriculum.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Schedule Your Demo
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

