import type { PortfolioProject } from "@/types/executive-state";

interface Props {
    project: PortfolioProject;
}

export default function ProjectHeader({ project }: Props) {
    return (
        <section className="rounded-xl border border-os-border bg-os-surface p-6">
            <p className="text-[10px] uppercase tracking-widest text-os-brand">
                Project
            </p>

            <h1 className="mt-2 text-3xl font-bold text-white">
                {project.name}
            </h1>

            <div className="mt-4 flex gap-3">
                <span className="px-3 py-1 rounded border border-os-border text-xs font-mono text-slate-300">
                    {project.status}
                </span>

                <span className="px-3 py-1 rounded border border-os-brand/20 bg-os-brand/10 text-xs font-mono text-os-brand">
                    {project.progress}%
                </span>
            </div>
        </section>
    );
}
