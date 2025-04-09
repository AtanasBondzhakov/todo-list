import { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem.jsx";
import useTodosList from "../hooks/useTodosList.js";

export default function TodoList({
    todos,
    onDelete,
    onToggle,
    onEdit,
    currentPage,
    todosPerPage
}) {
    const { todosRender } = useTodosList({ todos, todosPerPage, currentPage });

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