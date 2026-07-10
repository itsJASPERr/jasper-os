import type {
    ExecutiveEvent
} from "../contracts/executiveEvent";

import type {
    ExecutiveEventRepository
} from "./executiveEventRepository";


let events: ExecutiveEvent[] = [];


export const staticExecutiveEventRepository:
    ExecutiveEventRepository = {


    getAll(): ExecutiveEvent[] {

        return events;

    },


    add(
        event: ExecutiveEvent
    ): void {

        events.push(event);

    }

};