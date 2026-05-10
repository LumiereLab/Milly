import { API_BASE_URL } from '../config/apiConfig';
import type { CreateTicketPayload, Ticket } from '../types/ticket';

export async function fetchTickets(): Promise<Ticket[]> {
  const response = await fetch(`${API_BASE_URL}/tickets`);

  if (!response.ok) {
    throw new Error('Failed to fetch tickets!');
  }
  return response.json();
}

export async function createTicket(
  payload: CreateTicketPayload
): Promise<Ticket> {
  const response = await fetch(`${API_BASE_URL}/tickets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error('Failed to create ticket!');
  }
  return response.json();
}

export async function deleteTicket( 
  id: number
): Promise<JSON>{
const response = await fetch(`${API_BASE_URL}/tickets/${id}`,{
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
});
if(!response.ok){
  throw new Error('Failed to delete ticket!');
}
return response.json();
}
