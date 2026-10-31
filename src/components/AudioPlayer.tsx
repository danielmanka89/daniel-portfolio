"use client";

import { useRef, useState } from "react";

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export default function AudioPlayer({ src, title }: { src: string; title: string }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggle = () => {
    const el = audio.current;
    if (!el) return;
    if (el.paused) el.play().catch(() => setPlaying(false));
    else el.pause();
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = audio.current;
    if (!el || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
  };

  return (
    <div className="flex items-center gap-5 rounded-full border border-orange-400/40 bg-orange-950/40 p-3 pr-6">
      <audio
        ref={audio}
        src={src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause" : "Play"}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-400 text-lg text-black transition-transform hover:scale-105"
      >
        {playing ? "❚❚" : "▶"}
      </button>
      <div className="flex-1">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-200">{title}</p>
        <div onClick={seek} className="h-1 cursor-pointer rounded-full bg-white/15">
          <div
            className="h-full rounded-full bg-orange-400"
            style={{ width: duration ? `${(time / duration) * 100}%` : "0%" }}
          />
        </div>
      </div>
      <span className="font-mono text-xs text-orange-200/70">
        {fmt(time)} / {fmt(duration)}
      </span>
    </div>
  );
}
