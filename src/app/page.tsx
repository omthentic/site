import Header from './components/Header';
import Hero from './components/Hero';
import PainPromise from './components/PainPromise';
import CoreFeatures from './components/CoreFeatures';
import HowItWorks from './components/HowItWorks';
import CredibilityBand from './components/CredibilityBand';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PainPromise />
      <CoreFeatures />
      <HowItWorks />
      <CredibilityBand />
    </main>
  );
}
