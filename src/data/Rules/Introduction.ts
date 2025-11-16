import {rule, type Rule} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const Introduction: Rule = rule(
    "Introduction",
    [
        dedent`
            Doomtroopers 25 uses a heavily modified version of the Kill Team 3rd Edition ruleset.
            All concepts needed for the players will be explained in the following.
            All rules and conflicts thereof are subject to the GM’s discretion.
            Treat his word as though he is the embodiment of our one and only God-Emperor.
            Praise be!
        `
    ].join(" ")
)
