import type {
  ExecutiveAction,
  OperationsTasks,
} from "@/types/executive-state";

interface Props {
  actions: ExecutiveAction[];
  tasks: OperationsTasks;
}

export default function ExecutiveActions({ actions, tasks }: Props) {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-xl border border-os-border bg-os-surface p-6">
        <div className="mb-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
            Executive Actions
          </p>
          <h2 className="mt-2 text-xl font-bold text-white">
            Today&apos;s Executive Priorities
          </h2>
        </div>

        <div className="space-y-4">
          {actions.map((action) => (
            <div
              key={action.title}
              className="rounded-lg border border-os-border bg-os-bg/50 p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-white">{action.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{action.reason}</p>
                </div>
                <span className="shrink-0 rounded border border-os-brand/30 bg-os-brand/10 px-2 py-1 font-mono text-[10px] uppercase text-os-brand">
                  {action.priority}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-xs text-os-textMuted">
                <span>Estimated Time</span>
                <span>{action.estimated_time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-os-border bg-os-surface p-6">
        <div className="mb-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
            Operations
          </p>
          <h2 className="mt-2 text-xl font-bold text-white">
            Today&apos;s Task Board
          </h2>
        </div>

        <div className="space-y-3">
          {tasks.today.map((task) => (
            <div
              key={task.title}
              className="flex items-center justify-between rounded-lg border border-os-border bg-os-bg/50 p-3"
            >
              <div>
                <div className="font-medium text-white">{task.title}</div>
                <div className="mt-1 text-xs text-os-textMuted">{task.tag}</div>
              </div>
              <span className="rounded bg-os-brand/10 px-2 py-1 font-mono text-xs text-os-brand">
                {task.time}
              </span>
            </div>
          ))}
        </div>

        {tasks.blocked.length > 0 && (
          <div className="mt-6 border-t border-os-border pt-5">
            <h3 className="mb-3 text-sm font-semibold text-amber-400">
              Blocked
            </h3>
            <ul className="space-y-2">
              {tasks.blocked.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-sm text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {tasks.completed_recently.length > 0 && (
          <div className="mt-6 border-t border-os-border pt-5">
            <h3 className="mb-3 text-sm font-semibold text-emerald-400">
              Completed Recently
            </h3>
            <ul className="space-y-2">
              {tasks.completed_recently.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-sm text-slate-300"
                >
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
