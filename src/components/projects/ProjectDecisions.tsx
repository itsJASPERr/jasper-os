interface Props {
    decisions: string[];
}

export default function ProjectDecisions({ decisions = [] }: Props) {
    return (
        <section className="rounded-xl border border-os-border bg-os-surface p-5">
            <h2 className="text-xs uppercase tracking-widest text-os-brand">
                Recent Decisions
            </h2>

            <div className="mt-4 space-y-3">
                {decisions.map((decision) => (
                    <div
                        key={decision}
                        className="bg-os-bg/40 border border-os-border rounded-lg p-3 text-sm text-white"
                    >
                        {decision}
                    </div>
                ))}
            </div>
        </section>
    );
}
