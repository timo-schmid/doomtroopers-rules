import {rule, type Rule} from '@/data/rule'
import { Burning } from './Burning'
import { Poisoned } from './Poisoned'
import { Bleeding } from './Bleeding'
import { Blinded } from './Blinded'
import { Immobilized } from './Immobilized'
import { JammedWeapons } from './JammedWeapons'
import { Weakened } from './Weakened'
import { dedent } from 'ts-dedent'

export const Conditions: Rule = rule(
    "Conditions",
    dedent`
    `,
    [
        Burning,
        Poisoned,
        Bleeding,
        Blinded,
        Immobilized,
        JammedWeapons,
        Weakened
    ]
)