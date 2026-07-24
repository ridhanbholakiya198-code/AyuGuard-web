import { ArrowDownToLine, Github, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { APK_PATH, APP_VERSION, GITHUB_PROFILE, GITHUB_RELEASES } from "@/lib/content";

export default function GithubDownloads() {
  return (
    <section id="download" className="relative overflow-hidden border-t border-white/8 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-70" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label mb-5">Get AyuGuard</p>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Install the signed release build.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-300">
            Direct APK download, or grab the same build from GitHub Releases.
            AyuGuard is open for development updates.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
            <a
              href={APK_PATH}
              download
              className="group flex flex-1 items-center justify-between rounded-2xl border border-signal/30 bg-signal/[0.08] px-6 py-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:bg-signal/[0.14] hover:shadow-card-hover"
            >
              <span className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-signal-glow to-signal text-white shadow-btn-primary">
                  <ArrowDownToLine size={18} strokeWidth={2.25} />
                </span>
                <span className="text-left">
                  <span className="block text-[14px] font-semibold text-white">
                    Download APK
                  </span>
                  <span className="eyebrow block text-ink-500">{APP_VERSION} · Direct</span>
                </span>
              </span>
            </a>

            <a
              href={GITHUB_RELEASES}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 items-center justify-between rounded-2xl border border-white/12 bg-white/[0.02] px-6 py-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/5"
            >
              <span className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
                  <Github size={18} strokeWidth={2} />
                </span>
                <span className="text-left">
                  <span className="block text-[14px] font-semibold text-white">
                    GitHub Releases
                  </span>
                  <span className="eyebrow block text-ink-500">Signed builds</span>
                </span>
              </span>
              <ExternalLink size={15} className="text-ink-500 transition-colors group-hover:text-white" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mx-auto mt-6 flex max-w-xl items-center justify-center">
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow flex items-center gap-2 text-ink-500 transition-colors hover:text-white"
            >
              <Github size={14} />
              github.com/ridhanbholakiya198-code
              <ExternalLink size={12} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
