import Image from "next/image";
import Link from "next/link";

// Logo + menu share the top-right corner on every page. The transparent mark has a white L,
// so light backgrounds use the panel version.
export default function SiteLogo({ onLight = false, children }: { onLight?: boolean; children?: React.ReactNode }) {
  return (
    <div className="absolute right-6 top-6 z-30 flex items-center gap-5 md:right-12 md:gap-10">
      {children && (
        <nav className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] md:gap-8 md:text-xs">
          {children}
        </nav>
      )}
      <Link href="/" aria-label="Daniel Livingstone Manka — home" className="site-logo shrink-0">
        <Image
          src={onLight ? "/logo/dlm-mark.svg" : "/logo/dlm-mark-transparent.svg"}
          alt="DLM"
          width={78}
          height={58}
          priority
          className="h-10 w-auto md:h-12"
        />
      </Link>
    </div>
  );
}
