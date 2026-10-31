// DLM monogram: shared stem (D + L), arc bowl (D), soundwave bars shaped as M.
const bars = [
  { x: 27, h: 26 },
  { x: 31, h: 19 },
  { x: 35, h: 13 },
  { x: 39, h: 19 },
  { x: 43, h: 26 },
];

export default function Logo({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="currentColor"
      role="img"
      aria-label="Daniel Livingstone Manka"
      className={className}
    >
      {/* L: stem + baseline */}
      <rect x="4" y="8" width="4" height="32" />
      <rect x="4" y="36" width="42" height="4" />
      {/* D: bowl */}
      <path d="M8 10h2a13 13 0 0 1 0 26H8" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="14" cy="23" r="3" />
      {/* M: soundwave */}
      {bars.map(({ x, h }) => (
        <rect key={x} x={x} y={36 - h} width="3" height={h} rx="1.5" />
      ))}
    </svg>
  );
}
