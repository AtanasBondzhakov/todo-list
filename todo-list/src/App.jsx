import { useState } from "react";
import { v4 as uuidV4 } from 'uuid';

import TodoList from "./components/TodoList.jsx";
import Input from "./components/Input.jsx";
import Progress from "./components/Progress.jsx";

const initialTodos = [
    { id: 1, text: 'read the book (at least 5 pages)', isCompleted: false },
    { id: 2, text: 'buy dog food', isCompleted: true },
    { id: 3, text: 'call my parents', isCompleted: false },
    { id: 4, text: 'clean my working place', isCompleted: false },
    { id: 5, text: 'kill Bill', isCompleted: true }
];


function App() {
    const [todos, setTodos] = useState(initialTodos);

    const handleAddTodo = (todo) => {
        setTodos(prevState => ([
            ...prevState,
            {
                id: uuidV4(),
                text: todo,
                isCompleted: false
            }
        ]));
    };

    return (
        <>
            <div className='container'>
                <h1 className='title'>TodoList</h1>

                <Input onAdd={handleAddTodo} />

                <TodoList todos={todos} />

                <Progress />
            </div>
        </>
    )
}

export default App
