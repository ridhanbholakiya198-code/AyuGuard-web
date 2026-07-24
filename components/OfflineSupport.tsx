import Image from "next/image";
import Reveal from "./Reveal";

export default function OfflineSupport() {
  return (
    <section id="offline" className="border-t border-white/8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="section-label mb-5">Works From a Locked Pocket</p>
            <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
              The screen turns off. AyuGuard doesn&apos;t.
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-300">
              When the screen turns off, Android puts the CPU to sleep and can suspend
              network and cellular radios. A standard background web process pauses
              entirely once backgrounded &mdash; so when an SOS is armed, AyuGuard
              starts a genuine native foreground service and holds a system wake lock
              for the duration of the emergency sequence.
            </p>

            <div className="mt-8 space-y-4">
              <div className="card flex items-start gap-3.5 p-5">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-safe" />
                <p className="text-[14px] leading-relaxed text-ink-200">
                  A persistent notification keeps the Journey countdown visible and
                  offers a direct <span className="font-semibold text-white">Stop Journey</span> action.
                </p>
              </div>
              <div className="card flex items-start gap-3.5 p-5">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-safe" />
                <p className="text-[14px] leading-relaxed text-ink-200">
                  If Android kills the app anyway, Ghost Journey Recovery detects the
                  missed deadline on relaunch and resumes the SOS workflow.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="mx-auto w-full max-w-[280px]">
            <div className="phone-frame overflow-hidden bg-ink-950">
              <Image
                src="/screenshots/notification.png"
                alt="Journey Mode Active notification in the Android status bar"
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
