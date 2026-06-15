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
    default: "Omthentic — You are already enough",
    template: "%s — Omthentic",
  },
  description:
    "Omthentic is a venture house built on one conviction: you are already enough. We build technology that amplifies who you are instead of helping you hide. A manifesto, a set of principles, and the ventures that prove it.",
  openGraph: {
    type: "website",
    siteName: "Omthentic",
    title: "Omthentic — You are already enough",
    description:
      "A venture house built on one conviction: you are already enough. We build technology that amplifies who you are, not who you fear you are not.",
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
