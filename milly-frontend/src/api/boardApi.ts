import { API_BASE_URL } from "../config/apiConfig";
import type { CreateBoardPayload, Board } from "../types/board";
import type { ApiValidationError } from "../types/api";

export async function createBoard(payload: CreateBoardPayload): Promise<Board> {

    const response = await fetch(`${API_BASE_URL}/boards`, {
        method: 'POST',
        headers: {
            'Conent-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData: ApiValidationError = await response.json();
        console.log(errorData);
        throw new Error();
    }
    return response.json();
}

export async function fetchBoards(): Promise<Board[]> {
    const response = await fetch(`${API_BASE_URL}/boards`);

    if (!response.ok) {
        throw new Error('Failed to fetch boards!');
    }
    return response.json();
}

export async function deleteBoard(
    id: number
): Promise<JSON> {
    const response = await fetch(`${API_BASE_URL}/boards/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to delete ticket!');
    }
    return response.json();
}
