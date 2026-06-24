import Image from "next/image";

const plans = [
  {
    name: "Compounded Tirzepatide",
    subtitle: "A DUAL-PATHWAY GLP-1",
    description:
      "Our most comprehensive GLP-1 plan to help you stick to your goals.",
    badge: "MOST POPULAR",
    image: "/Compounded-Tirzepatide.png",
    imageAlt: "Compounded Tirzepatide vial",
    features: [
      "GLP-1 (if approved)",
      "Unlimited messaging with your provider",
      "Pilates, yoga, barre, dance & boxing classes",
      "Private community (14,000 members!)",
      "Nutrition classes with healthy recipes",
      "No price increases. No hidden fees.",
      "Fast shipping",
    ],
    originalPrice: "$749",
    price: "$499",
    planLabel: "3-month plan",
    finePrint: "Averages $166/month — billed every 11 weeks — cancel anytime*",
    cta: "See If You Qualify",
    highlighted: true,
  },
  {
    name: "Compounded Semaglutide",
    subtitle: "A SINGLE-PATHWAY GLP-1",
    description:
      "A classic and straightforward GLP-1 plan for support and structure.",
    badge: null,
    image: "/Compounded-Semaglutide.png",
    imageAlt: "Compounded Semaglutide vial",
    features: [
      "GLP-1 (if approved)",
      "Unlimited messaging with your provider",
      "Pilates, yoga, barre, dance & boxing classes",
      "Private community (14,000 members!)",
      "Nutrition classes with healthy recipes",
      "No price increases. No hidden fees.",
      "Fast shipping",
    ],
    originalPrice: "$599",
    price: "$399",
    planLabel: "3-month plan",
    finePrint: "Averages $166/month — billed every 11 weeks — cancel anytime*",
    cta: "See If You Qualify",
    highlighted: false,
  },
];
export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-brand-purple/40">
            Our GLP-1 Treatments
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-brand-purple sm:text-4xl lg:text-5xl font-serif">
            Don&apos;t Spend Another Summer
            <br />
            <span
              className="font-serif text-[2.875rem] font-medium italic leading-[3.01875rem] tracking-[-0.02875rem] text-[#6A45C4]"
            >
              Watching From the Sidelines
            </span>
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-brand-purple bg-white text-left"
            >
              {/* Top: gradient header + image */}
              <div className="relative bg-[radial-gradient(88%_115%_at_50%_14%,#FFF_0%,#E6DDF9_78%)] px-6 pt-8 pb-6">
                {plan.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-[#F3D876] px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1E0B4B] shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div className="flex items-center justify-center">
                  <Image
                    src={plan.image}
                    alt={plan.imageAlt}
                    width={180}
                    height={220}
                    className="h-auto w-36 object-contain"
                  />
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                <h3 className="text-2xl font-bold text-brand-purple">
                  {plan.name}
                </h3>

                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-purple/70">
                  {plan.subtitle}
                </p>

                <p className="mt-3 text-sm leading-6 text-brand-purple/60">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mt-5 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-brand-purple/80"
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-purple-500/30 text-xs text-brand-purple"
                        aria-hidden
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price block */}
                <div className="mt-6 border-t border-black/10 pt-5">
                  <div className="flex flex-wrap items-end gap-2">
                    <span className="text-sm text-brand-purple/40 line-through">
                      {plan.originalPrice}
                    </span>
                    <span className="text-4xl font-bold text-brand-purple">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm font-medium text-brand-purple/70">
                      {plan.planLabel}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-brand-purple/50">
                    {plan.finePrint}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className={
                    plan.highlighted
                      ? "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F3D876] px-8 py-3.5 text-sm font-bold text-[#1E0B4B] transition-colors hover:bg-[#e8cc6a]"
                      : "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1a0058] px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#140042]"
                  }
                >
                  {plan.cta}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
