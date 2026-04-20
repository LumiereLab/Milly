import { useState, useEffect } from 'react';
import TicketCard from './components/TicketCard';

type Ticket = {
  id: number;
  title: string;
  status: 'open' | 'progressed' | 'closed';
};

// const initialTickets: Ticket[] = [
//   { id: 1, title: 'Login Bug', status: 'open' },
//   { id: 2, title: 'UI bugged', status: 'progressed' },
// ];

function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/tickets')
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
      });
  }, []);
  // nobackend shenanigans
  // const [tickets, setTickets] = useState<Ticket[]>(() => {
  //   const savedTickets = localStorage.getItem('tickets');

  //   if (savedTickets) {
  //     return JSON.parse(savedTickets);
  //   }
  //   return initialTickets;
  //});

  function addTicket() {
    const newTicket: Ticket = {
      id: tickets.length + 1,
      title: 'new ticket',
      status: 'open',
    };
    setTickets([...tickets, newTicket]);
  }
  function advanceTicketStatus(id: number) {
    const updatedTickets = tickets.map((ticket) => {
      if (ticket.id !== id) {
        return ticket;
      }
      let nextStatus: Ticket['status'];

      if (ticket.status === 'open') {
        nextStatus = 'progressed';
      } else if (ticket.status === 'progressed') {
        nextStatus = 'closed';
      } else {
        nextStatus = 'open';
      }
      return {
        ...ticket,
        status: nextStatus,
      };
    });
    setTickets(updatedTickets);
  }
  //no backend shenanigans
  // useEffect(() => {
  //   localStorage.setItem('tickets', JSON.stringify(tickets));
  // }, [tickets]);
  return (
    <div style={{ padding: '20px' }}>
      <h1>Tickets</h1>

      <button onClick={addTicket}>create new Ticket</button>

      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onAdvancedStatus={advanceTicketStatus}
        />
      ))}
    </div>
  );
}
export default App;
