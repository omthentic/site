import { Metadata } from 'next';
import Link from 'next/link';
import ModernHome from '../components/ModernHome';

export const metadata: Metadata = {
  title: 'Old Home (Backup) | Omthentic',
  description: 'Previous version of the homepage - kept for reference',
  robots: {
    index: false,
    follow: false,
  },
};

export default function OldHomePage() {
  return (
    <>
      {/* Banner to indicate this is the old version */}
      <div style={{
        backgroundColor: '#FEF3C7',
        borderBottom: '2px solid #F59E0B',
        padding: '12px 24px',
        textAlign: 'center',
        fontWeight: '500',
      }}>
        📦 This is the old homepage (backup). Visit <Link href="/" style={{ textDecoration: 'underline' }}>the new homepage</Link>.
      </div>
      <ModernHome />
    </>
  );
}
