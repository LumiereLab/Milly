import { useEffect, useState } from 'react';
import type { Board, BoardDetail } from '../types/board';
import { fetchBoard } from '../api/boardApi';
import { useParams } from 'react-router-dom';

export function KanbanDetailsPage () {

    // statefullness 
    const [board, setBoard] = useState<BoardDetail | null >();
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams();

    useEffect(() => {
        fetchBoard(Number(id)).then(setBoard);
    }, [id]);




    if (!board)
        return <div>board is null bro</div>
    return (
        <div style={{ padding: '20px' }}>
            <h1>{board.title}</h1>
                <div>
                    <p>{board.description}</p>
                    <p>{board.owner}</p>
                </div>
        </div>
        
    )
}