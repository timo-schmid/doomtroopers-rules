import {action, alert, inDividers} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Move = action(
    "Move",
    1,
    inDividers([
        alert(
            "Move the active operative up to its MV stat to a position in which it can be placed.",
            "alert-success alert-soft"
        ),
        alert(
            dedent`
            It cannot move into or through the control range of any enemy operatives, unless there are already one or more
            friendly operatives within control range of that enemy operative, in which case it may move through, 
            but not into, that operative’s control range
            `,
            "alert-warning alert-soft"
        ),
        alert(
            dedent`
            An operative may not perform this action while within control range of an enemy operative or during 
            an activation in which it performed the Fall Back or Charge action.
            `,
            "alert-error alert-soft"
        ),
        dedent`
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            ${alert(
                dedent`
                    <h3 class="text-xl pb-2">Vault</h3>
                    Any terrain feature less than 2” in height can be vaulted over. For every terrain feature an
                     operative vaults over, reduce the total distance it can move during that action by 1”.
                `,
                "align-text-top"
            )}
            ${alert(
                dedent`
                    <h3 class="text-xl pb-2">Climb</h3>
                    Any terrain feature higher than 2” must be climbed. An operative can only climb a terrain
                    feature if it can end that action’s movement in a spot it can be placed. To climb, measure the
                    vertical distance moved and subtract it from the total distance it can move during that action.
                `,
                "align-text-top"
            )}
            ${alert(
                dedent`
                    <h3 class="text-xl pb-2">Drop</h3>
                    When moving off terrain, any vertical drop of 2” is ignored.
                    When moving off terrain more than 2” in height, the remaining vertical distance must be climbed.
                `,
                "align-text-top"
            )}
            ${alert(
                dedent`
                    <h3 class="text-xl pb-2">Jump</h3>
                    <br />
                    Any gaps between terrain features less than 4” in distance may be jumped. When jumping to a
                    terrain feature, any height difference of up to 1” may be ignored. Still measure the horizontal
                    distance normally.
                `,
                "align-text-top"
            )}
        </div>
        `
    ])
)
