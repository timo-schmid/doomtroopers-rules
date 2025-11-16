import {rule, type Rule} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Accessories: Rule = rule(
    "Accessories",
    dedent`
    Accessories are pieces of equipment that have a permanent effect on their wearer. 
    For an accessory to take effect, it must be in the inventory of the wearer and the wearer must 
    be able to use that accessory.
    <br />
    Accessories come in two categories: Personal accessories, which are specific to a certain character, 
    and universal accessories, which can be used by any character.
    `
)
