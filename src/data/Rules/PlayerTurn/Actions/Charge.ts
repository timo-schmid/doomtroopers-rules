import {action, alert, inDividers} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Charge = action(
    "Charge",
    1,
    inDividers([
        alert(
            dedent`
            The same as the Move action, except the operative can move an additional 2”.
            `,
            "alert-success alert-soft"
        ),
        alert(
            dedent`
            It can and must finish the move within control range of an enemy operative. 
            If it moves within the control range of an enemy operative that no other friendly operatives are 
            within control range of, it may not leave that enemy’s control range.
            `,
            "alert-success alert-soft"
        ),
        alert(
            dedent`
            An operative cannot perform this action while it has a Conceal order, if it’s already within 
            control range of an enemy operative, during the same activation in which it performed the
            Move, Dash or Fall Back action, or while it is overencumbered.
            `,
            "alert-error alert-soft"
        )
    ])
)
