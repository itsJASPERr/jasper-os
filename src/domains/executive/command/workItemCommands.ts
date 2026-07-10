import type {
  WorkItem,
  WorkItemStatus,
  WorkItemPriority
} from "../contracts/workItem";

import type {
  ExecutiveEvent
} from "../contracts/executiveEvent";


export interface CommandResult {
  item: WorkItem;
  event: ExecutiveEvent;
}


export function changeWorkItemStatus(
  item: WorkItem,
  status: WorkItemStatus
): CommandResult {

  const updatedItem: WorkItem = {
    ...item,
    status,
    updated_at: new Date().toISOString()
  };


  const event: ExecutiveEvent = {
    id: crypto.randomUUID(),

    type: "WORK_ITEM_STATUS_CHANGED",

    timestamp: new Date().toISOString(),

    actor: "Jasper",

    entity: {
      type: "work_item",
      id: item.id
    },

    changes: [
      {
        field: "status",
        from: item.status,
        to: status
      }
    ],

    description:
      `Changed work item status from ${item.status} to ${status}.`
  };


  return {
    item: updatedItem,
    event
  };
}



export function changeWorkItemPriority(
  item: WorkItem,
  priority: WorkItemPriority
): CommandResult {


  const updatedItem: WorkItem = {
    ...item,
    priority,
    updated_at: new Date().toISOString()
  };


  const event: ExecutiveEvent = {

    id: crypto.randomUUID(),

    type: "WORK_ITEM_PRIORITY_CHANGED",

    timestamp: new Date().toISOString(),

    actor: "Jasper",

    entity:{
      type:"work_item",
      id:item.id
    },


    changes:[
      {
        field:"priority",
        from:item.priority,
        to:priority
      }
    ],


    description:
      `Changed work item priority from ${item.priority} to ${priority}.`
  };


  return {
    item: updatedItem,
    event
  };

}