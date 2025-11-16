import {action, alert, inDividers} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Unequip = action(
    "Unequip",
    2,
    inDividers([
        alert(
            dedent`
            The operative unequips an item it is equipped with. Move that item to the operative’s inventory.
            `,
            "alert-success alert-soft"
        ),
        alert(
            dedent`
            An operative cannot perform this action while within control range of an
            enemy operative or while it is overencumbered.
            `,
            "alert-error alert-soft"
        )
    ])
)
