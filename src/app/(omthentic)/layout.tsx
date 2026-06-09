import type { Metadata } from "next";
import "./omthentic.css";
import { SiteNav } from "./_components/SiteNav";
import { SiteFooter } from "./_components/SiteFooter";
import { DeepField } from "./_components/DeepField";
import { ScrollProgress } from "./_components/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://omthentic.ai"
  ),
  title: {
    default: "Omthentic — Technology in resonance with who you truly are",
    template: "%s — Omthentic",
  },
  description:
    "Omthentic is the parent house behind aligned, authentic, communication-based technologies. A manifesto, a set of principles, and the ventures we build to return people to themselves.",
  openGraph: {
    type: "website",
    siteName: "Omthentic",
    title: "Omthentic — Technology in resonance with who you truly are",
    description:
      "A parent house for aligned, authentic, communication-based technologies. For investors, builders, and early believers.",
  },
};

export default function OmthenticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="omthentic-root">
      <DeepField />
      <ScrollProgress />
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  );
}
