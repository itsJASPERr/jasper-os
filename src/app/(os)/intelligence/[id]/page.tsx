import { notFound } from "next/navigation";

import { getAllWorkItems, getWorkItemById } from "@/domains/executive/services/workItemService";
import { getEventsForEntity } from "@/domains/executive/services/eventService";
import { getRelationsForEntity } from "@/domains/executive/services/relationService";

import WorkItemTimeline from "@/components/work-items/WorkItemTimeline";
import WorkItemActions from "@/components/work-items/WorkItemActions";
import EntityRelations from "@/components/executive/EntityRelations";

export async function generateStaticParams() {
    const items = getAllWorkItems();
    return items.map((item) => ({ id: item.id }));
}

export default async function WorkItemDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const item = getWorkItemById(id);

    if (!item) {
        notFound();
    }

    const events = getEventsForEntity(item.id);
    const relations = getRelationsForEntity(item.id);

    return (
        <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full space-y-6">
            {/* Header */}
            <section className="bg-os-surface border border-os-border rounded-xl p-6 space-y-5">
                <div className="flex justify-between">
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-os-brand">
                            Work Item
                        </p>
                        <h1 className="text-2xl font-bold text-white mt-2">
                            {item.title}
                        </h1>
                    </div>

                    <div className="text-right font-mono text-xs text-os-textMuted">
                        <div>{item.status}</div>
                        <div>{item.priority}</div>
                    </div>
                </div>

                {item.description && (
                    <p className="text-slate-300 leading-relaxed">
                        {item.description}
                    </p>
                )}
            </section>

            {/* Context + Labels */}
            <section className="grid md:grid-cols-2 gap-5">
                <div className="bg-os-surface border border-os-border rounded-xl p-5">
                    <h2 className="text-xs uppercase tracking-widest text-os-textMuted mb-4">
                        Context
                    </h2>

                    <div className="space-y-3 text-sm">
                        <p>
                            <strong>Project:</strong> {item.project}
                        </p>
                        <p>
                            <strong>Owner:</strong> {item.owner}
                        </p>
                    </div>
                </div>

                <div className="bg-os-surface border border-os-border rounded-xl p-5">
                    <h2 className="text-xs uppercase tracking-widest text-os-textMuted mb-4">
                        Labels
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {item.labels.map((label) => (
                            <span
                                key={label}
                                className="text-xs px-2 py-1 rounded bg-os-bg border border-os-border text-slate-300"
                            >
                                #{label}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Execution Links */}
            <section className="bg-os-surface border border-os-border rounded-xl p-5">
                <h2 className="text-xs uppercase tracking-widest text-os-textMuted mb-4">
                    Execution Links
                </h2>

                {item.links.length ? (
                    <ul className="space-y-2">
                        {item.links.map((link, i) => (
                            <li key={i} className="text-sm text-os-brand">
                                {link.provider}: {link.reference}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-os-textMuted italic">
                        No external connections.
                    </p>
                )}
            </section>

            {/* Timeline + Actions + Relations */}
            <section className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <WorkItemTimeline events={events} />
                </div>

                <div className="space-y-6">
                    <WorkItemActions item={item} />
                    <EntityRelations relations={relations} />
                </div>
            </section>
        </main>
    );
}
