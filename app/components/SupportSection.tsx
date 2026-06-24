import Image from "next/image";
const cards = [
  {
    title: "Provider Health Review",
    desc: "Complete an online health review with a licensed provider who guides your personalized care plan.",
    image: "/Provider-Health-Review.png",
  },
  {
    title: "Supportive Private Community",
    desc: "Connect with thousands of members in a private community built for women on the same journey.",
    image: "/Supportive-Private-Community.png",
  },
  {
    title: "Fitness & Nutrition Classes",
    desc: "Access Pilates, yoga, barre, dance, boxing, and nutrition classes — all included in your plan.",
    image: "/Fitness&Nutrition-Classes.png",
  },
  {
    title: "All-In-One App",
    desc: "Manage your care, track progress, and message your provider from one easy-to-use app.",
    image: "/All-In-OneApp.png",
  },
  {
    title: "Prescription Delivery Kit",
    desc: "Your medication ships free to your door with everything you need to get started.",
    image: "/PrescriptionDeliveryKit.png",
  },
  {
    title: "USA-Based Compounding Pharmacy",
    desc: "Medications prepared in USA-based, regulated compounding pharmacies for quality you can trust.",
    image: "/USA-BasedCompoundingPharmacy.png",
  },
];

export default function SupportSection() {
  return (
    <section id="support" className="w-full bg-brand-cream">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-purple-500">
            THE BRELLO EXPERIENCE
          </p>

          <h2
            className="mt-3 font-serif text-3xl font-medium leading-[1.02] tracking-[-1.36px] text-purple-deep sm:text-4xl lg:text-5xl"
          >
            Complete Support for Women
            <br />
            Who Are{" "}
            <span className="italic text-[#6A45C4]">Done Doing it Alone</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white sm:flex-row sm:items-stretch"
            >
              <div className="relative aspect-4/3 w-full shrink-0 sm:aspect-auto sm:w-[42%] sm:min-h-[170px]">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 42vw"
                  />
                ) : (
                  <div className="flex h-full min-h-[140px] items-center justify-center bg-brand-purple-500/10 text-xs text-brand-purple/40">
                    Image
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-center gap-2 p-6 sm:p-8">
                <h3
                  className="font-serif text-[21px] font-medium leading-[23.52px] tracking-[-0.21px] text-purple-deep"
                >
                  {card.title}
                </h3>
                <p
                  className="font-sans text-[14.5px] font-normal leading-[22.48px] text-[#6E6090]"
                >
                  {card.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F3D876] px-8 py-3.5 font-sans text-xs font-bold uppercase tracking-[0.12em] text-purple-deep transition-colors hover:bg-[#e8cc6a]"
          >
            Explore GLP-1 Plans
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
