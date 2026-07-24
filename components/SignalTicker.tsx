const ITEMS = [
  "OFFLINE READY",
  "NO CLOUD",
  "ZERO BACKEND",
  "SMS DISPATCH",
  "GPS FALLBACK",
  "FOREGROUND SERVICE",
  "AMOLED BLACK",
  "GHOST JOURNEY RECOVERY",
];

export default function SignalTicker() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-white/8 bg-black py-3.5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={i} className="eyebrow flex items-center gap-2.5 text-ink-500">
            <span className="h-1 w-1 rounded-full bg-signal" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
