import type { PortfolioProject } from "@/types/executive-state";

interface Props {
  projects: PortfolioProject[];
}

const healthClasses: Record<string, string> = {
  Green: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  Yellow: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  Red: "bg-rose-500/10 border-rose-500/20 text-rose-400",
};

export default function PortfolioCommand({ projects }: Props) {
  return (
    <section className="space-y-5">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
          Portfolio
        </p>
        <h2 className="mt-2 text-xl font-bold text-white">
          Portfolio Command
        </h2>
        <p className="mt-1 text-sm text-os-textMuted">
          Executive overview of all active initiatives.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-os-border bg-os-surface p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-os-textMuted">
                  {project.status}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-lg border px-3 py-1 font-mono text-xs ${
                  healthClasses[project.health] ?? ""
                }`}
              >
                {project.health}
              </span>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between font-mono text-xs text-os-textMuted">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-os-bg">
                <div
                  className="h-full rounded-full bg-os-brand"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {project.blockers.length > 0 && (
              <div className="mt-5">
                <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                  Blockers
                </h4>
                <ul className="space-y-1">
                  {project.blockers.map((blocker) => (
                    <li key={blocker} className="text-sm text-slate-300">
                      • {blocker}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.waiting_on.length > 0 && (
              <div className="mt-5">
                <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                  Waiting On
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.waiting_on.map((owner) => (
                    <span
                      key={owner}
                      className="rounded border border-amber-500/20 bg-amber-500/10 px-2 py-1 text-xs text-amber-300"
                    >
                      {owner}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-5">
              <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-os-brand">
                Next Actions
              </h4>
              <ul className="space-y-1">
                {project.next_actions.map((action) => (
                  <li key={action} className="text-sm text-slate-300">
                    • {action}
                  </li>
                ))}
              </ul>
            </div>

            {project.recent_decisions.length > 0 && (
              <div className="mt-5 border-t border-os-border pt-4">
                <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-os-textMuted">
                  Recent Decisions
                </h4>
                <ul className="space-y-1">
                  {project.recent_decisions.map((decision) => (
                    <li key={decision} className="text-sm text-slate-400">
                      • {decision}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
