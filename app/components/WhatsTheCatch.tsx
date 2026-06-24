const points = [
  "Flat, transparent pricing",
  "Unlimited messaging with provider",
  "Private community (14,000+ members)",
  "Same price at every dose",
  "100% online process",
  "Full refund if you're not approved",
];

export default function WhatsTheCatch() {
  return (
    <section className="w-full bg-brand-lavender">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <span
          className="block font-serif text-[96px] font-normal leading-[52.8px] text-[#6A45C4]"
          aria-hidden
        >
          &ldquo;
        </span>

        <span
          className="mt-2 block font-sans text-xs font-bold uppercase tracking-[1.92px] text-[#6A45C4] leading-[18.6px]"
        >
          No Surprises
        </span>

        <h2
          className="mt-3 text-center font-serif text-[46px] font-medium leading-[48.3px] tracking-[-0.46px] text-purple-deep"
        >
          What&apos;s the{" "}
          <span className="italic text-[#6A45C4]">catch?</span>
        </h2>

        <p
          className="mx-auto mt-4 max-w-2xl text-center font-sans text-[16.5px] font-normal leading-[25.58px] text-[#6E6090]"
        >
          We get this question every single day. Here&apos;s the truth — there
          isn&apos;t one. No long-term commitments, no hidden fees, no surprises
          at checkout.
        </p>

        <p
          className="mt-3 text-center font-sans text-[17px] font-bold leading-[26.35px] text-purple-deep"
        >
          Just honest support for your journey.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-left shadow-sm"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6A45C4] text-sm text-white"
                aria-hidden
              >
                ✓
              </span>
              <span
                className="font-sans text-[15px] font-semibold leading-[19.5px] text-purple-deep"
              >
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
