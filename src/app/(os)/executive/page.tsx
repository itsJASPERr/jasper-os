import { executiveState } from "@/lib/executiveState";
import type { ExecutiveState } from "@/types/executive-state";

import ExecutiveHeader from "@/components/executive/ExecutiveHeader";
import ExecutiveBrief from "@/components/executive/ExecutiveBrief";
import ExecutiveSignals from "@/components/executive/ExecutiveSignals";
import ExecutiveActions from "@/components/executive/ExecutiveActions";
import ExecutiveDecisions from "@/components/executive/ExecutiveDecisions";
import ExecutiveMemory from "@/components/executive/ExecutiveMemory";
import ExecutiveReviews from "@/components/executive/ExecutiveReviews";
import StrategicRadar from "@/components/executive/StrategicRadar";
import RiskRadar from "@/components/executive/RiskRadar";
import WaitingOnRegister from "@/components/executive/WaitingOnRegister";
import PortfolioCommand from "@/components/executive/PortfolioCommand";
import PortfolioProducts from "@/components/executive/PortfolioProducts";
import ProjectPortfolio from "@/components/executive/ProjectPortfolio";
import ExecutiveNotifications from "@/components/executive/ExecutiveNotifications";
import WorkItemBoard from "@/components/work-items/WorkItemBoard";
import ProtocolError from "@/components/system/ProtocolError";
import { getAllWorkItems } from "@/domains/executive/services/workItemService";

export default function ExecutivePage() {
  if (!executiveState.valid) {
    return <ProtocolError errors={executiveState.error} />;
  }

  const state: ExecutiveState = executiveState.data;
  const workItems = getAllWorkItems();

  const {
    user,
    executive,
    portfolio,
    operations,
    protocol,
    generated,
    knowledge,
    presentation,
  } = state;

  const briefDate = new Date(generated.timestamp).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <>
      <ExecutiveHeader
        user={user}
        protocol={protocol}
        generated={generated}
        briefDate={briefDate}
      />

      <main className="mx-auto w-full max-w-7xl flex-1 space-y-6 p-4 md:p-8">
        <ExecutiveBrief briefing={executive.briefing} />

        <ExecutiveSignals
          metrics={operations.metrics}
          dashboard={presentation.dashboard}
          portfolio={portfolio}
        />

        <ExecutiveActions
          actions={executive.executive_actions}
          tasks={operations.tasks}
        />

        <ExecutiveDecisions decisions={executive.decisions} />

        <WorkItemBoard items={workItems} />

        <PortfolioCommand projects={portfolio.projects} />

        <ProjectPortfolio projects={portfolio.projects} />

        <PortfolioProducts products={portfolio.products} />

        <WaitingOnRegister items={executive.waiting_on_register} />

        <StrategicRadar
          priorities={executive.strategic_priorities}
          opportunities={executive.opportunities}
          dependencies={executive.cross_project_dependencies}
        />

        <RiskRadar risks={executive.risks} />

        <ExecutiveMemory
          insights={knowledge.new_insights}
          openQuestions={knowledge.open_questions}
          ideas={knowledge.ideas}
        />

        <ExecutiveReviews reviews={executive.executive_reviews} />

        <ExecutiveNotifications notifications={presentation.notifications} />
      </main>
    </>
  );
}
