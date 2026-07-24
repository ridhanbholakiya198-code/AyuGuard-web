import Reveal from "./Reveal";
import { ShieldOff, ServerOff, DatabaseZap, WifiOff } from "lucide-react";

const PILLARS = [
  { icon: ServerOff, t: "No server", d: "No backend database, no authentication server, no cloud sync." },
  { icon: WifiOff, t: "No internet required", d: "The alert is dispatched over standard cellular SMS, not an internet API call." },
  { icon: DatabaseZap, t: "No telemetry", d: "Crash logs are serialized to on-device storage only \u2014 nothing is sent off the phone." },
  { icon: ShieldOff, t: "No login", d: "Trusted contacts, journey state, and settings are stored only on the device." },
];

export default function Privacy() {
  return (
    <section id="privacy" className="relative overflow-hidden border-t border-white/8 py-24 sm:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="section-label mb-5">Privacy First</p>
            <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
              100% privacy focused. We don&apos;t collect, track, or store your data.
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-300">
              A personal-safety app is a high-value target for data harvesting and
              location tracking. AyuGuard commits fully to native telephony and local
              storage, removing that dependency at the cost of features a purely
              offline safety app can reasonably do without.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.t} delay={0.08 * i}>
                <div className="card card-interactive h-full p-6">
                  <p.icon size={20} strokeWidth={1.75} className="text-signal" />
                  <p className="font-display mt-4 text-[16px] font-semibold text-white">
                    {p.t}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-400">
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
