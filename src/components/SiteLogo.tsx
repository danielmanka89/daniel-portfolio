import Image from "next/image";
import Link from "next/link";

// dLm mark, top-right on every page. The transparent file has a white L, so light backgrounds use the panel version.
export default function SiteLogo({ onLight = false }: { onLight?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Daniel Livingstone Manka — home"
      className="site-logo absolute right-6 top-6 z-30 md:right-12"
    >
      <Image
        src={onLight ? "/logo/dlm-mark.svg" : "/logo/dlm-mark-transparent.svg"}
        alt="DLM"
        width={78}
        height={58}
        priority
        className="h-10 w-auto md:h-12"
      />
    </Link>
  );
}
