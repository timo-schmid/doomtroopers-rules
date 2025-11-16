import {TreeItem} from "@/model/TreeItem"
import {dedent} from 'ts-dedent'

export type Rule = TreeItem

const mapRow = (cols: string[]): string => {
    return '<td>' + cols.join('</td><td>') + '</td>'
}

export const table = (rows: string[][]): string => {
    return '<table class="table"><tr>' + rows.map(mapRow).join('</tr><tr>') + '</tr></table>'
}

export const list = (items: string[]): string => {
    return table(items.map((item) => [item]))
}

export const inDividers = (items: string[]): string => {
    return items.join('<div class="divider"></div>')
}

export const alert = (msg: string, classes: string = ""): string => {
    return dedent`
        <div role="alert" class="alert ${classes}">
            <span>${msg}</span>
        </div>
    `
}

export const action = (title: String, ap: number, text: string): string => {
    return dedent`
    <div class="card bg-neutral shadow-sm">
        <div class="card-body">
            <div class="flex justify-between">
                <h2 class="text-3xl font-bold">${title}</h2>
                <span class="text-3xl">${ap} AP</span>
            </div>
            <div class="divider"></div>
            <div>
                ${text}
            </div>
        </div>
    </div>
    `
}

export const rule = (title: String, description: String, children: Array<TreeItem> = []): Rule => {
    return {
        "title": title,
        "description": description,
        "children": children
    } as Rule
}
