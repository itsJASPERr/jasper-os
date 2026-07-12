interface Props {
  insights: string[];
  openQuestions: string[];
  ideas: string[];
}

export default function ExecutiveMemory({
  insights = [],
  openQuestions = [],
  ideas = [],
}: Props) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
          Executive Memory
        </p>
        <h2 className="mt-2 text-xl font-bold text-white">
          Organizational Knowledge
        </h2>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-xl border border-os-border bg-os-surface p-5">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-os-brand">
            Insights
          </h3>
          {insights.length === 0 ? (
            <p className="italic text-os-textMuted">No insights recorded.</p>
          ) : (
            <div className="space-y-3">
              {insights.map((insight, index) => (
                <article
                  key={index}
                  className="rounded-lg border border-os-border bg-os-bg/40 p-4"
                >
                  <span className="font-mono text-[10px] text-os-brand">
                    INS-{String(index + 1).padStart(3, "0")}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {insight}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-xl border border-os-border bg-os-surface p-5">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-os-brand">
            Open Questions
          </h3>
          {openQuestions.length === 0 ? (
            <p className="italic text-os-textMuted">No open questions.</p>
          ) : (
            <div className="space-y-3">
              {openQuestions.map((question) => (
                <article
                  key={question}
                  className="rounded-lg border border-os-border bg-os-bg/40 p-4"
                >
                  <p className="text-sm leading-relaxed text-slate-300">
                    {question}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-xl border border-os-border bg-os-surface p-5">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-os-brand">
            Ideas
          </h3>
          {ideas.length === 0 ? (
            <p className="italic text-os-textMuted">No ideas captured.</p>
          ) : (
            <div className="space-y-3">
              {ideas.map((idea) => (
                <article
                  key={idea}
                  className="rounded-lg border border-os-border bg-os-bg/40 p-4"
                >
                  <p className="text-sm leading-relaxed text-slate-300">
                    {idea}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
