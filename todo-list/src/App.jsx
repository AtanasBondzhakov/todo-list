import { useCallback, useState } from "react";

import TodoList from "./components/TodoList.jsx";
import AddTodo from "./components/AddTodo.jsx";
import Progress from "./components/Progress.jsx";
import EditModal from "./components/EditModal.jsx";
import Pagination from "./components/Pagination.jsx";
import Error from "./components/Error.jsx";
import { useTodo } from "./hooks/useTodo.js";

function App() {
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editTodo, setEditTodo] = useState({});
    const [todosPerPage, setTodosPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState({ addError: false, editError: false });

    const {
        todos,
        addTodo,
        deleteTodo,
        toggleCompleted,
        editUpdateTodo } = useTodo(handleErrors);

    function handleErrors(errorKey, value) {
        setError(prevState => ({ ...prevState, [errorKey]: value }));
    };

    const handleEditClick = useCallback((todoId) => {
        setEditTodo(todos.find(todo => todo.id === todoId));
        setEditModalOpen(true);
    }, [todos]);

    const handleEditCancelClick = useCallback(() => {
        setEditModalOpen(false);
        setError(prevState => ({ ...prevState, editError: false }));
    }, []);

    const handleEditUpdateTodo = (todoId, newText) => {
        const isSuccess = editUpdateTodo(todoId, newText);

        if (isSuccess) {
            setEditModalOpen(false);
            setEditTodo({});
        }
    };

    const handleCurrentPageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className='container'>
                <h1 className='title'>Todo List</h1>

                <AddTodo onAdd={addTodo} />

                {error.addError && <Error />}

                <TodoList
                    todos={todos}
                    onDelete={deleteTodo}
                    onToggle={toggleCompleted}
                    onEdit={handleEditClick}
                    currentPage={currentPage}
                    todosPerPage={todosPerPage}
                />

                {editModalOpen && (
                    <EditModal
                        onCancel={handleEditCancelClick}
                        editTodo={editTodo}
                        onUpdate={handleEditUpdateTodo}
                        error={error.editError}
                    />
                )}

                {todos.length > 0 && <Progress todos={todos} />}

                <Pagination
                    todosPerPage={todosPerPage}
                    todos={todos}
                    pageChange={handleCurrentPageChange}
                    currentPage={currentPage}
                />
            </div>
        </>
    )
}

export default App
