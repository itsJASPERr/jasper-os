interface Props {
    actions: string[];
}

export default function ProjectActions({ actions = [] }: Props) {
    return (
        <section className="rounded-xl border border-os-border bg-os-surface p-5">
            <h2 className="text-xs uppercase tracking-widest text-os-brand">
                Next Actions
            </h2>

            <ul className="mt-4 space-y-3">
                {actions.map((action) => (
                    <li
                        key={action}
                        className="text-sm text-slate-300 border-b border-os-border pb-2"
                    >
                        → {action}
                    </li>
                ))}
            </ul>
        </section>
    );
}
