import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import type {CreateTicketPayload, TicketStatus } from '../../types/ticket';

type TicketFormProps = {
  onCreateTicket: (payload: CreateTicketPayload) => Promise<void>;
};

export function TicketForm({ onCreateTicket }: TicketFormProps) {
  // const [title, setTitle] = useState('');
  // const [status, setStatus] = useState<TicketStatus>('open');
  // const [description, setDescription] = useState('');
  // const [owner, setOwner] = useState<number>(0);
  // const [asignee, setAssignee] = useState<number>(0);
  const [form, setForm] = useState<CreateTicketPayload>({
    title: '',
    status: 'open',
    description:'',
    owner: 0,
    asignee: 0,
  })

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await onCreateTicket(form);
      setForm({
        title:'',
        status:'open',
        description:'',
        owner:0,
        asignee:0,
      })
    } catch {
      //error is handled in Ticketspage where state lives 
    }
    

    
  }

  function handleFieldChanges(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // setTitle(event.currentTarget.value);
    // setDescription(event.currentTarget.value);
    // // setOwner(event.currentTarget.value);
    // // setAssignee(event.currentTarget.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='title'
        placeholder="ticket title"
        value={form.title}
        onChange={handleFieldChanges}
      />
      <textarea
      name='description'
      placeholder='ticket description'
      value={form.description}
      onChange={handleFieldChanges}
      />
      <input
      name='owner'
      placeholder='ticket owner'
      value={form.owner}
      onChange={handleFieldChanges}
      />
      <input
      name='asignee'
      placeholder='ticket asignee'
      value={form.asignee}
      onChange={handleFieldChanges}
      />
      
      <button type="submit">create Ticket</button>
    </form>
  );
}
