import {rule, type Rule} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Consumables: Rule = rule(
    "Consumables",
    dedent`
    Consumables are pieces of equipment that are one-time use only.
    To be able to use a consumable, the operative must have it in its inventory and either use the 
    Use Consumable action or the Shoot action, in case of grenade consumables.
    `
)
