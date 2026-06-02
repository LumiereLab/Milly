export type Board = {
    id: number,
    owner: number,
    title: string,
    description: string,
}

export type CreateBoardPayload = Omit<Board, 'id' | 'tickets'>