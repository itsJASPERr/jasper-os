import WorkItemCard from "./WorkItemCard";
import type { WorkItem, WorkItemStatus } from "@/domains/executive/contracts/workItem";

interface Props {
  items: WorkItem[];
}

const columns: WorkItemStatus[] = [
  "Inbox",
  "Planned",
  "Active",
  "Waiting",
  "Review",
  "Completed",
];

function getColumnItems(status: WorkItemStatus, items: WorkItem[]) {
  return items.filter((item) => item.status === status);
}

export default function WorkItemBoard({ items = [] }: Props) {
  return (
    <section className="space-y-5 rounded-xl border border-os-border bg-os-surface p-6">
      <header className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-widest text-os-textMuted">
          Executive Command Board
        </h3>
        <span className="font-mono text-[10px] text-os-brand">
          {items.length} ITEMS
        </span>
      </header>

      <div className="grid gap-4 overflow-x-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {columns.map((column) => (
          <div
            key={column}
            className="min-w-[220px] space-y-3 rounded-xl border border-os-border bg-os-bg/40 p-3"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-[10px] uppercase tracking-widest text-os-brand">
                {column}
              </h4>
              <span className="font-mono text-[10px] text-os-textMuted">
                {getColumnItems(column, items).length}
              </span>
            </div>

            <div className="space-y-3">
              {getColumnItems(column, items).map((item) => (
                <WorkItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
