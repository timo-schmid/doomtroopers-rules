export type TreeItem = {
    readonly title: string
    readonly description: string
    readonly children?: TreeItem[]
}