type DateTime = Date | string

interface ListItem {
    text: string
    checked: boolean
}

interface Note {
    pinned: boolean,
    id: string,
    title?: string
    color?: string,
    content?: string,
    listItems?: Array<ListItem>
    createdAt: DateTime
    updatedAt: DateTime
}

type Notes = Array<Note>

export type {Note, Notes, ListItem, DateTime}