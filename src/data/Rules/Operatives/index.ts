import {rule, list, type Rule} from '@/data/rule'
import {Stats} from './Stats'
import {Abilities} from './Abilities'
import {Damage} from './Damage'
import {Equipment} from './Equipment'
import {CarryingCapacity} from './CarryingCapacity'
import {Conditions} from './Conditions'
import { dedent } from 'ts-dedent'

export const Operatives: Rule = rule(
    "Operatives",
    dedent`
        The models the game is played with are called operatives. There are two types of operatives:
        ${list([
            dedent`
            Character operatives: These are the player characters.
            Each player has their own character operative that only they will make the decisions for.
            `,
            "NPC operatives: These operatives will be played by the GM unless specified otherwise."
        ])}
    `,
    [
        Stats,
        Abilities,
        Damage,
        Equipment,
        CarryingCapacity,
        Conditions
    ]
)