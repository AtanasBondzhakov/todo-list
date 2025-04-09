import { useState } from "react";
import { v4 as uuidV4 } from 'uuid';

import TodoList from "./components/TodoList.jsx";
import AddTodo from "./components/AddTodo.jsx";
import Progress from "./components/Progress.jsx";
import EditModal from "./components/EditModal.jsx";

function App() {
    const [todos, setTodos] = useState([]);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editTodo, setEditTodo] = useState({});
    const [addTodoError, setAddTodoError] = useState('');

    const handleAddTodo = (text) => {
        if (!text.trim()) {
            return setAddTodoError('Please enter valid todo text.');
        }

        setTodos(prevState => ([
            ...prevState,
            {
                id: uuidV4(),
                text: text.trim(),
                isCompleted: false
            }
        ]));

        setAddTodoError('');
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

    const handleEditUpdateTodo = (todoId, newText) => {
        setTodos(prevState => prevState.map(todo =>
            todo.id === todoId ? { ...todo, text: newText } : todo
        ));

        setEditModalOpen(false);
    };

    return (
        <>
            <div className='container'>
                <h1 className='title'>TodoList</h1>

                <AddTodo onAdd={handleAddTodo} />

                {addTodoError && <div className="errorContainer">{addTodoError}</div>}

                <TodoList
                    todos={todos}
                    onDelete={handleDeleteTodo}
                    onToggle={handleToggleCompleted}
                    onEdit={handleEditClick}
                />

                {editModalOpen && (
                    <EditModal
                        onCancel={handleEditCancelClick}
                        editTodo={editTodo}
                        onUpdate={handleEditUpdateTodo}
                    />
                )}

                {todos.length > 0 && <Progress todos={todos} />}
            </div>
        </>
    )
}

export default App
