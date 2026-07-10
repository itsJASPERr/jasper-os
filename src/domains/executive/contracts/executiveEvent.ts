export type ExecutiveEventType =
    | "WORK_ITEM_CREATED"
    | "WORK_ITEM_UPDATED"
    | "WORK_ITEM_STATUS_CHANGED"
    | "WORK_ITEM_PRIORITY_CHANGED"
    | "WORK_ITEM_LINKED"
    | "DECISION_CREATED"
    | "DECISION_APPROVED"
    | "EXTERNAL_DEPENDENCY_UPDATED";


export interface ExecutiveEvent {
    id: string;

    type: ExecutiveEventType;

    timestamp: string;

    actor:
    | "Jasper"
    | "AI"
    | "System"
    | "External";


    entity: {
        type: "work_item" | "decision" | "project";

        id: string;
    };


    changes?: {
        field: string;

        from?: unknown;

        to?: unknown;
    }[];


    description: string;


    metadata?: Record<string, unknown>;
}