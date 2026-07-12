import type { WaitingOnItem } from "@/types/executive-state";

interface Props {
  items: WaitingOnItem[];
}

const priorityClasses: Record<string, string> = {
  High: "bg-rose-500/10 border-rose-500/20 text-rose-400",
  Medium: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  Low: "bg-slate-500/10 border-slate-500/20 text-slate-400",
};

export default function WaitingOnRegister({ items }: Props) {
  return (
    <section className="rounded-xl border border-os-border bg-os-surface p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
            Waiting On Register
          </p>
          <h2 className="mt-2 text-xl font-bold text-white">
            External Dependencies
          </h2>
        </div>
        <span className="rounded-lg border border-os-border bg-os-bg px-3 py-2 font-mono text-xs text-os-textMuted">
          {items.length} Active
        </span>
      </div>

      {items.length === 0 ? (
        <p className="italic text-os-textMuted">No external dependencies.</p>
      ) : (
        <div className="space-y-5">
          {items.map((item) => (
            <article
              key={item.dependency}
              className="rounded-xl border border-os-border bg-os-bg/40 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-white">
                    {item.dependency}
                  </h3>
                  <p className="mt-1 text-sm text-os-textMuted">
                    Waiting on{" "}
                    <span className="text-slate-300">{item.owner}</span>
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-lg border px-3 py-1 font-mono text-xs ${
                    priorityClasses[item.priority] ??
                    "border-os-border bg-os-bg text-os-textMuted"
                  }`}
                >
                  {item.priority}
                </span>
              </div>

              <div className="mt-5">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-os-textMuted">
                  Blocks
                </p>
                <ul className="space-y-2">
                  {item.blocks.map((block) => (
                    <li key={block} className="text-sm text-slate-300">
                      • {block}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 grid gap-4 font-mono text-xs text-os-textMuted md:grid-cols-2">
                <div>
                  <span className="block uppercase tracking-widest">
                    Last Follow-up
                  </span>
                  <span className="text-slate-300">
                    {item.last_follow_up ?? "Not recorded"}
                  </span>
                </div>
                <div>
                  <span className="block uppercase tracking-widest">
                    Next Follow-up
                  </span>
                  <span className="text-slate-300">
                    {item.next_follow_up ?? "Not scheduled"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
