import Reveal from "./Reveal";
import { stats, testingTable } from "@/lib/content";

export default function TechnicalHighlights() {
  return (
    <section id="technical" className="border-t border-white/8 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-label mb-5">Technical Highlights</p>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            A project shaped by real device debugging.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/8 shadow-card sm:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface-1 px-5 py-8 text-center transition-colors duration-300 hover:bg-surface-2 sm:px-4">
                <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  {s.value}
                  <span className="text-signal">{s.suffix}</span>
                </p>
                <p className="eyebrow mt-2 text-ink-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 shadow-card">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-surface-2">
                  <th className="eyebrow px-5 py-4 font-medium text-ink-500 sm:px-7">Module</th>
                  <th className="eyebrow hidden px-5 py-4 font-medium text-ink-500 sm:table-cell sm:px-7">
                    Testing Approach
                  </th>
                  <th className="eyebrow px-5 py-4 text-right font-medium text-ink-500 sm:px-7">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {testingTable.map((row, i) => (
                  <tr
                    key={row.module}
                    className={`transition-colors hover:bg-white/[0.03] ${i % 2 === 0 ? "bg-surface-1" : "bg-surface-1/50"}`}
                  >
                    <td className="px-5 py-4 text-[13.5px] font-medium text-white sm:px-7">
                      {row.module}
                    </td>
                    <td className="hidden px-5 py-4 text-[13px] leading-relaxed text-ink-400 sm:table-cell sm:px-7">
                      {row.approach}
                    </td>
                    <td className="px-5 py-4 text-right sm:px-7">
                      <span className="eyebrow inline-flex items-center gap-1.5 text-safe">
                        <span className="h-1.5 w-1.5 rounded-full bg-safe" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
