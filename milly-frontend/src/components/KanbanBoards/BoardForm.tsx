import { useBoardForm } from "./useBoardFrom";
import type { CreateBoardPayload } from "../../types/board";

type BoardFormProps = {
    onCreateBoard: (payload: CreateBoardPayload) => Promise<void>;
}

export function BoardForm({ onCreateBoard }: BoardFormProps) {
    const { form, handleFieldChanges, handleSubmit } = useBoardForm(onCreateBoard);

    return (
        <form onSubmit={handleSubmit}>
            <input name='title' placeholder='board title' value={form.title} onChange={handleFieldChanges} />
            <input name='description' placeholder='board description' value={form.description} onChange={handleFieldChanges} />
            <input name='owner' placeholder='board owner' value={form.owner} onChange={handleFieldChanges} />
            <button type='submit'>create board</button>
        </form>
    );
}