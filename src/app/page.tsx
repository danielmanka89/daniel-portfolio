"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MotionConfig, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Outfit } from "next/font/google";
import { Aurora, SpectrumRing, WaveField } from "@/components/HeroVisuals";
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

const display = Outfit({ weight: ["600"], subsets: ["latin"] });

const ease = [0.22, 1, 0.36, 1] as const;
const nameLines = ["Daniel", "Livingstone", "Manka"];
const ticker = "SOFTWARE ENGINEER ✦ MUSICIAN ✦ PRODUCER ✦ MUSIC WITH CHILDREN ✦ ";

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

  // Pointer parallax: portrait and text drift in opposite directions.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 20 });
  const sy = useSpring(py, { stiffness: 60, damping: 20 });
  const portraitX = useTransform(sx, (v) => v * -18);
  const portraitY = useTransform(sy, (v) => v * -12);
  const textX = useTransform(sx, (v) => v * 8);
  const textY = useTransform(sy, (v) => v * 6);

  return (
    <MotionConfig reducedMotion="user">
    <main
      className={`${theme === "dark" ? "dark" : ""} relative min-h-dvh overflow-hidden bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white`}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        px.set((e.clientX / window.innerWidth) * 2 - 1);
        py.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      <Aurora />
      <WaveField dark={theme === "dark"} />
      <div aria-hidden className="grain pointer-events-none absolute inset-0 z-[1]" />

      <SiteLogo onLight={theme === "light"}>
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
      </SiteLogo>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-28 md:px-12 lg:grid-cols-2">
        <motion.div style={{ x: textX, y: textY }}>
          <motion.p
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease }}
            className="text-4xl font-light italic md:text-6xl"
          >
            Hi, I&apos;M
          </motion.p>
          <h1 className={`${display.className} mt-3 text-6xl font-semibold leading-[0.92] tracking-[-0.035em] sm:text-7xl md:text-8xl xl:text-[6.5rem]`}>
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.8, delay: 1.1 + i * 0.06, ease }}
                className={`flex h-12 w-12 items-center justify-center text-lg text-white ${bg}`}
              >
                <Icon />
              </motion.a>
            ))}
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, delay: 1.5, ease }}
              className="ml-2 flex h-12 items-center gap-3 bg-[#FF0000] px-7 text-sm font-bold tracking-[0.2em] text-white"
            >
              <FaYoutube size={20} /> YOUTUBE CHANNEL
            </motion.a>
          </div>
        </motion.div>

        <div className="relative mx-auto aspect-square w-full max-w-lg">
          <motion.div
            aria-hidden
            className="absolute inset-[14%] rounded-full bg-[radial-gradient(circle,rgba(255,0,0,0.4),rgba(47,107,255,0.2)_55%,transparent_72%)] blur-3xl"
            animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.06, 0.95] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div aria-hidden className="absolute inset-0" style={{ x: portraitX, y: portraitY }}>
            <SpectrumRing className="absolute inset-[-6%] h-[112%] w-[112%]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
            className="absolute inset-0"
            style={{ x: portraitX, y: portraitY }}
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

      <div aria-hidden className="relative z-10 overflow-hidden border-y border-black/10 py-5 dark:border-white/10">
        <div className="ticker flex w-max whitespace-nowrap text-5xl font-black uppercase tracking-tight md:text-7xl">
          <span className="outline-text pr-4">{ticker.repeat(3)}</span>
          <span className="outline-text pr-4">{ticker.repeat(3)}</span>
        </div>
      </div>

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
