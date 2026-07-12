import { executiveState } from "@/lib/executiveState";
import type { ExecutiveState } from "@/types/executive-state";
import ProtocolError from "@/components/system/ProtocolError";
import StrategicRadar from "@/components/executive/StrategicRadar";
import RiskRadar from "@/components/executive/RiskRadar";
import WaitingOnRegister from "@/components/executive/WaitingOnRegister";

export default function StrategyPage() {
  if (!executiveState.valid) {
    return <ProtocolError errors={executiveState.error} />;
  }

  const state: ExecutiveState = executiveState.data;

  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 p-4 md:p-8">
      <header>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
          Strategic Direction
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white">Strategy</h1>
        <p className="mt-2 text-sm text-os-textMuted">
          Strategic priorities, risks, opportunities, and external dependencies.
        </p>
      </header>

      <StrategicRadar
        priorities={state.executive.strategic_priorities}
        opportunities={state.executive.opportunities}
        dependencies={state.executive.cross_project_dependencies}
      />

      <RiskRadar risks={state.executive.risks} />

      <WaitingOnRegister items={state.executive.waiting_on_register} />
    </main>
  );
}
