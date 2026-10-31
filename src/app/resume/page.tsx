import { site } from "@/lib/site";

const details = [
  ["Name", site.name],
  ["Role", site.role],
  ["Email", site.email],
  ["Location", "—"],
];

export default function ResumePage() {
  return (
    <section id="about" className="grid min-h-screen md:grid-cols-2">
      <div className="relative flex items-end bg-neutral-200 p-10">
        <h1 className="text-5xl font-black uppercase leading-none md:text-6xl">
          Hello, I&apos;m <span className="bg-yellow-400 px-2">{site.name}</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center gap-8 p-10 md:p-16">
        <h2 className="text-3xl font-black uppercase">
          About
          <span className="mt-2 block h-1 w-16 bg-yellow-400" />
        </h2>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
          {details.map(([label, value]) => (
            <div key={label} className="contents">
              <dt className="font-bold uppercase">{label}</dt>
              <dd className="text-neutral-600">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="leading-relaxed text-neutral-700">
          I&apos;m a software engineer who builds fast, reliable web applications, and a musician
          who writes and produces my own songs. I bring the same craft to both: clean structure,
          attention to detail, and a focus on how people actually experience the work.
        </p>
      </div>
    </section>
  );
}
