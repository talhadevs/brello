const items = [
  "USA-based 503A Partner Pharmacy",
  "100% Online Process",
  "Transparent Pricing",
  "Private Facebook Community",
  "Cancel Anytime*",
  "Fast Shipping",
  "BONUS! Online Fitness Classes Included",
  "USA-based 503A Partner Pharmacy",
];

export default function TrustBar() {
  return (
    <section className="w-full bg-yellow-300">
      <div className="flex flex-wrap items-center justify-start gap-x-8 gap-y-2 px-4 py-3 text-xs font-semibold text-brand-purple sm:px-6 lg:justify-center lg:px-8">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-8">
            {item}
            <span className="h-4 w-px bg-brand-purple/30" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
