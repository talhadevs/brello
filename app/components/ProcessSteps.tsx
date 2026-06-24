const steps = [
  {
    title: "Select Your Plan",
    desc: "Click 'See If You Qualify' and purchase your plan. After checkout, you'll complete an online intake form.",
  },
  {
    title: "Online Visit",
    desc: "A licensed clinician reviews your info and builds your plan.",
  },
  {
    title: "Get It Shipped",
    desc: "Your medication ships free, straight to your door in 2-3 days.",
  },
  {
    title: "Ongoing Care",
    desc: "Message your care team anytime as you progress.",
  },
];

export default function ProcessSteps() {
  return (
    <section id="how-it-works" className="w-full bg-brand-lavender">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-purple-500">
            HOW IT WORKS
          </p>

          <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.02] tracking-[-1.36px] text-purple-deep sm:text-4xl lg:text-5xl">
            <span className="font-bold">Straightforward</span>{" "}
            <span className="italic text-[#6A45C4]">100% Online</span>
            <br />
            <span className="italic text-[#6A45C4]">Process</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-col items-start rounded-3xl bg-white p-8 text-left shadow-sm"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6A45C4] font-serif text-lg font-medium text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-purple-deep">
                {step.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-[#6B7280]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#pricing"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-yellow px-7 py-3 text-sm font-semibold text-brand-purple transition-colors hover:bg-brand-yellow-600"
        >
          Explore GLP-1 Plans →
        </a>
      </div>
    </section>
  );
}
