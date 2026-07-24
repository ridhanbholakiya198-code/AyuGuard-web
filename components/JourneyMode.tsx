import Image from "next/image";
import Reveal from "./Reveal";

const STEPS = [
  { n: "01", t: "GPS cached every 15 min", d: "Minimal battery use while monitoring — a journey shouldn't drain the phone before it even ends." },
  { n: "02", t: "Basement or indoors", d: "If GPS can't reach the phone, the last known location is sent instead of nothing at all." },
  { n: "03", t: "No check-in, timer expires", d: "Auto-SOS triggers if the countdown reaches zero without an \u2018I've arrived safely.\u2019" },
  { n: "04", t: "Countdown in the notification bar", d: "The live timer keeps running from the status bar, even with the app closed." },
];

export default function JourneyMode() {
  return (
    <section id="journey" className="border-t border-white/8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <Reveal className="order-2 lg:order-1">
            <p className="section-label mb-5">Journey Mode</p>
            <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Passive protection for a trip you shouldn&apos;t have to think about.
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-300">
              A commute, a cab ride, a walk home. Set a duration, optionally log the
              vehicle, and AyuGuard watches the clock so you don&apos;t have to —
              escalating into an alert automatically if you don&apos;t check in.
            </p>

            <div className="mt-10 space-y-0 divide-y divide-white/8 border-y border-white/8">
              {STEPS.map((s) => (
                <div key={s.n} className="flex gap-5 py-5">
                  <span className="font-mono text-xs text-signal">{s.n}</span>
                  <div>
                    <p className="text-[14.5px] font-semibold text-white">{s.t}</p>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-ink-500">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-8">
              <div>
                <p className="font-mono text-2xl font-semibold text-white">30m / 1h</p>
                <p className="eyebrow mt-1 text-ink-500">Preset durations</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-semibold text-white">10s</p>
                <p className="eyebrow mt-1 text-ink-500">Default escalation window</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="order-1 flex justify-center gap-5 lg:order-2">
            <div className="phone-frame w-[46%] max-w-[220px] overflow-hidden bg-ink-950 translate-y-6">
              <Image
                src="/screenshots/journey-setup.png"
                alt="Journey Mode setup screen"
                width={1023}
                height={2267}
                className="w-full"
              />
            </div>
            <div className="phone-frame w-[46%] max-w-[220px] overflow-hidden bg-ink-950 -translate-y-6">
              <Image
                src="/screenshots/journey-active.png"
                alt="Journey Mode active countdown"
                width={1023}
                height={2267}
                className="w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
