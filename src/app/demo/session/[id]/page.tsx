'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { questions } from '../../../lib/questions';

type Result = {
  transcript: string;
  scores: { confidence: number; clarity: number; pace: number };
  tips: string[];
};

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const question = useMemo(() => questions.find(q => q.id === params.id), [params.id]);
  const [recording, setRecording] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    let timer: any;
    if (recording) {
      timer = setInterval(() => setElapsed((e) => e + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [recording]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mr = new MediaRecorder(stream);
    chunks.current = [];
    mr.ondataavailable = (e) => chunks.current.push(e.data);
    mr.onstop = async () => {
      const blob = new Blob(chunks.current, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      setAudioURL(url);
      // Mock analysis for demo purposes
      setResult({
        transcript: 'This is a demo transcript generated for preview purposes.',
        scores: { confidence: 0.83, clarity: 0.78, pace: 0.9 },
        tips: [
          'Use a 1‑second pause after key points.',
          'Reduce filler words like “um” and “like”.',
          'Keep pace around 140–160 wpm.',
        ],
      });
    };
    mr.start();
    setMediaRecorder(mr);
    setRecording(true);
    setElapsed(0);
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setRecording(false);
  };

  if (!question) return <main className="p-6">Question not found</main>;

  return (
    <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
      <Link href="/demo/dashboard" className="link text-sm">← Back</Link>
      <h1 className="text-h3 mt-3 mb-2">{question.prompt}</h1>
      <div className="text-secondary-body mb-6">Category: {question.category}</div>

      {/* Timer & Progress */}
      <div className="flex items-center justify-between mb-4">
        <div className="pill tabular-nums">{String(Math.floor(elapsed/60)).padStart(2,'0')}:{String(elapsed%60).padStart(2,'0')}</div>
        <div className="flex-1 h-2 bg-background rounded-full mx-4">
          <div className="h-2 rounded-full" style={{ width: `${Math.min(elapsed/120*100,100)}%`, background: 'var(--om-grad)' }} />
        </div>
        <div className="text-xs text-secondary-body">2:00 limit</div>
      </div>

      {/* Recorder */}
      <div className="bg-card rounded-2xl border border-subtle p-6 text-center shadow-card">
        <button onClick={recording ? stopRecording : startRecording} className={`mx-auto btn-primary rounded-full px-8 py-4 ${recording ? 'opacity-90' : ''}`}>
          {recording ? 'Stop' : 'Start'} Recording
        </button>
        {audioURL && (
          <div className="mt-4">
            <audio controls src={audioURL} className="w-full" />
          </div>
        )}
      </div>

      {/* Results */}
      {result && (
        <section className="mt-8">
          <h2 className="text-h5 mb-3">Feedback</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-card border border-subtle rounded-xl p-4 text-center tabular-nums">Confidence<br/><span className="text-2xl font-bold">{Math.round(result.scores.confidence*100)}%</span></div>
            <div className="bg-card border border-subtle rounded-xl p-4 text-center tabular-nums">Clarity<br/><span className="text-2xl font-bold">{Math.round(result.scores.clarity*100)}%</span></div>
            <div className="bg-card border border-subtle rounded-xl p-4 text-center tabular-nums">Pace<br/><span className="text-2xl font-bold">{Math.round(result.scores.pace*100)}%</span></div>
          </div>
          <div className="bg-card border border-subtle rounded-xl p-4 mb-4">
            <h3 className="font-semibold mb-2">Transcript</h3>
            <p className="text-secondary-body text-sm leading-relaxed">{result.transcript}</p>
          </div>
          <div className="bg-card border border-subtle rounded-xl p-4">
            <h3 className="font-semibold mb-2">Tips</h3>
            <ul className="list-disc pl-5 text-sm text-secondary-body space-y-1">
              {result.tips.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}


