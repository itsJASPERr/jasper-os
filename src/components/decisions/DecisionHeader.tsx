import type { ExecutiveDecision } from "@/types/executive-state";
import { getCategoryForDecision, getCategoryColor } from "@/domains/executive/services/decisionService";

const statusClasses: Record<string, string> = {
  Approved: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  Rejected: "border-rose-500/20 bg-rose-500/10 text-rose-400",
  Pending: "border-amber-500/20 bg-amber-500/10 text-amber-400",
};

interface Props {
  decision: ExecutiveDecision;
}

export default function DecisionHeader({ decision }: Props) {
  const category = getCategoryForDecision(decision.id);

  return (
    <section className="relative overflow-hidden rounded-xl border border-os-brand/20 bg-os-brand/5 p-6">
      <div className="absolute inset-y-0 left-0 w-1 bg-os-brand" />

      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
            Decision Statement
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-relaxed text-white">
            {decision.title}
          </h1>
          <div className="mt-2 flex items-center gap-3">
            <span className="font-mono text-xs text-os-textMuted">
              {decision.id}
            </span>
            <span className="text-os-textMuted">·</span>
            <span className="font-mono text-xs text-os-textMuted">
              {decision.date}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {category && (
            <span
              className={`rounded-lg border px-3 py-1 font-mono text-xs ${getCategoryColor(
                category
              )}`}
            >
              {category}
            </span>
          )}
          <span
            className={`rounded-lg border px-3 py-1 font-mono text-xs ${
              statusClasses[decision.decision] ??
              "border-os-border bg-os-bg text-os-textMuted"
            }`}
          >
            {decision.decision}
          </span>
        </div>
      </div>
    </section>
  );
}
