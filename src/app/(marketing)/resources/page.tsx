'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { NewsletterForm } from '@/components/marketing/NewsletterForm';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

type ResourceTag = 'Guide' | 'Tips' | 'Case Study' | 'Research' | 'Video' | 'All';

interface Resource {
  id: string;
  title: string;
  description: string;
  tag: Exclude<ResourceTag, 'All'>;
  readTime: string;
  href: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Mastering Medical School Interviews',
    description: 'Complete guide to MMI scenarios, ethical questions, and behavioral interviews for med school applications.',
    tag: 'Guide',
    readTime: '12 min',
    href: '/blog/mastering-medical-interviews',
  },
  {
    id: '2',
    title: 'Body Language That Wins Interviews',
    description: 'Non-verbal communication tips that make a lasting impression in any high-stakes conversation.',
    tag: 'Tips',
    readTime: '6 min',
    href: '/blog/body-language-tips',
  },
  {
    id: '3',
    title: 'From Rejection to Acceptance',
    description: 'How Sarah turned three rejections into acceptance at her dream medical school using AI practice.',
    tag: 'Case Study',
    readTime: '8 min',
    href: '/blog/rejection-to-acceptance',
  },
  {
    id: '4',
    title: 'The Science of Confident Communication',
    description: 'Research-backed techniques for building confidence in high-pressure situations.',
    tag: 'Research',
    readTime: '10 min',
    href: '/blog/science-of-confidence',
  },
  {
    id: '5',
    title: 'Answering Ethical Dilemmas',
    description: 'Framework for tackling ethical questions in medical interviews with grace and depth.',
    tag: 'Guide',
    readTime: '15 min',
    href: '/blog/ethical-dilemmas',
  },
  {
    id: '6',
    title: '5 Common Interview Mistakes',
    description: 'Avoid these pitfalls that cost candidates their dream opportunities.',
    tag: 'Tips',
    readTime: '5 min',
    href: '/blog/common-mistakes',
  },
  {
    id: '7',
    title: 'TechCorp&apos;s Communication Transformation',
    description: 'How one company improved team performance by 40% with communication training.',
    tag: 'Case Study',
    readTime: '9 min',
    href: '/blog/techcorp-case-study',
  },
  {
    id: '8',
    title: 'Preparing for Behavioral Questions',
    description: 'STAR method and storytelling techniques that make your answers memorable.',
    tag: 'Guide',
    readTime: '11 min',
    href: '/blog/behavioral-questions',
  },
  {
    id: '9',
    title: 'How to Give Feedback That Sticks',
    description: 'Techniques for delivering difficult feedback with empathy and clarity.',
    tag: 'Video',
    readTime: '4 min',
    href: '/blog/feedback-that-sticks',
  },
];

export default function ResourcesPage() {
  const [activeTag, setActiveTag] = useState<ResourceTag>('All');

  const tags: ResourceTag[] = ['All', 'Guide', 'Tips', 'Case Study', 'Research', 'Video'];

  const filteredResources = activeTag === 'All' 
    ? resources 
    : resources.filter(r => r.tag === activeTag);

  return (
    <div>
      {/* Hero */}
      <Section spacing="xl" background="subtle">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="brand" size="md" rounded="full" className="mb-6">
              <BookOpen size={16} className="inline mr-2" />
              Free Resources
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-[var(--text)]">
              Learn. Practice. Succeed.
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-10 leading-relaxed">
              Guides, tips, and insights to help you communicate with confidence in any situation.
            </p>
          </div>
        </Container>
      </Section>

      {/* Filter Tabs */}
      <Section spacing="lg">
        <Container>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={cn(
                  'px-4 py-2 rounded-md font-medium transition-all focus-ring',
                  activeTag === tag
                    ? 'bg-brand text-brand-foreground shadow-e2'
                    : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:bg-[var(--hover)]'
                )}
              >
                {tag}
                <span className="ml-2 text-xs opacity-75">
                  ({tag === 'All' ? resources.length : resources.filter(r => r.tag === tag).length})
                </span>
              </button>
            ))}
          </div>

          {/* Resource Grid */}
          <Grid cols={3} gap="lg">
            {filteredResources.map((resource) => (
              <Card key={resource.id} variant="interactive" className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant={
                        resource.tag === 'Guide' ? 'info' :
                        resource.tag === 'Tips' ? 'success' :
                        resource.tag === 'Case Study' ? 'warning' :
                        resource.tag === 'Research' ? 'brand' :
                        'accent'
                      }
                      size="sm"
                    >
                      {resource.tag}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
                      <Clock size={14} />
                      {resource.readTime}
                    </div>
                  </div>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" fullWidth asChild>
                    <Link href={resource.href}>
                      Read More
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </Grid>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[var(--text-muted)]">
                No resources found for this category.
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* Newsletter */}
      <Section spacing="lg" background="subtle">
        <Container size="md">
          <Card variant="elevated">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-3 text-[var(--text)]">
                  Get Resources Delivered
                </h2>
                <p className="text-[var(--text-secondary)]">
                  New guides, tips, and insights sent to your inbox weekly.
                </p>
              </div>
              <NewsletterForm
                title=""
                description=""
                placeholder="Enter your email"
                buttonText="Subscribe"
                onSubmit={async (email) => {
                  console.log('Newsletter signup:', email);
                  await new Promise(resolve => setTimeout(resolve, 1000));
                }}
              />
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  );
}

