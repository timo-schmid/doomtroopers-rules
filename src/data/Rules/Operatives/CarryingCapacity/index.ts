import {rule, type Rule} from '@/data/rule'
import {Overencumberance} from './Overencumberance'
import {CarryingLargeObjects} from './CarryingLargeObjects'
import {CarryingIncapacitatedOperatives} from './CarryingIncapacitatedOperatives'
import { dedent } from 'ts-dedent'


export const CarryingCapacity: Rule = rule(
    "Carrying Capacity",
    dedent`
    `,
    [
        Overencumberance,
        CarryingLargeObjects,
        CarryingIncapacitatedOperatives
    ]
)