import type {
  StrategicPriority,
  ExecutiveOpportunity,
  CrossProjectDependency,
} from "@/types/executive-state";

interface Props {
  priorities: StrategicPriority[];
  opportunities: ExecutiveOpportunity[];
  dependencies: CrossProjectDependency[];
}

const statusClasses: Record<string, string> = {
  Active: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  Architecture: "bg-sky-500/10 border-sky-500/20 text-sky-400",
  "Waiting External": "bg-amber-500/10 border-amber-500/20 text-amber-400",
  Completed: "bg-slate-500/10 border-slate-500/20 text-slate-300",
};

export default function StrategicRadar({
  priorities = [],
  opportunities = [],
  dependencies = [],
}: Props) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
          Strategic Radar
        </p>
        <h2 className="mt-2 text-xl font-bold text-white">
          Strategic Direction
        </h2>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-xl border border-os-border bg-os-surface p-5">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-os-brand">
            Strategic Priorities
          </h3>
          <div className="space-y-4">
            {priorities.map((item) => (
              <article
                key={item.id}
                className="rounded-lg border border-os-border bg-os-bg/40 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="mt-1 text-xs text-os-textMuted">{item.id}</p>
                  </div>
                  <span
                    className={`rounded border px-2 py-1 font-mono text-[10px] ${
                      statusClasses[item.status] ??
                      "border-os-border text-os-textMuted"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="mb-2 flex justify-between font-mono text-xs text-os-textMuted">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-os-bg">
                    <div
                      className="h-full bg-os-brand"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-[10px] uppercase tracking-widest text-os-textMuted">
                    Next Action
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {item.next_action}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-os-border bg-os-surface p-5">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-os-brand">
            Opportunities
          </h3>
          <div className="space-y-4">
            {opportunities.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-os-border bg-os-bg/40 p-4"
              >
                <div className="flex justify-between gap-3">
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <span className="font-mono text-xs text-emerald-400">
                    {item.potential_value}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  {item.description}
                </p>
                <div className="mt-4 border-t border-os-border pt-3">
                  <p className="text-[10px] uppercase tracking-widest text-os-textMuted">
                    Recommended Action
                  </p>
                  <p className="mt-1 text-sm text-white">
                    {item.recommended_action}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-os-border bg-os-surface p-5">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-os-brand">
            Cross-Project Dependencies
          </h3>
          <div className="space-y-4">
            {dependencies.map((item) => (
              <article
                key={`${item.from}-${item.to}`}
                className="rounded-lg border border-os-border bg-os-bg/40 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white">{item.from}</span>
                  <span className="text-os-brand">→</span>
                  <span className="font-medium text-white">{item.to}</span>
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  {item.relationship}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
