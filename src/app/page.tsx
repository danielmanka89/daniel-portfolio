"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

      <SiteLogo />

      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-8">
          <nav className="flex gap-6 text-xs font-semibold tracking-[0.2em] md:gap-10">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-neutral-600 transition-colors hover:text-[#FF0000] dark:text-neutral-300 dark:hover:text-[#FF0000]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 md:px-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
        >
          <p className="text-4xl font-light italic md:text-6xl">Hi, I&apos;M</p>
          <h1 className="mt-2 text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl xl:text-[5.5rem]">
            Daniel
            <br />
            Livingstone
            <br />
            Manka
          </h1>
          <p className="mt-8 max-w-md text-lg text-neutral-600 dark:text-neutral-400">
            A Software Engineer &amp; Musician who empowers brands, builds tech, and creates music with children.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {socials.map(({ label, Icon, bg }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className={`flex h-12 w-12 items-center justify-center text-lg text-white transition-transform hover:-translate-y-1 ${bg}`}
              >
                <Icon />
              </a>
            ))}
            <a
              href="#"
              className="ml-2 flex h-12 items-center gap-3 bg-[#FF0000] px-7 text-sm font-bold tracking-[0.2em] transition-transform hover:-translate-y-1"
            >
              <FaYoutube size={20} /> YOUTUBE CHANNEL
            </a>
          </div>
        </motion.div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-lg">
          <FeatherLines className="absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)]" />
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            className="absolute inset-0"
            style={{
              maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              mixBlendMode: theme === "light" ? "multiply" : "normal",
            }}
          >
            <Image
              src="/daniel.jpg"
              alt="Portrait of Daniel Livingstone Manka"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
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
  );
}
