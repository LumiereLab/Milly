import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { type CreateBoardPayload } from "../../types/board";

type BoardFormState = {
    title: string,
    owner: number | string,
    description: string,
};

const emptyForm: BoardFormState = {
    title: '',
    owner: '',
    description: '',
};

export function useBoardForm(onCreateBoard: (payload: CreateBoardPayload) => Promise<void>) {
    const [form, setForm] = useState<BoardFormState>(emptyForm);

    function handleFieldChanges(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            await onCreateBoard({
                ...form,
                owner: Number(form.owner),
            })
            setForm(emptyForm);
        } catch {
            //error handling in BoardsPage
        }
    }

    return { form, handleFieldChanges, handleSubmit }
}