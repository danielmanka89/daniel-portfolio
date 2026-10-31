import Link from "next/link";
import SiteLogo from "@/components/SiteLogo";

const nav = [
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
      <SiteLogo>
        {nav.map((item) => (
          <Link key={item.label} href={item.href} className="transition-colors hover:text-red-600">
            {item.label}
          </Link>
        ))}
      </SiteLogo>
      <main className="relative z-10">{children}</main>
    </div>
  );
}
