import Link from "next/link";

import type { ResolvedRelation } from "@/domains/executive/contracts/resolvedRelation";

interface Props {
    relations: ResolvedRelation[];
    title?: string;
}

export default function EntityRelations({ relations = [], title = "Related Entities" }: Props) {
    return (
        <section className="bg-os-surface border border-os-border rounded-xl p-6 space-y-5">
            <div className="flex justify-between items-center">
                <h3 className="text-xs uppercase tracking-widest font-bold text-os-textMuted">
                    {title}
                </h3>

                <span className="text-[10px] font-mono text-os-brand">
                    {relations.length} RELATIONS
                </span>
            </div>

            {relations.length ? (
                <div className="space-y-3">
                    {relations.map((relation) => (
                        <div
                            key={relation.id}
                            className="bg-os-bg/40 border border-os-border rounded-xl p-4 space-y-4"
                        >
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        {relation.relation}
                                    </p>

                                    {relation.description && (
                                        <p className="text-xs text-os-textMuted mt-1">
                                            {relation.description}
                                        </p>
                                    )}
                                </div>

                                <span className="text-[10px] uppercase font-mono px-2 py-1 rounded border border-os-brand/20 bg-os-brand/10 text-os-brand">
                                    {relation.to.type}
                                </span>
                            </div>

                            <div className="flex items-center gap-3 text-sm">
                                {relation.from.href ? (
                                    <Link
                                        href={relation.from.href}
                                        className="text-slate-300 hover:text-os-brand transition-colors"
                                    >
                                        {relation.from.title}
                                    </Link>
                                ) : (
                                    <span className="text-slate-300">
                                        {relation.from.title}
                                    </span>
                                )}

                                <span className="text-os-brand">→</span>

                                {relation.to.href ? (
                                    <Link
                                        href={relation.to.href}
                                        className="text-white font-medium hover:text-os-brand transition-colors"
                                    >
                                        {relation.to.title}
                                    </Link>
                                ) : (
                                    <span className="text-white font-medium">
                                        {relation.to.title}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-os-textMuted italic">
                    No relationships defined.
                </p>
            )}
        </section>
    );
}
