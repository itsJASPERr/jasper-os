import type {
  OperationsMetrics,
  DashboardPresentation,
  Portfolio,
} from "@/types/executive-state";

interface Props {
  metrics: OperationsMetrics;
  dashboard: DashboardPresentation;
  portfolio: Portfolio;
}

export default function ExecutiveSignals({ metrics, dashboard }: Props) {
  const signals = [
    { label: "Focus Score", value: metrics.focus_score, suffix: "%" },
    { label: "Blocked", value: metrics.blocked_items, suffix: "" },
    { label: "Active Projects", value: metrics.projects_active, suffix: "" },
    { label: "Weekly Progress", value: metrics.weekly_progress, suffix: "%" },
  ];

  return (
    <section className="space-y-5">
      <div className="rounded-xl border border-os-border bg-os-surface p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
              Executive Dashboard
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white">
              {dashboard.hero_project}
            </h3>
            <p className="mt-2 text-slate-300">{dashboard.highlight}</p>
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-widest text-os-textMuted">
              Overall Progress
            </p>
            <div className="mt-2 text-5xl font-bold text-os-brand">
              {dashboard.hero_metric}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {signals.map((signal) => (
          <div
            key={signal.label}
            className="rounded-xl border border-os-border bg-os-surface/70 p-5"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-os-textMuted">
              {signal.label}
            </div>
            <div className="mt-2 text-3xl font-bold text-white">
              {signal.value}
              {signal.suffix}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
