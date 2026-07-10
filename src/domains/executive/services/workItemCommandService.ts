import {
    changeWorkItemStatus
} from "../command/workItemCommands";

import {
    getWorkItemById,
    updateWorkItem
} from "./workItemService";

import {
    getExecutiveEventRepository
} from "../repositories/eventRepositoryFactory";


export function executeChangeWorkItemStatus(
    id: string,
    status: "Inbox" | "Planned" | "Active" | "Waiting" | "Review" | "Completed" | "Archived"
) {

    const item = getWorkItemById(id);


    if (!item) {

        throw new Error(
            `Work item ${id} not found`
        );

    }


    const result =
        changeWorkItemStatus(
            item,
            status
        );


    updateWorkItem(
        result.item
    );


    getExecutiveEventRepository()
        .add(result.event);


    return result;

}