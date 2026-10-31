import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/music#lyrics", label: "Lyrics" },
  { href: "/music#videos", label: "Videos" },
  { href: "/music#gallery", label: "Gallery" },
];

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_25%)]"
      />
      <header className="absolute inset-x-0 top-0 z-20 flex justify-end gap-8 bg-transparent px-6 py-6 text-xs font-bold tracking-[0.3em] md:px-12">
        {nav.map((item) => (
          <Link key={item.label} href={item.href} className="uppercase transition-colors hover:text-red-600">
            {item.label}
          </Link>
        ))}
      </header>
      <main className="relative z-10">{children}</main>
    </div>
  );
}
