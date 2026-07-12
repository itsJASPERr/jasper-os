import Link from "next/link";
import { executiveState } from "@/lib/executiveState";
import type { ExecutiveState } from "@/types/executive-state";
import ProtocolError from "@/components/system/ProtocolError";

const healthClasses: Record<string, string> = {
  Green: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  Yellow: "text-amber-400 border-amber-500/20 bg-amber-500/10",
  Red: "text-red-400 border-red-500/20 bg-red-500/10",
};

export default function DomainsPage() {
  if (!executiveState.valid) {
    return <ProtocolError errors={executiveState.error} />;
  }

  const state: ExecutiveState = executiveState.data;
  const { projects } = state.portfolio;

  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 p-4 md:p-8">
      <header>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
          Portfolio Execution
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white">Projects</h1>
        <p className="mt-2 text-os-textMuted">
          Active initiatives managed by the Executive Office.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/domains/${project.id}`}
            className="block"
          >
          <article
            className="rounded-xl border border-os-border bg-os-surface p-5 transition hover:border-os-brand/40"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">{project.name}</h3>
                <p className="mt-1 text-xs text-os-textMuted">
                  {project.status}
                </p>
              </div>
              <span
                className={`rounded border px-2 py-1 font-mono text-[10px] ${
                  healthClasses[project.health] ?? ""
                }`}
              >
                {project.health}
              </span>
            </div>

            <div className="mt-5">
              <div className="flex justify-between font-mono text-xs text-os-textMuted">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-os-bg">
                <div
                  className="h-full rounded-full bg-os-brand"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {project.blockers.length > 0 && (
              <div className="mt-4">
                <h4 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  Blockers
                </h4>
                <ul className="space-y-1">
                  {project.blockers.map((b) => (
                    <li key={b} className="text-xs text-slate-300">• {b}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.waiting_on.length > 0 && (
              <div className="mt-4">
                <h4 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  Waiting On
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.waiting_on.map((w) => (
                    <span
                      key={w}
                      className="rounded border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-300"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4">
              <h4 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-os-brand">
                Next Actions
              </h4>
              <ul className="space-y-1">
                {project.next_actions.map((a) => (
                  <li key={a} className="text-xs text-slate-300">• {a}</li>
                ))}
              </ul>
            </div>

            {project.recent_decisions.length > 0 && (
              <div className="mt-4 border-t border-os-border pt-3">
                <h4 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-os-textMuted">
                  Recent Decisions
                </h4>
                <ul className="space-y-1">
                  {project.recent_decisions.map((d) => (
                    <li key={d} className="text-xs text-slate-400">• {d}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
