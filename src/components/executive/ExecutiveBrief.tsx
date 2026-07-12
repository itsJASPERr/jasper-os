import type { ExecutiveBriefing } from "@/types/executive-state";

interface Props {
  briefing: ExecutiveBriefing;
}

const energyColors: Record<string, string> = {
  High: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  Medium: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  Low: "bg-rose-500/10 border-rose-500/20 text-rose-400",
};

export default function ExecutiveBrief({ briefing }: Props) {
  const confidence = Math.round(briefing.confidence * 100);
  const energyClass =
    energyColors[briefing.energy_level] ??
    "bg-os-brand/10 border-os-brand/20 text-os-brand";

  return (
    <section className="relative overflow-hidden rounded-xl border border-os-border bg-os-surface p-6 shadow-xl">
      <div className="absolute inset-y-0 left-0 w-1 bg-os-brand" />

      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
              Executive Briefing
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
              {briefing.headline}
            </h2>
          </div>

          <div className="rounded-lg border border-os-border bg-os-bg/50 px-4 py-3 text-right font-mono">
            <div className="text-[10px] uppercase tracking-widest text-os-textMuted">
              Confidence
            </div>
            <div className="mt-1 text-2xl font-bold text-os-brand">
              {confidence}%
            </div>
          </div>
        </div>

        <p className="max-w-4xl leading-relaxed text-slate-300">
          {briefing.summary}
        </p>

        <div className="flex flex-col gap-4 rounded-xl border border-os-border bg-os-bg/50 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-os-textMuted">
              Today&apos;s Focus
            </p>
            <p className="mt-1 text-base font-medium text-white">
              {briefing.today_focus}
            </p>
          </div>

          <div
            className={`self-start rounded-lg border px-4 py-2 text-xs font-mono font-semibold md:self-center ${energyClass}`}
          >
            Energy: {briefing.energy_level}
          </div>
        </div>
      </div>
    </section>
  );
}
