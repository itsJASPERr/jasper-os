import type { ExecutiveDecision } from "@/types/executive-state";

interface Props {
  decisions: ExecutiveDecision[];
}

const decisionClasses: Record<string, string> = {
  Approved: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  Rejected: "border-rose-500/20 bg-rose-500/10 text-rose-400",
  Pending: "border-amber-500/20 bg-amber-500/10 text-amber-400",
};

export default function ExecutiveDecisions({ decisions = [] }: Props) {
  const sorted = [...decisions].sort((a, b) => b.id.localeCompare(a.id));

  return (
    <section className="space-y-5">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
          Executive Decisions
        </p>
        <h2 className="mt-2 text-xl font-bold text-white">Decision Registry</h2>
      </div>

      {sorted.length === 0 ? (
        <div className="rounded-xl border border-os-border bg-os-surface p-5">
          <p className="italic text-os-textMuted">No decisions recorded.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sorted.map((decision) => (
            <article
              key={decision.id}
              className="rounded-xl border border-os-border bg-os-surface p-5"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {decision.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-os-textMuted">
                    {decision.id}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-lg border px-3 py-1 font-mono text-xs ${
                      decisionClasses[decision.decision] ??
                      "border-os-border bg-os-bg text-os-textMuted"
                    }`}
                  >
                    {decision.decision}
                  </span>
                  <span className="font-mono text-xs text-os-textMuted">
                    {decision.date}
                  </span>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-os-border bg-os-bg/40 p-4">
                  <p className="text-[10px] uppercase tracking-widest text-os-textMuted">
                    Reasoning
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {decision.reasoning}
                  </p>
                </div>
                <div className="rounded-lg border border-os-border bg-os-bg/40 p-4">
                  <p className="text-[10px] uppercase tracking-widest text-os-textMuted">
                    Impact
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {decision.impact}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
