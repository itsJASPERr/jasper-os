import type { ExecutiveDecision } from "@/types/executive-state";

interface Props {
  decision: ExecutiveDecision;
}

export default function DecisionReasoning({ decision }: Props) {
  return (
    <section className="grid md:grid-cols-2 gap-5">
      <div className="bg-os-surface border border-os-border rounded-xl p-5">
        <h2 className="text-xs uppercase tracking-widest text-os-textMuted mb-4">
          Reasoning
        </h2>
        <p className="text-sm leading-relaxed text-slate-300">
          {decision.reasoning}
        </p>
      </div>

      <div className="bg-os-surface border border-os-border rounded-xl p-5">
        <h2 className="text-xs uppercase tracking-widest text-os-textMuted mb-4">
          Impact
        </h2>
        <p className="text-sm leading-relaxed text-slate-300">
          {decision.impact}
        </p>
      </div>
    </section>
  );
}
