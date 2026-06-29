import { useState, type ChangeEvent, type SubmitEvent } from "react";
import type { CreateTicketPayload } from "../../types/ticket";
import type { Column } from "../../types/column";

type TicketFormState = {
  title: string;
  columnId: Column["id"];
  description: string;
  owner: number | string;
  asignee: number | string;
  boardId: number | string;
};

const emptyForm: TicketFormState = {
  title: "",
  columnId: 0,
  description: "",
  owner: "",
  asignee: "",
  boardId: "",
};

export function useTicketForm(
  onCreateTicket: (payload: CreateTicketPayload) => Promise<void>,
) {
  const [form, setForm] = useState<TicketFormState>(emptyForm);

  function handleFieldChanges(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await onCreateTicket({
        ...form,
        owner: Number(form.owner),
        asignee: Number(form.asignee),
        boardId: Number(form.boardId),
      });
      setForm(emptyForm);
    } catch {
      //error handled in TicketsPage
    }
  }
  return { form, handleFieldChanges, handleSubmit };
}
