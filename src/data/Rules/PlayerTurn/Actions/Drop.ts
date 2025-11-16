import {action, alert, inDividers} from '@/data/rule'
import {dedent} from "ts-dedent";

export const Drop = action(
    "Drop",
    1,
    inDividers([
        alert(
            dedent`
            The operative drops an item in its inventory or an item it is equipped with.
            Remove that item card from the operative’s datacard and place an item marker
            within control range of the operative.
            `,
            "alert-success alert-soft"
        ),
        alert(
            dedent`
            There are no restrictions on this action.
            `,
            "alert-error alert-soft"
        )
    ])
)
