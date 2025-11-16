import {rule, type Rule} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Stats: Rule = rule(
    "Stats",
    dedent`
        All operatives have the following stats:
        <table class="table">
            <tr>
                <td>
                    RC
                </td>
                <td>
                    Ranged Combat Skill
                </td>
                <td>
                    The result required for successful attack dice whenever the operative uses a ranged weapon.
                </td>
            </tr>
            <tr>
                <td>
                    CC
                </td>
                <td>
                    Close Combat Skill
                </td>
                <td>
                    The result required for successful attack dice whenever the operative uses a melee weapon.
                </td>
            </tr>
            <tr>
                <td>
                    AP
                </td>
                <td>
                    Action Points
                </td>
                <td>
                    How many actions the operative can perform in one activation. 
                    Also used in determining control of mission objectives.
                    Some rules can modify an operative’s AP stat, but the total of those modifications 
                    can never be more than -1 or +1 AP.
                </td>
            </tr>
            <tr>
                <td>
                    MV
                </td>
                <td>
                    Movement
                </td>
                <td>
                    The operative’s move distance, used when performing the Move, Fall Back and Charge actions.
                </td>
            </tr>
            <tr>
                <td>
                    DEF
                </td>
                <td>
                    Defence
                </td>
                <td>
                    The result required for successful defence dice whenever being shot at by another operative.
                </td>
            </tr>
            <tr>
                <td>
                    HP
                </td>
                <td>
                    Hit Points
                </td>
                <td>
                    The operative’s starting number of hit points, which is reduced as damage is inflicted on it. 
                    An operative reduced to 0 HP is incapacitated.
                </td>
            </tr>
            <tr>
                <td>
                    INV
                </td>
                <td>
                    Inventory
                </td>
                <td>
                    The operative’s carrying capacity before being overencumbered, 
                    excluding any weapons it is equipped with.
                </td>
            </tr>
        </table>
    `
)
