import { useEffect, useState } from 'react';
import { createTicket, deleteTicket, fetchTickets } from '../api/ticketsApi';
import { TicketForm } from '../components/TicketForm';
import TicketCard from '../components/TicketCard';
import type { CreateTicketPayload, Ticket } from '../types/ticket';

export function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    fetchTickets().then(setTickets);
  }, []);

  async function handleCreateTicket(payload: CreateTicketPayload) {
    const createdTicket = await createTicket(payload);
    setTickets((previousTickets) => [
      ...previousTickets,
      createdTicket,
    ]);
  } 
  return (
    <div style= {{ padding: '20px'}}>
      <h1>Tickets</h1>
      <TicketForm onCreateTicket={handleCreateTicket}/>

      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket}/>
      ))}

    </div>
  )
}
