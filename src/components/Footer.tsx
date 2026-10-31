"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  // The resume section has a fixed 15rem sidebar on desktop.
  const offset = usePathname().startsWith("/resume") ? "md:pl-[calc(15rem+3rem)]" : "md:pl-12";
  return (
    <footer className={`relative z-10 bg-black px-6 pb-24 pt-10 md:pb-10 ${offset}`}>
      <Image
        src="/logo/dlm-name-transparent.svg"
        alt="Daniel Livingstone Manka"
        width={196}
        height={59}
        className="h-14 w-auto md:h-[72px]"
      />
    </footer>
  );
}
