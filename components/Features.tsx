"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { engineeringDecisions } from "@/lib/content";

export default function Features() {
  const [active, setActive] = useState(0);
  const item = engineeringDecisions[active];

  return (
    <section id="features" className="border-t border-white/8 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-label mb-5">Core Features</p>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Eight engineering decisions do the real work.
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-ink-300">
            Each one is a direct response to a way a simpler implementation would have
            failed in a real emergency — not a feature chosen for its own sake.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal delay={0.1}>
            <div className="flex flex-col divide-y divide-white/8 border-y border-white/8">
              {engineeringDecisions.map((d, i) => (
                <button
                  key={d.id}
                  onClick={() => setActive(i)}
                  className={`relative flex items-center gap-4 py-4 pl-4 text-left transition-all duration-300 ${
                    active === i
                      ? "text-white"
                      : "text-ink-500 hover:pl-5 hover:text-ink-300"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1/2 h-5 -translate-y-1/2 w-[2px] rounded-full bg-signal transition-opacity duration-300 ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span
                    className={`font-mono text-xs ${
                      active === i ? "text-signal" : "text-ink-700"
                    }`}
                  >
                    {d.id}
                  </span>
                  <span className="text-[15px] font-medium leading-snug">{d.title}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="card p-8 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="eyebrow text-signal">{item.id} / 08</span>
                  <h3 className="font-display mt-4 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] font-medium leading-relaxed text-ink-100">
                    {item.short}
                  </p>
                  <div className="mt-5 h-px w-full bg-white/8" />
                  <p className="mt-5 text-[14.5px] leading-relaxed text-ink-300">
                    {item.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
