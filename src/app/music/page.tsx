import AudioPlayer from "@/components/AudioPlayer";

const demos = Array.from({ length: 6 }, (_, i) => ({ id: i + 1, title: `Demo ${String(i + 1).padStart(2, "0")}` }));

export default function MusicPage() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
        {/* Placeholder background — swap for a real image */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#3a0a0a_0%,#000_70%)]" />
        <h1 className="relative text-center text-[18vw] font-black uppercase leading-[0.85] tracking-tighter md:text-[14vw]">
          My <span className="text-red-600">Sound</span>
        </h1>
        <a
          href="#demos"
          className="relative mt-12 flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-red-600 text-center text-xs font-bold tracking-[0.3em] transition-transform duration-500 hover:rotate-12 hover:bg-red-600"
        >
          LIVE DEMOS
        </a>
      </section>

      <section id="demos" className="px-6 py-24 md:px-12">
        <h2 className="mb-16 text-[16vw] font-black uppercase leading-none tracking-tighter md:text-[10vw]">
          20 <span className="text-red-600">Demos</span>
        </h2>
        <div className="grid gap-8 [perspective:1000px] sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((d) => (
            <article
              key={d.id}
              className="group flex aspect-[4/5] flex-col justify-end border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-6 transition-transform duration-500 [transform:rotateX(6deg)_rotateY(-8deg)] hover:[transform:rotateX(0)_rotateY(0)_scale(1.03)] hover:border-red-600"
            >
              <span className="font-mono text-xs text-red-600">#{String(d.id).padStart(2, "0")}</span>
              <h3 className="text-2xl font-black uppercase">{d.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-black via-orange-950/30 to-black px-6 py-24 md:px-12">
        <p className="mb-4 text-xs font-bold tracking-[0.3em] text-orange-400">FEATURED</p>
        <h2 className="mb-10 text-5xl font-black uppercase text-orange-100 md:text-7xl">With The Children</h2>
        <div className="max-w-2xl">
          <AudioPlayer src="/audio/with-the-children.mp3" title="With The Children" />
        </div>
      </section>
    </>
  );
}
