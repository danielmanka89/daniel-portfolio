"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type Side = "engineer" | "musician" | null;

const ease = [0.22, 1, 0.36, 1] as const;

export default function Gateway({ displayFont }: { displayFont: string }) {
  const [active, setActive] = useState<Side>(null);
  const grow = (side: Side) => (active === null ? 1 : active === side ? 1.6 : 0.7);

  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-black md:h-dvh md:flex-row">
      {/* Engineer */}
      <motion.section
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1, flexGrow: grow("engineer") }}
        transition={{ duration: 0.9, ease }}
        onHoverStart={() => setActive("engineer")}
        onHoverEnd={() => setActive(null)}
        className="relative flex min-h-[50dvh] basis-0 flex-col justify-end bg-[#0d0d0d] p-8 text-white md:min-h-0 md:p-14"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,179,66,0.12),transparent_55%)]"
        />
        <span className="absolute left-0 top-0 h-full w-[3px] bg-[#F5B342] shadow-[0_0_24px_#F5B342]" />
        <div className="relative">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] text-[#F5B342]">01 / RESUME</p>
          <h2 className="mb-8 text-5xl font-bold tracking-tight md:text-7xl">THE ENGINEER</h2>
          <Link
            href="/resume"
            className="inline-block border border-[#F5B342] px-8 py-4 text-sm font-semibold tracking-[0.3em] text-[#F5B342] transition-colors hover:bg-[#F5B342] hover:text-black"
          >
            VIEW RESUME →
          </Link>
        </div>
      </motion.section>

      {/* Musician */}
      <motion.section
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1, flexGrow: grow("musician") }}
        transition={{ duration: 0.9, ease }}
        onHoverStart={() => setActive("musician")}
        onHoverEnd={() => setActive(null)}
        className="relative flex min-h-[50dvh] basis-0 flex-col justify-end bg-[radial-gradient(ellipse_at_70%_20%,#5b0f1f_0%,#2a0a2e_40%,#000_80%)] p-8 text-white md:min-h-0 md:items-end md:p-14 md:text-right"
      >
        <span className="absolute right-0 top-0 h-full w-[3px] bg-[#E63946] shadow-[0_0_24px_#E63946]" />
        <div className="relative">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] text-[#E63946]">02 / MUSIC</p>
          <h2 className={`${displayFont} mb-8 text-6xl uppercase leading-[0.85] md:text-8xl`}>
            The
            <br />
            Musician
          </h2>
          <Link
            href="/music"
            className="inline-block rounded-full bg-[#E63946] px-8 py-4 text-sm font-bold tracking-[0.3em] transition-transform hover:scale-105"
          >
            ENTER THE SOUND →
          </Link>
        </div>
      </motion.section>

      {/* Center divider */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6, ease }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/80 text-xl font-bold tracking-widest text-white backdrop-blur md:h-24 md:w-24">
          DM
        </div>
      </motion.div>
    </main>
  );
}
