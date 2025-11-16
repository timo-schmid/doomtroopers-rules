import {FlatItem} from "@/model/FlatItem";
import {Rules} from "@/data/Rules";
import {TreeItem} from "@/model/TreeItem";
import {dedent} from "ts-dedent";

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

const FlatRules: FlatItem[] = Rules.flatMap((item, index) => {
    return flatten([index], item);
})

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
