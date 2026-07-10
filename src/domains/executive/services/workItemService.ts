import type {
  WorkItem,
  WorkItemStatus
} from "../contracts/workItem";

import {
  getWorkItemRepository
} from "../repositories/repositoryFactory";


const repository = getWorkItemRepository();


export function getWorkItemById(
  id: string
): WorkItem | undefined {

  return repository.getById(id);

}


export function getAllWorkItems(): WorkItem[] {

  return repository.getAll();

}


export function getActiveWorkItems(): WorkItem[] {

  return repository
    .getAll()
    .filter(
      item => item.status === "Active"
    );

}


export function getWaitingWorkItems(): WorkItem[] {

  return repository
    .getAll()
    .filter(
      item => item.status === "Waiting"
    );

}


export function getWorkItemsByStatus(
  status: WorkItemStatus
): WorkItem[] {

  return repository
    .getAll()
    .filter(
      item => item.status === status
    );

}


export function getWorkItemsByProject(
  project: string
): WorkItem[] {

  return repository
    .getAll()
    .filter(
      item => item.project === project
    );

}


export function getWorkItemsByPriority(
  priority: WorkItem["priority"]
): WorkItem[] {

  return repository
    .getAll()
    .filter(
      item => item.priority === priority
    );

}


export function updateWorkItem(
  item: WorkItem
): WorkItem {

  repository.update(item);

  return item;

}