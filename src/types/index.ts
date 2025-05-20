export interface Todo {
    id: number;
    text: string;
    completed: boolean;
    createdAt: string;
}

export type FilterType = 'all' | 'active' | 'completed';

export interface TodoState {
    todos: Todo[];
    filter: FilterType;
}

export interface DragEndResult {
    source: {
        index: number;
        droppableId: string;
    };
    destination: {
        index: number;
        droppableId: string;
    } | null;
}
