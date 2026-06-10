import { useEffect, useState } from "react";
import { BoardForm } from "../components/KanbanBoards/BoardForm";
import type { Board, CreateBoardPayload } from "../types/board";
import { createBoard, deleteBoard, fetchBoards } from "../api/boardApi";
import BoardCard from "../components/KanbanBoards/BoardCard";
export function BoardsPage() {

    // statefullness 
    const [boards, setBoards] = useState<Board[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchBoards().then(setBoards);
    }, []);

    async function handleCreateBoard(payload: CreateBoardPayload) {
        setError(null);
        try {
            const createdBoard = await createBoard(payload);
            setBoards((previousBoards) => [
                ...previousBoards,
                createdBoard,
            ]);
        }
        catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        }
    }

    async function handleDeleteBoard(id: number) {
        await deleteBoard(id);
        setBoards((previousBoards) =>
            previousBoards.filter((board => board.id != id))
        );

    }
    return (
        <div style={{ padding: '20px' }}>
            <h1>Kanbanboards</h1>
            <BoardForm onCreateBoard={handleCreateBoard} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {boards.map((board) => (
                <BoardCard key={board.id} board={board} onDelete={handleDeleteBoard} />
            ))}
        </div>
    )
}