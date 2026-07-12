import { notFound } from "next/navigation";

import { getAllDecisions, getDecisionById, getRelatedProjects } from "@/domains/executive/services/decisionService";
import { getEventsForEntity } from "@/domains/executive/services/eventService";
import { getRelationsForEntity } from "@/domains/executive/services/relationService";

import DecisionHeader from "@/components/decisions/DecisionHeader";
import DecisionReasoning from "@/components/decisions/DecisionReasoning";
import DecisionTimeline from "@/components/decisions/DecisionTimeline";
import RelatedProjects from "@/components/decisions/RelatedProjects";
import EntityRelations from "@/components/executive/EntityRelations";

export async function generateStaticParams() {
    const decisions = getAllDecisions();
    return decisions.map((decision) => ({ id: decision.id }));
}

export default async function DecisionDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const decision = getDecisionById(id);

    if (!decision) {
        notFound();
    }

    const events = getEventsForEntity(decision.id);
    const relations = getRelationsForEntity(decision.id);
    const relatedProjects = getRelatedProjects(decision);

    return (
        <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full space-y-6">
            <DecisionHeader decision={decision} />

            <DecisionReasoning decision={decision} />

            <RelatedProjects projects={relatedProjects} />

            <section className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <DecisionTimeline events={events} />
                </div>

                <div className="space-y-6">
                    <EntityRelations relations={relations} />
                </div>
            </section>
        </main>
    );
}
