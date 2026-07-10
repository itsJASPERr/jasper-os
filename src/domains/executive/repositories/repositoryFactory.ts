import type {
    WorkItemRepository
} from "./workItemRepository";

import {
    staticWorkItemRepository
} from "./staticWorkItemRepository";


export function getWorkItemRepository(): WorkItemRepository {

    return staticWorkItemRepository;

}