import {action, alert, inDividers} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Interact = action(
    "Interact",
    1,
    inDividers([
        alert(
            dedent`
            The operative interacts with some element within its control range. 
            Search a body, push a button, talk to a friendly NPC or anything else that you can think of. 
            If the operative discovers an item, it may immediately perform a free Pick Up or Equip action.
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
