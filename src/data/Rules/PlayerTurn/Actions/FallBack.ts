import {action, alert, inDividers} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const FallBack = action(
    "Fall Back",
    2,
    inDividers([
        alert(
            dedent`
            The same as the Move action, except the operative can move within the control range
            of enemy operatives, but cannot finish their move there.
            `,
            "alert-success alert-soft"
        ),
        alert(
            dedent`
            An operative cannot perform this action unless it is within control range of an enemy operative. 
            It cannot perform this action during an activation in which it performed the Move or Charge action
            or while it is overencumbered.
            `,
            "alert-error alert-soft"
        )
    ])
)
