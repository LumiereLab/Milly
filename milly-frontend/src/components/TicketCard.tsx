type Ticket = {
  id: number;
  title: string;
  status: 'open' | 'closed' | 'progressed';
};

type TicketCardProps = {
  ticket: Ticket;
};

function TicketCard({ ticket }: TicketCardProps) {
  return (
    <div
      style={{
        marginBottom: '20px',
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <h2>{ticket.title}</h2>
      <p>ID: {ticket.id}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
}

export default TicketCard;
