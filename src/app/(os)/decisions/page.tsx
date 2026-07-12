"use client";

import Link from "next/link";
import { useState } from "react";

import { executiveState } from "@/lib/executiveState";
import ProtocolError from "@/components/system/ProtocolError";
import {
  getAllDecisions,
  getDecisionsByStatus,
  getDecisionsByCategory,
  getAllCategoryDefinitions,
  getCategoryForDecision,
  getCategoryColor,
  groupDecisionsByDate,
} from "@/domains/executive/services/decisionService";

const statusClasses: Record<string, string> = {
  Approved: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  Rejected: "border-rose-500/20 bg-rose-500/10 text-rose-400",
  Pending: "border-amber-500/20 bg-amber-500/10 text-amber-400",
};

const statusFilters = ["All", "Approved", "Pending", "Rejected"] as const;

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function DecisionsPage() {
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  if (!executiveState.valid) {
    return <ProtocolError errors={executiveState.error} />;
  }

  const categories = getAllCategoryDefinitions();
  const categoryNames = ["All", ...Object.keys(categories)];

  let decisions = getAllDecisions();

  if (statusFilter !== "All") {
    decisions = getDecisionsByStatus(statusFilter);
  }

  if (categoryFilter !== "All") {
    decisions = getDecisionsByCategory(categoryFilter);
  }

  const sorted = [...decisions].sort((a, b) => b.id.localeCompare(a.id));
  const grouped = groupDecisionsByDate(sorted);

  const total = getAllDecisions().length;
  const approved = getDecisionsByStatus("Approved").length;
  const pending = getDecisionsByStatus("Pending").length;

  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 p-4 md:p-8">
      <header>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
          Executive Governance
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white">
          Decision Registry
        </h1>
        <p className="mt-2 text-sm text-os-textMuted">
          Historical executive decisions that shaped the current company state.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-os-border bg-os-surface p-4">
          <p className="text-[10px] uppercase tracking-widest text-os-textMuted">
            Total Decisions
          </p>
          <p className="mt-2 text-2xl font-bold text-white">{total}</p>
        </div>
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4">
          <p className="text-[10px] uppercase tracking-widest text-emerald-400">
            Approved
          </p>
          <p className="mt-2 text-2xl font-bold text-emerald-400">{approved}</p>
        </div>
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
          <p className="text-[10px] uppercase tracking-widest text-amber-400">
            Pending
          </p>
          <p className="mt-2 text-2xl font-bold text-amber-400">{pending}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {statusFilters.map((btn) => (
            <button
              key={btn}
              onClick={() => setStatusFilter(btn)}
              className={`rounded-lg border px-4 py-2 font-mono text-xs transition ${
                statusFilter === btn
                  ? "border-os-brand bg-os-brand text-white"
                  : "border-os-border bg-os-surface text-os-textMuted hover:border-os-brand/40 hover:text-white"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {categoryNames.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`rounded-lg border px-3 py-1.5 font-mono text-[10px] transition ${
                categoryFilter === cat
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-os-border bg-os-surface text-os-textMuted hover:border-os-brand/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="rounded-xl border border-os-border bg-os-surface p-8 text-center">
          <p className="italic text-os-textMuted">
            No decisions match these filters.
          </p>
        </div>
      ) : (
        <div className="relative space-y-8">
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-os-border md:left-[23px]" />

          {grouped.map(([date, decisions]) => (
            <div key={date} className="space-y-4">
              <div className="relative flex items-center gap-4">
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-os-brand/30 bg-os-bg font-mono text-[10px] font-bold text-os-brand md:h-12 md:w-12 md:text-xs">
                  {new Date(date).getDate()}
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">
                    {formatDate(date)}
                  </h2>
                  <p className="font-mono text-[10px] text-os-textMuted">
                    {decisions.length} decision{decisions.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="ml-[52px] space-y-3 md:ml-[68px]">
                {decisions.map((decision) => {
                  const category = getCategoryForDecision(decision.id);

                  return (
                    <Link
                      key={decision.id}
                      href={`/decisions/${decision.id}`}
                      className="group block rounded-xl border border-os-border bg-os-surface p-5 transition hover:border-os-brand/40"
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base font-semibold text-white transition group-hover:text-os-brand">
                            {decision.title}
                          </h3>
                          <p className="mt-1 line-clamp-1 text-sm text-slate-400">
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
                            className={`rounded-lg border px-3 py-1 font-mono text-xs ${
                              statusClasses[decision.decision] ??
                              "border-os-border bg-os-bg text-os-textMuted"
                            }`}
                          >
                            {decision.decision}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="inline-block rounded bg-os-bg/60 px-2 py-0.5 font-mono text-[10px] text-os-textMuted">
                          {decision.id}
                        </span>
                        <span className="text-os-textMuted">·</span>
                        <span className="font-mono text-[10px] text-os-textMuted">
                          {decision.impact}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
