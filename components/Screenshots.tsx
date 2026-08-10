"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { screens } from "@/lib/content";

export default function Screenshots() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section id="screens" className="border-t border-white/8 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <p className="section-label mb-5">Screenshots</p>
            <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
              The current AyuGuard V1.1.0 build.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="hidden gap-2 sm:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll screenshots left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-ink-300 transition-colors hover:border-white/25 hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll screenshots right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-ink-300 transition-colors hover:border-white/25 hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div
            ref={scrollerRef}
            className="scrollbar-none mt-12 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8"
          >
            {screens.map((s) => (
              <div
                key={s.src}
                className="group w-[62vw] shrink-0 snap-start sm:w-[38vw] lg:w-[21vw]"
              >
                <div className="phone-frame overflow-hidden bg-surface-1 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={1023}
                    height={2267}
                    className="w-full"
                  />
                </div>
                <p className="eyebrow mt-4 text-ink-500">{s.label}</p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-400">
                  {s.caption}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
