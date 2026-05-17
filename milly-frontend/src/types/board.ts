export type Board = {
    id: number
    title: string 
    description: string
    //column?
    tickets: number
}

export type CreateBoardPayload = Omit<Board,'id'| 'tickets'>