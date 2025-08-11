'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Layers, Zap, Users, Wand2, Smartphone, Brain, Target, Mic, ChevronLeft, ChevronRight, CheckCircle2, BarChart3, GitCompare, Route } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAnimation, fadeInUpScale, fadeInUp, staggerContainer } from '../lib/animations';
import FeatureExperience from '../components/FeatureExperience';

const widgetCards = [
  { icon: Layers, title: 'Blocks', desc: 'Compose with polished, interactive building blocks.' },
  { icon: Zap, title: 'Motion', desc: 'Delightful micro‑interactions out of the box.' },
  { icon: Users, title: 'Collaboration', desc: 'Work together in real‑time with presence.' },
  { icon: Wand2, title: 'AI Assist', desc: 'Generate, remix and refine with an AI coach.' },
];

export default function Revamp() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const sampleQuestions = [
    'Why do you want to become a doctor?',
    'Tell us about a time you demonstrated empathy.',
    'How would you handle a mistake that impacted a patient?',
  ];
  const [tryNowQuestion, setTryNowQuestion] = React.useState<string>(sampleQuestions[0]);
  const [isRecording, setIsRecording] = React.useState(false);
  const [hasDemoFeedback, setHasDemoFeedback] = React.useState(false);
  const [transcript, setTranscript] = React.useState('');
  const [feedback, setFeedback] = React.useState<{ clarity: number; filler: number; confidence: 'Good' | 'Fair' | 'Strong' }>({ clarity: 80, filler: 2, confidence: 'Good' });
  const recordingStartRef = React.useRef<number | null>(null);
  const mediaStreamRef = React.useRef<MediaStream | null>(null);
  const mediaRecorderRef = React.useRef<MediaRecorder | null>(null);
  const recognitionRef = React.useRef<any>(null);
  const autoStopTimeoutRef = React.useRef<number | null>(null);
  const audioContextRef = React.useRef<any>(null);
  const analyserRef = React.useRef<AnalyserNode | null>(null);
  const rafIdRef = React.useRef<number | null>(null);
  const [micLevel, setMicLevel] = React.useState(0);

  const demoSlides = [
    {
      step: 'Step 1',
      title: 'Get Your Question',
      description: 'A realistic medical interview question appears.',
      body: (
        <div className="rounded-xl border border-subtle bg-card p-5 text-left">
          <div className="text-xs uppercase tracking-wide text-secondary-body mb-1">Question</div>
          <div className="text-body-lg">Why do you want to become a doctor?</div>
        </div>
      ),
    },
    {
      step: 'Step 2',
      title: 'Speak Your Answer',
      description: 'Simulated audio capture while the system listens.',
      body: (
        <div className="rounded-xl border border-subtle bg-card p-5">
          <div className="text-xs uppercase tracking-wide text-secondary-body mb-3">Listening…</div>
          <div className="h-24 flex items-end gap-[3px]">
            {Array.from({ length: 48 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-[3px] rounded-sm bg-primary/80"
                initial={{ height: 6 }}
                animate={{ height: [6, 40 + (i % 5) * 6, 12, 32, 8] }}
                transition={{ duration: 1.2 + (i % 7) * 0.05, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      step: 'Step 3',
      title: 'See Your Feedback',
      description: 'Instant, interpretable metrics to guide improvement.',
      body: (
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-subtle bg-card p-4 text-center">
            <div className="text-xs text-secondary-body mb-1">Clarity</div>
            <div className="text-h6">80%</div>
          </div>
          <div className="rounded-xl border border-subtle bg-card p-4 text-center">
            <div className="text-xs text-secondary-body mb-1">Filler Words</div>
            <div className="text-h6">2</div>
          </div>
          <div className="rounded-xl border border-subtle bg-card p-4 text-center">
            <div className="text-xs text-secondary-body mb-1">Confidence</div>
            <div className="text-h6">Good</div>
          </div>
        </div>
      ),
    },
    {
      step: 'Step 4',
      title: 'Continue Your Practice',
      description: 'Jump into a guided session to keep improving.',
      body: (
        <div className="rounded-xl border border-subtle bg-card p-6 text-center">
          <div className="text-body mb-4">Ready to try it yourself?</div>
          <a
            href={(process.env.NEXT_PUBLIC_APP_URL || 'https://app.omthentic.com') + '/onboarding'}
            className="btn-primary rounded-2xl px-8 py-4 inline-flex items-center gap-2 focus-ring"
          >
            Start Free Session <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      ),
    },
  ];

  function nextSlide() { setActiveSlide((s) => (s + 1) % demoSlides.length); }
  function prevSlide() { setActiveSlide((s) => (s - 1 + demoSlides.length) % demoSlides.length); }
  function computeMockFeedback(text: string, durationMs: number) {
    const cleaned = (text || '').toLowerCase();
    const words = cleaned.split(/\s+/).filter(Boolean);
    const fillers = ['um', 'uh', 'like', 'you know', 'sort of', 'kind of'];
    const fillerCount = words.reduce((acc, w) => acc + (fillers.includes(w) ? 1 : 0), 0);
    const wordsPerMin = durationMs > 0 ? Math.round((words.length / durationMs) * 60000) : 0;
    let clarity = 90;
    clarity -= Math.min(30, fillerCount * 5);
    clarity -= wordsPerMin > 190 ? 10 : 0;
    clarity = Math.max(55, Math.min(95, Math.round(clarity)));
    const confidence: 'Good' | 'Fair' | 'Strong' = clarity >= 85 && fillerCount <= 1 ? 'Strong' : clarity >= 70 ? 'Good' : 'Fair';
    return { clarity, filler: fillerCount, confidence };
  }

  async function startTryNow() {
    if (isRecording) return;
    try {
      setHasDemoFeedback(false);
      setTranscript('');
      setTryNowQuestion(sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)]);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      recorder.start();
      // Mic level meter via WebAudio
      const AC: any = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (AC) {
        audioContextRef.current = new AC();
        const source = audioContextRef.current.createMediaStreamSource(stream);
        const analyser = audioContextRef.current.createAnalyser();
        analyser.fftSize = 2048;
        source.connect(analyser);
        analyserRef.current = analyser;
        const buffer = new Uint8Array(analyser.fftSize);
        const tick = () => {
          if (!analyserRef.current) return;
          analyserRef.current.getByteTimeDomainData(buffer);
          let sum = 0;
          for (let i = 0; i < buffer.length; i++) {
            const v = (buffer[i] - 128) / 128;
            sum += v * v;
          }
          const rms = Math.sqrt(sum / buffer.length);
          setMicLevel((prev) => prev * 0.8 + rms * 0.2);
          rafIdRef.current = requestAnimationFrame(tick);
        };
        tick();
      }
      // Speech recognition if available
      const SR: any = (typeof window !== 'undefined' && ((window as any).webkitSpeechRecognition || (window as any).SpeechRecognition)) || null;
      if (SR) {
        const recognition = new SR();
        recognition.lang = 'en-US';
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onresult = (event: any) => {
          let interim = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const res = event.results[i];
            interim += res[0]?.transcript || '';
          }
          setTranscript((prev) => (interim && interim.length > prev.length ? interim : prev));
        };
        recognition.onerror = () => {};
        recognition.onend = () => {};
        recognitionRef.current = recognition;
        recognition.start();
      }
      recordingStartRef.current = Date.now();
      setIsRecording(true);
      if (autoStopTimeoutRef.current) window.clearTimeout(autoStopTimeoutRef.current);
      autoStopTimeoutRef.current = window.setTimeout(() => { stopTryNow(); }, 15000);
    } catch (e) {
      // Fallback to simulation
      setIsRecording(true);
      if (autoStopTimeoutRef.current) window.clearTimeout(autoStopTimeoutRef.current);
      autoStopTimeoutRef.current = window.setTimeout(() => {
        const mock = computeMockFeedback('', 12000);
        setFeedback(mock);
        setIsRecording(false);
        setHasDemoFeedback(true);
      }, 12000);
    }
  }

  function stopTryNow() {
    if (!isRecording) return;
    if (autoStopTimeoutRef.current) { window.clearTimeout(autoStopTimeoutRef.current); autoStopTimeoutRef.current = null; }
    try {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') mediaRecorderRef.current.stop();
      if (mediaStreamRef.current) mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      if (recognitionRef.current) { try { recognitionRef.current.stop(); } catch {} recognitionRef.current = null; }
      if (rafIdRef.current) { cancelAnimationFrame(rafIdRef.current); rafIdRef.current = null; }
      if (audioContextRef.current) { try { audioContextRef.current.close(); } catch {} audioContextRef.current = null; }
    } finally {
      const startedAt = recordingStartRef.current || Date.now();
      const duration = Date.now() - startedAt;
      const mock = computeMockFeedback(transcript, duration);
      setFeedback(mock);
      setIsRecording(false);
      setHasDemoFeedback(true);
      recordingStartRef.current = null;
      mediaRecorderRef.current = null;
      mediaStreamRef.current = null;
      analyserRef.current = null;
      setMicLevel(0);
    }
  }

  React.useEffect(() => {
    return () => {
      if (mediaStreamRef.current) mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      if (recognitionRef.current) { try { recognitionRef.current.stop(); } catch {} recognitionRef.current = null; }
      if (autoStopTimeoutRef.current) window.clearTimeout(autoStopTimeoutRef.current);
    };
  }, []);
  const [compareDay, setCompareDay] = React.useState<1 | 14>(1);
  const pathSteps = [
    { title: 'Discover strengths', desc: 'ShareTree Charametrics baseline' },
    { title: 'Targeted prompts', desc: 'Practice what matters most' },
    { title: 'Feedback loops', desc: 'Close gaps with instant insights' },
    { title: 'Coach tips', desc: 'Actionable refinements each session' },
  ];
  const [activePathIndex, setActivePathIndex] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => {
      setActivePathIndex((i) => (i + 1) % pathSteps.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden bg-background-primary">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 text-center"
          variants={getAnimation(fadeInUpScale)}
          initial="initial"
          animate="animate"
        >
          <motion.div className="inline-flex items-center gap-2 pill mb-6" variants={getAnimation(fadeInUp)}>
            <Sparkles className="w-4 h-4" />
            Omthentic — future of practice
          </motion.div>

          <h1 className="text-h1 text-white text-contrast-glow mb-6" style={{ fontSize: 'clamp(2.75rem, 7.5vw, 4.25rem)' }}>
            Ace Your Medical School Interview with Confidence
          </h1>
          <p className="text-body-lg text-gray-200 text-contrast-glow max-w-2xl mx-auto mb-10">
            Personalised, AI-powered coaching that transforms your interview performance and gives you the competitive edge you need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#widgets" className="btn-primary rounded-2xl px-8 py-4 inline-flex items-center gap-2 focus-ring">
              Start Preparing Free <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="btn-secondary bg-card rounded-2xl px-8 py-4 inline-flex items-center gap-2 focus-ring text-white border-white/50">
              <Play className="w-5 h-5" /> Watch demo
            </button>
          </div>
        </motion.div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-h3 text-primary-heading mb-3">Stop letting uncertainty hold you back</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              icon: Brain,
              title: 'Interview Anxiety',
              desc: 'Nerves can derail even the most prepared candidate. Learn how to stay calm, think clearly, and present your best self.',
            },{
              icon: Target,
              title: 'Missed Opportunities',
              desc: 'Many talented students miss out on offers due to poor communication skills — even when they know the answers.',
            },{
              icon: Mic,
              title: 'Unpolished Delivery',
              desc: 'You have great ideas — but in a high-pressure interview, clear, confident articulation makes all the difference.',
            }].map((item) => (
              <motion.div
                key={item.title}
                className="group relative rounded-2xl border border-subtle bg-card/60 backdrop-blur-sm p-6 overflow-hidden"
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(1200px 200px at 50% -10%, rgba(255,255,255,0.08), transparent 60%)',
                  }}
                />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white mb-4">
                    {React.createElement(item.icon, { className: 'w-5 h-5' })}
                  </div>
                  <h3 className="text-h6 text-primary-heading mb-2">{item.title}</h3>
                  <p className="text-secondary-body text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE THE FLOW (Interactive Demo) */}
      <section id="widgets" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <h2 className="text-h3 text-primary-heading mb-2">Experience the Flow of Our Technology</h2>
            <p className="text-secondary-body">See how Omthentic.ai helps you improve — live, in seconds.</p>
          </div>

          {/* Carousel */}
          <div className="mt-8 rounded-2xl border border-subtle bg-card/60 backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-secondary-body">{demoSlides[activeSlide].step}</div>
              <div className="flex items-center gap-2">
                <button aria-label="Previous" className="btn-secondary px-3 py-2 rounded-lg" onClick={prevSlide}>
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button aria-label="Next" className="btn-primary px-3 py-2 rounded-lg" onClick={nextSlide}>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-h5 mb-1">{demoSlides[activeSlide].title}</h3>
                <p className="text-secondary-body mb-4">{demoSlides[activeSlide].description}</p>
                <motion.div key={activeSlide} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
                  {demoSlides[activeSlide].body}
                </motion.div>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  {demoSlides.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => setActiveSlide(i)}
                      className={`h-2 rounded-full transition-all ${i === activeSlide ? 'w-8 bg-white/80' : 'w-2 bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Try It Now mini-widget */}
          <div className="mt-8 rounded-2xl border border-subtle bg-card/60 backdrop-blur-sm p-6">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <div className="text-xs uppercase tracking-wide text-secondary-body mb-2">Try it now</div>
                <h3 className="text-h5 mb-2">Answer a random interview question</h3>
                <div className="rounded-xl border border-subtle bg-card p-4 mb-4">
                  <div className="text-xs text-secondary-body mb-1">Question</div>
                  <div className="text-body">{tryNowQuestion}</div>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={isRecording ? stopTryNow : startTryNow} className={`inline-flex items-center gap-2 rounded-2xl px-4 py-3 focus-ring ${isRecording ? 'btn-secondary' : 'btn-primary'}`}>
                    <Mic className="w-4 h-4" /> {isRecording ? 'Stop' : 'Record 10–15s'}
                  </button>
                  {isRecording && (
                    <div className="w-40 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-primary transition-[width] duration-75" style={{ width: `${Math.min(100, Math.max(5, Math.round(micLevel * 140)))}%` }} />
                    </div>
                  )}
                  {!isRecording && (
                    <button
                      onClick={() => setTryNowQuestion(sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)])}
                      className="btn-secondary rounded-2xl px-4 py-3"
                    >
                      New question
                    </button>
                  )}
                </div>
              </div>
              <div>
                {isRecording && (
                  <div className="rounded-xl border border-subtle bg-card p-5">
                    <div className="text-xs text-secondary-body mb-3">Listening… Speak naturally</div>
                    <div className="h-24 flex items-end gap-[3px]">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-[3px] rounded-sm bg-primary/80"
                          initial={{ height: 6 }}
                          animate={{ height: [6, 40 + (i % 5) * 6, 12, 32, 8] }}
                          transition={{ duration: 1.1 + (i % 7) * 0.05, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      ))}
                    </div>
                    {transcript && (
                      <div className="mt-3 rounded-lg border border-subtle bg-background-primary p-3 text-sm text-secondary-body max-h-24 overflow-auto">
                        {transcript}
                      </div>
                    )}
                  </div>
                )}
                {!isRecording && hasDemoFeedback && (
                  <div className="rounded-xl border border-subtle bg-card p-5">
                    <div className="text-xs text-secondary-body mb-3">Sample feedback</div>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="rounded-xl border border-subtle bg-background-primary p-4 text-center"><div className="text-xs text-secondary-body">Clarity</div><div className="text-h6">{feedback.clarity}%</div></div>
                      <div className="rounded-xl border border-subtle bg-background-primary p-4 text-center"><div className="text-xs text-secondary-body">Filler Words</div><div className="text-h6">{feedback.filler}</div></div>
                      <div className="rounded-xl border border-subtle bg-background-primary p-4 text-center"><div className="text-xs text-secondary-body">Confidence</div><div className="text-h6">{feedback.confidence}</div></div>
                    </div>
                    {transcript && (
                      <div className="rounded-lg border border-subtle bg-background-primary p-3 text-sm text-secondary-body mb-4 max-h-28 overflow-auto">
                        <div className="text-[11px] uppercase tracking-wide mb-1">Transcript</div>
                        {transcript}
                      </div>
                    )}
                    <a
                      href={(process.env.NEXT_PUBLIC_APP_URL || 'https://app.omthentic.com') + '/onboarding'}
                      className="btn-primary rounded-2xl px-6 py-3 inline-flex items-center gap-2 focus-ring"
                    >
                      See Your Full Analysis <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                )}
                {!isRecording && !hasDemoFeedback && (
                  <div className="rounded-xl border border-dashed border-subtle bg-card/30 p-5 text-secondary-body">
                    Click record to simulate a short answer and see instant feedback.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Benefit recap */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[{
              title: 'Personalised to You',
              desc: 'Tailored interview questions and feedback to your character strengths.',
            },{
              title: 'Fast Learning',
              desc: 'See progress in every practice session.',
            },{
              title: 'Built for Medical Interviews',
              desc: 'Powered by 15 years of coaching expertise and AI precision.',
            }].map((b) => (
              <div key={b.title} className="rounded-2xl border border-subtle bg-card/60 backdrop-blur-sm p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                  <div>
                    <div className="text-body font-medium text-primary-heading">{b.title}</div>
                    <div className="text-secondary-body text-sm">{b.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT TEASER */}
      <section className="py-20 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Your Growth Dashboard */}
            <motion.div className="group rounded-2xl border border-subtle bg-card p-6 overflow-hidden" whileHover={{ y: -4 }}>
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5" />
                <h3 className="text-h6">Your Growth Dashboard</h3>
              </div>
              <p className="text-secondary-body text-sm mb-4">Confidence, clarity and more—see progress in every session.</p>
              <div className="grid grid-cols-2 gap-3">
                {[{ label: 'Confidence', value: 82 }, { label: 'Clarity', value: 80 }].map((m) => (
                  <div key={m.label} className="rounded-xl border border-subtle bg-background-primary p-4">
                    <div className="text-xs text-secondary-body mb-1">{m.label}</div>
                    <div className="text-h5 mb-2">{m.value}%</div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-primary" initial={{ width: 0 }} whileInView={{ width: `${m.value}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
                    </div>
                  </div>
                ))}
                <div className="rounded-xl border border-subtle bg-background-primary p-4">
                  <div className="text-xs text-secondary-body mb-1">Word Count</div>
                  <div className="text-h5 mb-2">145</div>
                  <div className="text-xs text-secondary-body">Target 120–180</div>
                </div>
                <div className="rounded-xl border border-subtle bg-background-primary p-4">
                  <div className="text-xs text-secondary-body mb-1">Filler Words</div>
                  <div className="text-h5 mb-2">↓ 28%</div>
                  <div className="text-xs text-secondary-body">Past 7 sessions</div>
                </div>
              </div>
            </motion.div>

            {/* Compare Before & After */}
            <motion.div className="group rounded-2xl border border-subtle bg-card p-6 overflow-hidden" whileHover={{ y: -4 }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <GitCompare className="w-5 h-5" />
                  <h3 className="text-h6">Compare Before & After</h3>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-subtle p-1">
                  <button onClick={() => setCompareDay(1)} className={`px-2 py-1 rounded-full text-xs ${compareDay===1? 'bg-background-primary' : ''}`}>Day 1</button>
                  <button onClick={() => setCompareDay(14)} className={`px-2 py-1 rounded-full text-xs ${compareDay===14? 'bg-background-primary' : ''}`}>Day 14</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1,14].map((d) => (
                  <motion.div key={d} className={`rounded-xl border ${compareDay===d? 'border-white/40' : 'border-subtle'} bg-background-primary p-4`} animate={{ opacity: compareDay===d? 1 : 0.6, scale: compareDay===d? 1 : 0.98 }}>
                    <div className="text-xs text-secondary-body mb-2">Sample answer — Day {d}</div>
                    <div className="text-sm leading-relaxed mb-3">
                      {d===1 ? 'I have always wanted to help people and I think medicine is a good career where I can do that. I like science and working with others.' : 'Medicine lets me combine evidence‑based problem solving with empathy at the bedside. I’m motivated by meaningful impact, teamwork and lifelong learning.'}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-lg border border-subtle p-2 text-center">
                        <div className="text-[10px] text-secondary-body">Clarity</div>
                        <div className="text-sm">{d===1? '64%' : '86%'}</div>
                      </div>
                      <div className="rounded-lg border border-subtle p-2 text-center">
                        <div className="text-[10px] text-secondary-body">Filler</div>
                        <div className="text-sm">{d===1? '7' : '2'}</div>
                      </div>
                      <div className="rounded-lg border border-subtle p-2 text-center">
                        <div className="text-[10px] text-secondary-body">Confidence</div>
                        <div className="text-sm">{d===1? 'Fair' : 'Strong'}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tailored Practice Paths */}
            <motion.div className="group rounded-2xl border border-subtle bg-card p-6 overflow-hidden" whileHover={{ y: -4 }}>
              <div className="flex items-center gap-2 mb-3">
                <Route className="w-5 h-5" />
                <h3 className="text-h6">Tailored Practice Paths</h3>
              </div>
              <p className="text-secondary-body text-sm mb-4">ShareTree Charametrics customises your journey for faster, lasting gains.</p>
              <div className="relative">
                <div className="grid grid-cols-4 gap-3">
                  {pathSteps.map((s, i) => (
                    <div key={s.title} className={`rounded-xl border p-4 ${i===activePathIndex? 'border-white/50 bg-background-primary' : 'border-subtle bg-card/40'}`}>
                      <div className="text-xs text-secondary-body mb-1">Step 0{i+1}</div>
                      <div className="text-body font-medium mb-1">{s.title}</div>
                      <div className="text-secondary-body text-xs">{s.desc}</div>
                    </div>
                  ))}
                </div>
                <motion.div className="absolute -bottom-2 left-0 h-1 bg-primary rounded-full" initial={{ width: '0%' }} animate={{ width: `${((activePathIndex+1)/pathSteps.length)*100}%` }} transition={{ duration: 0.4 }} style={{ right: 'auto' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 pill mb-4"><Smartphone className="w-4 h-4"/> Present anywhere</div>
          <h2 className="text-h3 mb-3">Made for every screen</h2>
          <p className="text-body text-secondary-body max-w-2xl mx-auto">Responsive, fast and accessible—so you can practice on the go.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 text-white text-contrast-glow mb-4">Start your story</h2>
          <p className="text-body-lg text-gray-200 text-contrast-glow mb-8">Join thousands building confidence with Omthentic.</p>
          <Link href="/" className="btn-primary rounded-2xl px-8 py-4 inline-flex items-center gap-2 focus-ring">Try for free <ArrowRight className="w-5 h-5"/></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}


