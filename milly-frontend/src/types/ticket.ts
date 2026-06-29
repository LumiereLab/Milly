import type { Column } from "./column";

export type Ticket = {
  id: number;
  title: string;
  status: Column['id'];
  description: string;
  owner: number;
  asignee: number;
  boardId: number;

};


// Omit is a utility so I dont have to declare the same thing twice 
export type CreateTicketPayload = Omit<Ticket, 'id'>;
