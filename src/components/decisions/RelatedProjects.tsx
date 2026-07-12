import Link from "next/link";

import type { PortfolioProject } from "@/types/executive-state";

interface Props {
  projects: PortfolioProject[];
}

const healthColors: Record<string, string> = {
  Green: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  Yellow: "border-amber-500/20 bg-amber-500/10 text-amber-400",
  Red: "border-rose-500/20 bg-rose-500/10 text-rose-400",
};

export default function RelatedProjects({ projects = [] }: Props) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="bg-os-surface border border-os-border rounded-xl p-5">
      <h2 className="text-xs uppercase tracking-widest text-os-textMuted mb-4">
        Related Projects
      </h2>

      <div className="space-y-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/domains/${project.id}`}
            className="flex items-center justify-between rounded-lg border border-os-border bg-os-bg/40 p-3 transition hover:border-os-brand/40"
          >
            <div>
              <p className="text-sm font-medium text-white">{project.name}</p>
              <p className="font-mono text-[10px] text-os-textMuted">
                {project.id} · {project.status}
              </p>
            </div>

            <span
              className={`rounded-lg border px-2 py-0.5 font-mono text-[10px] ${
                healthColors[project.health] ??
                "border-os-border bg-os-bg text-os-textMuted"
              }`}
            >
              {project.health}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
