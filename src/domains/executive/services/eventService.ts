import type {
    ExecutiveEvent
} from "../contracts/executiveEvent";

import events from "../../../data/executiveEvents.json";


const eventStore = events as ExecutiveEvent[];


export function getAllEvents(): ExecutiveEvent[] {
    return eventStore;
}


export function getEventsForEntity(
    id: string
): ExecutiveEvent[] {

    return eventStore.filter(
        (event) =>
            event.entity.id === id
    ).sort(

        (a, b) =>

            new Date(b.timestamp).getTime()

            -

            new Date(a.timestamp).getTime()
    )
        ;

}


export function getLatestEvents(
    limit = 10
): ExecutiveEvent[] {

    return [...eventStore]
        .sort(
            (a, b) =>
                new Date(b.timestamp).getTime()
                -
                new Date(a.timestamp).getTime()
        )
        .slice(0, limit);

}