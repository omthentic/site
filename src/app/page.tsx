import Header from './components/Header';
import Hero from './components/Hero';
import PainPromise from './components/PainPromise';
import CoreFeatures from './components/CoreFeatures';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PainPromise />
      <CoreFeatures />
    </main>
  );
}
