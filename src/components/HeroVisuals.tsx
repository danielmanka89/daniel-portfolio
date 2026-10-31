"use client";

import { useEffect, useRef } from "react";

type Draw = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => void;

// Sizes a canvas to its box and runs `draw` every frame (one still frame if the user prefers reduced motion).
function useCanvasLoop(draw: Draw) {
  const ref = useRef<HTMLCanvasElement>(null);
  const drawRef = useRef(draw);
  useEffect(() => {
    drawRef.current = draw;
  }, [draw]);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (still) drawRef.current(ctx, w, h, 4);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    const loop = (ms: number) => {
      drawRef.current(ctx, w, h, ms / 1000);
      frame = requestAnimationFrame(loop);
    };
    if (!still) frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return ref;
}

const RED = [255, 0, 0];
const BLUE = [47, 107, 255];
const mix = (a: number[], b: number[], k: number) => a.map((v, i) => Math.round(v + (b[i] - v) * k)).join(",");

// Full-bleed field of sound-wave lines that swell toward the portrait side.
export function WaveField({ dark }: { dark: boolean }) {
  const ref = useCanvasLoop((ctx, w, h, t) => {
    ctx.clearRect(0, 0, w, h);
    const lines = 36;
    const peak = w > 900 ? 0.72 : 0.5;
    for (let i = 0; i < lines; i++) {
      const k = i / (lines - 1);
      const y0 = h * (0.3 + 0.7 * Math.pow(k, 1.4));
      const amp = 10 + 70 * k;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 6) {
        const u = x / w;
        const env = Math.exp(-Math.pow((u - peak) / 0.22, 2));
        const wave =
          Math.sin(u * 9 + t * 0.9 + i * 0.35) * 0.55 +
          Math.sin(u * 23 - t * 1.6 + i * 0.12) * 0.3 +
          Math.sin(u * 51 + t * 2.4 + i) * 0.15;
        const y = y0 - Math.abs(wave) * amp * env - wave * 4;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      const a = (dark ? 0.08 : 0.1) + k * (dark ? 0.32 : 0.25);
      grad.addColorStop(0, `rgba(${BLUE.join(",")},0)`);
      grad.addColorStop(0.45, `rgba(${mix(BLUE, RED, k)},${a})`);
      grad.addColorStop(1, `rgba(${RED.join(",")},${a * 0.4})`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  });
  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}

// Circular audio-spectrum ring that keeps "playing" behind the portrait.
export function SpectrumRing({ className = "" }: { className?: string }) {
  const ref = useCanvasLoop((ctx, w, h, t) => {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2;
    const cy = h / 2;
    const r = Math.min(w, h) * 0.38;
    const bars = 120;
    const beat = Math.pow(Math.max(0, Math.sin(t * Math.PI * 2 * 0.9)), 8);
    ctx.lineCap = "round";
    ctx.lineWidth = Math.max(1.5, r / 110);
    for (let i = 0; i < bars; i++) {
      const a = (i / bars) * Math.PI * 2 + t * 0.12;
      const level =
        Math.abs(Math.sin(i * 0.31 + t * 2.1)) * 0.5 +
        Math.abs(Math.sin(i * 0.07 - t * 1.3)) * 0.35 +
        Math.abs(Math.sin(i * 1.7 + t * 3.7)) * 0.15;
      const len = r * (0.04 + 0.22 * level * (0.6 + 0.4 * beat));
      const k = (Math.sin(a - t * 0.5) + 1) / 2;
      ctx.strokeStyle = `rgba(${mix(RED, BLUE, k)},${0.35 + 0.55 * level})`;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      ctx.lineTo(cx + Math.cos(a) * (r + len), cy + Math.sin(a) * (r + len));
      ctx.stroke();
    }
    ctx.strokeStyle = `rgba(255,0,0,${0.25 + 0.35 * beat})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, r * (0.97 + 0.02 * beat), 0, Math.PI * 2);
    ctx.stroke();
  });
  return <canvas ref={ref} aria-hidden className={`pointer-events-none ${className}`} />;
}
