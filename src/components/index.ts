/**
 * Omthentic UI Component Library
 * Export barrel for easy imports
 */

// Layout Components
export { Container } from './ui/Container';
export { Section } from './ui/Section';
export { Grid } from './ui/Grid';

// Interactive Components
export { Button } from './ui/Button';
export { Badge } from './ui/Badge';
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/Card';

// Marketing Components
export { Header } from './marketing/Header';
export { NavMenu } from './marketing/NavMenu';
export type { NavLink } from './marketing/NavMenu';
export { Footer } from './marketing/Footer';
export type { FooterLinkSection } from './marketing/Footer';
export { Testimonial } from './marketing/Testimonial';
export type { TestimonialProps } from './marketing/Testimonial';
export { LogoRow } from './marketing/LogoRow';
export type { Logo } from './marketing/LogoRow';
export { FeatureList } from './marketing/FeatureList';
export type { Feature } from './marketing/FeatureList';
export { PricingTable } from './marketing/PricingTable';
export type { PricingTier } from './marketing/PricingTable';
export { FAQ } from './marketing/FAQ';
export type { FAQItem } from './marketing/FAQ';
export { NewsletterForm } from './marketing/NewsletterForm';
export { CTA } from './marketing/CTA';

// Utilities
export { cn, trapFocus } from '../lib/utils';

