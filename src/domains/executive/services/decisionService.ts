import { executiveState } from "../../../lib/executiveState";

import type { ExecutiveState } from "../../../types/executive-state";

const state = executiveState.data as ExecutiveState;

export function getAllDecisions() {
    return state.executive.decisions;
}

export function getDecisionById(id: string) {
    return state.executive.decisions.find(
        decision => decision.id === id
    );
}