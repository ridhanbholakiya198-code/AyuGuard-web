import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <p className="eyebrow text-signal">404</p>
      <h1 className="font-display mt-4 text-3xl font-semibold text-white">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-3 max-w-sm text-[14px] text-ink-400">
        The page you&apos;re looking for isn&apos;t part of AyuGuard&apos;s site.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-signal px-6 py-3 text-[14px] font-semibold text-white hover:bg-signal-glow"
      >
        Back to home
      </Link>
    </main>
  );
}
