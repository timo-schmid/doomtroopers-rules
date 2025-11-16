import {action, alert, inDividers} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Dash = action(
    "Dash",
    1,
    inDividers([
        alert(
            "The same as the Move action, but instead of using the operative’s MV stat, it may move up to 3”.",
            "alert-success alert-soft"
        ),
        alert(
            dedent`
            An operative may not perform this action while within control range of an enemy operative,
            during an activation in which it performed the Charge action, or while it is overencumbered.
            `,
            "alert-error alert-soft"
        )
    ])
)
