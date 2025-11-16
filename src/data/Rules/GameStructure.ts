import {rule, type Rule} from '@/data/rule'
import { dedent } from 'ts-dedent'

export const GameStructure: Rule = rule(
    "Game Structure",
    [
        dedent`
            The game will be played over a number of sessions, each consisting of a combination of the digital base
            management system and physical player and non-player turns. Each player turn is considered 1 Tick for
            base management purposes.
            <br />
            <br />
            Turn order will be determined at the start of each session based on the arrangement of players around
            the table and starting with the player (or non-player) of the GM’s choice.
        `
    ].join(" ")
)
