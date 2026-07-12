interface Props {
    blockers: string[];
    waiting: string[];
}

export default function ProjectDependencies({ blockers = [], waiting = [] }: Props) {
    return (
        <section className="rounded-xl border border-os-border bg-os-surface p-5">
            <h2 className="text-xs uppercase tracking-widest text-os-brand">
                Dependencies
            </h2>

            <div className="mt-4">
                <p className="text-xs text-os-textMuted">Blockers</p>
                {blockers.length ? (
                    blockers.map((x) => (
                        <p key={x} className="text-sm text-white">• {x}</p>
                    ))
                ) : (
                    <p className="text-sm text-slate-400">None</p>
                )}
            </div>

            <div className="mt-4">
                <p className="text-xs text-os-textMuted">Waiting On</p>
                {waiting.map((x) => (
                    <p key={x} className="text-sm text-white">• {x}</p>
                ))}
            </div>
        </section>
    );
}
