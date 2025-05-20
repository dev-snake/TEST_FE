import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '@/store/todoSlice';
import type { FilterType } from '@/types';
import type { RootState, AppDispatch } from '@/store';

interface FilterOption {
    value: FilterType;
    label: string;
}

const FilterButtons = () => {
    const currentFilter = useSelector((state: RootState) => state.todos.filter);
    const dispatch = useDispatch<AppDispatch>();

    const filters: FilterOption[] = [
        { value: 'all', label: 'Tất cả' },
        { value: 'active', label: 'Chưa hoàn thành' },
        { value: 'completed', label: 'Hoàn thành' },
    ];

    return (
        <div className="flex space-x-2 mb-4">
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    onClick={() => dispatch(setFilter(filter.value))}
                    className={`px-3 py-1 rounded ${
                        currentFilter === filter.value
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
};

export default FilterButtons;
