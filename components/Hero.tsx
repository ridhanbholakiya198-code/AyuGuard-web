"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownToLine, Github } from "lucide-react";
import { APK_PATH, APP_VERSION, GITHUB_RELEASES } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="grid-bg mask-fade-b pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/[0.08] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-1.5 pr-4 backdrop-blur"
            >
              <span className="flex items-center gap-1.5 rounded-full bg-signal/15 px-2.5 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
                </span>
                <span className="eyebrow text-signal">Live</span>
              </span>
              <span className="text-[12.5px] font-medium text-ink-300">
                Personal Safety, Engineered Offline
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
              className="font-display text-balance text-[3rem] font-semibold leading-[0.98] tracking-[-0.03em] text-white sm:text-[4rem] lg:text-display-xl"
            >
              Built for the moment
              <br />
              your phone is
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-signal">least reachable.</span>
                <span className="absolute inset-x-0 bottom-[0.12em] -z-0 h-[0.22em] bg-signal/15 blur-sm" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="mt-8 max-w-lg text-[17px] leading-relaxed text-ink-300"
            >
              Most emergencies happen exactly when a phone is least reachable —
              locked in a pocket, low on signal, screen off. AyuGuard triggers,
              survives, and delivers an emergency alert anyway, entirely over SMS.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease: EASE }}
              className="mt-10 flex flex-col gap-3.5 sm:flex-row"
            >
              <a href={APK_PATH} download className="btn-primary">
                <ArrowDownToLine size={17} strokeWidth={2.25} />
                Download APK
                <span className="eyebrow text-white/75">{APP_VERSION}</span>
              </a>
              <a
                href={GITHUB_RELEASES}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={17} strokeWidth={2.25} />
                GitHub Releases
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.46 }}
              className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-2.5 border-t border-white/8 pt-7"
            >
              {["Offline Ready", "No Cloud", "Zero Backend", "SMS Dispatch"].map((t) => (
                <span key={t} className="eyebrow flex items-center gap-2 text-ink-500">
                  <span className="h-[3px] w-[3px] rounded-full bg-safe" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.22, ease: EASE }}
            className="relative mx-auto w-full max-w-[300px] lg:max-w-[350px]"
          >
            <div className="absolute -inset-12 -z-10 rounded-full bg-signal/[0.09] blur-[80px]" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="phone-frame relative overflow-hidden bg-surface-1"
            >
              <Image
                src="/screenshots/home-sos.png"
                alt="AyuGuard home screen with hold-to-trigger SOS button"
                width={1023}
                height={2267}
                priority
                className="w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="absolute -right-5 top-14 hidden rounded-2xl border border-white/10 bg-surface-1/90 px-4 py-3 shadow-card backdrop-blur-xl sm:block"
            >
              <p className="eyebrow text-ink-500">Hold to trigger</p>
              <p className="font-mono text-xl font-semibold text-white">4s</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="absolute -left-8 bottom-20 hidden rounded-2xl border border-white/10 bg-surface-1/90 px-4 py-3 shadow-card backdrop-blur-xl sm:block"
            >
              <p className="eyebrow text-ink-500">Trusted Contacts</p>
              <p className="font-mono text-xl font-semibold text-white">Up to 5</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
