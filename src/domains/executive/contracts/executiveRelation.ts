import type { ExecutiveEntityReference } from "./executiveEntity";

export type ExecutiveRelationType =
  | "belongs_to"
  | "implements"
  | "supports"
  | "depends_on"
  | "blocks"
  | "blocked_by"
  | "created_by"
  | "tracked_by"
  | "relates_to";

export interface ExecutiveRelation {

  id: string;

  from: ExecutiveEntityReference;

  relation: ExecutiveRelationType;

  to: ExecutiveEntityReference;

  description?: string;
}
