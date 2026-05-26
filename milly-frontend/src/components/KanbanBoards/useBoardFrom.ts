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

    function handleFieldChanges() { }

    async function handleSubmit() { }

    return { form, handleFieldChanges, handleSubmit }
}