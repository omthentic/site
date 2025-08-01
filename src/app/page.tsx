import Header from './components/Header';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import WhyExist from './components/WhyExist';
import CoreFeatures from './components/CoreFeatures';
import ValuesStrip from './components/ValuesStrip';
import HowItWorks from './components/HowItWorks';
import CredibilityBand from './components/CredibilityBand';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StatsStrip />
      <WhyExist />
      <CoreFeatures />
      <ValuesStrip />
      <HowItWorks />
      <CredibilityBand />
      <FooterCTA />
      <Footer />
    </main>
  );
}
