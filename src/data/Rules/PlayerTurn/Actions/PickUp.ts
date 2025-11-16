import {action, alert, inDividers} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const PickUp = action(
    "Pick Up",
    1,
    inDividers([
        alert(
            dedent`
            The operative picks up an item it controls. Remove the appropriate marker (if any)
            and add the item to your inventory.
            `,
            "alert-success alert-soft"
        ),
        alert(
            dedent`
            An operative cannot perform this action while within control range of
            an enemy operative or while it is overencumbered.
            `,
            "alert-error alert-soft"
        )
    ])
)
