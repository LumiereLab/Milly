import type { Column } from "./column"
import type { Ticket } from "./ticket"

export type Board = {
    id: number,
    owner: number,
    title: string,
    description: string,


}

export type CreateBoardPayload = Omit<Board, 'id' | 'tickets'>

interface BoardDetail extends Board {
    columns: Column[],
    tickets: Ticket[],
} 