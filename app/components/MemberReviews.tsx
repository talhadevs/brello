"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    title: "Excellent",
    text: "Their prices are the best I've found. They have a great support system. And now have Brello Rise, with coaches and exercise and nutrition. It's included in price!",
    author: "Jen N.",
  },
  {
    title: "Wonderful Experience",
    text: "My orders arrive quickly and I've never had any issues. I'm losing weight the healthy way — about 1-1.5 lbs a week. I'm in my 9th month and down 42 lbs. Extremely pleased with this company.",
    author: "Antoinette",
  },
  {
    title: "Very Happy Customer",
    text: "Been with Brello since June... I have lost 62 pounds — from 190 lbs to 128 lbs... months! Price is the best there is, and fast, professional customer service!",
    author: "Norma A.",
  },
  {
    title: "Life Changing",
    text: "Brello made the whole process so easy. The support team is responsive and the results speak for themselves. I finally feel like myself again.",
    author: "Sarah M.",
  },
  {
    title: "Life Changing",
    text: "Brello made the whole process so easy. The support team is responsive and the results speak for themselves. I finally feel like myself again.",
    author: "Sarah M.",
  },
  {
    title: "Life Changing",
    text: "Brello made the whole process so easy. The support team is responsive and the results speak for themselves. I finally feel like myself again.",
    author: "Sarah M.",
  },
  {
    title: "Life Changing",
    text: "Brello made the whole process so easy. The support team is responsive and the results speak for themselves. I finally feel like myself again.",
    author: "Sarah M.",
  },
  {
    title: "Life Changing",
    text: "Brello made the whole process so easy. The support team is responsive and the results speak for themselves. I finally feel like myself again.",
    author: "Sarah M.",
  },
  {
    title: "Life Changing",
    text: "Brello made the whole process so easy. The support team is responsive and the results speak for themselves. I finally feel like myself again.",
    author: "Sarah M.",
  },
  {
    title: "Life Changing",
    text: "Brello made the whole process so easy. The support team is responsive and the results speak for themselves. I finally feel like myself again.",
    author: "Sarah M.",
  },
  {
    title: "Life Changing",
    text: "Brello made the whole process so easy. The support team is responsive and the results speak for themselves. I finally feel like myself again.",
    author: "Sarah M.",
  },
  {
    title: "Life Changing",
    text: "Brello made the whole process so easy. The support team is responsive and the results speak for themselves. I finally feel like myself again.",
    author: "Sarah M.",
  },
  {
    title: "Life Changing",
    text: "Brello made the whole process so easy. The support team is responsive and the results speak for themselves. I finally feel like myself again.",
    author: "Sarah M.",
  },
  {
    title: "Life Changing",
    text: "Brello made the whole process so easy. The support team is responsive and the results speak for themselves. I finally feel like myself again.",
    author: "Sarah M.",
  },
];

const arrowClassName =
  "border-0 bg-white text-purple-deep hover:bg-white/90 disabled:opacity-40";

export default function MemberReviews() {
  return (
    <section className="w-full bg-purple-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center font-serif text-[40px] font-medium leading-[43.2px] tracking-[-0.4px] text-white">
          Why 80,000 Active Members Chose Brello for a
          <br />
          <span className="italic text-[#EFD269]">Fresh Start</span>
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="font-bold text-[#00b67a]">Great</span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="flex h-4 w-4 items-center justify-center rounded-xs bg-[#00b67a] text-[10px] text-white"
              >
                ★
              </span>
            ))}
            <span className="flex h-4 w-4 items-center justify-center rounded-xs bg-gray-300 text-[10px] text-white">
              ★
            </span>
          </div>
          <span className="flex items-center gap-1 font-semibold text-white">
            <span className="text-[#00b67a]">★</span> Trustpilot
          </span>
          <span className="text-white/60">3,953 reviews</span>
        </div>

        <div className="relative mt-10 px-10 sm:px-12">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent className="-ml-4">
              {reviews.map((review, i) => (
                <CarouselItem
                  key={`${review.author}-${i}`}
                  className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="flex text-sm text-yellow-300" aria-hidden>
                      ★★★★★
                    </div>

                    <h3 className="mt-3 text-base font-bold">{review.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-white/80">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                      <span className="text-white/70">— {review.author}</span>
                      <span className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80">
                        <span className="text-yellow-300" aria-hidden>
                          ✓
                        </span>
                        Verified Member
                      </span>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={`left-0 ${arrowClassName}`} />
            <CarouselNext className={`right-0 ${arrowClassName}`} />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
