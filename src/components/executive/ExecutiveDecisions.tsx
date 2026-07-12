import Link from "next/link";
import type { ExecutiveDecision } from "@/types/executive-state";
import { getCategoryForDecision, getCategoryColor } from "@/domains/executive/services/decisionService";

interface Props {
  decisions: ExecutiveDecision[];
}

const statusClasses: Record<string, string> = {
  Approved: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  Rejected: "border-rose-500/20 bg-rose-500/10 text-rose-400",
  Pending: "border-amber-500/20 bg-amber-500/10 text-amber-400",
};

export default function ExecutiveDecisions({ decisions = [] }: Props) {
  const sorted = [...decisions].sort((a, b) => b.id.localeCompare(a.id));
  const recent = sorted.slice(0, 5);

  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
            Executive Decisions
          </p>
          <h2 className="mt-2 text-xl font-bold text-white">
            Recent Decisions
          </h2>
        </div>
        <Link
          href="/decisions"
          className="font-mono text-xs text-os-brand transition hover:text-white"
        >
          View all →
        </Link>
      </div>

      {recent.length === 0 ? (
        <div className="rounded-xl border border-os-border bg-os-surface p-5">
          <p className="italic text-os-textMuted">No decisions recorded.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {recent.map((decision) => {
            const category = getCategoryForDecision(decision.id);

            return (
              <Link
                key={decision.id}
                href={`/decisions/${decision.id}`}
                className="group block rounded-xl border border-os-border bg-os-surface p-4 transition hover:border-os-brand/40"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-white transition group-hover:text-os-brand">
                      {decision.title}
                    </h3>
                    <p className="mt-1 line-clamp-1 text-xs text-slate-400">
                      {decision.reasoning}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    {category && (
                      <span
                        className={`rounded-lg border px-2 py-0.5 font-mono text-[10px] ${getCategoryColor(
                          category
                        )}`}
                      >
                        {category}
                      </span>
                    )}
                    <span
                      className={`rounded-lg border px-2 py-0.5 font-mono text-[10px] ${
                        statusClasses[decision.decision] ??
                        "border-os-border bg-os-bg text-os-textMuted"
                      }`}
                    >
                      {decision.decision}
                    </span>
                    <span className="font-mono text-[10px] text-os-textMuted">
                      {decision.date}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
