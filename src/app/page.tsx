"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Camera, FileText, Mail, Moon, Music, Quote, Send, Sun } from "lucide-react";

const GOLD = "#F5B342";

const quickLinks = [
  { href: "/resume", label: "Resume", Icon: FileText },
  { href: "/music", label: "Music", Icon: Music },
  { href: "/resume#projects", label: "AI Projects", Icon: Bot },
  { href: "/memories", label: "Memories", Icon: Camera },
  { href: "/resume#contact", label: "Contact", Icon: Mail },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <main className="relative min-h-dvh overflow-hidden bg-black px-6 pb-56 pt-6 text-white md:px-20">
      {/* Side framing text */}
      <span className="pointer-events-none fixed left-4 top-1/2 hidden -translate-y-1/2 -rotate-180 text-xs font-light tracking-[0.6em] text-neutral-700 [writing-mode:vertical-rl] md:block">
        DANIEL MANKA
      </span>
      <span className="pointer-events-none fixed right-4 top-1/2 hidden -translate-y-1/2 text-xs font-light tracking-[0.6em] text-neutral-700 [writing-mode:vertical-rl] md:block">
        SOFTWARE / MUSIC
      </span>

      {/* Top bar */}
      <motion.header {...fade(0)} className="relative flex items-center justify-center">
        <span className="flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-1.5 text-sm">
          <Quote size={14} style={{ color: GOLD }} /> Hello!
        </span>
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle theme"
          className="absolute right-0 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 transition-colors hover:border-[#F5B342]"
        >
          {dark ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </motion.header>

      {/* Hero text */}
      <motion.h1
        {...fade(0.15)}
        className="mt-10 text-center text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
      >
        I&apos;m <span style={{ color: GOLD }}>Daniel</span>,
        <br />
        Software Engineer &amp; Musician
      </motion.h1>

      {/* Quote / portrait / buttons */}
      <div className="mx-auto mt-10 grid max-w-6xl items-end gap-10 md:grid-cols-[1fr_auto_1fr]">
        <motion.blockquote {...fade(0.35)} className="order-2 max-w-xs md:order-1 md:mb-16">
          <Quote size={32} style={{ color: GOLD }} className="mb-3 fill-current" />
          <p className="italic text-neutral-300">
            A brilliant blend of technical logic and creative passion.
          </p>
          <footer className="mt-3 text-sm text-neutral-500">— A Colleague</footer>
        </motion.blockquote>

        <motion.div {...fade(0.25)} className="relative order-1 mx-auto h-80 w-72 md:order-2 md:h-[26rem] md:w-80">
          {/* Gradient arc + silhouette placeholder */}
          <div className="absolute inset-x-0 bottom-0 h-64 rounded-t-full bg-gradient-to-b from-[#F5B342] to-[#F5B342]/10 md:h-80" />
          <svg viewBox="0 0 200 260" className="absolute inset-x-0 bottom-0 mx-auto h-full text-neutral-800" aria-hidden>
            <circle cx="100" cy="80" r="48" fill="currentColor" />
            <path d="M10 260c0-60 40-100 90-100s90 40 90 100z" fill="currentColor" />
          </svg>
        </motion.div>

        <motion.div {...fade(0.45)} className="order-3 flex flex-col gap-4 md:mb-16 md:items-end">
          <Link
            href="/resume"
            className="w-full rounded-full bg-[#F5B342] px-8 py-4 text-center font-semibold text-black transition-transform hover:scale-105 md:w-56"
          >
            The Engineer
          </Link>
          <Link
            href="/music"
            className="w-full rounded-full border border-[#F5B342] px-8 py-4 text-center font-semibold text-white transition-colors hover:bg-[#F5B342]/10 md:w-56"
          >
            The Musician
          </Link>
        </motion.div>
      </div>

      {/* Bottom interactive bar */}
      <motion.div
        {...fade(0.6)}
        className="fixed inset-x-4 bottom-4 z-20 mx-auto max-w-3xl rounded-3xl border border-neutral-800 bg-neutral-900/90 p-4 backdrop-blur md:bottom-8"
      >
        <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Ask me about my engineering, music, or the children's project..."
            className="flex-1 bg-transparent px-2 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none"
          />
          <button aria-label="Send" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5B342] text-black">
            <Send size={16} />
          </button>
        </form>
        <nav className="mt-3 flex flex-wrap gap-2">
          {quickLinks.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-xs text-neutral-300 transition-colors hover:border-[#F5B342] hover:text-white"
            >
              <Icon size={14} /> {label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </main>
  );
}
