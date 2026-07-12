import { notFound } from "next/navigation";

import { getProjectById, getAllProjects } from "@/domains/executive/services/projectService";
import { getRelationsForEntity } from "@/domains/executive/services/relationService";

import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ProjectActions from "@/components/projects/ProjectActions";
import ProjectDependencies from "@/components/projects/ProjectDependencies";
import ProjectDecisions from "@/components/projects/ProjectDecisions";
import EntityRelations from "@/components/executive/EntityRelations";

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
        notFound();
    }

    const relations = getRelationsForEntity(project.id);

    return (
        <main className="p-4 md:p-8 w-full mx-auto space-y-6">
            <ProjectHeader project={project} />

            <ProjectOverview project={project} />

            <div className="grid md:grid-cols-2 gap-6">
                <ProjectActions actions={project.next_actions} />

                <ProjectDependencies
                    blockers={project.blockers}
                    waiting={project.waiting_on}
                />
            </div>

            <ProjectDecisions decisions={project.recent_decisions} />

            <EntityRelations relations={relations} />
        </main>
    );
}
