import Image from "next/image";
import Reveal from "./Reveal";
import { Vibrate, MapPin, Send, Radio } from "lucide-react";

const FLOW = [
  {
    icon: Send,
    t: "Trigger",
    d: "Hold the SOS button for 4\u201360 seconds (default 9s), or let Journey Mode escalate automatically.",
  },
  {
    icon: MapPin,
    t: "Locate",
    d: "A retry loop and a high-accuracy fix run in parallel under a strict timeout, falling back to the last cached position if needed.",
  },
  {
    icon: Radio,
    t: "Dispatch",
    d: "The alert is handed to Android's SmsManager and sent over the standard cellular network \u2014 no internet required.",
  },
  {
    icon: Vibrate,
    t: "Confirm",
    d: "The phone vibrates the instant the message is physically handed to the network, not when the button was pressed.",
  },
];

export default function EmergencyWorkflow() {
  return (
    <section id="workflow" className="border-t border-white/8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-label mb-5">Emergency Workflow</p>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            From hold to handoff, over the cellular network.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-10">
          <Reveal delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-2">
              {FLOW.map((f) => (
                <div
                  key={f.t}
                  className="card card-interactive p-6"
                >
                  <f.icon size={20} strokeWidth={1.75} className="text-signal" />
                  <p className="font-display mt-4 text-[17px] font-semibold text-white">
                    {f.t}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-400">
                    {f.d}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-signal/25 bg-signal/[0.06] p-6">
              <p className="text-[13.5px] leading-relaxed text-ink-200">
                The outgoing message uses a bilingual format &mdash; English and
                Gujarati &mdash; with an offline Google Maps link, current battery
                level, and vehicle details when logged for a journey.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18} className="mx-auto w-full max-w-[260px]">
            <div className="phone-frame overflow-hidden bg-ink-950">
              <Image
                src="/screenshots/sms-sent.png"
                alt="Emergency SMS sent by AyuGuard with location link"
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
