import type {
    ExecutiveEvent
} from "../contracts/executiveEvent";


export interface ExecutiveEventRepository {

    getAll(): ExecutiveEvent[];

    add(
        event: ExecutiveEvent
    ): void;

}