"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the medical approval process like?",
    a: [
      "Complete an online intake form",
      "A healthcare provider reviews your information and medical history",
      "If approved, medical oversight is billed quarterly",
      "Prescriptions are sent to licensed pharmacies. We ship within 24 hours after the pharmacy processes your prescription.",
    ],
  },
  {
    q: "What if I am not approved?",
    a: "If a provider determines that treatment isn't right for you, you won't be charged for medication. Any fees paid for the medical review may be subject to our refund policy.",
  },
  {
    q: "Is the medication included in the plan?",
    a: "Yes. Your plan includes compounded GLP-1 medication (if approved), provider care, and member support — all with transparent pricing and no hidden fees.",
  },
  {
    q: "Refund eligibility",
    a: "Refund eligibility depends on your plan and approval status. If you're not approved for treatment, you may qualify for a refund according to our policy. See checkout terms for full details.",
  },
  {
    q: "What is the timeline after medical approval?",
    a: "Once approved, your prescription is typically processed within 24 hours and ships free to your door in 2–3 business days.",
  },
  {
    q: "Replacement policy",
    a: "If your shipment arrives damaged or incomplete, contact our support team and we'll work with you on a replacement according to our policy.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="w-full bg-brand-cream">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2
          className="text-center font-serif text-[46px] font-medium leading-[48.3px] tracking-[-0.46px]"
        >
          <span className="italic text-[#6A45C4]">Frequently</span>{" "}
          <span className="text-purple-deep">Asked Questions</span>
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-brand-purple/60">
          Answers to the most common questions about plans, approvals, shipping,
          and refunds.
        </p>

        <Accordion
          type="multiple"
          defaultValue={["item-0"]}
          className="mt-10 border-y border-black/10"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`item-${i}`}
              className="border-black/10"
            >
              <AccordionTrigger
                className="py-5 font-sans text-[19px] font-semibold leading-normal text-purple-deep hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden"
              >
                <span className="flex-1">{faq.q}</span>
                <span
                  className="shrink-0 text-lg leading-none text-brand-purple-500 group-aria-expanded/accordion-trigger:hidden"
                  aria-hidden
                >
                  +
                </span>
                <span
                  className="hidden shrink-0 text-lg leading-none text-brand-purple-500 group-aria-expanded/accordion-trigger:inline"
                  aria-hidden
                >
                  −
                </span>
              </AccordionTrigger>

              <AccordionContent
                className="pb-5 font-sans text-base font-normal leading-[25.6px] text-[#6E6090]"
              >
                {Array.isArray(faq.a) ? (
                  <ol className="list-decimal space-y-2 pl-5">
                    {faq.a.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                ) : (
                  <p>{faq.a}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 space-y-3 text-center">
          <p
            className="font-sans text-[12.5px] font-normal leading-5 text-[#A39BBC]"
          >
            Compounded medications are not FDA-approved. GLP-1 medications may
            cause serious side effects. Results vary. Brello does not guarantee
            approval, specific outcomes, or refund eligibility. Medication
            availability and pricing may change. Refund policies apply as stated
            at checkout and may vary by plan.
          </p>
          <p className="italic">*See terms during checkout</p>
        </div>
      </div>
    </section>
  );
}
