import { executiveState } from "@/lib/executiveState";
import type { ExecutiveState } from "@/types/executive-state";
import ProtocolError from "@/components/system/ProtocolError";
import WorkItemBoard from "@/components/work-items/WorkItemBoard";
import ExecutiveDecisions from "@/components/executive/ExecutiveDecisions";
import ExecutiveReviews from "@/components/executive/ExecutiveReviews";
import { getAllWorkItems } from "@/domains/executive/services/workItemService";

export default function IntelligencePage() {
  if (!executiveState.valid) {
    return <ProtocolError errors={executiveState.error} />;
  }

  const state: ExecutiveState = executiveState.data;
  const workItems = getAllWorkItems();

  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 p-4 md:p-8">
      <header>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
          Executive Workspace
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white">Intelligence</h1>
        <p className="mt-2 text-sm text-os-textMuted">
          Work items, decisions, reviews, and executive governance.
        </p>
      </header>

      <WorkItemBoard items={workItems} />

      <ExecutiveDecisions decisions={state.executive.decisions} />

      <ExecutiveReviews reviews={state.executive.executive_reviews} />
    </main>
  );
}
