import {action, alert, inDividers} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Fight = action(
    "Fight",
    1,
    inDividers([
        alert(
            dedent`
            The operative fights in melee by following the sequence below.
            The active operative is the attacker.
            The selected target is the defender.
            `,
            "alert-success alert-soft"
        ),
        alert(
            dedent`
            An operative cannot perform this action unless an enemy operative is within
            its control range or while it is overencumbered.
            `,
            "alert-error alert-soft"
        ),
        alert(
            dedent`
            <strong>1. Select Valid Target</strong>
            The attacker selects an enemy operative within its control range to fight against. 
            That enemy operative will retaliate in this action.
            <br />
            <br />
            <strong>2. Select Weapon Profile</strong>
            Both operatives select one melee weapon profile they are equipped with and collect their attack
            dice - a number of D6 equal to the weapon profile’s ATK stat.
            <br />
            <br />
            <strong>3. Roll Attack Dice</strong>
            Both operatives roll their attack dice simultaneously.
            Each result that equals or exceeds the operative’s CC stat is a success and is retained.
            Each result that doesn’t is a fail and is discarded.
            Each result of 6 is always a critical success, each result of 1 is always a fail.
            <br />
            <br />
            While a friendly operative is assisted by other friendly operatives, reduce its CC stat
            by 1 for each friendly operative doing so. In order to assist, a friendly operative must
            be within control range of the enemy operative in that fight and not be in control range
            of any other enemy operatives.
            <br />
            <br />
            <strong>4. Resolve Attack Dice</strong>
            Starting with the attacker, operatives alternate resolving one of their successful unblocked attack dice.
            Repeat this process until all attack dice have been resolved or one operative in that fight
            is incapacitated. When resolving an attack dice, the operative must strike or block with it:
            <br />
            - To strike, inflict damage equal to the weapon’s Normal or Critical Dmg stat,
            depending on the type of success.
            <br />
            - To block, allocate that dice to one of their opponents unresolved successes.
            A normal success can block a normal success, a critical success can block either
            a normal or a critical success.
            `
        )
    ])
)
