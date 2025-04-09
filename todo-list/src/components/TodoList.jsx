import { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem.jsx";

export default function TodoList({
    todos,
    onDelete,
    onToggle,
    onEdit,
    currentPage,
    todosPerPage
}) {
    const [todosRender, setTodosRender] = useState([]);

    useEffect(() => {
        setTodosRender(todos.slice(todosPerPage * (currentPage - 1), todosPerPage * currentPage));
    }, [todos, currentPage, todosPerPage]);

    return (
        <ul className='todoList'>
            {todos.length > 0
                ? todosRender.map(todo => (
                    <TodoListItem
                        key={todo.id}
                        {...todo}
                        onDelete={onDelete}
                        onToggle={onToggle}
                        onEdit={onEdit}
                    />
                ))
                : <h3>There is no any Todo at the moment.</h3>
            }
        </ul>
    );
};