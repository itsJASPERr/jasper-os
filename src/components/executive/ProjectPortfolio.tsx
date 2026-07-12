import Link from "next/link";
import type { PortfolioProject } from "@/types/executive-state";

interface Props {
  projects: PortfolioProject[];
}

const healthClasses: Record<string, string> = {
  Green: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  Yellow: "text-amber-400 border-amber-500/20 bg-amber-500/10",
  Red: "text-red-400 border-red-500/20 bg-red-500/10",
};

export default function ProjectPortfolio({ projects = [] }: Props) {
  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
            Portfolio Execution
          </p>
          <h2 className="mt-2 text-xl font-bold text-white">Active Projects</h2>
        </div>
        <Link
          href="/domains"
          className="font-mono text-xs text-os-brand hover:underline"
        >
          VIEW ALL →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/domains?project=${project.id}`}
            className="rounded-xl border border-os-border bg-os-surface p-5 transition hover:border-os-brand/40"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs text-os-textMuted">
                  {project.status}
                </p>
              </div>
              <span
                className={`rounded border px-2 py-1 font-mono text-[10px] ${
                  healthClasses[project.health] ?? ""
                }`}
              >
                {project.health}
              </span>
            </div>

            <div className="mt-5">
              <div className="flex justify-between font-mono text-xs text-os-textMuted">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-os-bg">
                <div
                  className="h-full rounded-full bg-os-brand"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[10px] uppercase tracking-widest text-os-textMuted">
                Next
              </p>
              <p className="mt-1 text-sm text-slate-300">
                {project.next_actions[0] ?? "No action defined"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
