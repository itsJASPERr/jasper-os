import type { ExecutiveRelationType } from "./executiveRelation";
import type { EntitySummary } from "./entitySummary";

export interface ResolvedRelation {
    id: string;

    relation: ExecutiveRelationType;

    from: EntitySummary;

    to: EntitySummary;

    description?: string;
}