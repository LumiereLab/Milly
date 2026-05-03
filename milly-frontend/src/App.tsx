import { useState, useEffect, type SubmitEvent } from 'react';
import TicketCard from './components/TicketCard';

type Payload = {
  title: string;
  status: Ticket['status'];
};

type Ticket = {
  id: number;
  title: string;
  status: TicketStatus;
};

type TicketStatus = 'open' | 'progressed' | 'closed';

function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState<TicketStatus>('open');
  const [errorMessage, setErrorMessage] = useState('');
  async function addTicket(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload: Payload = {
      title,
      status,
    };

    const response = await fetch('http://localhost:3000/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();

      const message = Array.isArray(error.message)
        ? error.message.join(',')
        : 'Failed to create ticket';

      setErrorMessage(message);
      return;
    }

    const createdTicket: Ticket = await response.json();
    //return new array with newly created ticket
    setTickets((previousTickets) => [...previousTickets, createdTicket]);
    //resets form
    setTitle('');
    setStatus('open');
    setErrorMessage('');
  }

  useEffect(() => {
    fetch('http://localhost:3000/tickets')
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tickets</h1>

      <form onSubmit={addTicket}>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <input
          type="text"
          placeholder="Ticket title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value as TicketStatus)}
        >
          <option value="open">Open</option>
          <option value="progressed">Progressed</option>
          <option value="closed">Closed</option>
        </select>

        <button type="submit">Create Ticket</button>
      </form>

      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}
export default App;
