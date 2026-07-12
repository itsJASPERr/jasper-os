import type { WorkItem } from "../contracts/workItem";

import workItems from "../../../data/workItems.json";

import type {
    WorkItemRepository
} from "./workItemRepository";


const items = workItems as WorkItem[];


export const staticWorkItemRepository: WorkItemRepository = {

    getAll(): WorkItem[] {

        return items;

    },


    getById(
        id: string
    ): WorkItem | undefined {

        return items.find(
            item => item.id === id
        );

    },


    update(
        updatedItem: WorkItem
    ): void {

        const index = items.findIndex(
            item => item.id === updatedItem.id
        );


        if (index === -1) {

            throw new Error(
                `Work item ${updatedItem.id} not found`
            );

        }


        items[index] = updatedItem;

    }

};