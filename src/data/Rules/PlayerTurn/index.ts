import {rule, type Rule} from '@/data/rule'
import { dedent } from 'ts-dedent'
import {DetermineOrder} from "@/data/Rules/PlayerTurn/DetermineOrder";
import {Actions} from "@/data/Rules/PlayerTurn/Actions";
import {PerformingActions} from "@/data/Rules/PlayerTurn/PerformingActions";

export const PlayerTurn: Rule = rule(
    "A Player's turn",
    dedent`
    `,
    [
        DetermineOrder,
        PerformingActions,
        Actions,
    ]
)