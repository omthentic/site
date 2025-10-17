import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { CTA } from '@/components/marketing/CTA';
import { ArrowRight, Heart, Users, Target, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Omthentic',
  description: 'We believe everyone deserves to express themselves with clarity and confidence. Learn about our mission, team, and journey.',
  openGraph: {
    title: 'About Us | Omthentic',
    description: 'We believe everyone deserves to express themselves with clarity and confidence.',
  },
};

export default function AboutPage() {
  const team = [
    {
      name: 'Dr. Emily Chen',
      role: 'Co-Founder & CEO',
      bio: 'Former medical school interviewer turned entrepreneur. Passionate about helping students succeed.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Co-Founder & CTO',
      bio: 'AI researcher with 10+ years experience. Built systems that power millions of conversations.',
    },
    {
      name: 'Sarah Williams',
      role: 'Head of Product',
      bio: 'EdTech veteran who&apos;s designed learning experiences for Fortune 500 companies.',
    },
    {
      name: 'Dr. James Park',
      role: 'Lead AI Scientist',
      bio: 'PhD in NLP. Published researcher specializing in conversational AI and feedback systems.',
    },
    {
      name: 'Priya Patel',
      role: 'Head of Customer Success',
      bio: 'Former teacher and career counselor. Dedicated to helping every user succeed.',
    },
    {
      name: 'Alex Rivera',
      role: 'Head of Design',
      bio: 'UX designer focused on making complex technology feel simple and empowering.',
    },
  ];

  const timeline = [
    {
      year: '2021',
      title: 'The Spark',
      description: 'Dr. Chen noticed talented students struggling with interviews despite strong qualifications. She wondered: what if we could give everyone access to personalized practice?',
    },
    {
      year: '2022',
      title: 'First Prototype',
      description: 'Launched beta with 100 medical students. 87% reported feeling more confident. 92% received interview invitations.',
    },
    {
      year: '2023',
      title: 'Scaling Impact',
      description: 'Expanded to job interviews and leadership training. Reached 10,000 active users across 25 countries.',
    },
    {
      year: '2024',
      title: 'Building Community',
      description: 'Partnered with schools and organizations. Helped 50,000+ people communicate with confidence.',
    },
    {
      year: '2025',
      title: 'What&apos;s Next',
      description: 'Expanding to more languages and scenarios. Building the future of communication training.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <Section spacing="xl" background="subtle">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="brand" size="md" rounded="full" className="mb-6">
              About Omthentic
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-[var(--text)]">
              Communication Training for Everyone
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-10 leading-relaxed">
              We believe everyone deserves to express themselves with clarity and confidence. Our mission is to make communication training accessible, effective, and empowering.
            </p>
          </div>
        </Container>
      </Section>

      {/* Purpose & Mission */}
      <Section spacing="xl">
        <Container>
          <Grid cols={2} gap="xl">
            <Card variant="elevated" padding="lg">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center text-brand mb-6">
                  <Heart size={32} />
                </div>
                <CardTitle className="text-3xl mb-4">Our Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Communication is the most important skill we never fully learn. We&apos;re changing that by combining AI technology with research-backed techniques to help people express themselves authentically in moments that matter.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated" padding="lg">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center text-brand mb-6">
                  <Target size={32} />
                </div>
                <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Make world-class communication training accessible to everyone, everywhere. Whether you&apos;re preparing for a life-changing interview or navigating a difficult conversation, we&apos;re here to help you succeed.
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Values */}
      <Section spacing="lg" background="subtle">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--text)]">
              Our Values
            </h2>
          </div>

          <Grid cols={4} gap="lg">
            {[
              {
                icon: <Users size={24} />,
                title: 'Human-Centered',
                description: 'Technology serves people, not the other way around.',
              },
              {
                icon: <Heart size={24} />,
                title: 'Empathetic',
                description: 'We understand the anxiety of high-stakes moments.',
              },
              {
                icon: <Zap size={24} />,
                title: 'Excellence',
                description: 'We hold ourselves to the highest standards.',
              },
              {
                icon: <Target size={24} />,
                title: 'Impact-Driven',
                description: 'Measured by lives changed, not just metrics.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--text)]">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {value.description}
                </p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Team */}
      <Section spacing="xl">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--text)]">
              Meet Our Team
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              We&apos;re educators, engineers, researchers, and coaches united by one goal: helping you communicate with confidence.
            </p>
          </div>

          <Grid cols={3} gap="lg">
            {team.map((member) => (
              <Card key={member.name} variant="elevated">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-brand/10 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-1 text-[var(--text)]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-brand font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Timeline */}
      <Section spacing="xl" background="subtle">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--text)]">
              Our Journey
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border)] transform -translate-x-1/2 hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:text-right'
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}>
                    <Badge variant="brand" size="sm" className="mb-3">
                      {item.year}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2 text-[var(--text)]">
                      {item.title}
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 top-0 w-4 h-4 rounded-full bg-brand border-4 border-[var(--bg)] transform -translate-x-1/2 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section spacing="lg">
        <Container>
          <CTA
            variant="gradient"
            title="Want to learn more?"
            description="We&apos;d love to hear from you. Whether you have questions, feedback, or just want to say hello."
            primaryAction={{ label: 'Get in Touch', href: '/contact' }}
            secondaryAction={{ label: 'Join Our Team', href: '/careers' }}
          />
        </Container>
      </Section>
    </div>
  );
}

