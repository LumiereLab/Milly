import type { Ticket } from "./ticket";

export type Column = {
    id: number,
    name: string,
    position: number,
    boardId: number,
    tickets: Ticket[],
}