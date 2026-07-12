import type {
  ExecutiveRisk,
} from "@/types/executive-state";

interface Props {
  risks: ExecutiveRisk[];
}

const severityClasses: Record<string, string> = {
  Critical: "border-rose-500/30 bg-rose-500/10 text-rose-400",
  High: "border-red-500/30 bg-red-500/10 text-red-400",
  Medium: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  Low: "border-sky-500/30 bg-sky-500/10 text-sky-400",
};

export default function RiskRadar({ risks = [] }: Props) {
  return (
    <section className="space-y-5">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
          Executive Risk Radar
        </p>
        <h2 className="mt-2 text-xl font-bold text-white">
          Risks & Mitigations
        </h2>
      </div>

      {risks.length === 0 ? (
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6">
          <p className="font-medium text-emerald-400">
            No active strategic risks.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {risks.map((risk) => (
            <article
              key={risk.title}
              className={`rounded-xl border p-5 ${
                severityClasses[risk.severity] ??
                "border-os-border bg-os-surface"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest">
                    Risk
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {risk.title}
                  </h3>
                </div>
                <span className="shrink-0 rounded-lg border border-current/20 px-3 py-1 font-mono text-xs">
                  {risk.severity}
                </span>
              </div>

              <div className="mt-5 border-t border-current/10 pt-4">
                <p className="text-[10px] uppercase tracking-widest text-os-textMuted">
                  Mitigation
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {risk.mitigation}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
