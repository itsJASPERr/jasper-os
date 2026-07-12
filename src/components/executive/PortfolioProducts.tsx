import type { PortfolioProduct } from "@/types/executive-state";

interface Props {
  products: PortfolioProduct[];
}

const priorityClasses: Record<string, string> = {
  Highest: "bg-rose-500/10 border-rose-500/20 text-rose-400",
  High: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  Medium: "bg-sky-500/10 border-sky-500/20 text-sky-400",
  Low: "bg-slate-500/10 border-slate-500/20 text-slate-400",
};

export default function PortfolioProducts({ products }: Props) {
  return (
    <section className="space-y-5">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
          Products
        </p>
        <h2 className="mt-2 text-xl font-bold text-white">Product Portfolio</h2>
        <p className="mt-1 text-sm text-os-textMuted">
          Strategic products and platforms currently under development.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.name}
            className="rounded-xl border border-os-border bg-os-surface p-5 transition-all hover:border-os-brand/30"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-os-textMuted">
                  {product.stage}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-lg border px-3 py-1 font-mono text-xs ${
                  priorityClasses[product.priority] ??
                  "border-os-border bg-os-bg text-os-textMuted"
                }`}
              >
                {product.priority}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
