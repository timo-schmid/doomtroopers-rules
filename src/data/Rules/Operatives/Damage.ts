import {rule, list, type Rule} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Damage: Rule = rule(
    "Damage",
    dedent`
    When damage is inflicted on an operative, reduce their hit points by that amount. 
    For character operatives, that is tracked by placing one or more dice on that character’s datacard,
    showing how many hit points remain. For NPC operatives, place the dice next to their model instead.
    `,
    [
        rule(
            "Wounded",
            dedent`
            While an operative has fewer than its starting hit points remaining, that operative is
            <strong>wounded</strong>. Being wounded has no effect in of itself, but certain other rules may
            refer to wounded operatives.
            `
        ),
        rule(
            "Injured",
            dedent`
                While an operative has fewer than half its starting hit points remaining, that operative
                is also <b>injured</b>. While an operative is injured:
                ${list([
                    "Subtract 2” from its MV stat",
                    "They get +1 to both their RC and CC stats"
                ])}
            `
        ),
        rule(
            "Incapacitated",
            dedent`
            If an operative’s hit points are reduced to 0, that operative is incapacitated.
            This works differently for NPCs and characters
            ${list(
                [
                    dedent`
                    NPCs are removed from the battlefield and replaced with a corpse token, which will
                    remain until it’s interacted with.
                    `,
                    dedent`
                    When a character is incapacitated, they receive a Downed marker.
                    A downed operative may not take any other actions than the Move action, and it may not
                    move more than 2”. When a downed operative regains any HP, they may take actions as normal
                    again, but they keep the marker.
                    When an operative with a downed marker is reduced to 0 HP again, it is critically injured,
                    may no longer take any actions at all and can only be revived with a Medicae Stasis Tube.
                    `
                ]
            )}
            When a character operative becomes critically injured, there may be a permanent
            penalty assigned at the GM’s discretion.
            `
        )
    ]
)
