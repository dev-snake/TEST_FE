import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/store/todoSlice';
import type { AppDispatch } from '@/store/index';
import { Plus } from 'lucide-react';
interface TodoFormProps {
    foo: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TodoForm = (_props: TodoFormProps) => {
    const [text, setText] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedText = text.trim();
        if (trimmedText) {
            dispatch(addTodo(trimmedText));
            setText('');
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex">
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder="Thêm công việc mới..."
                    className="flex-1 p-2 bg-white text-black shadow-sm  rounded-l focus:outline-none "
                />
                <button
                    type="submit"
                    disabled={!text.trim()}
                    className={`px-4 py-2 bg-blue-500 text-white rounded-r shadow-sm ${
                        !text.trim() ? ' cursor-not-allowed' : 'hover:bg-blue-600'
                    }`}
                >
                    <Plus className="w-4 h-4" />
                </button>
            </div>
        </form>
    );
};

TodoForm.defaultProps = {
    foo: 'bar',
};

export default TodoForm;
