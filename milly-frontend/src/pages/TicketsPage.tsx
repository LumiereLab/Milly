import { useEffect, useState } from 'react';
import { createTicket, deleteTicket, fetchTickets } from '../api/ticketsApi';
import { TicketForm } from '../components/TicketForm';
import TicketCard from '../components/TicketCard';
import type { CreateTicketPayload, Ticket } from '../types/ticket';


export function TicketsPage() {
  //states for react
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTickets().then(setTickets);
  }, []);

  async function handleCreateTicket(payload: CreateTicketPayload) {
    setError(null); //clear any previous error before trying again 
    //try;catch cause await, otherwise error vanishes unhandled
    try{
      const createdTicket = await createTicket(payload);
      setTickets((previousTickets) => [
        ...previousTickets,
        createdTicket,
      ]);
    }
    //instance of Error narrows type (set in our ticket api) // catch gives err:unknown by default, so we know the error has .message prop
    catch(err){
      if(err instanceof Error){
        setError(err.message); 
      }
    }
    
  } 

  async function handleDeleteTicket(id: number){
    await deleteTicket(id);
    setTickets((previousTickets) => 
    previousTickets.filter((ticket => ticket.id != id))
  );

  }
  return (
    <div style= {{ padding: '20px'}}>
      <h1>Tickets</h1>
      <TicketForm onCreateTicket={handleCreateTicket}/>
      {/* error line with {eror && ... is conditional rendering if error is null(falsy) React renders nothing*/}
      {error && <p style={{ color: 'red' }}>{error}</p>}  
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} onDelete={handleDeleteTicket}/>
      ))}
    </div>
  )
}
