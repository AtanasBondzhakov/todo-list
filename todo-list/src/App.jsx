import { useState } from "react";
import { v4 as uuidV4 } from 'uuid';

import TodoList from "./components/TodoList.jsx";
import AddTodo from "./components/AddTodo.jsx";
import Progress from "./components/Progress.jsx";
import EditModal from "./components/EditModal.jsx";

const initialTodos = [
    { id: 1, text: 'read the book (at least 5 pages)', isCompleted: false },
    { id: 2, text: 'buy dog food', isCompleted: true },
    { id: 3, text: 'call my parents', isCompleted: false },
    { id: 4, text: 'clean my working place', isCompleted: false },
    { id: 5, text: 'kill Bill', isCompleted: true }
];


function App() {
    const [todos, setTodos] = useState(initialTodos);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editTodo, setEditTodo] = useState({});

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

    const handleDeleteTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
    };

    const handleToggleCompleted = (todoId) => {
        setTodos(prevState => prevState.map(todo =>
            todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ))
    };

    const handleEditClick = (todoId) => {
        setEditTodo(todos.find(todo => todo.id === todoId));
        setEditModalOpen(true);
    };

    const handleEditCancelClick = () => {
        setEditModalOpen(false);
    };

    return (
        <>
            <div className='container'>
                <h1 className='title'>TodoList</h1>

                <AddTodo onAdd={handleAddTodo} />

                <TodoList
                    todos={todos}
                    onDelete={handleDeleteTodo}
                    onToggle={handleToggleCompleted}
                    onEdit={handleEditClick}
                />

                {editModalOpen && <EditModal onCancel={handleEditCancelClick} editTodo={editTodo} />}

                <Progress />
            </div>
        </>
    )
}

export default App
