import type { PortfolioProject } from "@/types/executive-state";

interface Props {
    project: PortfolioProject;
}

export default function ProjectOverview({ project }: Props) {
    return (
        <section className="rounded-xl border border-os-border bg-os-surface p-6">
            <h2 className="text-xs uppercase tracking-widest text-os-brand">
                Overview
            </h2>

            <div className="mt-4 grid md:grid-cols-3 gap-4">
                <div>
                    <p className="text-xs text-os-textMuted">Health</p>
                    <p className="text-white">{project.health}</p>
                </div>

                <div>
                    <p className="text-xs text-os-textMuted">Repositories</p>
                    <p className="text-white">{project.repositories.length}</p>
                </div>

                <div>
                    <p className="text-xs text-os-textMuted">Blockers</p>
                    <p className="text-white">{project.blockers.length}</p>
                </div>
            </div>
        </section>
    );
}
