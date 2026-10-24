import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../_components/Arrow";
import { Invitation } from "../_components/Invitation";
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

const WORK: {
  name: string;
  role: string;
  desc: string;
  href: string;
  cta: string;
}[] = [
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
      logo: `${SITE_URL}/icon.svg`,
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Omthentic",
          item: `${SITE_URL}/`,
        },
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
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="wrap page-hero founder-profile-hero">
        <div>
          <p className="eyebrow">
            <span className="status-dot" />
            {ROLE}
          </p>
          <h1>{NAME}</h1>
          <p className="founder-definition">{DEFINITION}</p>
          <div className="founder-actions">
            <Link href="/vision" className="button button-dark">
              Our approach <Arrow diagonal />
            </Link>
            <Link href="/contact" className="text-link">
              Start a conversation <Arrow diagonal />
            </Link>
          </div>
        </div>
        <div className="founder-portrait image-frame">
          <Image
            src="/images/shanaka-jayakody.webp"
            alt="Shanaka Jayakody, founder and steward of Omthentic"
            width={1200}
            height={1650}
            priority
            sizes="(max-width: 800px) 90vw, 38vw"
          />
        </div>
      </section>
      <section className="wrap founder-proof">
        <div className="proof-row founder-proof-row">
          {STATS.map((s) => (
            <Reveal key={s.k} className="proof-item">
              <p className="proof-value">{s.k}</p>
              <p>{s.v}</p>
            </Reveal>
          ))}
        </div>
        <p className="proof-note">
          The 92% counts students who reached a medical school interview and
          went on to receive an offer.{" "}
          <a href="https://www.interviewmd.org/methodology">
            How it is measured
          </a>
          .
        </p>
      </section>
      <section className="founder-section section-space">
        <div className="wrap founder-grid">
          <Reveal>
            <p className="eyebrow">Where it began</p>
            <h2>
              His own words.
              <br />
              <span className="soft-word">His own way.</span>
            </h2>
          </Reveal>
          <Reveal className="body-copy">
            <p className="large-copy">
              He refused to perform in his own medical interviews, and was
              offered a place at every one.
            </p>
            <p>
              Fifteen years ago, Shanaka walked into his medical school
              interviews and decided not to recite. He answered as himself.
              Since then he has watched capable applicants do the opposite:
              students who prepared everything except permission to be
              themselves, then went flat in the room.
            </p>
            <p>
              Coaching them out of the script and back into their own stories
              became his method. More than 1,100 students later, it became a
              conviction, and Omthentic is that conviction built into a company:
              technology that amplifies who people already are.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="wrap section-space founder-work" id="work">
        <Reveal className="section-heading">
          <p className="eyebrow">The work</p>
          <h2>
            One conviction.
            <br />
            <span className="soft-word">Many ways to live it.</span>
          </h2>
        </Reveal>
        <div className="founder-work-list">
          {WORK.map((w) => (
            <Reveal as="article" key={w.name} className="founder-work-item">
              <div>
                <h3>{w.name}</h3>
                <p className="founder-role">{w.role}</p>
              </div>
              <p>{w.desc}</p>
              <a className="text-link" href={w.href}>
                {w.cta} <Arrow diagonal />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="wrap founder-conversations" id="conversations">
        <Reveal className="section-heading">
          <p className="eyebrow">Conversations</p>
          <h2>
            On purpose.
            <br />
            <span className="soft-word">And on medicine.</span>
          </h2>
        </Reveal>
        <ul className="founder-conversation-list">
          {CONVERSATIONS.map((c) => (
            <li key={c.title}>
              <a href={c.href}>
                <span className="founder-conversation-title">{c.title}</span>
                <span>{c.where}</span>
                <span>{c.year}</span>
                <Arrow diagonal />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="wrap section-space approach-section" id="faq">
        <Reveal className="approach-heading">
          <p className="eyebrow">Questions</p>
          <h2>About Shanaka.</h2>
        </Reveal>
        <div>
          <div className="principle-list">
            {FAQS.map((f) => (
              <details key={f.q} className="principle">
                <summary>
                  <h3>{f.q}</h3>
                  <span className="expand-mark" aria-hidden="true" />
                </summary>
                <p className="principle-body">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="founder-elsewhere">
            <p className="eyebrow">Elsewhere</p>
            {ELSEWHERE.map((e) => (
              <a className="text-link" key={e.href} href={e.href} rel="me">
                {e.label} <Arrow diagonal />
              </a>
            ))}
          </div>
        </div>
      </section>
      <Invitation />
    </main>
  );
}
