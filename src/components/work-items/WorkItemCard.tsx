import Link from "next/link";
import type { WorkItem } from "@/domains/executive/contracts/workItem";

interface Props {
  item: WorkItem;
}

export default function WorkItemCard({ item }: Props) {
  return (
    <Link href={`/intelligence/${item.id}`} className="block">
      <article className="space-y-3 rounded-xl border border-os-border bg-os-surface p-4">
        <div className="flex justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-white">{item.title}</p>
            <p className="mt-1 text-xs text-os-textMuted">{item.project}</p>
          </div>
          <span className="h-fit shrink-0 rounded border border-os-brand/20 bg-os-brand/10 px-2 py-1 font-mono text-[10px] uppercase text-os-brand">
            {item.priority}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded border border-os-border bg-os-bg px-2 py-1 text-[10px] text-slate-300">
            {item.type}
          </span>
          <span className="rounded border border-os-border bg-os-bg px-2 py-1 text-[10px] text-slate-300">
            {item.status}
          </span>
        </div>

        {item.description && (
          <p className="text-xs leading-relaxed text-slate-300">
            {item.description}
          </p>
        )}

        {item.labels.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.labels.map((label) => (
              <span
                key={label}
                className="font-mono text-[10px] text-os-textMuted"
              >
                #{label}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
