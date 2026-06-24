const shopLinks = [
  "Tirzepatide",
  "Semaglutide",
  "NAD+",
  "Sermorelin",
  "Get Started",
];

const resourceLinks = [
  "FAQ",
  "Help Center",
  "States We Operate In",
  "Refund Policy",
  "Telehealth Consent",
];

const companyLinks = [
  "About Us",
  "Contact Us",
  "Telehealth Login",
  "Brello App",
  "Blog",
  "Careers",
];

export default function Footer() {
  return (
    <footer className="w-full bg-purple-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <p className="max-w-sm text-sm leading-6 text-white/70">
              Brello Health connects you with healthcare providers for wellness
              medications delivered to your door — with ongoing support.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15"
              >
                App Store
              </a>
              <a
                href="#"
                className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15"
              >
                Google Play
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Shop
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Resources
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© 2026 Brello. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
