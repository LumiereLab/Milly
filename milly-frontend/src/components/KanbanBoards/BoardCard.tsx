import type { Board } from "../../types/board";

type BoardCardProps = {
    board: Board;
    onDelete: (id: number) => void;
};

function BoardCard({ board, onDelete }: BoardCardProps) {
    return (
        <div
            style={{
                marginBottom: '20px',
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '8px',
            }}>
            <h2>{board.title}</h2>
            <p>ID: {board.id}</p>
            <p>Owner: {board.owner}</p>
            <p>Description: {board.description}</p>
            <button onClick={() => onDelete(board.id)}>
                delete
            </button>


        </div>
    )
}
export default BoardCard;