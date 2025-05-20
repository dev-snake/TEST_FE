import { useState, type ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, removeTodo, editTodo } from '@/store/todoSlice';
import type { Todo } from '@/types';
import type { AppDispatch } from '@/store/index';
import { Trash2, SquarePen, Save } from 'lucide-react';
interface TodoItemProps {
    todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editedText, setEditedText] = useState<string>(todo.text);
    const dispatch = useDispatch<AppDispatch>();

    const handleEdit = (): void => {
        const trimmedText = editedText.trim();
        if (trimmedText) {
            dispatch(editTodo({ id: todo.id, text: trimmedText }));
            setIsEditing(false);
        }
    };

    const handleEditChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEditedText(e.target.value);
    };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    };

    return (
        <div
            className={`flex items-center p-3 m-2 bg-white  shadow rounded-sm ${
                todo.completed ? 'bg-gray-50' : ''
            }`}
        >
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleComplete(todo.id))}
                className="mr-3 h-5 w-5"
            />
            <div className="flex-1">
                {isEditing ? (
                    <div className="flex w-full gap-x-2">
                        <input
                            type="text"
                            value={editedText}
                            onChange={handleEditChange}
                            className="flex-1 p-2 border rounded focus:outline-none focus:border-blue-400"
                            autoFocus
                        />
                        <button
                            onClick={handleEdit}
                            disabled={!editedText.trim()}
                            className={`px-3 bg-green-400 text-white rounded-xl shadow-sm ${
                                !editedText.trim()
                                    ? 'opacity-50 cursor-not-allowed'
                                    : 'hover:bg-green-500 hover:cursor-pointer'
                            }`}
                        >
                            <Save className="h-4 w-4" />
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <span
                            className={`text-md text-black ${
                                todo.completed ? 'line-through text-gray-500' : ''
                            }`}
                        >
                            {todo.text}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                            Ngày tạo: {formatDate(todo.createdAt)}
                        </span>
                    </div>
                )}
            </div>
            {!isEditing && (
                <div className="flex space-x-2">
                    <button
                        onClick={() => setIsEditing(true)}
                        className="px-3 py-1 bg-yellow-400 text-white rounded-xl shadow-2xl hover:cursor-pointer"
                    >
                        <SquarePen className="h-8 w-4 font-bold" />
                    </button>
                    <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                        className="px-3 py-1 bg-red-500 text-white rounded-xl shadow-2xl hover:cursor-pointer"
                    >
                        <Trash2 className="h-8 w-4 font-bold" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default TodoItem;
