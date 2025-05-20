import { useState, useEffect } from 'react';
import TodoForm from '@/components/todo-form';
import TodoList from '@/components/todo-list';
import FilterButtons from '@/components/filter-buttons';
import { Lightbulb, LightbulbOff } from 'lucide-react';
function App() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = (): void => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div
            className={`min-h-screen ${isDarkMode ? 'dark bg-gray-800 text-white' : 'bg-gray-100'}`}
        >
            <div className="mx-auto p-4 max-w-md">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Todo App</h1>
                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full hover:cursor-pointer ${
                            isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-white'
                        }`}
                    >
                        {isDarkMode ? <Lightbulb /> : <LightbulbOff />}
                    </button>
                </header>
                <TodoForm />
                <FilterButtons />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
