import {TreeItem} from "@/model/TreeItem"
import {FlatItem} from "@/model/FlatItem"
import {type Rule} from './rule'
import { dedent } from 'ts-dedent'
import {Introduction} from './Rules/Introduction'
import {GameStructure} from "./Rules/GameStructure"
import {Operatives} from './Rules/Operatives'
import {PlayerTurn} from './Rules/PlayerTurn'
import {Terrain} from './Rules/Terrain'
import {KeyPrinciples} from './Rules/KeyPrinciples'
import {WeaponKeywords} from './Rules/WeaponKeywords'

export const Rules: Rule[] = [
    Introduction,
    GameStructure,
    Operatives,
    PlayerTurn,
    Terrain,
    KeyPrinciples,
    WeaponKeywords
] as Rule[]

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
            this.html.split(new RegExp(RegExp.escape(item.title), "ig")).map((html) => {
                return new ReplaceableSegment(html)
            }),
            new ImmutableSegment(
                tooltipLink(item.path.join("_"), item.title)
            )
        )
    }
}

const tooltipLink = (id: string, title: string): string => {
    return dedent`
    <!-- Open the modal using ID.showModal() method -->
    <a class="link link-primary" onclick="modal_${id}.showModal()">${title}</a>
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
