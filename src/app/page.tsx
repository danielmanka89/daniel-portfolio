import Link from "next/link";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="grid min-h-screen md:grid-cols-2">
      <Link href="/resume" className="group flex flex-col justify-end bg-white p-10 text-black">
        <span className="text-xs font-bold tracking-[0.3em] text-neutral-500">SOFTWARE ENGINEER</span>
        <span className="text-6xl font-black uppercase group-hover:underline decoration-yellow-400 decoration-8">Resume</span>
      </Link>
      <Link href="/music" className="group flex flex-col justify-end bg-black p-10 text-white">
        <span className="text-xs font-bold tracking-[0.3em] text-red-600">MUSICIAN</span>
        <span className="text-6xl font-black uppercase group-hover:text-red-600">Music</span>
      </Link>
      <h1 className="sr-only">{site.name}</h1>
    </main>
  );
}
