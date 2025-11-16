import {rule, type Rule} from '@/data/rule'
import { dedent } from 'ts-dedent'
import {Move} from "@/data/Rules/PlayerTurn/Actions/Move";
import {FallBack} from "@/data/Rules/PlayerTurn/Actions/FallBack";
import {Dash} from "@/data/Rules/PlayerTurn/Actions/Dash";
import {Charge} from "@/data/Rules/PlayerTurn/Actions/Charge";
import {Interact} from "@/data/Rules/PlayerTurn/Actions/Interact";
import {PickUp} from "@/data/Rules/PlayerTurn/Actions/PickUp";
import {Drop} from "@/data/Rules/PlayerTurn/Actions/Drop";
import {Equip} from "@/data/Rules/PlayerTurn/Actions/Equip";
import {Unequip} from "@/data/Rules/PlayerTurn/Actions/Unequip";
import {UseConsumable} from "@/data/Rules/PlayerTurn/Actions/UseConsumable";
import {Shoot} from "@/data/Rules/PlayerTurn/Actions/Shoot";


export const Actions: Rule = rule(
    "Actions",
    dedent`
    Actions have effects and conditions that must be fulfilled for an operative to perform that action.
    There are Unique actions and Universal actions.
    <br />
    <br />
    Unique actions are actions that operatives may have access to either from items and equipment they’re
    carrying or intrinsic to the operative in question. All of these actions will specify their AP cost,
    their effect and their conditions. Unless specified otherwise, only the operative that action is associated
    with can perform that action.
    <br />
    <br />
    Universal actions are actions that can be performed by all operatives unless specified otherwise. 
    The universal actions are listed below:
    <div class="grid grid-cols-1 pt-4 pb-4">
        ${Move}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
        ${Dash}
        ${FallBack}
        ${Charge}
        ${Interact}
        ${PickUp}
        ${Drop}
        ${Equip}
        ${Unequip}
        ${UseConsumable}
        ${Shoot}
    </div>
    `,
    [
    ]
)