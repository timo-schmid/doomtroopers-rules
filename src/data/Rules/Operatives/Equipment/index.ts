import {rule, type Rule} from '@/data/rule'
import { dedent } from 'ts-dedent'
import {Weapons} from './Weapons'
import {Armors} from './Armors'
import {Accessories} from './Accessories'
import {Consumables} from './Consumables'


export const Equipment: Rule = rule(
    "Equipment",
    dedent`
    There are four types of equipment: Weapons, Armors, Accessories and Consumables.
    `,
    [
        Weapons,
        Armors,
        Accessories,
        Consumables
    ]
)
