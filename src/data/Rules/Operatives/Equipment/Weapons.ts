import {rule, table, type Rule} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Weapons: Rule = rule(
    "Weapons",
    dedent`
    All weapon profiles show the following information:
    ${table(
        [
            [
                "",
                "Name",
                "The weapon's name"
            ],
            [
                "ATK",
                "Attacks",
                "The number of attack dice to roll whenever an operative uses this weapon."
            ],
            [
                "DMG",
                "Damage",
                "The damage each dice inflicts. " +
                "The first number is its Normal Dmg stat, the second value is its Critical Dmg stat."
            ],
            [
                "WR",
                "Weapon Rules",
                dedent`
                Additional rules the weapon has. A list of these keywords can be found at the end of this document, 
                any unique weapon rules will be explained on the weapon card in full.
                `
            ],
            [
                "",
                "Size",
                dedent`
                How large the weapon is, important for the operative’s carrying capacity.
                Equipped weapons do not count towards the operatives carrying capacity.
                `
            ]
        ]
    )}
    Unless specified otherwise, an operative can only ever be equipped with one ranged weapon and one melee weapon.
    <br />
    The total size of weapons an operative can be equipped with
    can never be higher than the base INV stat of that operative.
    `
)