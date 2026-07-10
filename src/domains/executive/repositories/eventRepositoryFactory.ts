import type {
    ExecutiveEventRepository
} from "./executiveEventRepository";

import {
    staticExecutiveEventRepository
} from "./staticExecutiveEventRepository";


export function getExecutiveEventRepository():
    ExecutiveEventRepository {

    return staticExecutiveEventRepository;

}