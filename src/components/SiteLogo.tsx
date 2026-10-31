import Link from "next/link";
import Logo from "@/components/Logo";

// Same spot on every page; color is inherited from the section (className sets it where needed).
export default function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Daniel Livingstone Manka — home"
      className={`site-logo absolute right-6 top-6 z-30 md:right-12 ${className}`}
    >
      <Logo />
    </Link>
  );
}
