"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { APK_PATH } from "@/lib/content";

const NAV = [
  { href: "#features", label: "Features" },
  { href: "#journey", label: "Journey Mode" },
  { href: "#workflow", label: "Emergency Flow" },
  { href: "#privacy", label: "Privacy" },
  { href: "#screens", label: "Screens" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/8" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="#top" className="flex items-center gap-2.5 shrink-0">
          <div className="relative h-8 w-8 overflow-hidden rounded-[9px] ring-1 ring-white/10">
            <Image src="/logo.png" alt="AyuGuard logo" fill sizes="32px" className="object-cover" priority />
          </div>
          <span className="font-display text-[15px] font-semibold tracking-tight text-white">
            AyuGuard
          </span>
          <span className="eyebrow rounded-full border border-signal/40 px-2 py-0.5 text-signal">
            Beta
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[13px] font-medium text-ink-300 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={APK_PATH}
            download
            className="btn-primary !px-4 !py-2 !text-[13px]"
          >
            Download APK
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/8 bg-black px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-[14px] font-medium text-ink-300 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={APK_PATH}
              download
              className="btn-primary mt-3 !py-2.5 text-center"
            >
              Download APK
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
