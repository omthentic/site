"use client";

import { useEffect, useRef } from "react";

export function DeepField() {
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
    let stars: {
      x: number; y: number; r: number; a: number; tw: number; ph: number; vx: number; vy: number;
    }[] = [];
    const rings: { r: number; a: number }[] = [];
    const src = { x: 0, y: 0 };
    let raf = 0;
    let last = 0;
    let ringTimer = 0;

    function resize() {
      w = canvas.width = innerWidth * dpr;
      h = canvas.height = innerHeight * dpr;
      canvas.style.width = innerWidth + "px";
      canvas.style.height = innerHeight + "px";
      src.x = w * 0.5;
      src.y = h * 0.32;
      const count = Math.min(140, Math.floor((innerWidth * innerHeight) / 14000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 1.3 + 0.3) * dpr,
        a: Math.random() * 0.5 + 0.1,
        tw: Math.random() * 0.02 + 0.004,
        ph: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.04 * dpr,
        vy: (Math.random() - 0.5) * 0.04 * dpr,
      }));
    }

    function frame(t: number) {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.ph += s.tw;
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;
        const a = s.a * (0.6 + 0.4 * Math.sin(s.ph));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "oklch(95% 0.01 280 / " + a.toFixed(3) + ")";
        ctx.fill();
      }
      ringTimer += t - last;
      last = t;
      if (ringTimer > 2600) {
        ringTimer = 0;
        rings.push({ r: 10 * dpr, a: 0.28 });
      }
      for (let i = rings.length - 1; i >= 0; i--) {
        const r = rings[i];
        r.r += 0.55 * dpr;
        r.a *= 0.992;
        if (r.a < 0.01) {
          rings.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(src.x, src.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = "oklch(74% 0.15 285 / " + r.a.toFixed(3) + ")";
        ctx.lineWidth = 1 * dpr;
        ctx.stroke();
      }
      raf = requestAnimationFrame(frame);
    }

    resize();
    addEventListener("resize", resize);

    if (!reduce) {
      raf = requestAnimationFrame(frame);
    } else {
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "oklch(95% 0.01 280 / " + s.a.toFixed(3) + ")";
        ctx.fill();
      }
    }

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="field" ref={ref} aria-hidden="true" />;
}
