import Link from "next/link";
import SiteLogo from "@/components/SiteLogo";
import { site } from "@/lib/site";

const nav = [
  { href: "/resume#about", label: "About" },
  { href: "/resume#skills", label: "Skills" },
  { href: "/resume#contact", label: "Contact" },
];

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-white text-black md:pl-60">
      <SiteLogo onLight />
      <aside className="flex flex-col bg-black text-white md:fixed md:inset-y-0 md:left-0 md:w-60">
        <div className="flex h-24 w-24 items-center justify-center bg-yellow-400 text-4xl font-black text-black">
          {site.name[0]}
        </div>
        <nav className="flex flex-row flex-wrap gap-6 p-6 md:flex-col md:gap-4 md:p-8">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:text-yellow-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="mt-auto hidden p-8 text-xs text-white/50 md:block">
          © {new Date().getFullYear()} {site.name}
        </p>
      </aside>
      <main>{children}</main>
    </div>
  );
}
