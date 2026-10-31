import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({ weight: "700", subsets: ["latin"] });

// DLM wordmark with an audio-wave line ending in a tech node.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Daniel Livingstone Manka"
      className={`inline-flex flex-col items-center leading-none text-current ${className}`}
    >
      <span className={`${bodoni.className} pl-[0.35em] text-3xl tracking-[0.35em]`}>DLM</span>
      <svg viewBox="0 0 96 10" className="mt-1.5 h-2.5 w-full" fill="none" aria-hidden>
        <path
          d="M0 5h34l3-4 4 8 4-8 4 8 3-4h34"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="92" cy="5" r="2" fill="currentColor" />
      </svg>
    </span>
  );
}
