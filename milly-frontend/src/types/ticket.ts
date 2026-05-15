export type TicketStatus = 'open' | 'progressed' | 'closed';

export type Ticket = {
  id: number;
  title: string;
  status: TicketStatus;
  description: string;
  owner: number;
  asignee: number;

};


// Omit is a utility so I dont have to declare the same thing twice 
export type CreateTicketPayload = Omit<Ticket,'id'>;
