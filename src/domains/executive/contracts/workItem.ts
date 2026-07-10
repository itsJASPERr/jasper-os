export type WorkItemType =
    | "action"
    | "task"
    | "decision"
    | "dependency"
    | "risk"
    | "opportunity"
    | "idea"
    | "review";

export type WorkItemStatus =
    | "Inbox"
    | "Planned"
    | "Active"
    | "Waiting"
    | "Review"
    | "Completed"
    | "Archived";

export type WorkItemPriority =
    | "Critical"
    | "Highest"
    | "High"
    | "Medium"
    | "Low"
    | "Someday";

export type WorkItemProvider =
    | "github"
    | "calendar"
    | "companyos"
    | "external";

export interface WorkItemLink {
    provider: WorkItemProvider;
    reference: string;
    title?: string;
}

export interface WorkItem {
    id: string;

    title: string;

    type: WorkItemType;

    status: WorkItemStatus;

    priority: WorkItemPriority;

    description?: string;

    project?: string;

    labels: string[];

    owner?: string;

    created_at: string;

    updated_at: string;

    links: WorkItemLink[];

    metadata?: Record<string, unknown>;
}