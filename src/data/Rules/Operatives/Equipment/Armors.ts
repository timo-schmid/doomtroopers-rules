import {rule, type Rule} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Armors: Rule = rule(
    "Armors",
    dedent`
    Armors may modify the following stats of the equipped operative: 
    Movement, Defence, Hit Points, and Inventory. 
    These modifications only take effect when an operative is equipped with the armor.
    <br />
    Any operative can only ever be equipped with one armor at a time.
    `
)
