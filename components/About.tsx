import Reveal from "./Reveal";
import { architectureLayers, techStack } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="border-t border-white/8 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <p className="section-label mb-5">About AyuGuard</p>
              <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Two ways to raise an alarm. One discipline underneath both.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 space-y-5 text-[15.5px] leading-relaxed text-ink-300">
                <p>
                  <span className="font-semibold text-white">Manual SOS</span> is a
                  direct, hold-to-trigger action for an active threat. It arms
                  immediately and counts down loudly.
                </p>
                <p>
                  <span className="font-semibold text-white">Journey Mode</span> is
                  passive protection for a trip — a commute, a cab ride, a walk home —
                  that automatically escalates into an alert if the user doesn&apos;t
                  check in before the timer runs out.
                </p>
                <p>
                  What separates AyuGuard from a typical safety app isn&apos;t the
                  feature list — it&apos;s what happens underneath it. The app assumes
                  the phone may be locked, the OS may kill it mid-journey, GPS may take
                  too long to lock, and the network may not be there at all.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="card p-7 sm:p-8">
              <p className="eyebrow mb-6 text-ink-500">System Architecture</p>
              <div className="space-y-0">
                {architectureLayers.map((layer, i) => (
                  <div key={layer}>
                    <div className="flex items-center gap-4 py-3.5">
                      <span className="font-mono text-xs text-ink-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[13px] leading-snug text-ink-100">
                        {layer}
                      </span>
                    </div>
                    {i < architectureLayers.length - 1 && (
                      <div className="ml-[26px] h-4 w-px bg-white/10" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/8 pt-7">
                <p className="eyebrow mb-4 text-ink-500">Built With</p>
                <div className="space-y-4">
                  {techStack.map((t) => (
                    <div key={t.name}>
                      <p className="text-[13.5px] font-semibold text-white">{t.name}</p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-ink-500">
                        {t.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
