import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { APK_PATH, GITHUB_PROFILE, GITHUB_RELEASES } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 pt-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Link href="#top" className="flex items-center gap-2.5">
              <div className="relative h-7 w-7 overflow-hidden rounded-[8px] ring-1 ring-white/10">
                <Image src="/logo.png" alt="AyuGuard logo" fill sizes="28px" className="object-cover" />
              </div>
              <span className="font-display text-[14px] font-semibold text-white">AyuGuard</span>
            </Link>
            <p className="mt-4 text-[13px] leading-relaxed text-ink-500">
              A fast, lightweight, offline-first personal safety shield for Android.
              100% privacy focused — no collection, tracking, or storage of personal
              data outside your device.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="eyebrow mb-3 text-ink-500">Product</p>
              <ul className="space-y-2 text-[13.5px] text-ink-300">
                <li><a href="#features" className="transition-colors hover:text-white">Features</a></li>
                <li><a href="#journey" className="transition-colors hover:text-white">Journey Mode</a></li>
                <li><a href="#screens" className="transition-colors hover:text-white">Screenshots</a></li>
                <li><a href="#faq" className="transition-colors hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3 text-ink-500">Project</p>
              <ul className="space-y-2 text-[13.5px] text-ink-300">
                <li>
                  <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                    GitHub Profile
                  </a>
                </li>
                <li>
                  <a href={GITHUB_RELEASES} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                    Releases
                  </a>
                </li>
                <li>
                  <a href={APK_PATH} download className="transition-colors hover:text-white">
                    Download APK
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3 text-ink-500">Built With</p>
              <ul className="space-y-2 text-[13.5px] text-ink-300">
                <li>React &amp; TypeScript</li>
                <li>Capacitor</li>
                <li>Android (Native)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-[12.5px] text-ink-500">
            AyuGuard V1.1.0 — made by{" "}
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-300 transition-colors hover:text-white"
            >
              Ridhan
            </a>
          </p>
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-ink-500 transition-colors hover:text-white"
          >
            <Github size={17} />
          </a>
        </div>
      </div>

      <div className="select-none border-t border-white/8 py-6">
        <p className="font-display text-center text-[16vw] font-semibold leading-none tracking-tight text-white/[0.035] sm:text-[9rem]">
          AyuGuard
        </p>
      </div>
    </footer>
  );
}
