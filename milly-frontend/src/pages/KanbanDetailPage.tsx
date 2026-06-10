import { useEffect, useState } from 'react';
import type { Board } from '../types/board';
import { fetchBoards } from '../api/boardApi';
export function BoardsPage() {

    // statefullness 
    const [boards, setBoards] = useState<Board[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchBoards().then(setBoards);
    }, []);




    return (
        <div style={{ padding: '20px' }}>
            <h1>Placeholder Title of Board</h1>
        </div>
    )
}