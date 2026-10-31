"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import FeatherLines from "@/components/FeatherLines";
import SiteLogo from "@/components/SiteLogo";
import { FaFacebookF, FaInstagram, FaPinterestP, FaXTwitter, FaYoutube } from "react-icons/fa6";

const nav = [
  { href: "/resume", label: "ENGINEER" },
  { href: "/music", label: "MUSIC" },
  { href: "/resume#projects", label: "PROJECTS" },
];

const socials = [
  { label: "Pinterest", Icon: FaPinterestP, bg: "bg-[#E60023]" },
  { label: "Instagram", Icon: FaInstagram, bg: "bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5]" },
  { label: "Twitter", Icon: FaXTwitter, bg: "bg-[#1DA1F2]" },
  { label: "Facebook", Icon: FaFacebookF, bg: "bg-[#1877F2]" },
];

const glows = [
  { color: "#FF0000", top: "22%", rotate: -12, delay: 0 },
  { color: "#2F6BFF", top: "48%", rotate: 8, delay: 1.5 },
  { color: "#F5B342", top: "72%", rotate: -4, delay: 3 },
];

const ease = [0.22, 1, 0.36, 1] as const;
const nameLines = ["Daniel", "Livingstone", "Manka"];
const diagonal =
  "bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1)_0_1px,transparent_1px_14px)] dark:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_14px)]";

type Theme = "dark" | "light";

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") setTheme(saved);
    } catch {}
  }, []);

  const toggleTheme = () => {
    const value: Theme = theme === "dark" ? "light" : "dark";
    setTheme(value);
    try {
      localStorage.setItem("theme", value);
    } catch {}
  };

  const ThemeIcon = theme === "dark" ? Moon : Sun;

  return (
    <MotionConfig reducedMotion="user">
    <main
      className={`${theme === "dark" ? "dark" : ""} relative min-h-dvh overflow-hidden bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white`}
    >
      {/* Corner diagonal patterns */}
      <div aria-hidden className={`absolute left-0 top-0 h-72 w-72 ${diagonal} [mask-image:radial-gradient(circle_at_top_left,black,transparent_70%)]`} />
      <div aria-hidden className={`absolute bottom-0 right-0 h-72 w-72 ${diagonal} [mask-image:radial-gradient(circle_at_bottom_right,black,transparent_70%)]`} />

      {/* Floating glow lines */}
      {glows.map((g) => (
        <motion.div
          key={g.color}
          aria-hidden
          className="pointer-events-none absolute -left-1/4 h-[2px] w-[150%] blur-[1px]"
          style={{
            top: g.top,
            rotate: g.rotate,
            background: `linear-gradient(90deg, transparent, ${g.color}, transparent)`,
            boxShadow: `0 0 24px 4px ${g.color}55`,
          }}
          animate={{ x: ["-10%", "10%", "-10%"], opacity: [0.15, 0.6, 0.15] }}
          transition={{ duration: 12, delay: g.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <SiteLogo onLight={theme === "light"} />

      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-8">
          <nav className="flex gap-6 text-xs font-semibold tracking-[0.2em] md:gap-10">
            {nav.map((item, i) => (
              <motion.span
                key={item.label}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease }}
              >
                <Link
                  href={item.href}
                  className="text-neutral-600 transition-colors hover:text-[#FF0000] dark:text-neutral-300 dark:hover:text-[#FF0000]"
                >
                  {item.label}
                </Link>
              </motion.span>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 md:px-12 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease }}
            className="text-4xl font-light italic md:text-6xl"
          >
            Hi, I&apos;M
          </motion.p>
          <h1 className="mt-2 text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl xl:text-[5.5rem]">
            {nameLines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease }}
            className="mt-8 max-w-md text-lg text-neutral-600 dark:text-neutral-400"
          >
            A Software Engineer &amp; Musician who empowers brands, builds tech, and creates music with children.
          </motion.p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {socials.map(({ label, Icon, bg }, i) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 18, delay: 1.15 + i * 0.08 }}
                className={`flex h-12 w-12 items-center justify-center text-lg text-white ${bg}`}
              >
                <Icon />
              </motion.a>
            ))}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, delay: 1.5, ease }}
              className="ml-2 flex h-12 items-center gap-3 bg-[#FF0000] px-7 text-sm font-bold tracking-[0.2em] text-white"
            >
              <FaYoutube size={20} /> YOUTUBE CHANNEL
            </motion.a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-lg">
          <FeatherLines className="absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)]" />
          {/* Pulsing glow + slow orbit ring behind the cutout */}
          <motion.div
            aria-hidden
            className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(255,0,0,0.45),rgba(47,107,255,0.25)_55%,transparent_72%)] blur-2xl"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0.7, 1, 0.7], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-[6%] rounded-full border border-dashed border-[#FF0000]/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ opacity: { duration: 1, delay: 0.8 }, rotate: { duration: 60, repeat: Infinity, ease: "linear" } }}
          />
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              }}
            >
              <Image
                src="/daniel-cutout.png"
                alt="Portrait of Daniel Livingstone Manka"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain object-bottom"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 shadow-lg transition-colors hover:text-black dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
      >
        <ThemeIcon size={20} />
      </button>
    </main>
    </MotionConfig>
  );
}
