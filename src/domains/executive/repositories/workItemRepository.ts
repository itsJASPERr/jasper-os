import type { WorkItem } from "../contracts/workItem";

export interface WorkItemRepository {

    getAll(): WorkItem[];

    getById(
        id: string
    ): WorkItem | undefined;

    update(
        item: WorkItem
    ): void;

}