import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero w-full bg-brand-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-purple-500">
            GLP-1 WITH REAL SUPPORT
          </p>

          <h1 className="font-serif text-4xl font-medium leading-[1.02] tracking-[-1.36px] text-purple-deep sm:text-5xl lg:text-[68px]">
            Summer is here.
            <br />
            <span className="whitespace-nowrap">
              Don&apos;t spend it{" "}
              <span className="italic text-[#6A45C4]">hiding.</span>
            </span>
          </h1>

          <p className="max-w-md text-base leading-7 text-brand-purple/70">
            GLP-1 plans with fitness classes & provider care included. Delivered
            to your doorstep (if approved).
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-brand-yellow px-7 py-3 text-sm font-semibold text-brand-purple shadow-sm transition-colors hover:bg-brand-yellow-600"
            >
              See If You Qualify →
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-purple-deep/25 bg-transparent px-8 py-2.5 font-serif text-sm font-medium text-purple-deep transition-colors hover:border-purple-deep/40 hover:bg-purple-deep/5"
            >
              How it works →
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-brand-purple">
                80,000+
              </span>
              <span className="text-xs text-brand-purple/60">
                Active members
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-bold text-brand-purple">
                2-3 days
              </span>
              <span className="text-xs text-brand-purple/60">
                Shipping (if approved)
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-brand-yellow">★★★★★</span>
              <span className="text-xs text-brand-purple/60">
                <span className="font-semibold text-brand-purple">Great</span> ·
                3,904 Trustpilot reviews
              </span>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex w-full flex-col items-center relative">
          <Image
            src="/Brello-members-enjoying-summer.png"
            alt="Woman enjoying summer"
            width={600}
            height={450}
            priority
            className="w-full rounded-3xl object-cover"
          />

          <div className="mt-4 flex w-fit max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full bg-white px-5 py-2.5 shadow-lg absolute bottom-4">
            <span className="text-sm font-bold text-purple-deep">Great</span>

            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="flex h-5 w-5 items-center justify-center bg-[#00b67a] text-xs text-white rounded-xs"
                >
                  ★
                </span>
              ))}
              <span className="flex h-5 w-5 items-center justify-center bg-gray-300 text-xs text-white rounded-xs">
                ★
              </span>
            </div>

            <span className="flex items-center gap-1 text-sm font-semibold text-purple-deep">
              <span className="text-[#00b67a]">★</span> Trustpilot
            </span>

            <span className="text-sm text-brand-purple/50">3,904 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
