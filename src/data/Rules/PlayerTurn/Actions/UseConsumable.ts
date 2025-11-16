import {action, alert, inDividers} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const UseConsumable = action(
    "Use Consumable",
    1,
    inDividers([
        alert(
            dedent`
            The operative uses a consumable it is equipped with.
            Apply that consumable’s effect, then discard it.
            `,
            "alert-success alert-soft"
        ),
        alert(
            dedent`
            An operative cannot perform this action while within control range
            of an enemy operative or while it is overencumbered.
            `,
            "alert-error alert-soft"
        )
    ])
)
