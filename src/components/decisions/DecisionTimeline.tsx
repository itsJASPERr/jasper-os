import type { ExecutiveEvent } from "@/domains/executive/contracts/executiveEvent";

interface Props {
  events: ExecutiveEvent[];
}

export default function DecisionTimeline({ events = [] }: Props) {
  if (events.length === 0) {
    return (
      <div className="bg-os-surface border border-os-border rounded-xl p-5">
        <h2 className="text-xs uppercase tracking-widest text-os-textMuted mb-4">
          Timeline
        </h2>
        <p className="text-sm italic text-os-textMuted">
          No events recorded for this decision.
        </p>
      </div>
    );
  }

  const sorted = [...events].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className="bg-os-surface border border-os-border rounded-xl p-5">
      <h2 className="text-xs uppercase tracking-widest text-os-textMuted mb-4">
        Timeline
      </h2>

      <div className="relative space-y-4">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-os-border" />

        {sorted.map((event) => (
          <div key={event.id} className="relative pl-8">
            <div className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full border border-os-brand bg-os-bg" />

            <div className="rounded-lg border border-os-border bg-os-bg/40 p-3">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-mono text-xs font-bold text-os-brand">
                  {event.type}
                </span>
                <span className="font-mono text-[10px] text-os-textMuted">
                  {event.timestamp}
                </span>
              </div>
              {event.description && (
                <p className="text-sm text-slate-300">{event.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
