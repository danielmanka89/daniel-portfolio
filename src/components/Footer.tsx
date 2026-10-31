"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  // The resume section has a fixed 15rem sidebar on desktop.
  const offset = usePathname().startsWith("/resume") ? "md:pl-[calc(15rem+3rem)]" : "md:pl-12";
  return (
    <footer className={`relative z-10 bg-black px-6 pb-24 pt-10 md:pb-10 ${offset}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/dlm-logo-animated-transparent.svg"
        alt="Daniel Livingstone Manka"
        width={640}
        height={352}
        className="h-20 w-auto md:h-24"
      />
    </footer>
  );
}
