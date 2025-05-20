import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '@/components/todo-item';
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd';
import { reorderTodos } from '@/store/todoSlice';
import type { Todo } from '@/types';
import type { RootState, AppDispatch } from '@/store';
interface TodoListProps {
    foo?: string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TodoList = (_props: TodoListProps) => {
    const { todos, filter } = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch<AppDispatch>();

    const filteredTodos = todos.filter((todo: Todo) => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true;
    });

    const handleDragEnd = (result: DropResult): void => {
        if (!result.destination) return;
        dispatch(
            reorderTodos({
                source: result.source,
                destination: result.destination,
            })
        );
    };

    if (filteredTodos.length === 0) {
        return (
            <div className="text-center py-4 text-gray-500">
                Không có công việc nào{' '}
                {filter !== 'all'
                    ? `(${filter === 'completed' ? 'hoàn thành' : 'chưa hoàn thành'})`
                    : ''}
            </div>
        );
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todos">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="border rounded"
                    >
                        {filteredTodos.map((todo: Todo, index: number) => (
                            <Draggable key={todo.id} draggableId={String(todo.id)} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <TodoItem todo={todo} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TodoList;
