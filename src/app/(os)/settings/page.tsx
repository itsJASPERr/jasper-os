import { executiveState } from "@/lib/executiveState";
import type { ExecutiveState } from "@/types/executive-state";
import ProtocolError from "@/components/system/ProtocolError";
import ExecutiveMemory from "@/components/executive/ExecutiveMemory";
import PortfolioProducts from "@/components/executive/PortfolioProducts";

export default function SettingsPage() {
  if (!executiveState.valid) {
    return <ProtocolError errors={executiveState.error} />;
  }

  const state: ExecutiveState = executiveState.data;

  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 p-4 md:p-8">
      <header>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
          System
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white">Settings</h1>
        <p className="mt-2 text-sm text-os-textMuted">
          Products, knowledge base, and system configuration.
        </p>
      </header>

      <PortfolioProducts products={state.portfolio.products} />

      <ExecutiveMemory
        insights={state.knowledge.new_insights}
        openQuestions={state.knowledge.open_questions}
        ideas={state.knowledge.ideas}
      />
    </main>
  );
}
