"use client";

import { useEffect, useRef } from "react";

type Ring = { r: number };
type Mote = { a: number; r: number; baseR: number; phase: number; size: number };

const ACCENT = "74% 0.15 285";
const INK = "95% 0.01 280";

export function OrbHero() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let cx = 0;
    let cy = 0;
    let rings: Ring[] = [];
    let motes: Mote[] = [];
    let spawn = 0;
    let t = 0;
    let last = 0;
    let raf = 0;

    const resize = () => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      if (cw < 4 || ch < 4) return;
      w = cw;
      h = ch;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = w / 2;
      cy = h / 2;
      const count = Math.round((w * h) / 7000);
      motes = Array.from({ length: count }, () => {
        const a = Math.random() * Math.PI * 2;
        const r = 40 + Math.random() * Math.max(w, h) * 0.5;
        return { a, r, baseR: r, phase: Math.random() * Math.PI * 2, size: 0.5 + Math.random() * 1.3 };
      });
    };

    const drawOrb = () => {
      const pulse = 0.7 + Math.sin(t * 2.2) * 0.3;
      const glowR = Math.min(w, h) * 0.2;
      const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
      halo.addColorStop(0, `oklch(${ACCENT} / 0.26)`);
      halo.addColorStop(0.5, `oklch(${ACCENT} / 0.08)`);
      halo.addColorStop(1, `oklch(${ACCENT} / 0)`);
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `oklch(${ACCENT} / 0.95)`;
      ctx.beginPath();
      ctx.arc(cx, cy, 5 * pulse + 2, 0, Math.PI * 2);
      ctx.fill();
    };

    const frame = (ts: number) => {
      if (!last) last = ts;
      const dt = Math.min(0.05, (ts - last) / 1000);
      last = ts;
      t += dt;
      ctx.clearRect(0, 0, w, h);

      for (const m of motes) {
        m.r = m.baseR + Math.sin(t * 0.6 + m.phase) * 6;
        m.a += dt * 0.035;
        const x = cx + Math.cos(m.a) * m.r;
        const y = cy + Math.sin(m.a) * m.r;
        ctx.fillStyle = `oklch(${INK} / 0.3)`;
        ctx.beginPath();
        ctx.arc(x, y, m.size, 0, Math.PI * 2);
        ctx.fill();
      }

      spawn += dt;
      if (spawn > 1.1) {
        spawn = 0;
        rings.push({ r: 6 });
      }
      const maxR = Math.max(w, h) * 0.62;
      for (const ring of rings) ring.r += 150 * dt;
      rings = rings.filter((r) => r.r < maxR);
      for (const ring of rings) {
        const f = ring.r / maxR;
        const alpha = Math.max(0, 1 - f) * 0.5;
        ctx.strokeStyle = `oklch(${ACCENT} / ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, ring.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      drawOrb();
      raf = requestAnimationFrame(frame);
    };

    resize();

    if (reduce) {
      drawOrb();
    } else {
      raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="orb-canvas" />;
}
