import Image from "next/image";
import Reveal from "./Reveal";

export default function TrustedContacts() {
  return (
    <section id="contacts" className="border-t border-white/8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal className="mx-auto w-full max-w-[280px]">
            <div className="phone-frame overflow-hidden bg-ink-950">
              <Image
                src="/screenshots/trusted-contacts.png"
                alt="Trusted contacts screen"
                width={1023}
                height={2267}
                className="w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="section-label mb-5">Trusted Contacts</p>
            <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Emergency SMS goes only to people you&apos;ve chosen.
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-300">
              Up to five contacts. The list is stored solely on-device and persists
              across app updates — there is no server copy to fall back on, so local
              persistence has to be reliable by design.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-4 sm:max-w-sm">
              <div className="card p-5">
                <p className="font-mono text-2xl font-semibold text-white">5</p>
                <p className="eyebrow mt-1.5 text-ink-500">Max contacts</p>
              </div>
              <div className="card p-5">
                <p className="font-mono text-2xl font-semibold text-white">0</p>
                <p className="eyebrow mt-1.5 text-ink-500">Servers involved</p>
              </div>
            </div>

            <p className="mt-6 text-[13px] text-ink-500">
              Only &ldquo;Clear Storage&rdquo; removes saved contacts — not Clear Cache.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
