export type ExecutiveEntityType =
  | "project"
  | "work_item"
  | "decision"
  | "priority"
  | "risk"
  | "opportunity"
  | "repository"
  | "domain"
  | "person"
  | "dependency";

export interface ExecutiveEntityReference {
  type: ExecutiveEntityType;
  id: string;
}