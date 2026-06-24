"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";

const videos = [
  { name: "Sarah, 34", result: "Down 28 lbs" },
  { name: "Maria, 41", result: "Down 35 lbs" },
  { name: "Jess, 29", result: "Down 19 lbs" },
  { name: "Dana, 47", result: "Down 42 lbs" },
  { name: "Kim, 38", result: "Down 24 lbs" },
  { name: "Kim, 38", result: "Down 24 lbs" },
  { name: "Kim, 38", result: "Down 24 lbs" },
  { name: "Kim, 38", result: "Down 24 lbs" },
  { name: "Kim, 38", result: "Down 24 lbs" },
  { name: "Kim, 38", result: "Down 24 lbs" },
  { name: "Kim, 38", result: "Down 24 lbs" },
  { name: "Kim, 38", result: "Down 24 lbs" },
  { name: "Kim, 38", result: "Down 24 lbs" },
  { name: "Kim, 38", result: "Down 24 lbs" },
  { name: "Kim, 38", result: "Down 24 lbs" },
];

const prevArrowClassName =
  "left-0 border border-brand-purple/20 bg-white text-brand-purple hover:bg-brand-lavender hover:text-brand-purple disabled:opacity-40";
const nextArrowClassName =
  "right-0 border border-brand-purple/20 bg-white text-brand-purple hover:bg-brand-lavender hover:text-brand-purple disabled:opacity-40";

export default function VideoTestimonials() {
  return (
    <section id="results" className="w-full bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-purple-500">
            FROM THE COMMUNITY
          </p>

          <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.02] tracking-[-1.36px] text-purple-deep sm:text-4xl lg:text-5xl">
            Why 80,000 Active Members <br /> Chose Brello for a{" "}
            <span className="italic text-[#6A45C4]">Fresh Start</span>
          </h2>

          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#6B7280]">
            Unfiltered stories from the Brello community — tap any clip to watch
            their journey
          </p>
        </div>

        <Carousel className="mt-10 flex items-center">
          <CarouselContent className="-ml-4">
            {videos.map((video, i) => (
              <CarouselItem
                key={`${video.name}-${i}`}
                className="basis-auto pl-4"
              >
                <div className="relative flex aspect-9/16 w-40 flex-col justify-end overflow-hidden rounded-2xl bg-brand-purple p-4 text-left text-white">
                  <span
                    className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-purple"
                    aria-hidden
                  >
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                  <span className="text-sm font-semibold">{video.name}</span>
                  <span className="text-xs text-brand-yellow">
                    {video.result}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={prevArrowClassName} />
          <CarouselNext className={nextArrowClassName} />
        </Carousel>
      </div>
    </section>
  );
}
