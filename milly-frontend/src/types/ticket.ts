export type TicketStatus = 'open' | 'progressed' | 'closed';

export type Ticket = {
  id: number;
  title: string;
  status: TicketStatus;
};

export type CreateTicketPayload = {
  title: string;
  status: TicketStatus;
};
