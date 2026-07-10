import { executiveState } from "../../../lib/executiveState";

import type { ExecutiveState } from "../../../types/executive-state";

const state = executiveState.data as ExecutiveState;

export function getAllProjects() {
    return state.portfolio.projects;
}

export function getProjectById(id: string) {
    return state.portfolio.projects.find(
        project => project.id === id
    );
}