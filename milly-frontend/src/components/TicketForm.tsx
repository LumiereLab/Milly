import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import type { CreateTicketPayload, TicketStatus } from '../types/ticket';

type TicketFormProps = {
  onCreateTicket: (payload: CreateTicketPayload) => Promise<void>;
};

export function TicketForm({ onCreateTicket }: TicketFormProps) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState<TicketStatus>('open');

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await onCreateTicket({
        title,
        status,
      });
      setTitle('');
      setStatus('open');  
    } catch {
      //error is handled in Ticketspage where state lives 
    }
    

    
  }

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.currentTarget.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ticket title"
        value={title}
        onChange={handleTitleChange}
      />
      <button type="submit">create Ticket</button>
    </form>
  );
}
