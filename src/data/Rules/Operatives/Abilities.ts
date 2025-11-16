import {rule, type Rule} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Abilities: Rule = rule(
    "Abilities",
    dedent`
    Operatives may have unique abilities, which are listed here. 
    They will specify how and when they are used or if they are static abilities that are always active.
    `
)
