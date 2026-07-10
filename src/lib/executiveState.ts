import rawState from "../data/executiveState";

import {
    ExecutiveStateSchema,
    type ExecutiveState,
} from "../schemas/executiveState.schema";

console.log(
  Object.keys(rawState)
);

function loadExecutiveState() {

    const result =
        ExecutiveStateSchema.safeParse(rawState);


    if (!result.success) {

        console.error(

            JSON.stringify(

                result.error.format(),

                null,

                2

            )

        )

        return {
            valid: false as const,

            error:
                result.error.issues.map(
                    issue => ({
                        path:
                            issue.path.join("."),

                        message:
                            issue.message,
                    })
                ),
        };

    }



    return {
        valid: true as const,

        data:
            result.data as ExecutiveState,
    };

}


export const executiveState =
    loadExecutiveState();
