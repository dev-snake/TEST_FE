import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Todo, TodoState, FilterType } from '../types/';

const loadTodos = (): Todo[] => {
    try {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
        console.error('Error !!!!:', error);
        return [];
    }
};

const initialState: TodoState = {
    todos: loadTodos(),
    filter: 'all',
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
                createdAt: new Date().toISOString(),
            };
            state.todos.push(newTodo);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        toggleComplete: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
        },
        setFilter: (state, action: PayloadAction<FilterType>) => {
            state.filter = action.payload;
        },
        reorderTodos: (
            state,
            action: PayloadAction<{
                source: { index: number };
                destination: { index: number } | null;
            }>
        ) => {
            const { source, destination } = action.payload;
            if (source && destination) {
                const reorderedTodos = [...state.todos];
                const [removed] = reorderedTodos.splice(source.index, 1);
                reorderedTodos.splice(destination.index, 0, removed);
                state.todos = reorderedTodos;
                localStorage.setItem('todos', JSON.stringify(reorderedTodos));
            }
        },
    },
});

export const { addTodo, toggleComplete, removeTodo, editTodo, setFilter, reorderTodos } =
    todoSlice.actions;

export default todoSlice.reducer;
