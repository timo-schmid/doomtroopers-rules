import {TreeItem} from "../model/TreeItem"
import {FlatItem} from "../model/FlatItem"
import { dedent } from 'ts-dedent'

const rule = (title: String, description: String, children: Array<TreeItem>): TreeItem => {
    return {
        "title": title,
        "description": description,
        "children": children
    } as TreeItem
}

export const Rules = [
    rule(
        "Introduction",
        [
            "Doomtroopers 25 uses a heavily modified version of the Kill Team 3rd Edition ruleset.",
            "All concepts needed for the players will be explained in the following.",
            "All rules and conflicts thereof are subject to the GM’s discretion.",
            "Treat his word as though he is the embodiment of our one and only God-Emperor.",
            "Praise be!"
        ].join(" ")
    ),
    {
        "title": "Game Structure",
        "description": [
            "The game will be played over a number of sessions, each consisting of a combination of the digital base",
            "management system and physical player and non-player turns. Each player turn is considered 1 Tick for",
            "base management purposes.",
            "<br />",
            "<br />",
            "Turn order will be determined at the start of each session based on the arrangement of players around",
            "the table and starting with the player (or non-player) of the GM’s choice."
        ].join(" ")
    },
    {
        "title": "Operatives",
        "description": [
            "The models the game is played with are called operatives. There are two types of operatives:",
            "<ul>",
            "<li>",
            "Character operatives: These are the player characters.",
            "Each player has their own character operative that only they will make the decisions for.",
            "</li>",
            "<li>",
            "NPC operatives: These operatives will be played by the GM unless specified otherwise.",
            "</li>",
            "</ul>"
        ].join(" "),
        "children": [
            {
                "title": "Stats",
                "description": [
                    "All operatives have the following stats:",
                    "..."
                ].join(" ")
            },
            {
                "title": "Abilities",
                "description": [
                    "Operatives may have unique abilities, which are listed here.",
                    "They will specify how and when they are used or if they are static abilities that are always active."
                ].join(" ")
            },
            {
                "title": "Damage",
                "description": [
                    "When damage is inflicted on an operative, reduce their hit points by that amount.",
                    "For character operatives, that is tracked by placing one or more dice on that character’s",
                    "datacard, showing how many hit points remain.",
                    "For NPC operatives, place the dice next to their model instead.",
                ].join(" "),
                "children": [
                    rule(
                        "Wounded",
                        [
                            "While an operative has fewer than its starting hit points remaining, that operative is",
                            "<strong>wounded</strong>. Being wounded has no effect in of itself, but certain other rules may",
                            "refer to wounded operatives."
                        ].join(" ")
                    ),
                    rule(
                        "Injured",
                        [
                            "While an operative has fewer than half its starting hit points remaining, that operative",
                            "is also <b>injured</b>. While an operative is injured:",
                            "<ul>",
                            "<li>Subtract 2” from its MV stat</li>",
                            "<li>They get +1 to both their RC and CC stats</li>",
                            "</ul>"
                        ].join(" ")
                    ),
                    rule(
                        "Incapacitated",
                        [
                            "If an operative’s hit points are reduced to 0, that operative is incapacitated.",
                            "This works differently for NPCs and characters",
                            "<ul>",
                            "<li>NPCs are removed from the battlefield and replaced with a corpse token, which will",
                            "remain until it’s interacted with.</li>",
                            "<li>When a character is incapacitated, they receive a Downed marker.",
                            "A downed operative may not take any other actions than the Move action, and it may not",
                            "move more than 2”. When a downed operative regains any HP, they may take actions as normal",
                            "again, but they keep the marker.",
                            "When an operative with a downed marker is reduced to 0 HP again, it is critically injured,",
                            "may no longer take any actions at all and can only be revived with a Medicae Stasis Tube.",
                            "</li>",
                            "</ul>",
                            "When a character operative becomes critically injured, there may be a permanent",
                            "penalty assigned at the GM’s discretion."
                        ].join(" ")
                    )
                ]
            },
            rule(
                "Equipment",
                "There are four types of equipment: Weapons, Armors, Accessories and Consumables."
            )
        ]
    }
] as TreeItem[]

const flatten = (path: number[], item: TreeItem): FlatItem[] => {
    const current = [{
        "path": path,
        "title": item.title,
        "description": item.description
    }] as FlatItem[]
    if(item.children) {
        return current.concat(
            item.children.flatMap((item, index) => {
                return flatten(path.concat([index]), item)
            })
        )
    } else {
        return current
    }
}

const FlatRules: FlatItem[] = Rules.flatMap((item, index) => {
    return flatten([index], item);
})

const foldLeft = <A, B>(xs: Array<A>, zero: B) => (f: (b: B, a: A) => B): B => {
    const len = xs.length;
    if (len === 0) return zero;
    else {
        const head = xs[0];
        const tails = xs.slice(1);
        return foldLeft(tails, f(zero, head))(f);
    }
}

const intersperse = <T> (array: T[], separator: T): T[] => {
    const newArray: T[] = [];
    for (let i = 0; i < array.length; i++) {
        if (i !== 0) {
            newArray.push(separator);
        }
        newArray.push(array[i]);
    }
    return newArray;
}

interface Segment {
    readonly html: String
    linkify(item: FlatItem): Segment[]
}

class ImmutableSegment implements Segment {
    public readonly html: string
    constructor(html: string) {
        this.html = html
    }
    public linkify(item: FlatItem): Segment[] {
        return [this]
    }
}

class ReplaceableSegment implements Segment {
    public readonly html: string
    constructor(html: string) {
        this.html = html
    }
    public linkify(item: FlatItem): Segment[] {
        return intersperse(
            this.html.split(item.title.toLowerCase()).map((html) => {
                return new ReplaceableSegment(html)
            }),
            new ImmutableSegment(
                tooltipLink(item.path.join("-"), item.title, item.description)
            )
        )
    }
}

const tooltipLink = (id: string, title: string, content: string): string => {
    return dedent`
    <div class="lg:tooltip">
      <div class="tooltip-content max-w-2xl">
        <h3 class="text-xl p-2">${title}</h3>
        <div class="p-2 text-justify">${content}</div>
      </div>
      <a href="#rule-${id}" class="link link-primary">${title}</a>
    </div>
    `
}

export const linkify = (html: string, ignore: string): String => {
    return foldLeft<FlatItem, Segment[]>(
        FlatRules.filter((item) => item.title.toLowerCase() != ignore.toLowerCase()),
        [new ReplaceableSegment(html)])((acc, item) => {
            return acc.flatMap((segment) => {
                return segment.linkify(item)
            })
        }
    ).map((segment) => segment.html).join("")
}
