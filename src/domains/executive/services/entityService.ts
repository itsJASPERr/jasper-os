import { resolveEntity } from "./entityRegistry";

import type { ExecutiveEntityReference } from "../contracts/executiveEntity";

export function getEntity(
    reference: ExecutiveEntityReference
) {
    return resolveEntity(reference);
}