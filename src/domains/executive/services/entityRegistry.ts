import { getProjectById } from "./projectService";
import { getDecisionById } from "./decisionService";
import { getWorkItemById } from "./workItemService";

import type { EntitySummary } from "../contracts/entitySummary";
import type { ExecutiveEntityReference } from "../contracts/executiveEntity";

import { route } from "@/lib/route";

export function resolveEntity(
    entity: ExecutiveEntityReference
): EntitySummary | null {

    switch (entity.type) {

        case "project": {

            const project = getProjectById(entity.id);

            if (!project) return null;

            return {
                id: project.id,
                type: "project",
                title: project.name,
                href: route(`projects/${project.id}`)
            };
        }

        case "decision": {

            const decision = getDecisionById(entity.id);

            if (!decision) return null;

            return {
                id: decision.id,
                type: "decision",
                title: decision.title,
                href: route(`decisions`)
            };
        }

        case "work_item": {

            const item = getWorkItemById(entity.id);

            if (!item) return null;

            return {
                id: item.id,
                type: "work_item",
                title: item.title,
                href: route(`work-items/${item.id}`)
            };
        }

        default:
            return null;
    }
}