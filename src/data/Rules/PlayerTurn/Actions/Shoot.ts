import {action, alert, inDividers} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Shoot = action(
    "Shoot",
    1,
    inDividers([
        alert(
            dedent`
            The operative shoots by following the sequence below.
            The active operative is the attacker.
            The selected target is the defender.
            `,
            "alert-success alert-soft"
        ),
        alert(
            dedent`
            An operative cannot perform this action while it has a Conceal order,
            while within control range of an enemy operative or while it is overencumbered.
            `,
            "alert-error alert-soft"
        ),
        alert(
            dedent`
            <strong>1. Select Weapon Profile</strong>
            <br />
            The attacker selects one ranged weapon profile it is equipped with to use and collects the attack
            dice - a number of D6 equal to the weapon profile’s ATK stat.
            <br />
            <br />
            <strong>2. Select Valid Target</strong>
            <br />
            The attacker selects an enemy operative that’s a valid target:
            <br />
            - If the intended target has an Engage order, it’s a valid target if it’s visible to the active operative.
            <br />
            - If the intended target has a Conceal order, it’s a valid target if it’s visible to the active
            operative and not in cover.
            <br />
            - An operative is visible if the active operative can see it.
            - An operative is in cover if there is intervening terrain within its control range.
            However, it cannot be in cover while within 2” of the active operative.
            <br />
            - An operative cannot be in cover and obscured by the same terrain feature. 
            If it would be, the defender chooses during this step.
            <br />
            <br />
            <strong>3. Roll Attack Dice</strong>
            The attacker rolls the attack dice.
            Each result that equals or exceeds the attackers RC stat is a success and is retained. 
            Each result that doesn’t is a fail and is discarded. 
            Each result of 6 is always a critical success, each result of 1 is always a fail.
            <br />
            <br />
            If there’s intervening Heavy terrain outside of 1” of either operative, the target is obscured. 
            In this case:
            <br />
            - The attacker must discard one success of their choice instead of retaining it.
            <br />
            - All critical successes are treated as normal successes instead 
            (this takes precedence over all other rules)
            <br />
            <br />
            <strong>4. Roll Defence Dice</strong>
            The defender rolls 3 defence dice. If the defender is in cover, it may retain one normal success 
            without rolling it - this is known as the cover safe.
            Each result that equals or exceeds the defender’s DEF stat  is a success and is retained.
            Each result that doesn’t is a fail and is discarded. Each result of 6 is always a critical success,
            each result of 1 is always a fail.
            <br />
            <br />
            <strong>5. Resolve Defence Dice</strong>
            <br />
            The defender allocates all their successful defence dice to block successful attack dice:
            <br />
            - A normal success can block a normal success.
            <br />
            - Two normal successes can block a critical success.
            <br />
            - A critical success can block either a normal or a critical success.
            <br />
            <br />
            <strong>6. Resolve Attack Dice</strong>
            <br />
            All successful unblocked attack dice inflict damage on the target operative:
            <br />
            - A normal success inflicts damage equal to the weapon profile’s Normal Dmg stat.
            <br />
            - A critical success inflicts damage equal to the weapon profile’s Critical Dmg stat.
            <br />
            Any operatives that were reduced to 0 HP are incapacitated and are removed after the active
            operative’s Shoot action has been fully resolved. Character operatives are not removed 
            (see “Incapacitated Characters”).

            `
        )
    ])
)
