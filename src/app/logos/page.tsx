import Logo, { type LogoVariant } from "@/components/Logo";

// Temporary preview page for choosing a logo. Delete once a variant is picked.
const options: { variant: LogoVariant; name: string }[] = [
  { variant: "pulse", name: "1 — Pulse" },
  { variant: "signature", name: "2 — Signature" },
  { variant: "record", name: "3 — Record" },
];

export default function LogosPage() {
  return (
    <main className="grid min-h-dvh gap-px bg-neutral-800 md:grid-cols-3">
      {options.map(({ variant, name }) => (
        <section key={variant} className="grid grid-rows-2">
          <div className="flex flex-col items-center justify-center gap-6 bg-black p-10 text-white">
            <Logo variant={variant} />
            <p className="text-xs tracking-[0.3em] text-neutral-500">{name}</p>
          </div>
          <div className="flex items-center justify-center bg-white p-10 text-black">
            <Logo variant={variant} />
          </div>
        </section>
      ))}
    </main>
  );
}
