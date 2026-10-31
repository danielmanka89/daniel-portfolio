"use client";

import { motion } from "framer-motion";

const feathers = [
  { d: "M-20 380 C 120 300, 220 120, 520 40", from: "#FF0000", to: "#F5B342", width: 2.5, delay: 0 },
  { d: "M-10 460 C 160 380, 260 200, 540 150", from: "#2F6BFF", to: "#FF0000", width: 1.5, delay: 1.2 },
  { d: "M0 540 C 200 470, 300 300, 560 260", from: "#F5B342", to: "#2F6BFF", width: 2, delay: 2.4 },
  { d: "M40 600 C 220 560, 340 420, 560 380", from: "#FF0000", to: "#2F6BFF", width: 1, delay: 3.6 },
];

export default function FeatherLines({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 540 600" fill="none" aria-hidden className={`pointer-events-none ${className}`}>
      <defs>
        {feathers.map((f, i) => (
          <linearGradient key={i} id={`feather-${i}`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor={f.from} stopOpacity="0" />
            <stop offset="50%" stopColor={f.from} stopOpacity="0.8" />
            <stop offset="100%" stopColor={f.to} stopOpacity="0" />
          </linearGradient>
        ))}
      </defs>
      {feathers.map((f, i) => (
        <motion.path
          key={i}
          d={f.d}
          stroke={`url(#feather-${i})`}
          strokeWidth={f.width}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.5, 1, 0.5], y: [0, -14, 0], x: [0, 8, 0] }}
          transition={{
            pathLength: { duration: 2, delay: f.delay * 0.3, ease: "easeOut" },
            default: { duration: 8, delay: f.delay, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
    </svg>
  );
}
