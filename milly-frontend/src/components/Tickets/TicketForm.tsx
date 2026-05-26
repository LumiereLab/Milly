
import { useTicketForm } from "./useTicketForm";
import type { CreateTicketPayload } from "../../types/ticket";

type TicketFormProps = {
  onCreateTicket: (payload: CreateTicketPayload) => Promise<void>;
}

export function TicketForm({ onCreateTicket }: TicketFormProps) {
  const { form, handleFieldChanges, handleSubmit } = useTicketForm(onCreateTicket);

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' placeholder="ticket title" value={form.title} onChange={handleFieldChanges} />
      <textarea name='description' placeholder='ticket description' value={form.description} onChange={handleFieldChanges} />
      <input name='owner' placeholder='ticket owner' value={form.owner} onChange={handleFieldChanges} />
      <input name='asignee' placeholder='ticket asignee' value={form.asignee} onChange={handleFieldChanges} />
      <input name='boardId' placeholder='board' value={form.boardId} onChange={handleFieldChanges} />
      <button type="submit">create Ticket</button>
    </form>
  );
}