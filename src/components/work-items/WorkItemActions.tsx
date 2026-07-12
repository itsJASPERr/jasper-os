"use client";

import type { WorkItem } from "@/domains/executive/contracts/workItem";

interface Props {
    item: WorkItem;
}

const statuses = ["Inbox", "Planned", "Active", "Waiting", "Review", "Completed"];
const priorities = ["Highest", "High", "Medium", "Low"];

export default function WorkItemActions({ item }: Props) {
    return (
        <section className="bg-os-surface border border-os-border rounded-xl p-6 space-y-6">
            <h3 className="text-xs uppercase tracking-widest font-bold text-os-textMuted">
                Work Item Actions
            </h3>

            {/* Status */}
            <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-os-textMuted">
                    Status
                </label>

                <div className="flex flex-wrap gap-2">
                    {statuses.map((status) => (
                        <button
                            key={status}
                            data-command="change-status"
                            data-value={status}
                            data-item-id={item.id}
                            className="px-3 py-1.5 rounded-lg border border-os-border bg-os-bg text-xs text-slate-300 hover:border-os-brand hover:text-os-brand transition"
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Priority */}
            <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-os-textMuted">
                    Priority
                </label>

                <div className="flex flex-wrap gap-2">
                    {priorities.map((priority) => (
                        <button
                            key={priority}
                            data-command="change-priority"
                            data-value={priority}
                            data-item-id={item.id}
                            className="px-3 py-1.5 rounded-lg border border-os-border bg-os-bg text-xs text-slate-300 hover:border-os-brand hover:text-os-brand transition"
                        >
                            {priority}
                        </button>
                    ))}
                </div>
            </div>

            {/* Future integrations */}
            <div className="border-t border-os-border pt-4 space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-os-textMuted">
                    Integrations
                </p>

                <button
                    disabled
                    className="px-3 py-2 rounded-lg border border-os-border text-xs text-os-textMuted cursor-not-allowed"
                >
                    Link GitHub Issue
                </button>

                <button
                    disabled
                    className="px-3 py-2 rounded-lg border border-os-border text-xs text-os-textMuted cursor-not-allowed"
                >
                    Ask AI Agent
                </button>
            </div>
        </section>
    );
}
