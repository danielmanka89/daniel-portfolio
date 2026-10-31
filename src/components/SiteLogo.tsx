import Link from "next/link";

// Logo + menu share the top-right corner on every page. The animated SVG is loaded with a plain <img>
// so its built-in CSS/SMIL animation runs untouched. The logo is drawn for dark backgrounds,
// so on light sections it sits in a #111111 box.
export default function SiteLogo({ onLight = false, children }: { onLight?: boolean; children?: React.ReactNode }) {
  return (
    <div className="absolute right-6 top-6 z-30 flex items-center gap-5 md:right-12 md:gap-10">
      {children && (
        <nav className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] md:gap-8 md:text-xs">
          {children}
        </nav>
      )}
      <Link href="/" aria-label="Daniel Livingstone Manka — home" className={`site-logo shrink-0 ${onLight ? "bg-[#111111] p-3" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo/dlm-logo-animated.svg"
          alt="Daniel Livingstone Manka"
          width={640}
          height={352}
          className="block h-12 w-auto md:h-16"
        />
      </Link>
    </div>
  );
}
