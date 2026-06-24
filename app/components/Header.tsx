import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-purple-deep text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-12 items-center justify-between gap-3 py-2 md:h-14 md:py-0">
          <a
            href="#"
            className="flex shrink-0 items-center gap-2 rounded-full bg-yellow-300 px-2.5 py-1 text-xs font-bold text-purple-deep sm:px-3 sm:text-sm"
          >
            <Image
              src="/brello-jetpack.svg"
              alt="Brello"
              width={13}
              height={13}
            />
            <span>Brello Jetpack</span>
          </a>

          <p className="hidden flex-1 px-4 text-center text-xs leading-snug text-white md:block lg:text-sm">
            Approved orders now shipping in{" "}
            <span className="font-bold">2–3 business days</span> — free,
            cold-packed, and discreet.
          </p>

          <a
            href="#pricing"
            className="shrink-0 text-xs underline underline-offset-2 whitespace-nowrap sm:text-sm hover:text-white/90"
          >
            See if you qualify →
          </a>
        </div>
      </div>
    </header>
  );
}
