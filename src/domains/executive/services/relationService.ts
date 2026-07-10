import relations from "../../../data/executiveRelations.json";

import { resolveEntity } from "./entityRegistry";

import type { ExecutiveRelation } from "../contracts/executiveRelation";
import type { ResolvedRelation } from "../contracts/resolvedRelation";

const relationStore = relations as ExecutiveRelation[];

function resolveRelation(
    relation: ExecutiveRelation
): ResolvedRelation | null {

    const from = resolveEntity(relation.from);
    const to = resolveEntity(relation.to);

    if (!from || !to) {
        return null;
    }

    return {
        id: relation.id,
        relation: relation.relation,
        from,
        to,
        description: relation.description
    };
}

export function getRelationsForEntity(
    id: string
): ResolvedRelation[] {

    return relationStore
        .filter(
            relation =>
                relation.from.id === id ||
                relation.to.id === id
        )
        .map(resolveRelation)
        .filter(
            (relation): relation is ResolvedRelation =>
                relation !== null
        );
}

export function getOutgoingRelations(
    id: string
): ResolvedRelation[] {

    return relationStore
        .filter(relation => relation.from.id === id)
        .map(resolveRelation)
        .filter(
            (relation): relation is ResolvedRelation =>
                relation !== null
        );
}

export function getIncomingRelations(
    id: string
): ResolvedRelation[] {

    return relationStore
        .filter(relation => relation.to.id === id)
        .map(resolveRelation)
        .filter(
            (relation): relation is ResolvedRelation =>
                relation !== null
        );
}

