import type { Ticket } from "../../types/ticket";

type TicketCardProps = {
  ticket: Ticket;
  onDelete: (id: number) => void;
};

function TicketCard({ ticket, onDelete }: TicketCardProps) {
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
      <button onClick={() => onDelete(ticket.id)}>
        delete 
      </button>
    </div>
  );
}

export default TicketCard;
