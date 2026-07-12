import { executiveState } from "../../../lib/executiveState";
import portfolio from "../../../data/executiveState/portfolio.json";
import metadata from "../../../data/executiveState/decisionMetadata.json";

import type { ExecutiveState, ExecutiveDecision } from "../../../types/executive-state";

const state = executiveState.data as ExecutiveState;

export function getAllDecisions() {
    return state.executive.decisions;
}

export function getDecisionById(id: string) {
    return state.executive.decisions.find(
        decision => decision.id === id
    );
}

export function getDecisionsByStatus(status: string) {
    return state.executive.decisions.filter(
        decision => decision.decision === status
    );
}

export function getDecisionsByCategory(category: string) {
    return state.executive.decisions.filter(
        decision => getCategoryForDecision(decision.id) === category
    );
}

export function getRelatedProjects(decision: ExecutiveDecision) {
    const text = `${decision.reasoning} ${decision.impact}`.toLowerCase();

    return portfolio.projects.filter(
        project => text.includes(project.name.toLowerCase())
    );
}

export function groupDecisionsByDate(decisions: ExecutiveDecision[]) {
    const groups: Record<string, ExecutiveDecision[]> = {};

    for (const decision of decisions) {
        if (!groups[decision.date]) {
            groups[decision.date] = [];
        }
        groups[decision.date].push(decision);
    }

    return Object.entries(groups).sort(
        ([a], [b]) => b.localeCompare(a)
    );
}

export function getCategoryForDecision(id: string): string | null {
    return metadata.decision_categories[id as keyof typeof metadata.decision_categories] ?? null;
}

export function getAllCategoryDefinitions() {
    return metadata.category_definitions;
}

const categoryColors: Record<string, string> = {
    Governance: "border-blue-500/20 bg-blue-500/10 text-blue-400",
    Strategy: "border-purple-500/20 bg-purple-500/10 text-purple-400",
    Architecture: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
    Operations: "border-amber-500/20 bg-amber-500/10 text-amber-400",
    Portfolio: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    Risk: "border-rose-500/20 bg-rose-500/10 text-rose-400",
};

export function getCategoryColor(category: string) {
    return categoryColors[category] ?? "border-os-border bg-os-bg text-os-textMuted";
}
