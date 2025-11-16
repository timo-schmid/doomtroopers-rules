import {action, alert, inDividers} from '@/data/rule'
import {dedent} from "ts-dedent";

export const Equip = action(
    "Equip",
    2,
    inDividers([
        alert(
            dedent`
            The operative equips an item it controls or an item in its inventory. 
            Place that item card in either a free melee weapon slot, a free ranged weapon slot or a free armor slot.
            `,
            "alert-success alert-soft"
        ),
        alert(
            dedent`
            An operative cannot perform this action while within control range of an enemy
            operative or while it is overencumbered.
            `,
            "alert-error alert-soft"
        )
    ])
)
