import type { ExecutiveEntityType } from "./executiveEntity";

export interface EntitySummary {
    id: string;
    type: ExecutiveEntityType;

    title: string;

    href?: string;

    metadata?: Record<string, unknown>;
}