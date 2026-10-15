import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../_components/Reveal";
import { IDS, SHANAKA_PATH, SHANAKA_URL, SITE_URL } from "@/lib/site";

const NAME = "Shanaka Jayakody";
const ROLE = "Founder & Steward, Omthentic";
const TITLE = `${NAME} | Founder, Omthentic`;
const DESCRIPTION =
  "Shanaka Jayakody founded Omthentic, a venture house built on the conviction that you are already enough, and InterviewMD. 15 years, 1,100+ students coached.";

/* The centerpiece definition. Rendered first under the H1 and reused verbatim
   as Person.description, so the schema never says more than the page. */
const DEFINITION =
  "Shanaka Jayakody is the founder and steward of Omthentic, a venture house built on one conviction: you are already enough. A Melbourne educator who studied medicine at Monash University, he has spent 15 years coaching more than 1,100 medical applicants, and founded InterviewMD, Omthentic's first live venture, to help people stay themselves when the pressure to perform is highest.";

const OG_IMAGE = {
  url: "/images/shanaka-jayakody-og.jpg",
  width: 1200,
  height: 630,
  alt: "Shanaka Jayakody, founder of Omthentic",
};

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: SHANAKA_PATH },
  openGraph: {
    type: "profile",
    title: TITLE,
    description: DESCRIPTION,
    url: SHANAKA_URL,
    firstName: "Shanaka",
    lastName: "Jayakody",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const STATS = [
  { k: "15 years", v: "coaching medical applicants" },
  { k: "1,100+", v: "students coached" },
  { k: "92%", v: "interview-to-offer rate", accent: true },
  { k: "14,000+", v: "hours of one-to-one coaching" },
];

const WORK: { name: string; role: string; desc: string; href: string; cta: string }[] = [
  {
    name: "InterviewMD",
    role: "Founder · Venture 01, live",
    desc: "Medical interview coaching and practice software built on the method below: answers grown from a student's own experiences, never a script.",
    href: "https://www.interviewmd.org/shanaka",
    cta: "His InterviewMD profile",
  },
  {
    name: "MedWithPurpose",
    role: "Founder & CEO · since 2021",
    desc: "Australian medical admissions preparation across the UCAT, interviews and CASPer.",
    href: "https://www.medwithpurpose.com/",
    cta: "MedWithPurpose",
  },
  {
    name: "The PrepBond Academy",
    role: "Founder · since 2025",
    desc: "Preparation for the MSCEIT, the emotional intelligence test in Bond University medical admissions. Independent of Bond University.",
    href: "https://www.prepbond.com.au/shanaka-jayakody",
    cta: "His PrepBond profile",
  },
  {
    name: "ShareTree",
    role: "Character & Culture Lead · since 2021",
    desc: "Values and character education in Melbourne schools, with a local charity.",
    href: "https://sharetree.org/",
    cta: "ShareTree",
  },
  {
    name: "UCAT Secrets",
    role: "Author",
    desc: "Two UCAT books: How To Ace The UCAT & Get Into Medicine, and 100 Situational Judgement UCAT Questions.",
    href: "https://www.goodreads.com/author/show/18843327.Shanaka_Jayakody",
    cta: "On Goodreads",
  },
];

const CONVERSATIONS = [
  {
    title: "Living With Purpose",
    where: "The Chillcast, Episode 1",
    year: "2021",
    href: "https://www.youtube.com/watch?v=GxNHsG8FIm8",
  },
  {
    title: "Finding Purpose at your Lowest Point",
    where: "Bottled Up Podcast",
    year: "2022",
    href: "https://podcasts.apple.com/nz/podcast/53-finding-purpose-at-your-lowest-point-death-and/id1524876519?i=1000575427726",
  },
  {
    title: "Education Reform",
    where: "One Percent Better Podcast",
    year: "2018",
    href: "https://www.youtube.com/watch?v=0Jh3DHElLzc",
  },
  {
    title: "Med School Exposed",
    where: "KIS Academics Conference",
    year: "2021",
    href: "https://www.youtube.com/watch?v=PqjesXluQHA",
  },
];

const FAQS = [
  {
    q: "Who is Shanaka Jayakody?",
    a: "Shanaka Jayakody is the founder and steward of Omthentic and the founder of InterviewMD, MedWithPurpose and The PrepBond Academy. He is a Melbourne educator who studied medicine at Monash University and has coached more than 1,100 medical applicants over 15 years.",
  },
  {
    q: "What is Omthentic?",
    a: "Omthentic is a venture house built on the conviction that you are already enough. It builds technology that amplifies who people already are instead of helping them hide, and shares one method, one body of research and one foundation across its ventures.",
  },
  {
    q: "Why did Shanaka found Omthentic?",
    a: "Because the pattern he saw in medical interviews shows up everywhere. People are most tempted to perform instead of being themselves exactly when the stakes are highest, and most technology makes the mask easier to wear. Omthentic exists to build the opposite.",
  },
  {
    q: "How is InterviewMD connected to Omthentic?",
    a: "InterviewMD is Omthentic's first live venture. Shanaka founded it in 2024 to bring his interview coaching method to medical school applicants, combining one-to-one coaching with practice software.",
  },
  {
    q: "Where can I see Shanaka's full background?",
    a: "His personal site, shanakajayakody.com, keeps the full record of his work, books and appearances. His coaching record is also on his InterviewMD profile.",
  },
];

const ELSEWHERE = [
  { label: "shanakajayakody.com", href: "https://www.shanakajayakody.com/" },
  { label: "InterviewMD", href: "https://www.interviewmd.org/shanaka" },
  { label: "PrepBond", href: "https://www.prepbond.com.au/shanaka-jayakody" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shanakajayakody/" },
];

/* One connected graph. Organisation @ids match the ones shanakajayakody.com,
   interviewmd.org and prepbond.com.au publish, and sameAs lists his profiles
   on each, so the four sites describe one person. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": IDS.person,
      name: NAME,
      givenName: "Shanaka",
      familyName: "Jayakody",
      url: SHANAKA_URL,
      mainEntityOfPage: { "@id": IDS.profilePage },
      image: { "@id": IDS.headshot },
      jobTitle: ROLE,
      description: DEFINITION,
      homeLocation: { "@type": "Place", name: "Melbourne, Australia" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Monash University" },
        { "@type": "EducationalOrganization", name: "Melbourne High School" },
      ],
      knowsAbout: [
        "Authentic communication",
        "Medical school interviews",
        "Medical school admissions",
        "Character education",
        "Education technology",
      ],
      worksFor: { "@id": IDS.omthentic },
      affiliation: [
        { "@id": IDS.interviewMd },
        { "@id": IDS.medWithPurpose },
        { "@id": IDS.prepBond },
        { "@id": IDS.shareTree },
      ],
      sameAs: [
        "https://www.shanakajayakody.com/",
        "https://www.interviewmd.org/shanaka",
        "https://www.prepbond.com.au/shanaka-jayakody",
        "https://www.linkedin.com/in/shanakajayakody/",
        "https://www.goodreads.com/author/show/18843327.Shanaka_Jayakody",
        "https://www.skool.com/@shanaka-jayakody",
        "https://medium.com/@shanaka.j17",
        "https://www.facebook.com/shanakawithpurpose/",
        "https://www.instagram.com/shanakaj17/",
        "https://github.com/ShanakaJayakody",
      ],
    },
    {
      "@type": "ImageObject",
      "@id": IDS.headshot,
      contentUrl: `${SITE_URL}${OG_IMAGE.url}`,
      caption: OG_IMAGE.alt,
      width: OG_IMAGE.width,
      height: OG_IMAGE.height,
    },
    {
      "@type": "ProfilePage",
      "@id": IDS.profilePage,
      url: SHANAKA_URL,
      name: TITLE,
      isPartOf: { "@id": IDS.website },
      mainEntity: { "@id": IDS.person },
    },
    {
      "@type": "Organization",
      "@id": IDS.omthentic,
      name: "Omthentic",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/images/Omthentic%20Icon.svg`,
      description:
        "A venture house built on one conviction: you are already enough.",
      founder: { "@id": IDS.person },
      subOrganization: { "@id": IDS.interviewMd },
    },
    {
      "@type": "WebSite",
      "@id": IDS.website,
      url: `${SITE_URL}/`,
      name: "Omthentic",
      publisher: { "@id": IDS.omthentic },
    },
    {
      "@type": "Organization",
      "@id": IDS.interviewMd,
      name: "InterviewMD",
      url: "https://www.interviewmd.org/",
      foundingDate: "2024",
      founder: { "@id": IDS.person },
      parentOrganization: { "@id": IDS.omthentic },
    },
    {
      "@type": "Organization",
      "@id": IDS.medWithPurpose,
      name: "MedWithPurpose",
      url: "https://www.medwithpurpose.com/",
      founder: { "@id": IDS.person },
    },
    {
      "@type": "Organization",
      "@id": IDS.prepBond,
      name: "The PrepBond Academy",
      url: "https://www.prepbond.com.au/",
      foundingDate: "2025",
      founder: { "@id": IDS.person },
    },
    {
      "@type": "Organization",
      "@id": IDS.shareTree,
      name: "ShareTree",
      url: "https://sharetree.org/",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Omthentic", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: NAME },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ShanakaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Centerpiece: H1 is the name, the definition follows with nothing between. */}
      <section className="hero profile-hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <Reveal className="eyebrow">{ROLE}</Reveal>
              <Reveal as="h1">{NAME}</Reveal>
              <Reveal as="p" className="lead">
                {DEFINITION}
              </Reveal>
              <Reveal className="hero-cta">
                <Link href="/vision" className="btn btn-primary">
                  Read the manifesto
                </Link>
                <Link href="/contact" className="btn btn-ghost">
                  Start a conversation
                </Link>
              </Reveal>
            </div>
            <Reveal className="profile-portrait">
              <Image
                src="/images/shanaka-jayakody.webp"
                alt="Shanaka Jayakody, founder and steward of Omthentic"
                width={1200}
                height={1650}
                priority
                sizes="(max-width: 920px) 90vw, 420px"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="profile-stats-sec">
        <div className="wrap">
          <div className="profile-stats">
            {STATS.map((s, i) => (
              <Reveal
                key={s.k}
                className={`stat-card${s.accent ? " accent" : ""}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="k">{s.k}</div>
                <div className="v">{s.v}</div>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="profile-note">
            The 92% counts students who reached a medical school interview and
            went on to receive an offer.{" "}
            <a href="https://www.interviewmd.org/methodology">How it is measured</a>.
          </Reveal>
        </div>
      </section>

      <section className="manifesto profile-origin">
        <div className="wrap">
          <Reveal className="eyebrow" style={{ marginBottom: "clamp(28px,4vh,44px)" }}>
            Where it began
          </Reveal>
          <Reveal as="h2" className="verse">
            He refused to perform in his own medical interviews, and{" "}
            <span className="hl">was offered a place at every one</span>.
          </Reveal>
          <Reveal as="p" className="lead profile-para">
            Fifteen years ago, Shanaka walked into his medical school interviews
            and decided not to recite. He answered as himself. Since then he has
            watched capable applicants do the opposite: students who prepared
            everything except permission to be themselves, then went flat in the
            room.
          </Reveal>
          <Reveal as="p" className="lead profile-para">
            Coaching them out of the script and back into their own stories became
            his method. More than 1,100 students later, it became a conviction,
            and Omthentic is that conviction built into a company: technology that
            amplifies who people already are, rather than helping them hide.
          </Reveal>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <div className="sec-head">
            <Reveal className="eyebrow">The work</Reveal>
            <Reveal as="h2">One conviction, carried into every room.</Reveal>
            <Reveal as="p" className="lead">
              The companies and causes Shanaka has built or leads, each one a
              different place where people are tempted to perform.
            </Reveal>
          </div>
          <div className="venture-list">
            {WORK.map((w) => (
              <Reveal as="article" key={w.name} className="venture profile-work">
                <div className="v-name">{w.name}</div>
                <div className="v-desc">
                  <div className="mono-meta profile-role">{w.role}</div>
                  {w.desc}
                </div>
                <a className="v-tag" href={w.href}>
                  {w.cta} →
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="conversations" className="profile-tight">
        <div className="wrap">
          <div className="sec-head">
            <Reveal className="eyebrow">Conversations</Reveal>
            <Reveal as="h2">On purpose, and on medicine.</Reveal>
          </div>
          <ul className="profile-list">
            {CONVERSATIONS.map((c) => (
              <Reveal as="li" key={c.title}>
                <a href={c.href}>
                  <span className="t">{c.title}</span>
                  <span className="w">{c.where}</span>
                  <span className="y">{c.year}</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="profile-tight">
        <div className="wrap">
          <div className="sec-head">
            <Reveal className="eyebrow">Questions</Reveal>
            <Reveal as="h2">About Shanaka.</Reveal>
          </div>
          <div className="profile-faq">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <p className="profile-elsewhere">
            <span className="mono-meta">Elsewhere</span>
            {ELSEWHERE.map((e) => (
              <a key={e.href} href={e.href} rel="me">
                {e.label}
              </a>
            ))}
          </p>
        </div>
      </section>

      <section className="join">
        <div className="wrap">
          <Reveal
            className="eyebrow"
            style={{ display: "flex", justifyContent: "center", marginBottom: "clamp(22px,3vh,34px)" }}
          >
            Resonate with us
          </Reveal>
          <Reveal as="h2">If this is your conviction too, come and build it.</Reveal>
          <Reveal as="p" className="lead">
            Investors, builders and believers can reach the house directly.
          </Reveal>
          <Reveal>
            <Link href="/contact" className="btn btn-primary">
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
