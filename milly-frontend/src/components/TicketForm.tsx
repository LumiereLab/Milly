import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import type { CreateTicketPayload, TicketStatus } from '../types/ticket';

type TicketFormProps = {
  onCreateTicket: (payload: CreateTicketPayload) => void;
};

export function TicketForm({ onCreateTicket }: TicketFormProps) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState<TicketStatus>('open');

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    onCreateTicket({
      title,
      status,
    })


    setTitle('');
    setStatus('open');
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
    </form>
  );
}
