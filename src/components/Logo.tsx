import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({ weight: ["400", "700"], style: ["normal", "italic"], subsets: ["latin"] });

export type LogoVariant = "pulse" | "signature" | "record";

// 1. Pulse: equalizer bars + spaced sans initials.
function Pulse() {
  const bars = [6, 14, 20, 10, 16];
  return (
    <span className="inline-flex items-center gap-3">
      <svg viewBox="0 0 22 22" className="h-6 w-6" fill="currentColor" aria-hidden>
        {bars.map((h, i) => (
          <rect key={i} x={i * 4.5} y={(22 - h) / 2} width="2.5" height={h} rx="1.25" />
        ))}
      </svg>
      <span className="h-6 w-px bg-current opacity-40" />
      <span className="pl-[0.5em] text-2xl font-light tracking-[0.5em]">DLM</span>
    </span>
  );
}

// 2. Signature: full-name serif wordmark with a wave rule.
function Signature() {
  return (
    <span className="inline-flex flex-col items-end leading-none">
      <span className={`${bodoni.className} text-3xl italic`}>Daniel</span>
      <svg viewBox="0 0 120 6" className="my-1 h-1.5 w-full" fill="none" aria-hidden>
        <path d="M0 3h50l3-2.5 4 5 4-5 4 5 3-2.5h52" stroke="currentColor" strokeWidth="0.75" strokeLinejoin="round" />
      </svg>
      <span className="text-[9px] font-medium tracking-[0.42em]">LIVINGSTONE MANKA</span>
    </span>
  );
}

// 3. Record: serif initials inside a vinyl-style ring with a node.
function Record() {
  return (
    <span className="relative inline-flex h-14 w-14 items-center justify-center">
      <svg viewBox="0 0 56 56" className="absolute inset-0" fill="none" aria-hidden>
        <circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1" />
        <circle cx="28" cy="28" r="21" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.5" />
        <circle cx="46.4" cy="9.6" r="2.5" fill="currentColor" />
      </svg>
      <span className={`${bodoni.className} text-base font-bold tracking-[0.12em]`}>DLM</span>
    </span>
  );
}

const variants = { pulse: Pulse, signature: Signature, record: Record };

export default function Logo({ variant = "pulse", className = "" }: { variant?: LogoVariant; className?: string }) {
  const Mark = variants[variant];
  return (
    <span role="img" aria-label="Daniel Livingstone Manka" className={`inline-flex text-current ${className}`}>
      <Mark />
    </span>
  );
}
