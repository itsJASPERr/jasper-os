import type { ExecutiveEvent } from "@/domains/executive/contracts/executiveEvent";

interface Props {
    events: ExecutiveEvent[];
}

export default function WorkItemTimeline({ events = [] }: Props) {
    return (
        <section className="bg-os-surface border border-os-border rounded-xl p-6 space-y-5">
            <h3 className="text-xs uppercase tracking-widest font-bold text-os-textMuted">
                Execution Timeline
            </h3>

            {events.length ? (
                <div className="space-y-4">
                    {events.map((event) => (
                        <div key={event.id} className="relative border-l border-os-border pl-5">
                            <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-os-brand" />

                            <div className="flex justify-between gap-4">
                                <div>
                                    <p className="text-sm font-medium text-white">
                                        {event.description}
                                    </p>

                                    <p className="text-xs text-os-textMuted mt-1 font-mono">
                                        {event.type}
                                    </p>
                                </div>

                                <span className="text-[10px] text-os-textMuted font-mono">
                                    {new Date(event.timestamp).toLocaleDateString()}
                                </span>
                            </div>

                            {event.changes && (
                                <div className="mt-3 bg-os-bg/50 rounded-lg p-3 text-xs space-y-1">
                                    {event.changes.map((change, i) => (
                                        <div key={i} className="text-slate-300">
                                            <span className="text-os-brand">{change.field}</span>
                                            :{String(change.from)}→{String(change.to)}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-os-textMuted italic">
                    No events recorded.
                </p>
            )}
        </section>
    );
}
