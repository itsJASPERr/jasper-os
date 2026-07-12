import type { ExecutiveReviews as ExecutiveReviewsType } from "@/types/executive-state";

interface Props {
  reviews: ExecutiveReviewsType;
}

const reviewItems = [
  { label: "Daily Review", key: "daily" as const, description: "Current operational state" },
  { label: "Weekly Review", key: "weekly" as const, description: "Strategic alignment and execution" },
  { label: "Monthly Review", key: "monthly" as const, description: "Portfolio performance" },
  { label: "Quarterly Review", key: "quarterly" as const, description: "Long-term direction" },
];

export default function ExecutiveReviews({ reviews }: Props) {
  return (
    <section className="space-y-5">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
          Executive Reviews
        </p>
        <h2 className="mt-2 text-xl font-bold text-white">Review Cadence</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {reviewItems.map((review) => {
          const data = reviews[review.key];
          return (
            <article
              key={review.key}
              className="rounded-xl border border-os-border bg-os-surface p-5"
            >
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {review.label}
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-os-textMuted">
                  {review.description}
                </p>
              </div>

              {data && "status" in data && typeof data.status === "string" && data.status ? (
                <div className="mt-5 rounded-lg border border-os-border bg-os-bg/40 p-4">
                  <p className="text-sm leading-relaxed text-slate-300">
                    {data.status}
                  </p>
                </div>
              ) : (
                <div className="mt-5 rounded-lg border border-dashed border-os-border bg-os-bg/20 p-4">
                  <p className="text-sm italic text-os-textMuted">
                    No review recorded.
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
